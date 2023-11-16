// products 
const pName = [
    'Minimalist SPF 50 PA ++++ Sunscreen With Multi-Vitamin..',
    'The Ordinary Niacinamide 10% + Zinc 1%',
    'Minimalist 2% Salicylic Acid + LHA Face Cleanser With Zinc For',
    'Optimum Nutrition (ON) Gold Standard 100% Whey Protein..',
    'Optimum Nutrition (ON) Gold Standard 100% Whey Protein..',
    'Cetaphil Gentle Skin Cleanser',
    'Minimalist 10% Niacinamide Face Serum With Matmarine + Zinc..',
    'Minimalist 10% Vitamin B5, Oil-Free Moisturizer With Zinc, C..',
    'Neutrogena UltraSheer Dry Touch Sunblock SPF 50+ For Men',
    'Tom Ford Ombre Leather Eau de Parfum'
]

const mrp = [399 , 550 , 299 , 3899 , 8099 , 333, 599 , 349 , 675 , 2500]

const price = [379 , 550 , 284 , 3099 , 6884 , 293 , 569 , 332 , 549 , 2500]

const discount = [5, 0 , 5, 21 , 15 , 12 , 5 , 5 , 19 , 0]

let dis , amount , best , featured; 

for(let i = 0;i< 10;i++){
    if (discount[i] == 0){
        dis = '';
        amount = '';
    } else {
        dis = discount[i] + '% Off';
        amount = '₹' + mrp[i];
    }

    featured = '';
    
    if (i >= 8){
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
        <img class="productimg" src="../images/nykaa/n' + (i+1) + '.avif">\
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