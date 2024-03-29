<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
   protected $fillable=['title','excerpt','body'];

   public function path(){
   	return route('article.show',$this);
   }


  public function user(){
    return $this->belongsTo(User::class);
}

}
