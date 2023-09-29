const URL = new URLSearchParams(window.location.search)

// console.log(URL.get("name"))

const PRODUCT_DESCRIPTION = document.querySelector(".description")
const PRODUCT_SMALL_DETAILS = document.querySelector(".small__details")
const PRODUCT_INFORMATION = document.querySelector(".information")
const PRODUCT_DETAILS = document.querySelector(".details")

fetch(`http://localhost:3000/products?name=${URL.get("name","manufacturer","product-description","price","color")}`)

    .then(function (response) {
        if (response.status === 200) {
            return response.json()
        } else {
            document.body.innerText += "ups, noget gik galt. Prøv igen senere"
        }
    })

    .then(function (productName) {
        PRODUCT_DESCRIPTION.innerHTML = `
        <img src="${productName[0].image}">
        <h1 class="product__header">${productName[0].name}</h1>
        <span class="product__price">${productName[0].price}</span>
        <p class="product__description">${productName[0]["product-description"]}</p>
        `
        PRODUCT_SMALL_DETAILS.innerHTML = `
        <span class="product__color">${productName[0].color}</span>
        `
        PRODUCT_INFORMATION.innerHTML = `
        <h4 class="product__header">ADDITIONAL INFORMATION</h4>
        <span class="product__color">${productName[0]["additional-information"]}</span>
        `
        PRODUCT_DETAILS.innerHTML = `
        <h4 class="product__header">DETAILS</h4>
        <span class="product__color">${productName[0].details}</span>
        `

        console.log(productName[0].image);
    })