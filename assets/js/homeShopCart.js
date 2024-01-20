document.addEventListener("DOMContentLoaded", function () {

   
    const tableBody = document.querySelector(".shop_table tbody");
    var cartList = JSON.parse(localStorage.getItem('cartPoPup'));
    var totalElement = document.querySelector('.font-semi-bold.total');
    console.log(totalElement);
    var tongTien=0;
        for (var i = 0; i < cartList.length; i++) {
        // Call the function to append a new row with the given product
        // appendTableRow(cartList[i]);
        addCartItem(cartList[i])    ; 
        tongTien += cartList[i].soLuong * cartList[i].priceNew;
    };
    console.log = tongTien;
    totalElement.innerHTML ="";
    totalElement.innerHTML =tongTien + "đ";


    function addCartItem(product) {

    var cartList = document.querySelector('.cart-popup ul');


    var li = document.createElement('li');
    li.className = 'd-flex align-items-center position-relative';

    li.innerHTML = `
        <div class="p-img light-bg">
            <img src="${product.image}" alt="${product.nameProduce}" />
        </div>
        <div class="p-data">
            <h3 class="font-semi-bold">${product.nameProduce}</h3>
            <div class="price">
                <span class="theme-clr font-semi-bold">${product.soLuong}</span>
                <p class="theme-clr font-semi-bold">x $${product.priceNew}</p>
            </div>
        </div>
    `;

    // Append the new list item to the cart list
    cartList.appendChild(li);
}
}
);