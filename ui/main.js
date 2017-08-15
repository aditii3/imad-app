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
   //create a request to counter endpoint
   var request = new XMLHttpRequest();
   
   //capture that response and store
   request.onreadystatechange = function(){
       if(request.readyState == XMLHttpRequest.DONE){
           if(request.stsatus == 200){
               var counter = request.responseText;
               var span = document.getElementById('count');
   span.innerHTML = counter.toString();
           }
       }
       
       
   };
   
   //render the variable
   //counter++;//nothing to do with counter end point
   
   //make the request
   request.open('GET' , 'http://aditidwivedi95.imad.hasura-app.io/counter' , true);
   request.send(null);
   
   
   
    
};