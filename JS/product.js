let productList = document.querySelector("#product-list")
const showEffect = (e) =>{
    let parent = e.target
    let normalImg = parent.querySelector('.normal')
    let hoverImg = parent.querySelector('.onHover')
    normalImg.style.opacity = "0";
    hoverImg.style.opacity = "1";
    hoverImg.style.height = "100%";
}
const removeEffect = (e) =>{
    let parent = e.target
    let normalImg = parent.querySelector('.normal')
    let hoverImg = parent.querySelector('.onHover')
    hoverImg.style.height = "0px";
    hoverImg.style.opacity = "0";
    normalImg.style.opacity = "1";
}
const loadData = async (path) => {
    try {
        const response = await fetch(path);
        const data = await response.json();
        data.forEach((element, index) => {
            console.log(element.image)
            productList.innerHTML += `
            <div class="product" key=${index} onmouseenter="showEffect(event)" onmouseleave="removeEffect(event)">
                <div class="product-image">
                    <img class="normal" src='${element.image}' alt="product">
                    <img class="onHover" src='${element.hovImage}' alt="product" >
                </div>
                <div class="details">
                    <h4>${element.title}</h4>
                    <p>${element.description} </p>
                </div>
            </div>
            `
        });
        console.log("Success:", data);
    } catch (error) {
        console.error("Error:", error);
    }

}

document.addEventListener('DOMContentLoaded', loadData(productList.dataset.path))
