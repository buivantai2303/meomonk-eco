document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];  
    var phukienChoMeo = JSON.parse(localStorage.getItem('phukienChoMeo'));

    const cartPoPup = JSON.parse(localStorage.getItem("cartPoPup")) || [];
    var cartpopup = JSON.parse(localStorage.getItem('cartpopup'));

    const addButton = document.querySelector(".add"); 
    const titles =document.getElementsByClassName("title")

    var phukienChoMeo = JSON.parse(localStorage.getItem('phukienChoMeo'));

    var cartpopup = JSON.parse(localStorage.getItem('cartpopup'));
    // var phukienChoMeo =  JSON.parse(phukienChoMeo)

    var titlesText = titles[0].textContent;
    addButton.addEventListener("click", function () {

        // lay value so luong
        var quantityInput = document.getElementById("quantity");
        var currentValue = quantityInput.value;
        var integerValue = parseInt(currentValue);
        console.log( parseInt(currentValue))
        //


        for (var i = 0; i < phukienChoMeo.length; i++) {
            var phukienItem = phukienChoMeo[i];
            var title = phukienItem.nameProduce;           

            if(titlesText === title){
                if(isProductInCart(titlesText,cart)){      
                    var index = findProductIndex(titlesText, cart);
                    cart[index].soLuong +=parseInt(integerValue);
  
                    localStorage.setItem("cart", JSON.stringify(cart));  
                    
                }else{
                    phukienItem.soLuong += parseInt(integerValue)-1;
                    cart.push(phukienItem);
                    localStorage.setItem("cart", JSON.stringify(cart));   
                }
;
            }else{

            }


            // console.log(phukienItem.nameProduce);
            
        }
 

//cartPoPup

        for (var i = 0; i < cartpopup.length; i++) {

            var cartpopupItem = cartpopup[i];
            var title = cartpopupItem.nameProduce;


            if(titlesText === title){
                if(isProductInCart(titlesText,cartPoPup)){
                    var index = findProductIndex(titlesText, cartPoPup);

                    cartPoPup[index].soLuong +=1;

                    localStorage.setItem("cartPoPup", JSON.stringify(cartPoPup));  
                    
                }else{
                    cartPoPup.push(cartpopupItem);
                    localStorage.setItem("cartPoPup", JSON.stringify(cartPoPup));   
                }
;
            }else{
                console.log('not find')
            }


            // console.log(phukienItem.nameProduce);

        }
        alert('Add to cart successfully');
    });
    
});


function isProductInCart(productName,cart) {
    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        if (item.nameProduce === productName) {
            return true; 
        }
    }
    return false; 
}

function findProductIndex(productTitle, cart) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].nameProduce === productTitle) {
            return i;
        }
    }
    return -1; // Product not found
}

document.addEventListener("DOMContentLoaded", function () {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const tableBody = document.querySelector(".shop_table tbody");
    var cartList = JSON.parse(localStorage.getItem('cart'));
  
    var totalElement = document.querySelector('.woocommerce-Price-amount');
    var totalElement1 = document.querySelector('.woocommerce-Price-total');

    var tongTien = 0;
        for (var i = 0; i < cartList.length; i++) {
        // Call the function to append a new row with the given product
        appendTableRow(cartList[i]);
        console.log(cartList[i].soLuong * cartList[i].priceNew );
        tongTien += cartList[i].soLuong * cartList[i].priceNew;

    };

    
    totalElement.innerHTML ="";
    totalElement.innerHTML =formatCurrency(tongTien);

    totalElement1.innerHTML ="";
    totalElement1.innerHTML =formatCurrency(tongTien);

 
    // Function to append a new row to the table
    function appendTableRow(product) {

        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td class="product-remove">
                <a href="#"><i class="fa-solid fa-x"></i></a>
            </td>
            <td class="product-name">
                <img alt="img" src="${product.image}" />
                <div>
                    <span>Food Code:2324234</span>
                    <a href="${product.link}">${product.nameProduce}</a>
                </div>
            </td>
            <td class="product-price">
                <span class="woocommerce-Price-amount">
                    <bdi><span class="woocommerce-Price-currencySymbol"></span>${formatCurrency(product.priceNew)}</bdi>
                    <del>${formatCurrency(product.priceOld)}</del>
                </span>
            </td>
            <td class="product-quantity">
                <input type="number" class="input-text" min="0" value = ${product.soLuong} />
            </td>
            <td class="product-subtotal">
                <span class="woocommerce-Price-amount">
                    <bdi><span class="woocommerce-Price-currencySymbol"></span>${formatCurrency(product.priceNew *product.soLuong) }</bdi>
                </span>
            </td>            
            <td class="product-subtotal">
            <span class="woocommerce-Price-amount">
            <button class="deleted" type="button" onclick="deleteRow(this)">
   
            X
         </button>

            </span>
        </td> 
        `;


        tableBody.appendChild(newRow);
    }
});


function formatCurrency(number) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}

function deleteRow(btn) {

    var row = btn.parentNode.parentNode.parentNode; // lay span lay td và tr
    row.parentNode.removeChild(row); //lay table roi remove tr
    // const cart = JSON.parse(localStorage.getItem("cart")) || [];  

      // Lấy giá trị của ô trong cùng một hàng
    var valueInColumn1 = row.cells[1].querySelector('a'); //cell tra ve mot collection cua tr
    var textContent = valueInColumn1.innerText;


    const cart = JSON.parse(localStorage.getItem("cart")) || [];  // tra ve mot mang chua object json 
    console.log(cart)
    for (var i = 0; i < cart.length; i++) {
        var nameProduct =cart[i].nameProduce

        if(nameProduct === textContent){
            var index = findProductIndex(nameProduct, cart);
            cart.splice(index, 1);
            localStorage.setItem('cart',JSON.stringify(cart));
        }

    }


      
  }