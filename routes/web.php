<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/list', function () {
    return view('vote_list');
});

Route::prefix('/new-record')->group(function() {
    Route::get('/', 'voting_app\RecordController@create_record_view')->name('record.create');
    Route::post('/', 'voting_app\RecordController@create_record')->name('record.create.post');
});


Route::prefix('/vote')->group(function() {
    Route::get('/{record_id}', 'voting_app\VoteController@get_votes_view')->name('vote.get');
    Route::post('/{record_id}', 'voting_app\VoteController@post_vote')->name('vote.post');
});
