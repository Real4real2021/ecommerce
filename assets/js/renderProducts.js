import { products } from "../../js/backend.js";

const productsContainer = document.querySelector(".shop__items");

function loading() {
    console.log("loading");
  }
  
  let skipLoading = false;
  
  async function post(url, data, options = {}) {
    const { timeout = 8000 } = options;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    if (!url.includes("notifications")) {
      if (!skipLoading) loading();
      const responseText = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        ...options,
        body: JSON.stringify(data),
      });
      clearTimeout(id);
      if (!skipLoading) loading();
      if (skipLoading) skipLoading = false;
      return responseText.json();
    }
    const responseText = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch((error) => {
      console.log(error);
    });
    if (skipLoading) skipLoading = false;
    return responseText.json();
  }

products.forEach((product) => {
  let html = `
        <div class="shop__content">
            <div class="shop__tag">New</div>
            <img src="assets/img/product-1.png" alt="" class="shop__img">
            <h3 class="shop__title">${product.product__name}</h3>
            <span class="shop__subtitle">${product.product__category}</span>
            <span class="shop__subtitle"><a href="${product.company__name}.html">${product.company__name}</a></span>
    
            <div class="shop__prices">
                <span class="shop__price">${product.product__price}</span>
                <span class="shop__discounts">R29.99</span>
            </div>
    
            <button class="button shop__button" data-product-name="${product.product__name}">
                <i class="bx bx-cart-alt shop__icon"></i>
            </button>
        </div>
        `;

  productsContainer.insertAdjacentHTML("beforeend", html);
});

document.querySelectorAll(".shop__button").forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.dataset.productName;
    addToCart(productName);
    console.log(shoppingCart);
  });
});

function addToCart(productName){
  shoppingCart.push({
      productName
  });
}

document.getElementById("view__cart").addEventListener("click", () => {
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
});