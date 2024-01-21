"use strict";

// modal variables
const modal = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalCloseOverlay = document.querySelector("[data-modal-overlay]");

// modal function
const modalCloseFunc = function () {
    modal.classList.add("closed");
};

// modal eventListener
modalCloseOverlay.addEventListener("click", modalCloseFunc);
modalCloseBtn.addEventListener("click", modalCloseFunc);

// notification toast variables
const notificationToast = document.querySelector("[data-toast]");
const toastCloseBtn = document.querySelector("[data-toast-close]");

// notification toast eventListener
toastCloseBtn.addEventListener("click", function () {
    notificationToast.classList.add("closed");
});

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll(
    "[data-mobile-menu-open-btn]"
);
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelectorAll(
    "[data-mobile-menu-close-btn]"
);
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
    // mobile menu function
    const mobileMenuCloseFunc = function () {
        mobileMenu[i].classList.remove("active");
        overlay.classList.remove("active");
    };

    mobileMenuOpenBtn[i].addEventListener("click", function () {
        mobileMenu[i].classList.add("active");
        overlay.classList.add("active");
    });

    mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
    overlay.addEventListener("click", mobileMenuCloseFunc);
}

// accordion variables
const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion]");

for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener("click", function () {
        const clickedBtn = this.nextElementSibling.classList.contains("active");

        for (let i = 0; i < accordion.length; i++) {
            if (clickedBtn) break;

            if (accordion[i].classList.contains("active")) {
                accordion[i].classList.remove("active");
                accordionBtn[i].classList.remove("active");
            }
        }

        this.nextElementSibling.classList.toggle("active");
        this.classList.toggle("active");
    });
}

var cartVisible = false;

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    var buttonDelete = document.getElementsByClassName("btn-delete");
    for (var i = 0; i < buttonDelete.length; i++) {
        var button = buttonDelete[i];
        button.addEventListener("click", deleteItemcart);
    }
    var buttonPlusQuantity = document.getElementsByClassName("plus-cart");
    for (var i = 0; i < buttonPlusQuantity.length; i++) {
        var button = buttonPlusQuantity[i];
        button.addEventListener("click", plusQuantity);
    }

    var buttonMinusQuantity = document.getElementsByClassName("minus-cart");
    for (var i = 0; i < buttonMinusQuantity.length; i++) {
        var button = buttonMinusQuantity[i];
        button.addEventListener("click", minusQuantity);
    }

    var buttonAddToCart = document.getElementsByClassName("buttonAddItem");
    for (var i = 0; i < buttonAddToCart.length; i++) {
        var button = buttonAddToCart[i];
        button.addEventListener("click", addToCart);
    }

    document
        .getElementsByClassName("btn-pay")[0]
        .addEventListener("click", payClicked);
}

function deleteItemcart(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();

    // update item in cart
    updateItemCart();

    //hide cart
    hideCart();
}

function updateItemCart() {
    var cartContainer = document.querySelector(".cart");
    var cartItems = cartContainer.querySelectorAll(".cart-item");
    var total = 0;

    for (var i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];
        var priceElement = item.querySelector(".cart-item-price");
        var price = parseFloat(
            priceElement.innerText.replace("$", "").replace(",", "")
        );
        var quantityItem = item.querySelector(".cart-item-quantity");
        var quantity = parseInt(quantityItem.value);

        total = total + price * quantity;
    }

    total = Math.round(total * 100) / 100;
    document.querySelector(".cart-pricetotal").innerText =
        "$" + total.toLocaleString("es") + ",000";
}

function plusQuantity(event) {
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var quantityInput =
        selector.getElementsByClassName("cart-item-quantity")[0];
    var quantityActual = parseInt(quantityInput.value);
    quantityActual++;
    quantityInput.value = quantityActual;
    selector.getElementsByClassName("cart-item-quantity")[0].value =
        quantityActual;

    updateItemCart();
}

function minusQuantity(event) {
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var quantityInput =
        selector.getElementsByClassName("cart-item-quantity")[0];
    var quantityActual = parseInt(quantityInput.value);

    if (quantityActual > 1) {
        quantityActual--;
        quantityInput.value = quantityActual;
        updateItemCart();
    } else {
        // Nếu số lượng giảm xuống dưới hoặc bằng 0, xóa sản phẩm khỏi giỏ hàng
        var cartItem = selector.closest(".cart-item");
        cartItem.remove();
    }
    quantityInput.value = quantityActual;
    selector.getElementsByClassName("cart-item-quantity")[0].value =
        quantityActual;

    updateItemCart();
}

function addToCart(event) {
    var button = event.target;
    var item = button.closest(".showcase");
    var title = item.querySelector(".showcase-title").innerText;
    var price = item.querySelector(".price-box .price").innerText;
    var imageSrc = item.querySelector(".showcase .product-img.default").src;

    console.log("Title to add:", title);

    addItemToCart(title, price, imageSrc);

    updateItemCart();

    showCart();
}

function payClicked(event) {
    alert("Payment success");

    // Ẩn giỏ hàng
    hideCart();

    // Xóa tất cả các sản phẩm trong giỏ hàng
    var cartItems = document.getElementsByClassName("cart-items")[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }

    // Cập nhật tổng tiền
    updateItemCart();
}

function addItemToCart(title, price, imageSrc) {
    var itemAdd = document.getElementsByClassName("cart-items")[0];

    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    var existingItem = document.querySelector(
        `.cart-item-detail-title[data-title="${title}"]`
    );
    if (existingItem) {
        alert("Already in the cart!!");
        return;
    }

    var item = document.createElement("div");
    item.classList.add("item");

    var itemCartContent = `
        <div class="cart-item">
            <img src="${imageSrc}" alt="" width="80px">
            <div class="cart-item-detail">
                <span class="cart-item-detail-title" data-title="${title}">${title}</span>
                <span class="cart-item-price">${price}</span>
                <div class="selector-cart">
                    <i class="fa-solid fa-minus minus-cart"></i>
                    <input type="text" value="1" class="cart-item-quantity">
                    <i class="fa-solid fa-plus plus-cart"></i>
                </div>
            </div>
            <span class="btn-delete">
                <i class="fa-solid fa-trash"></i>
            </span>
        </div>
    `;
    item.innerHTML = itemCartContent;
    itemAdd.append(item);

    //------------------Delete button---------------------
    item.getElementsByClassName("btn-delete")[0].addEventListener(
        "click",
        deleteItemcart
    );

    // -----------------Plus button-----------------------
    var buttonPlusQuantity = item.getElementsByClassName("plus-cart")[0];
    buttonPlusQuantity.addEventListener("click", plusQuantity);

    // -----------------Minus button ----------------------
    var buttonMinusQuanty = item.getElementsByClassName("minus-cart")[0];
    buttonMinusQuanty.addEventListener("click", minusQuantity);
}

document.addEventListener("DOMContentLoaded", function () {
    var openCartBtn = document.getElementById("open-cart");
    var lightBox = document.getElementById("light-box");
    var exitBtn = document.querySelector(".btn-exit");

    openCartBtn.addEventListener("click", function () {
        lightBox.classList.add("active");
    });

    exitBtn.addEventListener("click", function () {
        lightBox.classList.remove("active");
    });
});

// ----------------------------Popup showcase-----------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const eyeButtons = document.querySelectorAll(".buttonPreview");
    const popUpShowcase = document.getElementById("popUpShowcase");
    const closePopUpButton = document.getElementById("closePopUp");
    const popupImage = document.querySelector(".pop-up-showcase img");
    const popupTitle = document.querySelector(".pop-up-showcase h3");

    eyeButtons.forEach(function (button) {
        button.addEventListener("mouseup", function (event) {
            event.stopPropagation();
            const productId = button.getAttribute("data-product-id");
            displayProductDetails(productId);
            popUpShowcase.style.display = "block";
            popUpShowcase.style.zIndex = "1000";
        });
    });

    closePopUpButton.addEventListener("click", function () {
        popUpShowcase.style.display = "none";
        popUpShowcase.style.zIndex = "";
    });

    window.addEventListener("click", function (event) {
        if (event.target === popUpShowcase) {
            popUpShowcase.style.display = "none";
            popUpShowcase.style.zIndex = "";
        }
    });

    function displayProductDetails(productId) {
        const productDetails = getProductDetailsById(productId);
        popupImage.src = productDetails.image;
        popupTitle.textContent = productDetails.title;
        // Các thông tin khác cần được cập nhật tương tự...
    }

    function getProductDetailsById(productId) {
        if (productId === "product-1") {
            return {
                image: "./detailpage/images/catfood-1.jpg",
                title: "Me-O Food Tuna",
            };
        } else if (productId === "product-2") {
            return {
                image: "./detailpage/images/product-21.jpg",
                title: "Zoi Cat Food",
            };
        } else if (productId === "product-3") {
            return {
                image: ".//assets/images/Hat/5.jpg",
                title: "King Hat For Noble Cats",
            };
        } else if (productId === "product-4") {
            return {
                image: "./detailpage/images/46.jpg",
                title: "Catsrang Korean Food",
            };
        } else if (productId === "product-5") {
            return {
                image: "./assets/images/Food/catfood-5.jpg",
                title: "Kusinta Fish Soup",
            };
        } else if (productId === "product-6") {
            return {
                image: "./detailpage/images/65.jpg",
                title: "Chery Hat For Cat",
            };
        } else if (productId === "product-7") {
            return {
                image: "./detailpage/images/71.jpg",
                title: "Cat Sleep Bed",
            };
        } else if (productId === "product-8") {
            return {
                image: "./assets/images/Food/catfood-7.jpg",
                title: "Kusinta Seafood Soup",
            };
        } else if (productId === "product-9") {
            return {
                image: "./detailpage/images/95.jpg",
                title: "Asia Cat",
            };
        } else if (productId === "product-10") {
            return {
                image: "./detailpage/images/101.jpg",
                title: "Pet Grooming",
            };
        } else if (productId === "product-11") {
            return {
                image: "./assets/images/product-category/product_11.png",
                title: "Pedigree Complete Nutrition Grilled Steak & Vegetable Flavor Dog Kibble Adult Dry Dog Food",
            };
        } else if (productId === "product-12") {
            return {
                image: "./assets/images/product-category/product-12.webp",
                title: "American Journey Limited Ingredient Salmon & Sweet Potato Recipe Grain-Free Dry Dog Food",
            };
        }
    }
});
