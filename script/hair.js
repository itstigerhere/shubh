// products 
const pName = [
    'The Ordinary Multi-Peptide Serum For Hair Density',
    'Head & Shoulders Cool Menthol Anti-Dandruff Shampoo', 
    'HK VITALS by Health Kart Biotin Shampoo with Red Onion', 
    'Moroccanoil Treatment Oil for (All Hair Types)',
    "L'oréal Professionnel Density Advanced Scalp Advanced For",
    "Wild Stone Code Hair Wax For Men",
    'Mamaearth Onion Hair Oil with Onion & Redensyl for Hair Fall..',
    'WOW Skin Science Onion Anti Hair Fall Range',
    'Thriveco Hair Growth Serum 2.0 Enriched With Redensyl, Anaga ..',
    "L'oréal Professionnel Absolut Repair Shampoo For Dry And.."
]

const mrp = [2000 , 860 , 299 , 3870 , 745 , 450, 419 , 1597 , 1199 , 745]

const price = [2000 , 430 , 284 , 3870 , 745 , 369 , 377 , 878 , 683 , 645]

const discount = [0 , 50 , 5 , 0 , 0 , 18 , 10 , 45 , 43, 13]

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
        <img class="productimg" src="../images/hair/h' + (i+1) + '.avif">\
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

for(let i = 0 ;i< 6;i++){
    document.getElementById('hairSlideshow').innerHTML += 
    '<div class="carousel-item">\
        <img src="../images/slideshow/h' + (i+2) + '.avif" class="d-block w-100 slider" alt="..." />\
    </div>';
}