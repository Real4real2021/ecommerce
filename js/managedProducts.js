import { products } from '../data/products.js';
// SIDEBAR TOGGLE
let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

const productNameInput = document.getElementById('productName');
const productCategoryInput = document.getElementById('productCategory');
const productPriceInput = document.getElementById('productPrice');
const productDescriptionInput = document.getElementById('productDescription');
const productImageInput = document.getElementById('productImage');
const button = document.getElementById('inputButton');

button.addEventListener('click', ()=>{
  alert(products);
  products.push({
    product__name: productNameInput.value,
    product__category: productCategoryInput.value,
    product__price: productPriceInput.value,
    product__description: productDescriptionInput.value,
    product__image: productImageInput.value,
    company__name: 'AkwaMens'
  });
  localStorage.setItem('products', JSON.stringify(products));
})