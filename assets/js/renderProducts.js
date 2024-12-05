import { newProducts } from '../../js/managedProducts.js';

console.log(newProducts);

const productsContainer = document.querySelector('.shop__items');

newProducts.forEach(product => {
  let html = `
  <div class="shop__content">
      <div class="shop__tag">New</div>
      <img src="${product.product__image}" alt="" class="shop__img">
      <h3 class="shop__title">${product.product__name}</h3>
      <span class="shop__subtitle">${product.product__category}</span>

      <div class="shop__prices">
          <span class="shop__price">${product.product__price}</span>
          <span class="shop__discounts">R29.99</span>
      </div>

      <a href="details.html" class="button shop__button">
          <i class="bx bx-cart-alt shop__icon"></i>
      </a>
  </div>
  `;

  productsContainer.insertAdjacentHTML('beforeend', html);
});