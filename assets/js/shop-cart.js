
var cartVisible = false;


if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready()
}


function ready(){
    var buttonDelete = document.getElementsByClassName('btn-delete')
    for(var i= 0;i<buttonDelete.length;i++){
        var button = buttonDelete[i];
        button.addEventListener('click',deleteItemcart)

    }
    var buttonPlusQuantity = document.getElementsByClassName('plus-cart')
    for (var i= 0; i<buttonPlusQuantity.length;i++){
        var button = buttonPlusQuantity[i];
        button.addEventListener('click',plusQuantity)
    }

    var buttonMinusQuantity = document.getElementsByClassName('minus-cart')
    for (var i= 0; i<buttonMinusQuantity.length;i++){
        var button = buttonMinusQuantity[i];
        button.addEventListener('click',minusQuantity)
    }

    var buttonAddToCart = document.getElementsByClassName('buttonAddItem');
    for (var i = 0; i < buttonAddToCart.length; i++) {
        var button = buttonAddToCart[i];
        button.addEventListener('click', addToCart);
    }

    document.getElementsByClassName('btn-pay')[0].addEventListener('click',payClicked)


}

function deleteItemcart(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();

    // update item in cart 
    updateItemCart();

    //hide cart
    hideCart();
}


function updateItemCart() {
    var cartContainer = document.querySelector('.cart');
    var cartItems = cartContainer.querySelectorAll('.cart-item');
    var total = 0;

    for (var i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];
        var priceElement = item.querySelector('.cart-item-price');
        var price = parseFloat(priceElement.innerText.replace('$', '').replace(',', ''));
        var quantityItem = item.querySelector('.cart-item-quantity');
        var quantity = parseInt(quantityItem.value);

        total = total + (price * quantity);
    }

    total = Math.round(total * 100) / 100;
    document.querySelector('.cart-pricetotal').innerText = '$' + total.toLocaleString("es") + ',000';
}



function plusQuantity(event){
    
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var quantityInput = selector.getElementsByClassName('cart-item-quantity')[0];
    var quantityActual = parseInt(quantityInput.value);
    quantityActual++;
    quantityInput.value = quantityActual; 
    selector.getElementsByClassName('cart-item-quantity')[0].value = quantityActual;
    
    updateItemCart()
}



function minusQuantity(event){
    
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var quantityInput = selector.getElementsByClassName('cart-item-quantity')[0];
    var quantityActual = parseInt(quantityInput.value);
    quantityActual--;
    
    if (quantityActual > 1) {
        quantityActual--;
        quantityInput.value = quantityActual;
        updateItemCart();
    } else {
        // Nếu số lượng giảm xuống dưới hoặc bằng 0, xóa sản phẩm khỏi giỏ hàng
        var cartItem = selector.closest('.cart-item');
        cartItem.remove();
    }
    quantityInput.value = quantityActual; 
    selector.getElementsByClassName('cart-item-quantity')[0].value = quantityActual;
    
    updateItemCart()
}


function addToCart(event) {
    var button = event.target;
    var item = button.closest('.showcase');
    var title = item.querySelector('.showcase-title').innerText;
    var price = item.querySelector('.price-box .price').innerText;
    var imageSrc = item.querySelector('.showcase .product-img.default').src;

    console.log("Title to add:", title);


    addItemToCart(title, price, imageSrc);

    updateItemCart();

    showCart();
}








function payClicked(event){
    alert("Payment success");
    
    // Ẩn giỏ hàng
    hideCart();
    
    // Xóa tất cả các sản phẩm trong giỏ hàng
    var cartItems = document.getElementsByClassName('cart-items')[0];
    while(cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild);
    }
    
    // Cập nhật tổng tiền
    updateItemCart();
}

function addItemToCart(title, price, imageSrc) {
    var itemAdd = document.getElementsByClassName('cart-items')[0];
    
    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    var existingItem = document.querySelector(`.cart-item-detail-title[data-title="${title}"]`);
    if (existingItem) {
        alert("Already in the cart!!");
        return;
    }

    var item = document.createElement('div');
    item.classList.add('item');

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
    item.getElementsByClassName('btn-delete')[0].addEventListener('click', deleteItemcart);

    // -----------------Plus button-----------------------
    var buttonPlusQuantity = item.getElementsByClassName('plus-cart')[0];
    buttonPlusQuantity.addEventListener('click', plusQuantity);

    // -----------------Minus button ----------------------
    var buttonMinusQuanty = item.getElementsByClassName('minus-cart')[0];
    buttonMinusQuanty.addEventListener('click', minusQuantity);
}



function showCart(){
    cartVisible = true;
    var cart = document.getElementsByClassName('cart')[0];
    cart.style.marginRight = '0';
    cart.style.opacity = '1';          
    var items = document.getElementsByClassName('listproduct')[0];
    items.style.width = '60%'
    
}

function hideCart() {
    var cartItems = document.getElementsByClassName('cart-items')[0];
    if (cartItems.childElementCount == 0) {
        var cart = document.getElementsByClassName('cart')[0];
        cart.style.marginRight = '-100%';  
        cart.style.opacity = '0'; 
        cartVisible = false;

        var items = document.getElementsByClassName('listproduct')[0];
        items.style.width = '100%';  
    }
}
