// document.addEventListener("DOMContentLoaded", function () {
//     const tableBody = document.querySelector(".shop_table tbody");
//     var cartList = JSON.parse(localStorage.getItem("cartPoPup"));
//     var totalElement = document.querySelector(".font-semi-bold.total");
//     console.log(totalElement);
//     var tongTien = 0;
//     for (var i = 0; i < cartList.length; i++) {
//         // Call the function to append a new row with the given product
//         // appendTableRow(cartList[i]);
//         addCartItem(cartList[i]);
//         tongTien += cartList[i].soLuong * cartList[i].priceNew;
//     }
//     console.log = tongTien;
//     totalElement.innerHTML = "";
//     totalElement.innerHTML = tongTien + "đ";

//     function addCartItem(product) {
//         var cartList = document.querySelector(".cart-popup ul");

//         var li = document.createElement("li");
//         li.className = "d-flex align-items-center position-relative";

//         li.innerHTML = `
//         <div class="p-img light-bg">
//             <img src="${product.image}" alt="${product.nameProduce}" />
//         </div>
//         <div class="p-data">
//             <h3 class="font-semi-bold">${product.nameProduce}</h3>
//             <div class="price">
//                 <span class="theme-clr font-semi-bold">${product.soLuong}</span>
//                 <p class="theme-clr font-semi-bold">x $${product.priceNew}</p>
//             </div>
//         </div>
//     `;

//         // Append the new list item to the cart list
//         cartList.appendChild(li);
//     }
// });



document.addEventListener("DOMContentLoaded", function () {

    var buttonLike = document.getElementsByClassName("buttonLike");
    const likeShop = JSON.parse(localStorage.getItem("likeShop")) || [];  

    var phukienChoMeo = JSON.parse(localStorage.getItem('phukienChoMeo'));

    for (var i = 0; i < buttonLike.length; i++) {
        var button = buttonLike[i];
        button.addEventListener("click", likeShopcar);
    }

    function likeShopcar(event) {
        var buttonClicked = event.target;
        var item = buttonClicked.closest(".showcase"); 
        var title = item.querySelector(".showcase-title").innerText;

        for (var i = 0; i < phukienChoMeo.length; i++) {
            var phukienItem = phukienChoMeo[i];
            var titlePhuKien = phukienItem.nameProduce;    

            if(titlePhuKien === title){
                if(isProductInCart(titlePhuKien,likeShop)){      

                    localStorage.setItem("likeShop", JSON.stringify(likeShop));  
                    console.log('exits');
                }else{
                    likeShop.push(phukienItem);
                    localStorage.setItem("likeShop", JSON.stringify(likeShop));   
                    console.log('find');
                }
;
            }else{

            }

        }

    }


    function isProductInCart(productName,cart) {
        for (var i = 0; i < cart.length; i++) {
            var item = cart[i];
            if (item.nameProduce === productName) {
                return true; 
            }
        }
        return false; 
    }
    

    var likeShopLisst = JSON.parse(localStorage.getItem('likeShop'));
    for (var i = 0; i < likeShopLisst.length; i++) {
        // Call the function to append a new row with the given product
        appendTableRow(likeShopLisst[i]);

    };

    function appendTableRow(product) {

        const newRow = document.createElement("tr");
        const tableBody = document.querySelector(".shop_table tbody");
       


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


function deleteRow(btn) {

    var row = btn.parentNode.parentNode.parentNode; // lay span lay td và tr
    
    row.parentNode.removeChild(row); //lay table roi remove tr
    // const cart = JSON.parse(localStorage.getItem("cart")) || [];  

      // Lấy giá trị của ô trong cùng một hàng
    var valueInColumn1 = row.cells[1].querySelector('a'); //cell tra ve mot collection cua tr
    var textContent = valueInColumn1.innerText;


    const likeShop = JSON.parse(localStorage.getItem("likeShop")) || [];  // tra ve mot mang chua object json 

    for (var i = 0; i < likeShop.length; i++) {
        var nameProduct =likeShop[i].nameProduce

        if(nameProduct === textContent){
            var index = findProductIndex(nameProduct, likeShop);
            likeShop.splice(index, 1);
            localStorage.setItem('likeShop',JSON.stringify(likeShop));
        }

    }
    
  }

  function findProductIndex(productTitle, cart) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].nameProduce === productTitle) {
            return i;
        }
    }
    return -1; // Product not found
}

function formatCurrency(number) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}
