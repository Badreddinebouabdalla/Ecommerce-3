let wrapper = document.querySelector(".slider-wrapper");
let menuItems = document.querySelectorAll(".menu-item");
let buyBtn = document.querySelector(".product-button");
let payClose = document.querySelector(".close");
let productBtn = document.querySelectorAll(".buy-button");
let prices = document.querySelectorAll(".slider-price");
let images = document.querySelectorAll(".slider-img");
let productTitle = document.querySelector(".product-title");
let productPrice = document.querySelector(".product-price");
let productImg = document.querySelector(".product-img");
let product ={
    name:menuItems[0].textContent,
    price:prices[0].textContent,
    image:images[0].src,
    colors:["",""],
    sizes:["",""]
} 
menuItems.forEach((item , index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform = "translateX("+ -100*index +"vw)";
        setProduct(item,index);
    })
});
buyBtn.addEventListener("click",()=>{
    document.querySelector(".payment").style.display = "block";
})
payClose.addEventListener("click",()=>{
    document.querySelector(".payment").style.display = "none";    
})
// choose product to buy it
productBtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        productTitle.textContent = product.name;
        productPrice.textContent = product.price;
        productImg.src = product.image;
    })
});
function setProduct(item , index){
    product.name = item.textContent;
    product.price = prices[index].textContent;
    product.image = images[index].src;
}