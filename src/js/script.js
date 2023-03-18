const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

document.addEventListener('keydown', function(e){
    if( e.keyCode == 27 ){
        menu.classList.remove('active');    
    }; 
});

$(document).ready(function(){
  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    responsive: [
      {
        
        breakpoint: 991,
        settings: {
            dots: true,
            arrows: false,
            slidesToShow: 1
        }
      }
    ]
  });
});


  