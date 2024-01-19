var arrPhuKienChoMeo =[
    { 
        nameProduce:'King Hat for noble cats',
        priceNew:450000,
        priceOld:700000,
        image:'../../assets/images/Hat/5.jpg',
        brand :'Nutrience',
        category : '',
        link :'../../detailpage/assets/product-3.html',
        sold :72,
        soLuong:1
        
    },
    { 
        nameProduce:'The softest rabbit-shaped bed for cats',
        priceNew:600000,
        priceOld:700000,
        image:'../../assets/images/Toy/toy-1.jpg',
        brand :'Minino ',
        category : '',
        link :'../../detailpage/assets/product-7.html',
        sold :88,
        soLuong:1
    },  
    { 
        nameProduce:'Catstages Tower Of Tracks Interactive',
        priceNew:650000,
        priceOld:750000,
        image:'../../assets/images/product-category/product-5.jpg',
        brand :'Minino ',
        category : '',
        link :'',
        sold :32,
        soLuong:1
    },
    { 
        nameProduce:'Chery Hat For Cat',
        priceNew:56000,
        priceOld:700000,
        image:'../../assets/images/Hat/6.jpg',
        brand :'Minino ',
        category : '',
        link :'../../detailpage/assets/product-6.html',
        sold :88,
        soLuong:1
    }
  
   
] 
localStorage.setItem("name","viet")

localStorage.setItem("phukienChoMeo", JSON.stringify(arrPhuKienChoMeo));
