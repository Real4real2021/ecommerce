import { categories, products } from "./backend.js";

const productNameInput = document.getElementById('productName');
const productCategoryInput = document.getElementById('productCategory');
const productPriceInput = document.getElementById('productPrice');
const productDescriptionInput = document.getElementById('productDescription');
const productImageInput = document.getElementById('productImage');
const charts = document.querySelector('.charts');
const button = document.getElementById('inputButton');

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

button.addEventListener('click', ()=>{
  post('function/addAndManageProducts.php', {
    product__name: productNameInput.value,
    product__category: productCategoryInput.value,
    product__price: productPriceInput.value,
    product__description: productDescriptionInput.value,
    product__image: productImageInput.value,
    company__name: 'AkwaMens'
  });
  
});

const renderedProducts = products.map((product) => {
  return `
    <div class="charts-card">
      <div class="card-inner">
        <h3>${product.product__name} <h5>${product.product__category}</h5></h3>
        <span class="material-icons-outlined">inventory_2</span>
      </div>
      <h1>${product.product__price}</h1>
      <h4>${product.product__description}</h4>
      <h5>${product.company__name}</h5>
    </div>
  `;
});

charts.innerHTML = renderedProducts.join('');

async function createCategoryOptions() {
  categories.map((category) => {
    let html = `
        <option value="${category.category__name}">${category.category__name}</option>
        `;
    productCategoryInput.innerHTML += html;
  });
}

createCategoryOptions();