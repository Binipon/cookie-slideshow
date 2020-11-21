'use strict';

{
  const images = [
    'img/cookie1.jpg',
    'img/cookie2.jpg',
    'img/cookie3.jpg',
    'img/cookie4.jpg',
    'img/cookie5.jpg',
    'img/cookie6.jpg',
    'img/cookie7.jpg',
    'img/cookie8.jpg',
    'img/cookie9.jpg',
    'img/cookie10.jpg',
    'img/cookie11.jpg',
    'img/cookie12.jpg',
    'img/cookie13.jpg',
    'img/cookie14.jpg',
    'img/cookie15.jpg',
    'img/cookie16.jpg',
    'img/cookie17.jpg',
    'img/cookie18.jpg',
    'img/cookie19.jpg',
    'img/cookie20.jpg',
    'img/cookie21.jpg',
    'img/cookie22.jpg',
    'img/cookie23.jpg',
    'img/cookie24.jpg',
    'img/cookie25.jpg',
    'img/cookie26.jpg',
    'img/cookie27.jpg',
    'img/cookie28.jpg',
    'img/cookie29.jpg',
    'img/cookie30.jpg',
    'img/cookie31.jpg',
    'img/cookie32.jpg',
    'img/cookie33.jpg',
    'img/cookie34.jpg',
    'img/cookie35.jpg',
    'img/cookie36.jpg',
    'img/cookie37.jpg',
    'img/cookie38.jpg',
    
  ];

  let currentIndex = 0;

  const mainImage = document.getElementById('main');
  mainImage.src = images[currentIndex];

  images.forEach((image, index)=> {
    
    const img = document.createElement('img');
    img.src = image;

    const li = document.createElement('li');
    if (index === currentIndex) {
      li.classList.add('current');
    }
    li.addEventListener('click', () => {
      const thumbnails = document.querySelectorAll('.thumbnails > li');
      console.log(thumbnails);
      mainImage.src = image;
      thumbnails[currentIndex].classList.remove('current');
      currentIndex = index;
      thumbnails[currentIndex].classList.add('current');

    });
    
    li.appendChild(img);

    document.querySelector('.thumbnails').appendChild(li);

  });

  const next = document.getElementById('next');
  next.addEventListener('click', () => {
    let target = currentIndex + 1;
    if (target === images.length) {
      target = 0;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();

  });
  
  const prev = document.getElementById('prev');
  prev.addEventListener('click', () => {
    let target = currentIndex - 1;
    if (target < 0) {
      target = images.length - 1;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
    
  });

  let timeoutId;

  function playSlideshow() {
    timeoutId = setTimeout(() => {
      next.click();
      playSlideshow();
    },1000);
  }

  let isPlaying = false;

  

  const play = document.getElementById('play');
    play.addEventListener('click', () =>{
     if (isPlaying === false) {

       playSlideshow();
       play.textContent = "Pause";

     } else {
        clearTimeout(timeoutId);
       play.textContent = "Play";

     }
     isPlaying =!isPlaying;
  });
}





