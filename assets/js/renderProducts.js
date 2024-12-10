const productsContainer = document.querySelector(".shop__items");
let products = JSON.parse(localStorage.getItem("products"));
console.log(products);

products.forEach((product) => {
  let html = `
        <div class="shop__content">
            <div class="shop__tag">New</div>
            <img src="${product.product__image}" alt="" class="shop__img">
            <h3 class="shop__title">${product.product__name}</h3>
            <span class="shop__subtitle">${product.product__category}</span>
            <span class="shop__subtitle"><a href="${product.company__name}.html">${product.company__name}</a></span>
    
            <div class="shop__prices">
                <span class="shop__price">${product.product__price}</span>
                <span class="shop__discounts">R29.99</span>
            </div>
    
            <a href="details.html" class="button shop__button">
                <i class="bx bx-cart-alt shop__icon"></i>
            </a>
        </div>
        `;

  productsContainer.insertAdjacentHTML("beforeend", html);
});

const breadcrumbTitle = document.querySelector(".breadcrumb__title");
breadcrumbTitle.innerHTML = products[0].company__name;

const breadcrumbSubtitle = document.querySelector(".breadcrumb__subtitle");
