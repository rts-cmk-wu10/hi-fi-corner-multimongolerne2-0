// (function API() {
    fetch(`http://localhost:3000/products`)

        .then(function (response) {
            if (response.status === 200) {
                return response.json()
            } else {
                document.body.innerText += "ups, noget gik galt. Prøv igen senere"
            }
        })

        // .then(function(categorieName) {
        //     const CATEGORY_HEADER = document.querySelector(".cd__afspillere")
        //     const CATEGORY_NAME = document.querySelector(".categories")
            
        //     CATEGORY_HEADER.addEventListener("click", () => CATEGORY_NAME.classList.toggle('hidden') )
            
        //     CATEGORY_NAME.innerHTML += `
        //     <li class="categoryName__List">
        //         <a href"#">${categorieName[1].name}</a>
        //     </li>
        //     <li class="categoryName__List">
        //         <a href"#">${categorieName[2].name}</a>
        //     </li>
        //     <li class="categoryName__List">
        //         <a href"#">${categorieName[3].name}</a>
        //     </li>
        //     <li class="categoryName__List">
        //         <a href"#">${categorieName[4].name}</a>
        //     </li>
        //     `
        // })

        .then(function (data) {
            console.log(data)
            data.forEach(function (product) {
                const BRANDNAMES_UL = document.querySelector(".brandNames_ul")
                BRANDNAMES_UL.innerHTML += `
        <li class="brandName__list">
            <a href="http://127.0.0.1:5501/product-view.html?name=${product.name}">${product.name}</a>
        </li>
        `
            })
        })
// })