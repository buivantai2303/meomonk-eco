document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const addButton = document.querySelector(".add"); 
    const titles =document.getElementsByClassName("title")

    var phukienChoMeo = JSON.parse(localStorage.getItem('phukienChoMeo'));
    // var phukienChoMeo =  JSON.parse(phukienChoMeo)
    var titlesText = titles[0].textContent;
    addButton.addEventListener("click", function () {
        for (var i = 0; i < phukienChoMeo.length; i++) {

            var phukienItem = phukienChoMeo[i];
            var title = phukienItem.nameProduce;
            console.log(titlesText)

            console.log(title)
            if(titlesText === title){
                if(isProductInCart(titlesText,cart)){
                    phukienItem.soluong +=1;
                    localStorage.setItem("cart", JSON.stringify(cart));  
                }else{
                    cart.push(phukienItem);
                    localStorage.setItem("cart", JSON.stringify(cart));   
                }
;
            }else{
                console.log('not find')
            }


            // console.log(phukienItem.nameProduce);

        }
 
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