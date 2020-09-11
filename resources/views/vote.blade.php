@extends('base')

@section('title', 'Cast your Vote')

@section('extra_css')
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
@endsection


@section('content')
    <div class="container">
        <br/>
        @if (isset($message) && isset($status))
            @if (!$status)
                <div class="error" id="error_message_box">{{$message}}</div>
            @endif
            @if ($status)
                <div class="success" id="success_message_box">{{$message}}</div>
            @endif
        @endif
        @if (isset($messages) && isset($status))
            @if (!$status)
                <div class="error" id="error_message_box">
                    @foreach($messages as $message)
                        <div style="margin-bottom: 5px;">{{$message}}</div>
                    @endforeach
                </div>
            @endif
        @endif

        @if (isset($record))
            <form class="form-horizontal" action="{{route('vote.post', $record->id)}}" method="post">
                {{ csrf_field() }}
                <br/>
                <div class="form-group">
                    <div class="col-sm-10">
                        <h4>{{$record->title}}</h4>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="pwd">{{$record->options[0]->option}}</label>
                    <div class="col-sm-10">
                        <input type="radio" value="{{$record->options[0]->id}}" class="form-control" id="first" placeholder="Enter First Contestant" name="option_id">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="pwd">{{$record->options[1]->option}}</label>
                    <div class="col-sm-10">
                        <input type="radio" value="{{$record->options[1]->id}}" class="form-control" id="second" placeholder="Enter Second Contestant" name="option_id">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="pwd">{{$record->options[2]->option}}</label>
                    <div class="col-sm-10">
                        <input type="radio" value="{{$record->options[2]->id}}" class="form-control" id="third" placeholder="Enter Third Contestant" name="option_id">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="pwd">{{$record->options[3]->option}}</label>
                    <div class="col-sm-10">
                        <input type="radio" value="{{$record->options[3]->id}}" class="form-control" id="fourth" placeholder="Enter Fourth Contestant" name="option_id">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="email">Vote(Max 100):</label>
                    <div class="col-sm-10">
                        <input type="number" max="100" class="form-control" id="votes" value="1" placeholder="1" name="votes">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-primary">Vote</button>
                    </div>
                </div>
            </form>
        @else
            <br/>
            <h2>Record not found</h2>
        @endif

    </div>

@endsection


{{--<!DOCTYPE html>--}}
{{--<html lang="en">--}}
{{--<head>--}}
    {{--<title>Bootstrap Example</title>--}}
    {{--<meta charset="utf-8">--}}
    {{--<meta name="viewport" content="width=device-width, initial-scale=1">--}}
    {{----}}
{{--</head>--}}
{{--<body>--}}

{{--<div class="container">--}}
    {{--<h2>Horizontal form</h2>--}}
    {{--<form class="form-horizontal" action="/action_page.php">--}}
        {{--<div class="form-group">--}}
            {{--<label class="control-label col-sm-2" for="email">Email:</label>--}}
            {{--<div class="col-sm-10">--}}
                {{--<input type="email" class="form-control" id="email" placeholder="Enter email" name="email">--}}
            {{--</div>--}}
        {{--</div>--}}
        {{--<div class="form-group">--}}
            {{--<label class="control-label col-sm-2" for="pwd">Password:</label>--}}
            {{--<div class="col-sm-10">--}}
                {{--<input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd">--}}
            {{--</div>--}}
        {{--</div>--}}
        {{--<div class="form-group">--}}
            {{--<div class="col-sm-offset-2 col-sm-10">--}}
                {{--<div class="checkbox">--}}
                    {{--<label><input type="checkbox" name="remember"> Remember me</label>--}}
                {{--</div>--}}
            {{--</div>--}}
        {{--</div>--}}
        {{--<div class="form-group">--}}
            {{--<div class="col-sm-offset-2 col-sm-10">--}}
                {{--<button type="submit" class="btn btn-default">Submit</button>--}}
            {{--</div>--}}
        {{--</div>--}}
    {{--</form>--}}
{{--</div>--}}

{{--</body>--}}
{{--</html>--}}
