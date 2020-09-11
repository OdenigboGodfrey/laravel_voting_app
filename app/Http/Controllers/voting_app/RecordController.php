<?php

namespace App\Http\Controllers\voting_app;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;
use App\Models\voting_app\Record;
use App\Models\voting_app\Option;
use App\Models\voting_app\Vote;
use App\Models\voting_app\Mode;

class RecordController extends Controller
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

    public function create_record_view(){
        return view('new_record');
    }

    public function create_record(Request $request) {
        $validator = $this->validator($request->all(),[
            'title' => 'required|string',
            'options' => 'required',
        ]);

        if ($validator['failed']) {
            return view('new_record', ['messages' => $validator['messages']]);
        }

        try {
            $data  = $request->all();
            $record = Record::create([
                'title' => $data['title'],
                'active' => 1,
            ]) ;

            if ($record) {
                foreach ($data['options'] as $option) {
                    $option = Option::create([
                        'record_id' => $record->id,
                        'option' => $option,
                    ]);
                }

                return view('new_record',  ['message' => \get_api_string('generic_ok'), 'status' => true]);
            }
            return view('new_record',  ['message' => \get_api_string('error_occurred'), 'status' => false]);
        }
        catch(\Exception $ex) {
            return view('new_record',  ['message' => \get_api_string('error_occurred'), 'status' => false]);
        }
    }

    public function get_all_records_view() {
        $records_temp = Record::all();
        $records = [];
        foreach ($records_temp as $record) {
            $record['options'] = $record->options()->get();

            array_push($records, $record);
        }
        return view('vote_list', ['records' => $records]);
    }

    public function polls_get_all_records_view() {
        $records_temp = Record::all();
        $records = [];
        foreach ($records_temp as $record) {
            $record['options'] = $record->options()->get();

            array_push($records, $record);
        }
        return view('polls', ['records' => $records]);
    }
}
