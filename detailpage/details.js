// ------------------view image------------------
var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.list-image img')
var preBut = document.querySelector('.pre')
var nextBut = document.querySelector('.next')

var currentIndex = 0;
function updateImageByIndex(index){
    document.querySelectorAll('.list-image div').forEach(item=>{
        item.classList.remove('active')
    })
    currentIndex = index
    imgFeature.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active')

}



listImg.forEach((imgElement, index)=>{
    imgElement.addEventListener('click',e=>{
        imgFeature.style.opacity='0';
        

        setTimeout(()=>{
            updateImageByIndex(index)
            imgFeature.style.opacity='1';
        },400)
    })
})


preBut.addEventListener('click', e=>{
    if(currentIndex==0){
        currentIndex = listImg.length-1;
    }else{
        currentIndex--;
    }
    

    imgFeature.style.animation=''
    setTimeout(()=>{
        updateImageByIndex(currentIndex)
        imgFeature.style.animation='slideLeft 0.5s ease-in-out forwards'
    },100)
    

})

nextBut.addEventListener('click', e=>{
    if(currentIndex==listImg.length-1){
        currentIndex = 0
    }else{
        currentIndex++;
    }
    imgFeature.style.animation=''
    setTimeout(()=>{
        updateImageByIndex(currentIndex)
        imgFeature.style.animation='slideRight 0.5s ease-in-out forwards'
    },100)

})
updateImageByIndex(0)

// -------------------------pop up image ---------------------------
























// ------------------------------Select type button------------------------------------------------------------------------------
function changeColor(button) {
    // Loại bỏ lớp 'active' từ tất cả các nút
    var buttons = document.querySelectorAll('.product-type-btn');
    buttons.forEach(function (btn) {
        btn.classList.remove('active');
    });

    // Thêm lớp 'active' cho nút được nhấn
    button.classList.add('active');
}


//  -----------------------------quantity button-------------------------------------------------------------------------------------
function increaseQuantity() {
    var quantityInput = document.getElementById('quantity');
    quantityInput.stepUp(); 
}

function decreaseQuantity() {
    var quantityInput = document.getElementById('quantity');
    quantityInput.stepDown(); 
}



//-----------------popup--------------------------------------------------------------------------------------------------
document.querySelectorAll('.img-feature').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup').style.display = 'block';
        document.querySelector('.popup img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup span').onclick = () => {
    document.querySelector('.popup').style.display = 'none';
}

//-----------------------zoom imag----------------------------


const imageContainers = document.querySelectorAll('.image_rating_list_container .img_rating_detail img');

imageContainers.forEach(image => {
    image.addEventListener('click', function() {
        const imagePath = this.getAttribute('src');
        const parentContainer = this.closest('.comment_details');
        const zoomedImage = parentContainer.querySelector('.image_rating_zoom_detail img');
        const zoomedContainer = parentContainer.querySelector('.image_rating_zoom');
        
        if (zoomedImage) {
            if (zoomedContainer.style.display === 'block' && zoomedImage.getAttribute('src') === imagePath) {
                zoomedContainer.style.display = 'none';
            } else {
                zoomedImage.setAttribute('src', imagePath);
                zoomedContainer.style.display = 'block';
            }
        }
    });
});

// ---------------------------Logo-------------------------------------------------------------

// ---------------------------- share------------------------------

