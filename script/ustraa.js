// products 
const pName = [
    'Ustraa Beard Growth Oil Advanced',
    'Ustraa Cologne For Men Spray Base Camp',
    'Ustraa Hair Growth Vitalizer - Boost Hair Growth, Prevents H..',
    'Ustraa De-Tan Cream For Men',
    'Ustraa De-Tans Face Scrub For Men',
    'Ustraa Daily Use Hair & Scalp Nourishment Cream',
    'Ustraa Hair Serum Anti Dandruff For Men With Ginger & Tea Tree..',
    'Ustraa Scuba Cologne - Perfume For Men',
    'Ustraa Hair Fixing Spray - Strong Hold',
    'Ustraa Chrome - Lithium Powered Beard Trimmer'
]

const mrp = [699 , 899 , 699 , 250 , 350 , 225, 499 , 899 , 499 , 2899]

const price = [403 , 566 , 492 , 193 , 281 , 180 , 301 , 566 , 275 , 2319]

const discount = [42 , 37 , 30 , 23 , 20 , 20 , 40 , 37 , 45 , 20]

let dis , amount , best , featured; 

for(let i = 0;i< 10;i++){
    if (discount[i] == 0){
        dis = '';
        amount = '';
    } else {
        dis = discount[i] + '% Off';
        amount = '₹' + mrp[i];
    }

    if (i >= 8){
        featured = '';
    } else {
        featured = 'FEATURED';
    }

    if (i == 5 || i == 7 || i == 0){
        best = '';
    } else {
        best = 'BESTSELLER';
    }

    document.getElementById('productGrid').innerHTML += 
    '<a href="https://www.google.com" class="aremove"><div class="productcards">\
        <div class="features">\
            <div class="featured">' + featured + '</div>\
            <div class="bestseller">' + best + '</div>\
        </div>\
        <img class="productimg" src="../images/ustraa/u' + (i+1) + '.avif">\
        <div class="productName center">' + pName[i] + '</div>\
        <div class="price">\
            <div class="mrp">MRP : \
                <div class="cutprice">' + amount + '</div>\
            </div>\
            <div class="amount">₹' + price[i] + '</div>\
            <div class="discount">' + dis + '</div>\
        </div>\
        <div class="rating center">\
        </div>\
    </div></a>';
}