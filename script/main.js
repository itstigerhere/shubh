const slides = document.getElementsByClassName('card');
for(let i = 0;i< slides.length;i++){
    slides[i].style.left = `${i * 100}%`;
}

let curSlide = 0;

function right(){
    document.getElementById('leftBtn').style.display = 'inline-block';
    curSlide+=2;
    for(let i = 0;i< slides.length;i++){
        slides[i].style.transform = `translateX(-${curSlide * 100}%)`;
    }

    if(curSlide +8 >= slides.length)
        document.getElementById('rightBtn').style.display = 'none';
    
}

function left(){
    document.getElementById('rightBtn').style.display = 'inline-block';
    curSlide-=2;
    for(let i = 0;i< slides.length;i++){
        slides[i].style.transform = `translateX(-${curSlide * 100}%)`;
    }

    if(curSlide <= 0)
        document.getElementById('leftBtn').style.display = 'none';
    
}






const arr = ["Grooming Store" , "Luxe Store" , "Fashion Store" , "Health & Nutrition" , "Perfumes & Deos" , "Footwear" , "Explore" , "Skin Care" , "Gadgets & Tech Store" , "Hair Care" , "Bath & Body" , "Shaving" , "Top wear" , "Bottom Wear" , "Watches" , "Activewear & Clothing" , "Fashion Accessories" , "Headphones" , "Fitness" , "Beard & Mooch Care"];



// Using images directly from nykaa

// const image = [
//     'e5f207a4-83a2-4d1e-91e2-7a0f8ad6a648.jpg',
//     'e15c2f87-ab97-4809-8d0e-4f6c84d0c20c.jpg',
// ]

// for(let i = 0;i < 8;i++){
//     document.getElementById("productContainer").innerHTML += 
//     '<div class="card">\
//     <img class="cardimg" src="https://images-static.nykaa.com/uploads/' + image[i%2] + '?tr=w-150,cm-pad_resize" alt="">\
//     <div align="center" class="cardtext">' + arr[i] + '</div>\
//     </div>'
// }


const link = ['main' , 'main', 'main', 'health' , 'perfume' , 'footwear' , 'main' , 'skin' , 'main' , 'hair']
let clink;

// Product slider
for(let i = 0;i < arr.length;i++){
    if (i > 9 || link[i] == 'main')
        clink = '#'
    else 
        clink = 'pages/' + link[i] + '.html';

    document.getElementById("productContainer").innerHTML += 
    '<a class="aremove" href="' + clink + '"><div class="card">\
    <img class="cardimg" src="images/cards/c' + (i+1) + '.avif" alt="">\
    <div align="center" class="cardtext">' + arr[i] + '</div>\
    </div><a>'
}



// Brands part added here
const textArr = [
    'Free Gift On ₹599+',
    'Buy 2 Get 10% OFF',
    'Buy 2, Get Extra 5% OFF',
    'Extra 5% Off On ₹999+',
    '#HairyMasculinity',
    'On Haircare Regimes',
    'On Bestsellers',
    'On Entire Range',
    'On Bestsellers',
    'Extra 10% OFF On ₹599',
    'On BodyCare',
    'The Best A Man Can Get',
    'On Bestselling Range',
    'On Bestsellers'
]

const disarr = [45 , 30 , 35 , 20 , 40 , 10 , 60 , 45 , 50 , 50 , 15 , 30 , 60];
let ml, mr , curlink;

// Brands
for (let i = 0;i < disarr.length;i++){

    ml = (i%5 == 0) ? "0" : "1.42em";
    mr = (i%5 == 4) ? "0" : "1.42em";

    if (i == 0)
        curlink = 'pages/ustraa.html';
    else 
        curlink = '#';


    document.getElementById('container').innerHTML += 
    '<a class="aremove" href="' + curlink + '"><div class="brandCard" \
    style="margin-left:' + ml + '; margin-right:' + mr + '">\
        <img src="images/brands/b' + (i+1) + '.avif" alt="" class="brandCardImg">\
        <div align="center" class="cardText">\
            <div class="cardTextUp">Up To ' + disarr[i] + ' % OFF</div>\
            <div class="cardTextDown">' + textArr[i] + '</div>\
        </div>\
    </div></a>'
}

