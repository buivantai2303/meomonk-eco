var arrAnimal =[

    { 
        nameProduce:'Aqueon Shrimp Pellest Fish Food',
        priceNew:110000,
        priceOld:260000,
        image:'../../assets/images/product-category/product-2.jpg',
        brand :'Nutrience',
        category : '',
        link :'',
        sold :72
    },
    { 
        nameProduce:'Wardley Shrimp Pellet',
        priceNew:90000,
        priceOld:180000,
        image:'../../assets/images/product-category/product-3.jpg',
        brand :'Minino ',
        category : '',
        link :'',
        sold :72
    }
  
   
] 


function formatCurrency(number) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}


function hienThiProducts(thuonghieuchon_arr = [] , giaban_arr = []) {
    var list = document.getElementById("product");
    list.innerHTML = '';

    for (var i = 0; i < arrAnimal.length; i++) {
        var ten = arrAnimal[i].nameProduce;
        var giaMoi = arrAnimal[i].priceNew;
        var giaCu = arrAnimal[i].priceOld;
        var hinh = arrAnimal[i].image;
        var productBrand = arrAnimal[i].brand;
        var sold = arrAnimal[i].sold;
        var link = arrAnimal[i].link;
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
                <a class="product-item" data-price="25" href="${link}">                            
                    <div class="product-item__img" style="background-image:url(${hinh});"></div>
                    <h4 class="product-item__name">${ten}</h4>
                    <div class="product-item__price">
                        <span class="product-item__price--old">${formatCurrency(giaCu)}</span>
                        <span class="product-item__price--new">${formatCurrency(giaMoi)}</span>
                    </div>   
            
                </a>
                <div class="product-item-active">
                <!-- <div class="product-item-active__like"><i class="fa-regular fa-heart"></i></div> -->
                <div class="product-item-active__start">
                <i class="fa fa-star check " onclick="toggleStar(this)"></i>
                <i class="fa fa-star check " onclick="toggleStar(this)"></i>
                <i class="fa-sharp fa-regular fa-star" onclick="toggleStar(this)"></i>
                <i class="fa-sharp fa-regular fa-star" onclick="toggleStar(this)"></i>
                <i class="fa-sharp fa-regular fa-star" onclick="toggleStar(this)"></i>
            </div>
                <div class="product-item-active__info">${sold} was sold</div>
            </div> 
            </div>`;
    }
}


function toggleStar(star) {
  
    if (star.classList.contains('fa-sharp')) {
        // Loại bỏ class 'fa-sharp' và thêm class 'fa'
        star.classList.remove('fa-sharp');
        star.classList.remove('fa-regular');
        star.classList.remove('fa-star');
        star.classList.add('fa');
        star.classList.add('fa-star');
        star.classList.add('check');
    } else {
        // Nếu không có class 'fa-sharp', thì thêm class 'fa-sharp' và loại bỏ class 'fa'
        star.classList.remove('fa');
        star.classList.remove('fa-star');
        star.classList.remove('check');
        star.classList.add('fa-sharp');
        star.classList.add('fa-regular');
        star.classList.add('fa-star');
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


function filterBrands() {
    var searchInput = document.querySelector('.brand-search_input');
    var brandListItems = document.querySelectorAll('.brand-item');

    var searchText = searchInput.value.toLowerCase();

    brandListItems.forEach(function (item) {
        // lay label ben trong brandListItems
        var label = item.querySelector('label');
        // lay noi dung text 
        var brandName = label.textContent.toLowerCase();

        // Kiểm tra xem brandName có chứa searchText không
        if (brandName.includes(searchText)) {
            // Hiển thị item nếu chứa searchText
            item.style.display = 'block';
        } else {
            // Ẩn item nếu không chứa searchText
            item.style.display = 'none';
        }
    });
}