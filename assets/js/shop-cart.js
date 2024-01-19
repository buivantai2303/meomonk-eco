document.addEventListener("DOMContentLoaded", function () {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const tableBody = document.querySelector(".shop_table tbody");
    var cartList = JSON.parse(localStorage.getItem('cart'));

        for (var i = 0; i < cartList.length; i++) {
        // Call the function to append a new row with the given product
        appendTableRow(cartList[i]);

    };


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
                    <bdi><span class="woocommerce-Price-currencySymbol">$</span>${product.priceNew}</bdi>
                    <del>$${product.priceOld}</del>
                </span>
            </td>
            <td class="product-quantity">
                <input type="number" class="input-text" min="0" />
            </td>
            <td class="product-subtotal">
                <span class="woocommerce-Price-amount">
                    <bdi><span class="woocommerce-Price-currencySymbol">$</span>${product.priceNew}</bdi>
                </span>
            </td>
        `;


        tableBody.appendChild(newRow);
    }
});