/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/product-cards.js":
/*!*************************************!*\
  !*** ./js/modules/product-cards.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function productCards() {

    const slider = __webpack_require__(/*! ./slider */ "./js/modules/slider.js");

    class MenuCardRandom {
        constructor(product_id, product_title, product_image_alt, brand_name, price, available, url_direct, rating, rating_count, url_img, parent = '.slider .slider__wrapper') {
            this.product_id = product_id;
            this.product_title = product_title;
            this.product_image_alt = product_image_alt;
            this.brand_name = brand_name;
            this.price = price;
            this.available = available;
            this.url_direct = url_direct;
            this.rating = rating;
            this.rating_count = rating_count;
            this.url_img = url_img;
            this.parent = document.querySelector(parent); 
        }
        
        
    
        render() {
            const element = document.createElement('div');
    
            element.innerHTML = `
            <div class="slider__item">
                <div class="product">
                <div class="img-container">
                <img src="${this.url_img}" alt="${this.product_image_alt}">
                </div>
                    <div class="header-card-product"> 
                        <h4 class="title">${this.product_title}</h4>
                        <p class="descr">Моторное масло Dexos2 5W-30 Синтетическое, 1 л.</p>
                    </div>
                    <div class="rating-area d-inline-block">
                        <input type="radio" id="star-5" name="rating" value="5">
                        <label for="star-5" title="Оценка «5»"></label>	
                        <input type="radio" id="star-4" name="rating" value="4">
                        <label for="star-4" title="Оценка «4»"></label>    
                        <input type="radio" id="star-3" name="rating" value="3">
                        <label for="star-3" title="Оценка «3»"></label>  
                        <input type="radio" id="star-2" name="rating" value="2">
                        <label for="star-2" title="Оценка «2»"></label>    
                        <input type="radio" id="star-1" name="rating" value="1">
                        <label for="star-1" title="Оценка «1»"></label>
                    </div>
                    <span class="reviews">(${this.rating_count} рекомендации)</span>
                    <div class="product-card d-block  d-md-flex ">
                        <div class="price">
                        ${this.price}
                            <span class="stock">К-во ${this.available}</span>
                        </div>
                        <button class="btn-buy">
                        <a href="${this.url_direct}" >Купить</a>
                        </button>
                    </div>
                </div>
                </div>
            `;
            this.parent.append(element);
            
        }
        
    }
    class MenuCard extends MenuCardRandom {
        constructor(product_id, product_title, product_image_alt, brand_name, price, available, url_direct, rating, rating_count, url_img, parent) {
            super(product_id, product_title, product_image_alt, brand_name, price, available, url_direct, rating, rating_count, url_img); 
            this.parent = document.querySelector(parent);
        }
        
        render() {
            const element = document.createElement('div');

            element.innerHTML = `
            <div class="slider__item">
                <div class="product">
                <div class="img-container">
                <img src="${this.url_img}" alt="${this.product_image_alt}">
                </div>
                    <div class="header-card-product"> 
                        <h4 class="title">${this.product_title}</h4>
                        <p class="descr">Моторное масло Dexos2 5W-30 Синтетическое, 1 л.</p>
                    </div>
                    <div class="rating-area d-inline-block">
                        <input type="radio" id="star-5" name="rating" value="5">
                        <label for="star-5" title="Оценка «5»"></label>	
                        <input type="radio" id="star-4" name="rating" value="4">
                        <label for="star-4" title="Оценка «4»"></label>    
                        <input type="radio" id="star-3" name="rating" value="3">
                        <label for="star-3" title="Оценка «3»"></label>  
                        <input type="radio" id="star-2" name="rating" value="2">
                        <label for="star-2" title="Оценка «2»"></label>    
                        <input type="radio" id="star-1" name="rating" value="1">
                        <label for="star-1" title="Оценка «1»"></label>
                    </div>
                    <span class="reviews">(${this.rating_count} рекомендации)</span>
                    <div class="product-card d-block  d-md-flex ">
                        <div class="price">
                        ${this.price}
                            <span class="stock">К-во ${this.available}</span>
                        </div>
                        <button class="btn-buy">
                        <a href="${this.url_direct}" >Купить</a>
                        </button>
                    </div>
                </div>
                </div>
            `;
            this.parent.append(element);
            
        } 
    } 

    //сортируем массив объектов из json файла
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    async function getResource(url) {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    //делаем запрос через json server к файлу db2.json
    //создаем слайдер с рандомной загрузкой карточек
    getResource('http://localhost:3000/products')
    .then(data => {
        shuffle(data);
        data.forEach(({product_id, product_title, product_image_alt, brand_name, price, available, url_direct, rating, rating_count, url_img}) => {
            
            new MenuCardRandom(product_id, product_title, product_image_alt, brand_name, price, available, url_direct, rating, rating_count, url_img).render();
            
        });
        slider('.slider__wrapper'); //инициализация слайдера, после построения DOM
    });

    //делаем запрос через json server к файлу db2.json
    //создаем слайдер с обычной загрузкой карточек, подряд
    getResource('http://localhost:3000/products')
    .then(data => {
        data.forEach(({product_id, product_title, product_image_alt, brand_name, price, available, url_direct, rating, rating_count, url_img}) => {
            
            new MenuCard(product_id, product_title, product_image_alt, brand_name, price, available, url_direct, rating, rating_count, url_img, '.slider .slider__wrapper2').render();
            
        });
        slider('.slider__wrapper2'); //инициализация слайдера, после построения DOM
    }); 
}

module.exports = productCards;



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((module) => {


  function sliderInit (selector) {
    $(selector).slick({
        integer: 0.15,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 520,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });

}




module.exports = sliderInit;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
"use strict";
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/

window.addEventListener('DOMContentLoaded', function() {
    
    const productCards = __webpack_require__(/*! ./modules/product-cards */ "./js/modules/product-cards.js");

    productCards();


    
 });
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map