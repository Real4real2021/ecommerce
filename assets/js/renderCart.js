import { products } from "../../js/backend.js";

const shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
const cartContainer = document.getElementById("cart__container");
const totalPrice = document.querySelector(".cart__prices-total");
const checkoutButton = document.getElementById("checkout-button");

shoppingCart.forEach((product)=>{
   for(let i = 0; i < products.length; i++){
       if(product.productName === products[i].product__name){
        let html = ` 
        <article class="cart__card">
            <div class="cart__box">
                <img src="assets/img/cart-1.png" alt="" class="cart__img">
            </div>
    
            <div class="cart__details">
                <h3 class="cart__title">${products[i].product__name}</h3>
                <span class="cart__price">${products[i].product__price}</span>
    
                <div class="cart__amount">
                    <div class="cart__amount-content">
                        <span class="cart__amount-box">
                            <i class="bx bx-minus"></i>
                        </span>
                        <span class="cart__amount-number">1</span>
    
                        <span class="cart__amount-box">
                            <i class="bx bx-plus"></i>
                        </span>
                    </div>
    
                    <i class="bx bx-trash-alt cart__amount-trash"></i>
                </div>
            </div>
        </article>
        `;
        cartContainer.innerHTML += html;
       }else{
        console.log("no product found");
       }
   }
});

document.querySelectorAll('.bx-plus').forEach((plus)=>{
    plus.addEventListener('click', ()=>{
        let amount = document.querySelector('.cart__amount-number').value;
        amount++;
        document.querySelector('.cart__amount-number').value = amount;
    })
})