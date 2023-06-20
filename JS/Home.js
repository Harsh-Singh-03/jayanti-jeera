const DrinksElement = document.querySelector("#productSliderDrinks");
const NamkeenElement = document.querySelector("#productSliderNamkeen");
const SnacksElement = document.querySelector("#productSliderSnacks");
const DrinksArr = [{img:"./Files/Drinks/hov-drinks1.png", name: "Lemonta"}, {img:"./Files/Drinks/hov-drinks2.png", name: "Jaljeera"}, {img:"./Files/Drinks/hov-drinks3.png", name: "App liz"}, {img:"./Files/Drinks/hov-drinks4.png", name: "Banta jeera"}]
const NamkeenArr = [{img:"./Files/Namkeen/namkeen1.png", name: "Aalu Bhujia"}, {img:"./Files/Namkeen/namkeen2.png", name: "Bhujia Sev"}, {img:"./Files/Namkeen/namkeen3.png", name: "Bhujia"}, {img:"./Files/Namkeen/namkeen4.png", name: "Chana Dal"}]
const SnacksArr = [{img:"./Files/Snacks/hov-popcorn1.png", name: "Popcorn (Tomato)"}, {img:"./Files/Snacks/hov-popcorn2.png", name: "Popcorn (Pizza)"}, {img:"./Files/Snacks/hov-popcorn3.png", name: "Popcorn (Better Salted)"}, {img:"./Files/Snacks/hov-popcorn4.png", name: "Popcorn (Salted)"}]

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
