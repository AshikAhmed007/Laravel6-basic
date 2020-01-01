<?php

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


Route::get('/about', function () {
	//$article= App\Article::all();
	// $article= App\Article::first();
	// $article= App\Article::take(2)->get();
	// $article= App\Article::paginate(2);
	// // $article= App\Article::latest()->get();
    return view('about',[
    	'articles'=>App\Article::take(3)->latest()->get()
   ]);
   
});


Route::get('/articles', 'ArticlesController@index');
Route::post('/articles', 'ArticlesController@store')->name('article');
Route::get('/articles/create', 'ArticlesController@create');
Route::get('/articles/{article}', 'ArticlesController@show')->name('article.show'); 
Route::get('/articles/{article}/edit', 'ArticlesController@edit');  
Route::put('/articles/{article}', 'ArticlesController@update');  


// Route::get('/add_std', function () {'
//     return view('insert_info');
// });

// Route::get('/', function () {
// 	$name=request('name');
//     return view('test',[
//     	'name'=>$name
//     ]);
// });


// Route::get('/posts/{post}', function ($post) {
//      $posts=[
//      	'my-first-blog'=>'hlw its my first blog!',
//      	'my_second_post'=>'Second blog'
//      ];


//     if(!array_key_exists($post, $posts)){
//     	abort(404,'sorry wrong url');
//     }

//      return view('test',[
//      	'post'=>$posts[$post]
//      ]);
// });


// Route::get('/posts/{post}', 'PostController@show' );

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home')->middleware('auth');
