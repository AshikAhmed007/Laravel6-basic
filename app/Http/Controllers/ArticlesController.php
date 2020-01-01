<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;
class ArticlesController extends Controller
{
  public  function show(Article $article){ //show table data by id from db

  	
  	return view('article.show', ['article'=>$article]);
  	
  }

 	
 	 public  function index(){   // shows all data from db

  	$article= Article::latest()->get();
  	return view('article', ['articles'=>$article]);
  }



   public  function create(){  //creat.blade.php show 

  	
  	return view('create');
  }



   public  function store(){  //stores all data in db & redirect to article page & url /articles

   	$article= new Article(); //obj of article model class
	Article::create($this->validateArticle());
   	return redirect('/
   		article');
  }


public function edit(Article $article){
	
	return view('edit',compact('article'));


}



public function update(Article $article){
	$article->update($this->validateArticle());
	return redirect('/articles');
 }


 protected function validateArticle(){

 	return request()->validate([
   		'title'=>'required',
   		'excerpt'=>'required',
   		'body'=>'required'
   	]);


 }

}