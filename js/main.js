const arrowActive = document.querySelector('.arrow'),
      downList = document.querySelector('.downlist'),
      dropDown = document.querySelector('.drop-down');

// Выпадающий список
downList.addEventListener('click', () => {
    arrowActive.classList.toggle('active');
    dropDown.classList.toggle('active');
    downList.classList.toggle('active');
});


// Карусель
$('.owl-carousel').owlCarousel({
    loop:true,
    nav: false,
    dots:false,
    navText:['<img src="./img/arrow-left-owl.svg">','<img src="./img/arrow-right-owl.svg">'],
    margin:16,
    autoplay:true,
    autoplayTimeout: 3500,
    slideTransition: `linear`,
    items: 4,
    responsiveClass:true,
    responsive:{
        0: {
            items: 3,
            margin:14,
        },
        769: {
            items:4,
        }
    } 
})


const textInCards = document.querySelector('.text-on-cards'),
      arrowProd = document.querySelector('.arrow-products'),
      cards = document.querySelector('.card');


arrowProd.addEventListener('click', () => {
    textInCards.classList.toggle('open');
    cards.classList.toggle('open');
    arrowProd.classList.toggle('open');
})
    
 





