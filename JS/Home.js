const DrinksElement = document.querySelector("#productSliderDrinks");
const NamkeenElement = document.querySelector("#productSliderNamkeen");
const SnacksElement = document.querySelector("#productSliderSnacks");
const DrinksArr = [{img:"/Files/Drinks1.png", name: "Lemonta"}, {img:"/Files/Drinks2.png", name: "Jaljeera"}, {img:"/Files/Drinks3.png", name: "App liz"}, {img:"/Files/Drinks4.png", name: "Banta jeera"}]
const NamkeenArr = [{img:"/Files/namkeen1.png", name: "Aalu Bhujia"}, {img:"/Files/namkeen2.png", name: "Bhujia Sev"}, {img:"/Files/namkeen3.png", name: "Bhujia"}, {img:"/Files/namkeen4.png", name: "Chana Dal"}]
const SnacksArr = [{img:"/Files/snacks1.png", name: "Popcorn (Tomato)"}, {img:"/Files/snacks2.png", name: "Popcorn (Pizza)"}, {img:"/Files/snacks3.png", name: "Popcorn (Better Salted)"}, {img:"/Files/snacks4.png", name: "Popcorn (Salted)"}]

DrinksArr.forEach(element => {
    DrinksElement.innerHTML += `
    <div class="productImg">
     <img src=${element.img} alt="">
     <span>${element.name}</span>
   </div>`
});
NamkeenArr.forEach(element => {
    NamkeenElement.innerHTML += `
    <div class="productImg">
    <img src=${element.img} alt="">
    <span>${element.name}</span>
   </div>`
});
SnacksArr.forEach(element => {
    SnacksElement.innerHTML += `
    <div class="productImg">
    <img src=${element.img} alt="">
    <span>${element.name}</span>
   </div>`
});
