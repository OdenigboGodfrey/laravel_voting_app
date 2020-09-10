<?php

namespace App\Http\Controllers\voting_app;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Validator;
use App\Models\Record;
use App\Models\Option;
use App\Models\Vote;
use App\Models\Mode;

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
