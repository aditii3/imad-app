console.log('Loaded!');
//new val set to main in div 
var element = document.getElementById('main');
element.innerHTML = 'new value being set';

//move the image 
var imge = document.getElementById('pic');
imge.onClick = function(){
    img.style.marginLeft = '100px';
} ;