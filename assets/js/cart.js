const shoppingCart = [];

document.getElementById("cartoon__jacket__button").addEventListener("click", () => {
    shoppingCart.push({
        productImage: document.getElementById("cartoon__jacket__img").src,
        productName: document.getElementById("cartoon__jacket__title").innerHTML,
        productCategory: document.getElementById("cartoon__jacket__product__category").innerHTML,
        productCompany: document.getElementById("cartoon__jacket__company__name").innerHTML,
        productPrice: document.getElementById("cartoon__jacket__price").innerHTML,
        productDiscount: document.getElementById("cartoon__jacket__discount").innerHTML,
    });
    console.log(shoppingCart);
})

document.getElementById("clothing__hat__button").addEventListener("click", () => {
    shoppingCart.push({
        productImage: document.getElementById("clothing__hat__img").src,
        productName: document.getElementById("clothing__hat__title").innerHTML,
        productCategory: document.getElementById("clothing__hat__subtitle").innerHTML,
        productCompany: document.getElementById("clothing__hat__company").innerHTML,
        productPrice: document.getElementById("clothing__hat__price").innerHTML,
        productDiscount: document.getElementById("clothing__hat__discount").innerHTML,
    });
    console.log(shoppingCart);
})

document.getElementById("fur__jacket__button").addEventListener("click", () => {
    shoppingCart.push({
        productImage: document.getElementById("fur__jacket__img").src,
        productName: document.getElementById("fur__jacket__title").innerHTML,
        productCategory: document.getElementById("fur__jacket__subtitle").innerHTML,
        productCompany: document.getElementById("fur__jacket__company").innerHTML,
        productPrice: document.getElementById("fur__jacket__price").innerHTML,
        productDiscount: document.getElementById("fur__jacket__discount").innerHTML,
    });
    console.log(shoppingCart);
})

document.getElementById("fur__jacket__button").addEventListener("click", () => {
    shoppingCart.push({
        productImage: document.getElementById("fur__jacket__img").src,
        productName: document.getElementById("fur__jacket__title").innerHTML,
        productCategory: document.getElementById("fur__jacket__subtitle").innerHTML,
        productCompany: document.getElementById("fur__jacket__company").innerHTML,
        productPrice: document.getElementById("fur__jacket__price").innerHTML,
        productDiscount: document.getElementById("fur__jacket__discount").innerHTML,
    });
    console.log(shoppingCart);
})

document.getElementById("fleece__jacket__button").addEventListener("click", () => {
    shoppingCart.push({
        productImage: document.getElementById("fleece__jacket__img").src,
        productName: document.getElementById("fleece__jacket__title").innerHTML,
        productCategory: document.getElementById("fleece__jacket__subtitle").innerHTML,
        productCompany: document.getElementById("fleece__jacket__company").innerHTML,
        productPrice: document.getElementById("fleece__jacket__price").innerHTML,
        productDiscount: document.getElementById("fleece__jacket__discount").innerHTML,
    });
    console.log(shoppingCart);
})

document.getElementById("windbreaker__jacket__button").addEventListener("click", () => {
    shoppingCart.push({
        productImage: document.getElementById("windbreaker__jacket__img").src,
        productName: document.getElementById("windbreaker__jacket__title").innerHTML,
        productCategory: document.getElementById("windbreaker__jacket__subtitle").innerHTML,
        productCompany: document.getElementById("windbreaker__jacket__company").innerHTML,
        productPrice: document.getElementById("windbreaker__jacket__price").innerHTML,
        productDiscount: document.getElementById("windbreaker__jacket__discount").innerHTML,
    });
    console.log(shoppingCart);
})

document.getElementById("adidas__jacket__button").addEventListener("click", () => {
    shoppingCart.push({
        productImage: document.getElementById("adidas__jacket__img").src,
        productName: document.getElementById("adidas__jacket__title").innerHTML,
        productCategory: document.getElementById("adidas__jacket__subtitle").innerHTML,
        productCompany: document.getElementById("adidas__jacket__company").innerHTML,
        productPrice: document.getElementById("adidas__jacket__price").innerHTML,
        productDiscount: document.getElementById("adidas__jacket__discount").innerHTML,
    });
    console.log(shoppingCart);
})

document.getElementById('view__cart').addEventListener('click', () => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
})

const updatedCart = JSON.parse(localStorage.getItem("shoppingCart")); 

const cartContainer = document.getElementById("car__container");
