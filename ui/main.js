console.log('Loaded!');
//new val set to main in div 
//var element = document.getElementById('main');
//element.innerHTML = 'new value being set';

//move the image 
var imge = document.getElementById('pic');
imge.onclick = function(){
    pic.style.marginLeft = '100px';
} ;
//counter code
var button = document.getElementById('counter');
button.onclick = function(){
   //make a request to counter endpoint
   
   //capture that response and store
   
   //render the variable
   counter++;
   var span = document.getElementById('count');
   span.innerHTML = counter.toString();
    
};