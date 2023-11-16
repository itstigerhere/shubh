// products 
const pName = [
    'Optimum Nutrition (ON) Gold Standard 100% Whey Protein',
    'MuscleBlaze Biozyme Performance Whey Protein - Rich',
    'Isopure Low Carb Whey Protein Isolate Powder - Dutch Chocolate..',
    'Fast & Up 100% Whey Isolate & Hydrolysate Whey',
    'Wellman Health Supplements UK\'s No1 Multivitamin( With..',
    'MuscleTech Pocket-Friendly Combo',
    'foodstrong Daily Protein - Real Almond Chocolate',
    'Optimum Nutrition (ON) Gold Standard 100% Whey Protein',
    'Optimum Nutrition (ON) Mictronized Creatine Powder..',
    'MuscleBlaze Biozyme Performance Whey Protein - Rich..'
]

const mrp = [3899 , 4194 , 5099 , 4389 , 438 , 3798, 2200 , 8099 , 1399 ,2299]

const price = [3099 , 2299 , 4334 , 3849 , 307 , 2299 , 1562 , 6884 , 999 , 1699]

const discount = [21 , 45 , 14 , 12 , 30 , 39 , 29 , 15 , 29 , 26]

let dis , amount , best , featured; 

for(let i = 0;i< 10;i++){
    if (discount[i] == 0){
        dis = '';
        amount = '';
    } else {
        dis = discount[i] + '% Off';
        amount = '₹' + mrp[i];
    }

    if (i >= 7){
        featured = '';
    } else {
        featured = 'FEATURED';
    }

    if (i == 1 || i == 3 || i == 5){
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
        <img class="productimg" src="../images/health/h' + (i+1) + '.avif">\
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