@extends('base')

@section('title', 'Create Record')

@section('extra_css')
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
@endsection


@section('content')
    <div class="container">
        <h2>Create Record</h2>
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
        <form class="form-horizontal" action="{{route('record.create.post')}}" method="post">
            {{ csrf_field() }}
            <div class="form-group">
                <label class="control-label col-sm-2" for="email">Title:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="title" placeholder="Enter title" name="title">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="pwd">First Contestant:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="first" placeholder="Enter First Contestant" name="options[]">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="pwd">Second Contestant:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="second" placeholder="Enter Second Contestant" name="options[]">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="pwd">Third Contestant:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="third" placeholder="Enter Third Contestant" name="options[]">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="pwd">Fourth Contestant:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="fourth" placeholder="Enter Fourth Contestant" name="options[]">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>

@endsection