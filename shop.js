(function API() {
    fetch(`http://localhost:3000/products`)

        .then(function (response) {
            if (response.status === 200) {
                return response.json()
            } else {
                document.body.innerText += "ups, noget gik galt. Prøv igen senere"
            }
        })

        .then(function (data) {
            console.log(data)
            data.forEach(function (product) {
                const BRANDNAMES_UL = document.querySelector(".brandNames_ul")
                BRANDNAMES_UL.innerHTML += `
        <li class="brandName__list">
            <a href="http://127.0.0.1:5500/product-view.html?name=${product.name}">${product.name}</a>
        </li>
        `
            })
        })
})