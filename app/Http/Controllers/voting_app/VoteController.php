<?php

namespace App\Http\Controllers\voting_app;

use App\Http\Controllers\Controller;
use App\Models\voting_app\Option;
use App\Models\voting_app\Record;
use App\Models\voting_app\Vote;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Validator;

class VoteController extends Controller
{
    private $out;
    private $date = '';

    public function __construct()
    {
        // $this->middleware('auth');
        $this->out = new \Symfony\Component\Console\Output\ConsoleOutput();

        $this->date = Carbon::now();
    }

    protected function validator(array $data, $fields)
    {
        $validator =  Validator::make($data, $fields);
        if ($validator->fails()) {
            return \validator_result(true, $validator->errors()->all());
        }
        return \validator_result(false);

    }

    public function get_votes_view($record_id){
        $record = Record::where('id', $record_id)->first();
        if (!$record) {
            $record = null;
        }
        else {
            $record['options'] = $record->options()->get();
        }

        return view('vote', ['record' => $record]);
    }

    public function poll_get_votes_view($record_id){
        $record = Record::where('id', $record_id)->first();
        if (!$record) {
            $record = null;
        }
        else {
            $temp_options = $record->options()->get();
            $options = [];
            foreach ($temp_options as $option) {
                $votes = $option->votes()->get();
                $total_votes = 0;
                foreach ($votes as $vote) {
                    $total_votes += $vote->votes;
                }

                $option['total_votes'] = $total_votes;

                array_push($options, $option);
            }
            $record['options'] = $options;
        }

        return view('polls_detail', ['record' => $record]);
    }

    public function vote_get_detailed_view($option_id){
        $option = Option::where('id', $option_id)->first();
        $votes = Vote::where('option_id', $option_id)->get();
        return view('vote_detail', ['votes' => $votes, 'option' => $option]);
//        if (!$votes) {
//            $votes = null;
//        }
//
//        else {
//            $temp_votes = $votes;
//            $votes = [];
//            foreach ($temp_votes as $vote) {
//                $votes = $option->votes()->get();
//                $total_votes = 0;
//                foreach ($votes as $vote) {
//                    $total_votes += $vote->votes;
//                }
//
//                $option['total_votes'] = $total_votes;
//
//                array_push($options, $option);
//            }
//            $record['options'] = $options;
//        }


    }

    public function post_vote($record_id, Request $request){
        $validator = $this->validator($request->all(),[
            'option_id' => 'required|string',
            'votes' => 'required|numeric',

        ]);

        $record = Record::where('id', $record_id)->first();

        if (!$record) {
            $record = null;
        }
        else {
            $record['options'] = $record->options()->get();
        }

        if ($validator['failed']) {
            return view('vote', ['messages' => $validator['messages'], 'record' => $record]);
        }
        try {
            $data  = $request->all();

            $vote = Vote::create([
                'record_id' => $record->id,
                'option_id' => $data['option_id'],
                'votes' => $data['votes'],
                'ip' => (array_key_exists('user', $data)) ? $data['user'] : $this->getIp($request),
            ]) ;

            if ($vote) {

                return view('vote',  ['message' => \get_api_string('generic_ok'), 'status' => true, 'record' => $record]);
            }
            return view('vote',  ['message' => \get_api_string('error_occurred'), 'status' => false, 'record' => $record]);
        }
        catch(\Exception $ex) {
            return view('vote',  ['message' => \get_api_string('error_occurred'), 'status' => false, 'record' => $record]);
        }
    }

    public function getIp(){
        foreach (array('HTTP_CLIENT_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_FORWARDED', 'HTTP_X_CLUSTER_CLIENT_IP', 'HTTP_FORWARDED_FOR', 'HTTP_FORWARDED', 'REMOTE_ADDR') as $key){
            if (array_key_exists($key, $_SERVER) === true){
                foreach (explode(',', $_SERVER[$key]) as $ip){
                    $ip = trim($ip); // just to be safe
                    if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false){
                        return $ip;
                    }
                }
            }
        }

        return \request()->ip();
    }

}
