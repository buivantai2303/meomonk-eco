var arrDog =[

    { 
        nameProduce:'Smartheart premium granular food',
        priceNew:30000,
        priceOld:60000,
        image:'../../assets/images/product-category/product-Smartheart.png',
        brand :'Smartheart',
        category : 'Dog',
        link :'',
        sold :424
    }  ,
    { 
        nameProduce:'Zenith soft dog food',
        priceNew:300000,
        priceOld:400000,
        image:'../../assets/images/product-category/product-Pedigree.png',      
        brand :'Zenith',
        category : 'Dog',
        link :'',
        sold :88
    },
    { 
        nameProduce:'Calcium Phosphorus - supports treatment for pets',
        priceNew:276000,
        priceOld:552000,
        image:'../../assets/images/product-category/product-phosphous.png',
        brand :'Royal Canin',
        category : 'Dog',
        link :'',
        sold :24
    },
    { 
        nameProduce:'Pedigree premium dog food',
        priceNew:115000,
        priceOld:200000,
        image:'../../assets/images/product-category/product-Zenith.png',
        brand :'Pedigree',
        category : 'Dog',
        link :'',
        sold :14
    },

    { 
        nameProduce:'Freshtrino Doca Dog food for all ages',
        priceNew:130000,
        priceOld:180000,
        image:'../../assets/images/product-category/product-Freshtrino.png',
        brand :'Doca',
        category : 'Dog',
        link :'',
        sold :34
    },
    { 
        nameProduce:'Dr.Kyan Predogen dog milk powder',
        priceNew:165000,
        priceOld:190000,
        image:'../../assets/images/product-category/product-Dr.Kyan.png',
        brand :'Zenith',
        category : 'Dog',
        link :'',
        sold :88
    },   
    { 
        nameProduce:'Ferplast Goodbite Natural Chicken Flavor Bones',
        priceNew:63000,
        priceOld:90000,
        image:'../../assets/images/product-category/product-Ferplast.png',
        brand :'Pedigree',
        category : 'Dog',
        link :'',
        sold :43
    },   
    { 
        nameProduce:'Pedigree premium dog food',
        priceNew:115000,
        priceOld:200000,
        image:'../../assets/images/product-category/product-Zenith.png',
        brand :'Pedigree',
        category : 'Dog',
        link :'',
        sold :143
    },   
    { 
        nameProduce:'Smart Heart Gold Dry Dog Food',
        priceNew:95000,
        priceOld:150000,
        image:'../../assets/images/product-category/product-Smart.png',
        brand :'Smartheart',
        category : 'Dog',
        link :'',
        sold :93
    }
]    

function formatCurrency(number) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}


function hienThiProducts(thuonghieuchon_arr = [] , giaban_arr = []) {
    var list = document.getElementById("product");
    list.innerHTML = '';

    for (var i = 0; i < arrDog.length; i++) {
        var ten = arrDog[i].nameProduce;
        var giaMoi = arrDog[i].priceNew;
        var giaCu = arrDog[i].priceOld;
        var hinh = arrDog[i].image;
        var productBrand = arrDog[i].brand;
        var sold = arrDog[i].sold;

        if (thuonghieuchon_arr.length > 0 && !thuonghieuchon_arr.includes(productBrand)) {
            continue;
        }

        if(giaban_arr.length > 0){ 
     
            if(giaMoi < 100000 && giaban_arr.includes('1') == false) continue
            if(giaMoi < 300000 && giaMoi > 100000 && giaban_arr.includes('2') == false) continue
            if(giaMoi < 500000 && giaMoi > 300000 && giaban_arr.includes('3') == false) continue
        }
      

        console.log(ten , giaMoi)
        list.innerHTML += `
            <div class="grid__column_2-4">     
                <a class="product-item" data-price="25" href="https://www.facebook.com/profile.php?id=100013256856980">                            
                    <div class="product-item__img" style="background-image:url(${hinh});"></div>
                    <h4 class="product-item__name">${ten}</h4>
                    <div class="product-item__price">
                        <span class="product-item__price--old">${formatCurrency(giaCu)}</span>
                        <span class="product-item__price--new">${formatCurrency(giaMoi)}</span>
                    </div>   
                    <div class="product-item-active">
                        <!-- <div class="product-item-active__like"><i class="fa-regular fa-heart"></i></div> -->
                        <div class="product-item-active__start"><i class="fa-sharp fa-regular fa-star"></i><i class="fa-sharp fa-regular fa-star"></i><i class="fa-sharp fa-regular fa-star"></i><i class="fa-sharp fa-regular fa-star"></i><i class="fa-sharp fa-regular fa-star"></i></div>
                        <div class="product-item-active__info">${sold} was sold</div>
                    </div>             
                </a>
            </div>`;
    }
}


function choosePorduct() {
    var arr1 = document.getElementsByClassName("ThuongHieu");
    var thuongHieuArray = [];

    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i].checked == true) {
            thuongHieuArray.push(arr1[i].value);
        }
    }
    // choose Price
    var arr2 = document.getElementsByClassName("giaban");
    var giaban_arr =[];
    for(i = 0; i<arr2.length ; i++){
        if(arr2[i].checked == true) giaban_arr.push(arr2[i].value);
        
    }
    console.log(thuongHieuArray);
    hienThiProducts(thuongHieuArray,giaban_arr );
}

// **************************************************************************************

var arrCat =[
    { 
        nameProduce:'Whiskas cat food',
        priceNew:300000,
        priceOld:400000,
        image: '../../assets/images/whiskas.png',
        brand :'Whiskat',
        category : 'Cat',
        link :'',
        sold :72
    },
    { 
        nameProduce:'Nutrience Original Healthy cat food',
        priceNew:130000,
        priceOld:260000,
        image:'../../assets/images/nutrience.png',
        brand :'Nutrience ',
        category : '',
        link :'',
        sold :72
    },
    { 
        nameProduce:'MININO dry cat food',
        priceNew:90000,
        priceOld:180000,
        image:'../../assets/images/minino.png',
        brand :'Minino ',
        category : '',
        link :'',
        sold :72
    },
    { 
        nameProduce:'Royal Canin Hairball Care cat food',
        priceNew:459000,
        priceOld:500000,
        image:'../../assets/images/royalcain.png',
        brand :'Minino ',
        category : '',
        link :'',
        sold :72
    }
]

function showCat(thuonghieuchon_arr = []) {
    var list = document.getElementById("product");
    list.innerHTML = '';

    for (var i = 0; i < arrCat.length; i++) {
        var ten = arrCat[i].nameProduce;
        var giaMoi = arrCat[i].priceNew;
        var giaCu = arrCat[i].priceOld;
        var hinh = arrCat[i].image;
        var productBrand = arrCat[i].brand;
        var sold = arrCat[i].sold;

        // Check if thuonghieuchon_arr is not empty and the current product's brand is not in the selected brands
        if (thuonghieuchon_arr.length > 0 && !thuonghieuchon_arr.includes(productBrand)) {
            continue; // Skip to the next iteration if the brand is not selected
        }

        list.innerHTML += `
            <div class="grid__column_2-4">     
                <a class="product-item" data-price="25" href="https://www.facebook.com/profile.php?id=100013256856980">                            
                    <div class="product-item__img" style="background-image:url(${hinh});"></div>
                    <h4 class="product-item__name">${ten}</h4>
                    <div class="product-item__price">
                        <span class="product-item__price--old">${formatCurrency(giaCu)}</span>
                        <span class="product-item__price--new">${formatCurrency(giaMoi)}</span>
                    </div>   
                    <div class="product-item-active">
                        <!-- <div class="product-item-active__like"><i class="fa-regular fa-heart"></i></div> -->
                        <div class="product-item-active__start"><i class="fa-sharp fa-regular fa-star"></i><i class="fa-sharp fa-regular fa-star"></i><i class="fa-sharp fa-regular fa-star"></i><i class="fa-sharp fa-regular fa-star"></i><i class="fa-sharp fa-regular fa-star"></i></div>
                        <div class="product-item-active__info">${sold} was sold</div>
                    </div>             
                </a>
            </div>`;
    }
}


function chooseshowCat() {
    var arr1 = document.getElementsByClassName("ThuongHieu");
    var thuongHieuArray = [];

    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i].checked == true) {
            thuongHieuArray.push(arr1[i].value);
        }
    }
    // choose Price
    var arr2 = document.getElementsByClassName("giaban");
    var giaban_arr =[];
    for(i = 0; i<arr2.length ; i++){
        if(arr2[i].checked == true) giaban_arr.push(arr2[i].value);

    }
    console.log(thuongHieuArray);
    showCat(thuongHieuArray);
}






//************************************************************************************* */
document.addEventListener("DOMContentLoaded", function() {
    hienThiProducts();
});



document.addEventListener("DOMContentLoaded", function() {
    var expandableItems = document.querySelectorAll('.expandable');

    expandableItems.forEach(function(item) {
      item.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var buttonLinks = document.querySelectorAll('.button-like-link');
    var buttonStatus = document.querySelector('.button-status');

    // Trigger click event for 'lienQuanBtn' after setting up event listeners
    document.getElementById('lienQuanBtn').click();

    buttonLinks.forEach(function(button) {
        button.addEventListener('click', function() {
            // Loại bỏ lớp 'active' khỏi tất cả các nút
            buttonLinks.forEach(function(btn) {
                btn.classList.remove('active');
            });

            // Thêm lớp 'active' cho nút được click
            this.classList.add('active');
        });
    });
});