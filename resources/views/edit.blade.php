@extends('layout')

@section('content')
<div id="wrapper">
    <div id="page" class="container">
        <h1>Update data</h1>
        <form action="/articles/{{$article->id}}" method="POST">
        	@csrf
            @method('PUT')
        	<div>
        		<input type="" name="title" placeholder="Title" value="{{$article->title}}">
        	</div>
        	<div>
        		<textarea rows="5" name="excerpt" placeholder="Excerpt">{{$article->excerpt}}</textarea>
        	</div>
        	<div>
        		<textarea rows="5" name="body" placeholder="Body">{{$article->body}}</textarea>
        	</div>
        	<div>
        		<button type="submit" >update</button>
        	</div>
        </form>
      
        </div>
    </div>
            

@endsection