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

var totalClicks =0;


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
// var leftBussImg, centerBussImg, rightBussImg;
var uniqueImg = [] ;
function render (){
leftimg = mall.all [randomNumber(0,mall.all.length-1)]
midimg = mall.all [randomNumber(0,mall.all.length-1)]
rightimg = mall.all [randomNumber(0,mall.all.length-1)]

if ( totalClicks >= 1){
  while ( uniqueImg.includes(leftimg.name)  || uniqueImg.includes(midimg.name) ||uniqueImg.includes(rightimg.name) || leftimg === midimg || leftimg === rightimg || midimg === rightimg ){

      leftimg = mall.all[randomNumber(0, mall.all.length - 1)];
      midimg = mall.all[randomNumber(0, mall.all.length - 1)];
      rightimg = mall.all[randomNumber(0, mall.all.length - 1)];
     

  }
  
}else if ( totalClicks === 0){
  while (  leftimg === midimg || midimg === rightimg || midimg === rightimg ){

    leftimg = mall.all[randomNumber(0, mall.all.length - 1)];
    midimg = mall.all[randomNumber(0, mall.all.length - 1)];
    rightimg = mall.all[randomNumber(0, mall.all.length - 1)];
  }
}


uniqueImg[0] = leftimg.name;
uniqueImg[1] = midimg.name;
uniqueImg[2] = rightimg.name;
    
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

// var randomStore =[];
// var x= leftimg,
//     y = midimg,
//     z=rightimg;


  
container.addEventListener('click',handleClickOnMall);

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
        alert('you clicked more than 25');
        container.removeEventListener('click',handleClickOnMall);
        randomNumber();
        render2();
        render3();
        
      }
      
    }
    function render2() {
      var result = document.getElementById('summary');
      for (var i =0; i<mall.all.length ; i++) {
        var li1 = document.createElement('li');
        li1.textContent = `${mall.all[i].name} has ${mall.all[i].clicks} clicks and ${mall.all[i].views} views`;
        result.appendChild(li1);
        // sumClicks =[mall.all[i].clicks];
        
      }
    }
    // render2();
    
    
    function render3 (){
      var sumClicks =[];
    for ( var i=0;i<mall.all.length;i++){
      sumClicks.push(mall.all[i].clicks);
       

    }
      
      // var Tclicks =[];
      // var Tviews =[];
      var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: names,
        datasets: [{
          label: '# of Votes',
          data: sumClicks,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
            borderWidth: 1
          }]
    },
    options: {
      scales: {
            yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      }
      console.log(myChart);
      
