new Swiper('.books-slider',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    grabCursor: true,
    
    spaceBetween: 100,
    slidesPerView: 'auto',
    loop: true,
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
      document.getElementById("up_mark").style.display = "block";
  } else {
      document.getElementById("up_mark").style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0; 
}