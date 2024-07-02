

let minusBtn = document.querySelector(".input__minus");
let plusBtn = document.querySelector(".input__plus");
let userInput = document.querySelector(".input__number");
const imageContainer = document.querySelector(".gallery__image-container");

let userInputNumber = 0;


plusBtn.addEventListener("click", ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;

    
});


minusBtn.addEventListener("click", ()=>{
    userInputNumber--;
    if(userInputNumber <= 0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;

});

let d = document

d.addEventListener('DOMContentLoaded', ()=>{
    imgContainer.style.backgroundImage = `url("images/image-product-${imageNumber}.jpg")`
})


//Agregar al carrito cuando se da clic en el btn add to cart;

const addToCartBtn = document.querySelector(".details__button");
let cartNotification = document.querySelector(".header__cart--notification");
let lastValue = parseInt(cartNotification.innerText);
addToCartBtn.addEventListener("click", ()=>{
    
    lastValue += userInputNumber;
    cartNotification.innerText = lastValue;
    cartNotification.style.display = "block";
    drawProductInModal();
    
 
});


//mostrar contenido del carrito

const cartBtn = document.querySelector(".header__cart");
const cartModal = document.querySelector(".cart-modal");
//let priceModal = document.querySelector(".cart-modal__price");
const productContainer = document.querySelector(".cart-modal__checkout-container")

cartBtn.addEventListener("click", ()=>{

    cartModal.classList.toggle("showCart");
    
    if(lastValue == 0){ 
        productContainer.innerHTML = '<p class = "cart-empty">Your cart is empty </p>';
    }else{drawProductInModal();}
});


//borrar el contenido del carrito

const previusGalleryBtn = document.querySelector(".gallery__previus");
const nextGalleryBtn = document.querySelector(".gallery__next");
let modalImageContainer = document.querySelector(".modal-gallery__image-container");


let imageNumber = 1;



nextGalleryBtn.addEventListener("click", ()=>{
    changeNextImage(imageContainer);
});

previusGalleryBtn.addEventListener("click", ()=>{
    changePreviusImg(imageContainer);
})

//mostrar el modal de imagenes;;;;;;;;;;;;;;;
const imageModal = document.querySelector(".modal-gallery__background");
imageContainer.addEventListener("click", ()=>{
    imageModal.style.display = "grid";
})

//cerrar el modal;;;;;;;;;;

const closeIconModalGalleryBtn = document.querySelector(".modal-gallery__close")

closeIconModalGalleryBtn.addEventListener("click", ()=>{

    imageModal.style.display = "none";

});

//cambiar las imagenes desde las miniaturas

let galleryThumnails = document.querySelectorAll(".gallery__thumnail")
galleryThumnails = [...galleryThumnails]

galleryThumnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', e =>{
        imageContainer.style.backgroundImage = `url("../images/image-product-${e.target.id}.jpg")`
        console.log("click en thumbnail")
    })
})


//Cambiar las imagenes en el modal desde las miniatura;;;;;;;

let modalThumbnails = document.querySelectorAll(".modal-gallery__thumnail");
modalThumbnails = [...modalThumbnails];

modalThumbnails.forEach(modalThumbnail => {
    modalThumbnail.addEventListener("click", e=>{
        modalImageContainer.style.backgroundImage =  `url("../images/image-product-${e.target.id.slice(-1)}.jpg")`
    })
})

//cambiar las imagenes del modal gallery desde las flechas

const nextModalBtn = document.querySelector(".modal-gallery__next");
const previusModalBtn = document.querySelector(".modal-gallery__previus");

nextModalBtn.addEventListener('click', ()=>{

    changeNextImage(modalImageContainer);
    
})


previusModalBtn.addEventListener('click', ()=>{

    changePreviusImg(modalImageContainer);

})


//mostrar el navbar cuando presiono el menu de hamburgueza

const hamburgerMenuBtn = document.querySelector(".header__menu");
const modalNavBar = document.querySelector('.modal-navbar__background');
const modalCloseIcon = document.querySelector('.modal-navbar__close-icon')

hamburgerMenuBtn.addEventListener('click', e=>{
    console.log('click')
    modalNavBar.style.display = 'block'
});

modalCloseIcon.addEventListener('click', ()=>{
    modalNavBar.style.display = 'none'
})


//funcniones

function drawProductInModal(){
    productContainer.innerHTML = `
    <div class="cart-modal__details-container">
        <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="thumbnail">
    <div>
         <p class="cart-modal__product" >Autumn Limited Edition..</p>
         <p class="cart-modal__price">$125 x3 <span>$375.00</span></p>
    </div>
    <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete icon">
    </div>
    <button class="cart-modal__checkout">Checkout</button>
    
    `;
    deleteProduct();
    let priceModal = document.querySelector(".cart-modal__price");
    priceModal.innerHTML = `$125 x${lastValue} <span>$${lastValue*125}.00</span>`
}


function deleteProduct(){
    const deleteProductBtn = document.querySelector(".cart-modal__delete");


deleteProductBtn.addEventListener("click", ()=>{
    productContainer.innerHTML = '<p class = "cart-empty">Your cart is empty </p>';
    lastValue = 0;
    cartNotification.innerText = lastValue;
});

}

        

function changeNextImage(imgContainer){
    if(imageNumber == 4){
        imageNumber = 1;
    }else{

        imageNumber++;
    }
    
    imgContainer.style.backgroundImage = `url("images/image-product-${imageNumber}.jpg")`
}




function changePreviusImg(imgContainer){
    if(imageNumber == 1){
        imageNumber = 4
    }else{
        imageNumber--;
    }
    imgContainer.style.backgroundImage = `url("images/image-product-${imageNumber}.jpg")`;

}



//edit




























