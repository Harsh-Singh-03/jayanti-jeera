let productList = document.querySelector("#product-list")

const loadData = async (path) => {
    try {
        const response = await fetch(path);
        const data = await response.json();
        data.forEach((element, index) => {
            productList.innerHTML += `
            <div class="product" key=${index}>
                <div class="product-image">
                    <img src=${element.image} alt="product">
                </div>
                <div class="details">
                    <h4>${element.title}</h4>
                    <p>${element.description}} </p>
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
