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
let numberOfProducts = document.getElementById('numberOfProducts');

localStorage.setItem('products', JSON.stringify(products));

function addProduct() {
  
}

button.addEventListener('click', ()=>{
  console.log('it worked');
  products.push({
    productName: productNameInput.value,
    productCategory: productCategoryInput.value,
    productPrice: productPriceInput.value,
    productDescription: productDescriptionInput.value,
    productImage: productImageInput.value,
  });
})

export let newProducts = JSON.parse(localStorage.getItem('products'));

if(newProducts.length < 1){
  numberOfProducts.innerHTML = "0"
}else{
  numberOfProducts = newProducts.length;
}

// products.forEach(product => {
//   numberOfProducts.innerHTML = products.length;
//   console.log(numberOfProducts.innerHTML);
// })