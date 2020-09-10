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
        return view('dashboard.new_interest');
    }
}
