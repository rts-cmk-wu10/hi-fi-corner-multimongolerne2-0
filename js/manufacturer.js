fetch(`http://localhost:3000/products`)

        .then(function (response) {
            if (response.status === 200) {
                return response.json()
            } else {
                document.body.innerText += "ups, noget gik galt. Prøv igen senere"
            }
        })

        .then(function(data) {
            
            // finder producentens navne og sorterer dem
            const MANUFACTURER_LIST = new Set(data.map(item => item.manufacturer))
            // laver et object
            const MANUFACTURER_UL_LIST = {}

            // looper igen
            MANUFACTURER_LIST.forEach(function(manufacturerName) {
                const LI = document.createElement('li')
                LI.classList.add('manufacturerName__list')

                const A_TAG = document.querySelector(".manufacturerName__list")
                LI.innerHTML = manufacturerName

                MANUFACTURER_UL_LIST[manufacturerName] = LI

                const MANUFACTURER_NAME_SECTION = document.querySelector(".manufacturerName__list")
                MANUFACTURER_NAME_SECTION.appendChild(LI)
            })

        })

            // // finder producentens navne og sorterer dem
            // const MANUFACTURER_LIST = new Set(data.map(item => item.manufacturer))
            // // laver et object
            // const toAppend = []
            // data.forEach(product => {
            //     if (!toAppend.includes(product.manufacturer)) {
            //         console.log('in');
            //         toAppend.push(product.manufacturer)
            //     }
            // })

            // console.log(toAppend);
        
        
                    // const MANUFACTURER = new Set(data.map(item => item.manufacturer))
                    // const MANUFACTURER_LIST = document.querySelector(".manufacturer__list")
                    // const MANUFACTURER_UL = document.querySelector(".manufacturer__name")
        
                    // const UL = document.createElement('ul')
                    // UL.classList.add('manufacturer__name')
        
                    // MANUFACTURER_LIST.appendChild(UL)
        
                    // MANUFACTURER.forEach(function(manufacturerName) {
                    //     MANUFACTURER_UL.innerHTML += `
                    //     <li><a href="#">${manufacturerName}</a></li>
                    //     `
                    // })
                    
        // const MANUFACTURER = new Set(producer.map(name => name.manufcaturer))
        // const MANUFACTURER_CONTAINER = document.querySelector(".manufacturer__section")

        // MANUFACTURER.forEach(function(manufacturerName) {
        //     MANUFACTURER_CONTAINER.innerHTML += `
        //         <a href="#">${manufacturerName}</a>
        //     `
        // })