@extends('base')

@section('title', 'Poll Detail')

@section('extra_styles')
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/dataTables.bootstrap4.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/styles.css') }}">
@endsection

@section('content')
    <main>
        <div class="container-fluid">
            <h1 class="mt-4">{{$option->option}}</h1>
            <div class="card mb-4">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                            <tr>
                                <th>User</th>
                                <th>Casted</th>
                                <th>Date</th>
                            </tr>
                            </thead>
                            <tbody>
                                @foreach($votes as $vote)
                                    <tr>
                                        <td>{{$vote->user ?? "N/A"}}</td>
                                        <td>{{$vote->votes}} Votes</td>
                                        <td>{{$vote->created_at->diffforHumans()}}</td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>
@endsection

@section('extra_scripts')
    <script src="{{ asset('assets/js/all.min.js') }}"></script>
    <script src="{{ asset('assets/js/jquery-3.4.1.min.js') }}"></script>
    <script src="{{ asset('assets/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('assets/js/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('assets/js/dataTables.bootstrap4.min.js') }}"></script>
{{--    <script src="{{ asset('assets/js/dashboard/scripts.js') }}"></script>--}}
    <script src="{{ asset('assets/js/datatables-demo.js') }}"></script>
    <script>
        $(document).ready(() => {
            $('body').css('background', '#fff');
            $('#dataTable').DataTable();
        });

    </script>
    <script>
        let submitButton = $("input[name='submit']");
        submitButton.click(() => {
            window.location = "/interest/save/";
        });

        let viewInterestButton = $("input[name='view_interests']");
        viewInterestButton.click(() => {
            window.location = "/interest/";
        });


    </script>
@endsection