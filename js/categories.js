fetch(`http://localhost:3000/products`)

        .then(function (response) {
            if (response.status === 200) {
                return response.json()
            } else {
                document.body.innerText += "ups, noget gik galt. Prøv igen senere"
            }
        })

        .then(function(data) {
            
            const CATEGORY_LIST = new Set(data.map(item => item.category))
            const UL_LIST = {}

            /* CATEGORY_LIST.forEach(category => { */
            CATEGORY_LIST.forEach(function(categoryName) {
               /*  PRODUCT_CATEGORIES.innerHTML += `
                    <a href="#">${categoryName}</a>
                    <ul class="product__list"></ul>
                ` */
                const BUTTON = document.createElement('button')
                const UL = document.createElement('ul')
                UL.classList.add('product_list', 'hidden')
            

                BUTTON.innerHTML = categoryName

                BUTTON.addEventListener('click', () => UL.classList.toggle("hidden"))

                UL_LIST[categoryName] = UL

                document.body.appendChild(BUTTON)
                document.body.appendChild(UL)
            })
            
            data.forEach(function(product) {
                UL_LIST[product.category].innerHTML += `
                <li>
                    <a href="#">${product.name}</a>
                </li>
            `
            })
            

                // const CATEGORYLIST_ITEM = document.querySelector(".categoryList__item")
                // const CATEGORY_LIST = document.querySelector(".category__list")
                // CATEGORYLIST_ITEM.innerHTML += `
                // <li class="category__list">${category.name}</li>
                // `
                // CATEGORYLIST_ITEM.append(CATEGORY_LIST)
        })
        // const CATEGORY_CD_AFSPILLERE = document.querySelector(".cd__afspillere")
        // const CATEGORY_DVD_AFSPILLERE = document.querySelector(".dvd__afspillere")
        // const EFFEKTFORSTAERKERE = document.querySelector(".effektforstaerkere")

        // const CATEGORY_NAME1 = document.querySelector(".categories__cd")
        // const CATEGORY_NAME2 = document.querySelector(".categories__dvd")
        // const CATEGORY_NAME3 = document.querySelector(".categories__effekt")
        
        // CATEGORY_CD_AFSPILLERE.addEventListener("click", () => CATEGORY_NAME1.classList.toggle('hidden') )
        // CATEGORY_DVD_AFSPILLERE.addEventListener("click", () => CATEGORY_NAME2.classList.toggle('hidden') )
        // EFFEKTFORSTAERKERE.addEventListener("click", () => CATEGORY_NAME3.classList.toggle('hidden') )
        
        // CATEGORY_NAME1.innerHTML = `
        // <li class="categoryName__List1">
        //     <a href"#">${categorieName[1].name}</a>
        // </li>
        // <li class="categoryName__List1">
        //     <a href"#">${categorieName[2].name}</a>
        // </li>
        // <li class="categoryName__List1">
        //     <a href"#">${categorieName[3].name}</a>
        // </li>
        // <li class="categoryName__List1">
        //     <a href"#">${categorieName[4].name}</a>
        // </li>
        // `
        
        // CATEGORY_NAME2.innerHTML = `
        // <li class="categoryName__List2">
        //     <a href"#">${categorieName[5].name}</a>
        // </li>
        // <li class="categoryName__List2">
        //     <a href"#">${categorieName[6].name}</a>
        // </li>
        // <li class="categoryName__List2">
        //     <a href"#">${categorieName[7].name}</a>
        // </li>
        // <li class="categoryName__List2">
        //     <a href"#">${categorieName[8].name}</a>
        // </li>
        // `
        
        // CATEGORY_NAME3.innerHTML = `
        // <li class="categoryName__List3">
        //     <a href"#">${categorieName[9].name}</a>
        // </li>
        // <li class="categoryName__List3">
        //     <a href"#">${categorieName[10].name}</a>
        // </li>
        // <li class="categoryName__List3">
        //     <a href"#">${categorieName[11].name}</a>
        // </li>
        // <li class="categoryName__List3">
        //     <a href"#">${categorieName[12].name}</a>
        // </li>
        // `