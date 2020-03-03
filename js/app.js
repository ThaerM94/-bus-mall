'use strict';

var names = [
    'bag.jpg',
    'banana.jpg',
    'bathroom.jpg',
    'boots.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'chair.jpg',
    'cthulhu.jpg',
    'dog-duck.jpg',
    'dragon.jpg',
    'pen.jpg',
    'pet-sweep.jpg',
    'scissors.jpg',
    'shark.jpg',
    'sweep.png',
    'tauntaun.jpg',
    'unicorn.jpg',
    'usb.gif',
    'water-can.jpg',
    'wine-glass.jpg'

]

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// take images 

var leftImages = document.querySelector('#leftImages');
var midImages = document.querySelector('#midImages');
var rightImages = document.querySelector('#rightImages');
var container = document.querySelector('#container');

//// 
function mall (name) {
    this.name = name;
    this.clicks = 0;
    this.views = 0;
    this.imagePath = `img/${this.name}`;
    mall.all.push(this);
}
 mall.all=[];


for(var i =0; i<names.length; i++) {
    new mall(names[i]);
}

var leftimg , midimg , rightimg 

function render (){

  
  leftimg = mall.all [randomNumber(0,mall.all.length-1)]
  midimg = mall.all [randomNumber(0,mall.all.length-1)]
  rightimg = mall.all [randomNumber(0,mall.all.length-1)]
  
  while (leftimg.imagePath === midimg.imagePath || leftimg.imagePath === rightimg.imagePath || midimg.imagePath === rightimg.imagePath){
    
    leftimg = mall.all [randomNumber(0,mall.all.length-1)]
    midimg = mall.all [randomNumber(0,mall.all.length-1)]
    rightimg = mall.all [randomNumber(0,mall.all.length-1)] }
    
    
    leftImages.setAttribute('src',leftimg.imagePath);
    leftImages.setAttribute('alt',leftimg.name);
    leftImages.setAttribute('title',leftimg.name);
    leftimg.views++;
    midImages.setAttribute('src',midimg.imagePath);
    midImages.setAttribute('alt',midimg.name);
    midImages.setAttribute('title',midimg.name);
    midimg.views++;
    rightImages.setAttribute('src',rightimg.imagePath);
    rightImages.setAttribute('alt',rightimg.name);
    rightImages.setAttribute('title',rightimg.name);
    rightimg.views++;
}
render();

container.addEventListener('click',handleClickOnMall);
var totalClicks =0;
function handleClickOnMall(event) {
  
    if(totalClicks <25 ) {
        if(event.target.id !== 'container') {
          if(event.target.id === 'leftImages') {
            leftimg.clicks++;
          } else if (event.target.id === 'midImages'){
            midimg.clicks++;
          }
         else if 
          (event.target.id === 'rightImages') {
            rightimg.clicks++;
          }

          leftImages.views++;
          midImages.views++;
          rightImages.views++;
          
          totalClicks++;
          render();
        }
      }  else {
        console.log('you clicked more than 25');
        container.removeEventListener('click',handleClickOnMall);
        render2();
      }

    }
function render2() {
    var result = document.getElementById('summary');
    for (var i =0; i<mall.all.length ; i++) {
      var li1 = document.createElement('li');
      li1.textContent = `${mall.all[i].name} has ${mall.all[i].clicks} clicks and ${mall.all[i].views} views`;
      result.appendChild(li1);
    }
  }
