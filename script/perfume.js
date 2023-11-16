// products 
const pName = [
    'Tom Ford Ombre Leather Eau de Parfum',
    'Fogg Scent Prestige Wood Extreme EDP',
    'Giorgio Armani Acqua Di Gio Eau De Toilette',
    'Yves Saint Laurent Y Eau De Parfum',
    'Bella Vita Luxury Ceo Man Luxury Perfume' ,
    'United Colors Of Benetton United Dreams Big For..',
    'Brut Original Deodrant Spray' ,
    'Jaguar Classic Black Eau De Toilette' ,
    'Tom Ford Ombre Leather Eau de Parfum',
    'Davidoff Cool Water All Over Body Spray'
]

const mrp = [9700 , 799 , 6200 , 6500 , 899 , 2300, 325 , 4100 , 2500 , 1600]

const price = [9700 , 599 , 5270 , 6500 , 674 , 1380 , 195 , 2255 , 2500 , 1600]

const discount = [0 , 25 , 15 , 0 , 25 , 40 , 40 , 45, 0 , 0]

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

    if (i in [,1,2,,4,,,,8,9]){
        best = 'BESTSELLER';
    } else {
        best = '';
    }

    document.getElementById('productGrid').innerHTML += 
    '<a href="https://www.google.com" class="aremove"><div class="productcards">\
        <div class="features">\
            <div class="featured">' + featured + '</div>\
            <div class="bestseller">' + best + '</div>\
        </div>\
        <img class="productimg" src="../images/perfume/p' + (i+1) + '.avif">\
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