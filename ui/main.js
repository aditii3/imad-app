console.log('Loaded!');
//new val set to main in div 
var element = document.getElementById('main');
element.innerHTML = 'new value being set';

//move the image 
var img = document.getElementById('dragon');
img.onClick = function(){
    img.style.marginLeft = "200px";
} ;