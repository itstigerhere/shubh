// products 
const footName = [
    'Puma Mercedes AMG Petronas Motorsports F1 Drift CAt Decima',
    'U.S. POLO ASSN. Reggie Off White Sneakers',
    'Campus Camp Leo Off White Mens Running Shoes',
    'Birkenstock Arizona Essentials Tie & Dye Multi Narrow Width..',
    'Birkenstock Atacama Men Futura Geometric Camo Core Regular',
    'Puma Foam Stride Men Black Running Shoes',
    'Puma BMW  M Motorsport BAO Kart PS Kids Black Casual Shoes',
    'Alberto Torresi Solid Brown Buckled Loafers',
    'Alberto Torresi Black Alligator Tasseled Mules',
    'Campus Dapper Off White Running Shoes'
]

const mrp = [4499 , 4299 , 1499 , 4990 , 9990 , 4499 , 4999, 5995 , 5299 , 1499]

const price = [2249 , 4299 , 929 , 4491 , 9990  , 2249 , 2499 , 1499 , 2491 , 999]

const discount = [50 , 0 , 38 ,10 , 0 , 50 , 50 , 75 , 53 , 33]

let dis , amount , best , featured , flink; 

for(let i = 0;i< 10;i++){
    if (discount[i] == 0){
        dis = '';
        amount = '';
    } else {
        dis = discount[i] + '% Off';
        amount = '₹' + mrp[i];
    }

    if (i == 9){
        featured = '';
    } else {
        featured = 'FEATURED';
    }

    if (i%3 == 0 & i != 3){
        best = 'BESTSELLER';
    } else {
        best = '';
    }

    if (i < 3){
        flink = '../footwear/' + (i+1) + '.html';
    } else {
        flink = '#';
    }

    document.getElementById('productGrid').innerHTML += 
    '<a href="' + flink + '"><div class="productcards">\
        <div class="features">\
            <div class="featured">' + featured + '</div>\
            <div class="bestseller">' + best + '</div>\
        </div>\
        <img class="productimg" src="../images/footwear/f' + (i+1) + '.avif">\
        <div class="productName center">' + footName[i] + '</div>\
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