<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>@yield("title")</title>
    <link href="{{ asset('assets/css/styles.css')}}" rel="stylesheet" />
    <link href="{{ asset('assets/css/dataTables.bootstrap4.min.css')}}" rel="stylesheet"  />

    @yield('extra_styles')
</head>
<body class="sb-nav-fixed">
<nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Voting App</a><button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i class="fas fa-bars"></i></button
    ><!-- Navbar Search-->
    <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
        {{--<div class="input-group">--}}
        {{--<input class="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />--}}
        {{--<div class="input-group-append">--}}
        {{--<button class="btn btn-primary" type="button"><i class="fas fa-search"></i></button>--}}
        {{--</div>--}}
        {{--</div>--}}
    </form>
    <!-- Navbar-->
    <ul class="navbar-nav ml-auto ml-md-0">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="/edit">Edit Profile</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/logout">Logout</a>
            </div>
        </li>
    </ul>
</nav>
<div id="layoutSidenav">
    <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
                <div class="nav">
                    <div class="sb-sidenav-menu-heading">Records</div>
                    {{--@if($user_type == $user_type_client)--}}
                        {{--<a class="nav-link" href="{{route('gig.new_gig')}}">--}}
                            {{--<div class="sb-nav-link-icon"><i class="fas fa-plus-circle"></i></div>--}}
                            {{--New Gig--}}
                        {{--</a>--}}
                    {{--@endif--}}
                    <a class="nav-link" href="">
                        <div class="sb-nav-link-icon"><i class="fas fa-plus-circle"></i></div>
                        New Record
                    </a>
                    <a class="nav-link" href="">
                        <div class="sb-nav-link-icon"><i class="fas fa-exclamation-circle"></i></div>
                        Voting polls
                    </a>
                    <div class="sb-sidenav-menu-heading">Voting</div>
                    {{--@if($user_type == $user_type_customer)--}}
                        {{--<a class="nav-link" href="{{route('user.portfolio.view')}}">--}}
                            {{--<div class="sb-nav-link-icon"><i class="fas fa-plus-circle"></i></div>--}}
                            {{--Porfolio--}}
                        {{--</a>--}}
                    {{--@endif--}}
                    <a class="nav-link" href="">
                        <div class="sb-nav-link-icon"><i class="fas fa-exclamation-circle"></i></div>
                        Go to Voting section
                    </a>

                </div>
            </div>
            <div class="sb-sidenav-footer">
                <div class="small">Logged in as: {{request()->ip()}}</div>
                {{--{{Auth::user()->first_name}}--}}
            </div>
        </nav>
    </div>
    <div id="layoutSidenav_content">
        @yield('content')
    </div>
</div>
</div>
<script src="{{ asset('assets/js/jquery-3.4.1.min.js')}}"></script>
<script src="{{ asset('assets/js/bootstrap.bundle.min.js')}}"></script>
<script src="{{ asset('assets/js/dashboard/scripts.js')}}"></script>
<script src="{{ asset('assets/js/jquery.dataTables.min.js')}}"></script>
<script src="{{ asset('assets/js/dataTables.bootstrap4.min.js')}}"></script>
<script src="{{ asset('assets/js/bootstrap.min.js')}}"></script>
<script src="{{ asset('assets/js/moment.min.js')}}"></script>
<script src="{{ asset('assets/js/app/strings.js') }}"></script>
<script src="{{ asset('assets/js/app/globals.js') }}"></script>
<script src="{{ asset('assets/js/all.min.js')}}" ></script>
<script src="{{ asset('assets/js/bootstrap.min.js')}}" ></script>
</body>
</html>
@yield('extra_scripts')