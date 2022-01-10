$('.review__slider').slick({
  dots: true,
  arrow: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});

const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu__burger')
const close = document.querySelector('.menu__burger-close')
const body = document.querySelector('body')


burger.addEventListener('click', () => {
  menu.style.display = 'block'
  body.style.overflow = 'hidden'
})

close.addEventListener('click', () => {
  menu.style.display = 'none'
  body.style.overflow = 'visible'
})


