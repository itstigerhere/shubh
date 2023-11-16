// products 
const pName = [
    'Nykaa SKINRX Ultra Matte Dry Touch Sunscreen SPF 50 PA +++..',
    'Minimalist 2% Salicylic Acid Face Serum For Blackheads & White ..',
    'Cetaphil Gentle Skin Cleanser',
    'Neutrogena UltraSheer Dry Touch Sunblock SPF 50+ ..',
    'MCaffeine D-Tan Coffee Face Wash for a Fresh & Glowing Skin',
    'Garnier Men Turbo Bright Anti-Pollution Double Action Face W..',
    'Nykaa Natural Tea Tree & Neem Purifying & Hydration Gel',
    'Mamaearth Ubtan Face Wash With Turmeric & Saffron For Tan',
    'Minimalist SPF 50 PA ++++ Sunscreen With Multi-Vitamin',
    'The Ordinary Niacinamide 10% + Zinc 1%'
]

const mrp = [780 , 549 , 333 , 675 , 349 , 325, 349 , 259 , 399 , 550]

const price = [702 , 522 , 293 , 549 , 299 , 325 , 227 , 227 , 379 , 550]

const discount = [10 , 5 , 12 , 19 , 14 , 0 , 35 , 12 , 5 , 0]

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
        <img class="productimg" src="../images/skin/s' + (i+1) + '.avif">\
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