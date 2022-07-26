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


// Аккордеон 
class ItcAccordion {
    constructor(target, config) {
      this._el = typeof target === 'string' ? document.querySelector(target) : target;
      const defaultConfig = {
        alwaysOpen: true
      };
      this._config = Object.assign(defaultConfig, config);
      this.addEventListener();
    }
    addEventListener() {
      this._el.addEventListener('click', (e) => {
        const elHeader = e.target.closest('.accordion__header');
        if (!elHeader) {
          return;
        }
        if (!this._config.alwaysOpen) {
          const elOpenItem = this._el.querySelector('.accordion__item_show');
          if (elOpenItem) {
            elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item_show') : null;
          }
        }
        elHeader.parentElement.classList.toggle('accordion__item_show');
      });
    }
  }
  new ItcAccordion('#accordion-1', {
    alwaysOpen: false
  });


