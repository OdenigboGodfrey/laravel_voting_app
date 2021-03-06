@extends('base')

@section('title', 'Records')

@section('extra_css')
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
@endsection


@section('content')

    <div class="container">
        <br/>
        <h3>Active Campaigns</h3>
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

        @if (isset($records))

            @foreach($records as $record)
                {{--{{dd($record->options)}}--}}
                <div class="list-group">
                    <a href="{{route('vote.get', $record->id)}}" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">{{$record->title}}</h5>
                            <small>Voted: {{count($record->votes()->get())}}</small>
                        </div>
                        <small>Posted {{$record->created_at->diffforHumans()}}</small>
                    </a>
                </div>
            @endforeach

        @else
            <h2>No Records to show</h2>
        @endif
    </div>

@endsection