// document.write("hellow");

// var a="Welcome";


// var a="hellow";

// document.write(a);

// let a="Welcome"; //const


// a="hellow";

// document.write(a); 


// var x=["a","b","c"];

// var a=10;
// var b='10';
// console.log(a===b);




// var a=10;

// (a%2==0)? a="even" : a="odd";

// document.write(a);




	 // // if (true) {}
	 // if (true) {}else{}
	 // if (true) {}else if (true) {}else{}
	 // if (true) {
	 // 	if (true) {}else{}	
	 // 	if (true) {}else
	 // }

// var x=1;
// while(x<=10){
// 	document.write(x+"<br>");
	
// x++;
// }
// alert("hellow");
// confirm("confirm");
// var name= prompt('what is ur name?');
// for(x=1;x<=10;x++){

// 	document.write(name+x+"<br>");
// }


// var a=3;

// switch(a){
//   case 1:
// 	document.write(a);
//   break;

// case 2:
// 	document.write(a);
// break;

// case 3:
// 	document.write(a);
// break;

// default:
// 	document.write("done");
// }



// function hlw(a,b){
// 	var c=a+b;
// 	return c;
// }

// var t=hlw(10,54);
// document.write(t);

// var a=10;
// function hlw(){
// 	var a=
// 	document.write(a);
// }

// hlw();
// document.write(a);



// function hlw(){
// 	document.write("Hello");
// }

// var ary=[
// ["a","b","c","z"],
// ["d","e","f","x"],
// ["g","h","i","l"]
// ];

// for(a=0;a<=ary.length;a++){

// 	for(b=0;b<ary[a].length;b++){
// 		document.write(ary[a][b]);
// 	}
// 	document.write("<br>");
// }

// var a=[1,2,3];
// a[0]=4
// document.write(a);
// document.write("<br>");
// delete a[1];
// document.write(a);


// var ary=["nick","tick","pick"];

// ary.pop();
// ary.push("kick");

// ary.shift();
// ary.unshift();

// document.write(ary);

// var ary=["nick","tick","pick","nick"];
// var b=["kick","pic"];

// var c=ary.concat(b);
// document.write(c+"<br><br>");

// // var d=c.join(" / ");
// // document.write(d);

// var x=c.slice(-2);
// document.write(x+"<br>");



// var z=c.splice(2,2,'ask','sss');
// var q=c.includes("nic");
// document.write(q+"<br>");


// document.write(Array.isArray(c));

// document.write(c.indexOf('nick',3));

// document.write(ary.lastIndexOf('nick'));


// var age=[12,15,55,18];
// document.write(age+"<br>");

// var b=age.some(checkage);
// var b=age.every(checkage);
// document.write(b);

// var a=age.findIndex(checkage);
// var a=age.filter(checkage);
// document.write(a);

// function checkage(age){
// 	return age>=18;
// }



// var ary=["nick","tick","pick","nick"];
// document.write(typeof ary);

// var a=ary.toString();
// document.write( a);


// var ary=["nick","tick","pick","nick"];

// ary.forEach(function(value){
// 	document.write(value+"<br>");
// });



// var std={

// 	fname: "ask",
// 	lname: "ahmd",
// 	age: 26,
// 	arr: ["shifu","chen","timon","pumba","po"],
// 	sub: function(){
// 		return 'PHP';
// 	},

// 	fullname: function(){
// 		return this.fname+" "+this.lname;
// 	},

// 	living: {
// 		'city': 'dhk',
// 		'country': 'BD'
// 	}
// }
 
// // console.log(std.fname);

// document.write(std.living.city);


// var std= new Object();

// std.fname="ask";
// std.lname="ahmd";


// document.write(std['fname']);


// var std=[
// {name: "ask",age: "26"},
// {name: "ast",age: "24"},
// {name: "atk",age: "24"},
// ];

// for(var a=0;a<std.length;a++){
// 	document.write(std[a].name+"<br>");
// }



// const a=[10,20,30];
// a[1]=50;

// console.log(a);

// var std={

// 	fname: "ask",
// 	lname: "ahmd",
// 	age: 26,
// 	arr: ["shifu","chen","timon","pumba","po"],
	

	
// };

// for(var key in std){
// 	document.write(key+ ":"+std[key]+"<br>");
// }

// var  a=[10,20,30];

// var b=a.map(test);
// document.write(b);

// function test(x){
// 	return x*5;
// }


 // var str="PHP is a server side language";
 // var a=str.length;
 // var a=str.toUpperCase();
 // var a=str.includes("sides");
 // var a=str.startsWith("PHP");
 // var a=str.search("a");
 // var a=str.match(/is/g);
 // var a=str.replace("PHP","JS");
  // var a=str.charAt(10);
   // var a=str.charCodeAt(1);
    // var a=String.fromCharCode(118);

     // var a=str.concat(" java");
      // var a=str.repeat(2);
  //      var a=str.slice(3,10);
  // document.write(a);


// var a="          PHP               ";
// alert(a.trim());


// var a="99";

// document.write(typeof a+"<br>");
// var num=Number(a);
// var a="10.35";
// var num=parseFloat(a);

// var a=55.56874596;
// var num=isFinite(a);
// var num=Number.isInteger(a);
// var num=a.toFixed(1);
// var num=a.toPrecision(3);
// document.write(num);


// var a=Math.ceil(-1.2);
// var a=Math.floor(4.7);
// var a=Math.round(4.4);
// var a=Math.trunc(5.9);
// var a=Math.min(-20,35,45,50,70,-90);
// var a=Math.sqrt(4);
// var a=Math.cbrt(8);
// var a=Math.pow(2,3);
// var a=Math.random(1,9999);
// var a=Math.abs("hellow");
// var a=Math.PI;
// document.write(a);



// var now=new Date();
// // document.write(now.toDateString());
// // document.write(now.getHours());
// // now.setDate(20);
// document.write(now.getHours()+":"+now.getMinutes()+":"+now.getSeconds());


//var  elements=document.all;
// console.log(elements);
// document.getElementById("demo").innerHTML="PHP";
// var a=document.querySelectorAll("#demo h1")[2];
//  a=document.querySelector("#demo").style.color="blue";
// console.log(a);

// document.getElementById("demo").addEventListener("mouseover",abc);
// function abc(){
// 	document.querySelector("#demo").style.background="lightblue";
// }



// document.getElementById("demo").addEventListener("click",function(){
// document.querySelector("#demo").style.background="lightpink";
// });








// var mywindow;
// function openWindow(){
// 	mywindow=window.open("https://www.youtube.com/watch?v=55qbTyd2Yik&list=RD55qbTyd2Yik&start_radio=1","","width=150px,height=150,left=30px,top=30px");
// 	mywindow.focus();

// }

// function resizeWindow(){
	
// 	// mywindow.resizeBy(100,100);
// 	// mywindow.focus();
// 	mywindow.close();
// }


// function resize(){
// var iheight=window.innerHeight;
// console.log("Inner Height "+iheight);


// var oheight=window.outerHeight;
// console.log("outer Height "+oheight);

// }




// var id=setTimeout(anim,5000);
// function anim(){
// 	var target= document.getElementById("test");
// 	target.style.width="500px";
// }

// function stopanim(){
// 	clearTimeout(id);
// }
// var a=150;
// var id=setInterval(anim,100);
// function anim(){
// 	a=a+10;
// 	if(a==800){
// 		clearInterval(id);}
// 	else{var target= document.getElementById("test");
// 	target.style.width=a+"px";
// }
// }

// function stopanim(){
// 	clearTimeout(id);
// }


// function focusin(element){
// 	element.style.background="lightblue";

// }

// function blurout(element){
// 	element.style.background="";

// }

// function inputf(element){
// 	var x=element.value;
// 	document.getElementById("b1").innerHTML=x;
// }





