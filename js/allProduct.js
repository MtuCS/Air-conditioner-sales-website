    var items = [];
    document.querySelectorAll(".slider-product-gallery-one-content-item").forEach(function(itemElement) {
        var item = {
            imageSrc: itemElement.querySelector("img").src,
            description: itemElement.querySelector(".slider-product-gallery-one-content-item-text").textContent.trim()
        };
        items.push(item);
    });
    var itemsJSON = JSON.stringify(items);
    localStorage.setItem("sliderItems", itemsJSON);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const imageSrc = urlParams.get('imageSrc');
    const description = urlParams.get('description');
    const descriptionParts = description.split('\n').filter(part => part.trim() !== ''); 
    const productName = descriptionParts[1].trim();
    let productPrice = ''; 
    for (let i = 0; i < descriptionParts.length; i++) {
        const part = descriptionParts[i].trim();
        if (part.includes('₫') && !isNaN(part.replace('₫', '').trim().replace('.', ''))) {
            productPrice = part;
            break; 
        }
    }
    document.querySelector('.col h3').textContent = productName; 
    document.querySelector('.col-6 img').src = imageSrc; 
    document.querySelector('.box-price-present').textContent = productPrice; 