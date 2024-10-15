

let bagItems;
onLoad();
function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnProductPage();
    displayBagIcon();
};

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}
function displayBagIcon() {
    let bagItemCountElement = document.querySelector('#cart_number');
    if (bagItems.length > 0) {
        // console.log('I am here');
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }

}


function displayItemsOnProductPage() {
    let itemsContainerElement = document.querySelector('#product_container');
    if (!itemsContainerElement) {
        return;
    }
    let innerHTML = '';
    items.forEach(item => {
    innerHTML += `
    <div class="swiper-slide box" >
                        <div class="img">
                            <img src="${item.Image}" alt="">
                        </div>
                        <div class="product-content">
                            <h3>${item.items_name}</h3>
                            <p>${item.description}</p>
                            <span class="span">₹${item.original_price}</span>
                            <div class="orderNow">
                                <button onclick="addToBag(${item.id})">Order Now </button>
                            </div>
                        </div>
    </div>`
    });
    itemsContainerElement.innerHTML = innerHTML;
    itemsContainerElement = document.querySelector('#product_container1');
    innerHTML = '';
    items.forEach(item => {
        innerHTML += `
    <div class="swiper-slide box" >
                        <div class="img">
                            <img src="${item.Image}" alt="">
                        </div>
                        <div class="product-content">
                            <h3>${item.items_name}</h3>
                            <p>${item.description}</p>
                            <span class="span">₹${item.original_price}</span>
                            <div class="orderNow">
                                <button onclick="addToBag(${item.id})">Order Now </button>
                            </div>
                        </div>
                    </div>
    `
    });
    itemsContainerElement.innerHTML = innerHTML;

    itemsContainerElement = document.querySelector('#product_container2');
    innerHTML = '';
    items.forEach(item => {
        innerHTML += `
    <div class="swiper-slide box" >
                        <div class="img">
                            <img src="${item.Image}" alt="">
                        </div>
                        <div class="product-content">
                            <h3>${item.items_name}</h3>
                            <p>${item.description}</p>
                            <span class="span">₹${item.original_price}</span>
                            <div class="orderNow">
                                <button onclick="addToBag(${item.id})">Order Now </button>
                            </div>
                        </div>
                    </div>
    `
    });
    itemsContainerElement.innerHTML = innerHTML;
    itemsContainerElement = document.querySelector('#product_container3');
    innerHTML = '';
    items.forEach(item => {
        innerHTML += `
    <div class="swiper-slide box" >
                        <div class="img">
                            <img src="${item.Image}" alt="">
                        </div>
                        <div class="product-content">
                            <h3>${item.items_name}</h3>
                            <p>${item.description}</p>
                            <span class="span">₹${item.original_price}</span>
                            <div class="orderNow">
                                <button onclick="addToBag(${item.id})">Order Now </button>
                            </div>
                        </div>
                    </div>
    `
    });
    itemsContainerElement.innerHTML = innerHTML;
    itemsContainerElement = document.querySelector('#product_container4');
    innerHTML = '';
    items.forEach(item => {
        innerHTML += `
    <div class="swiper-slide box" >
                        <div class="img">
                            <img src="${item.Image}" alt="">
                        </div>
                        <div class="product-content">
                            <h3>${item.items_name}</h3>
                            <p>${item.description}</p>
                            <span class="span">₹${item.original_price}</span>
                            <div class="orderNow">
                                <button onclick="addToBag(${item.id})">Order Now </button>
                            </div>
                        </div>
                    </div>
    `
    });
    itemsContainerElement.innerHTML = innerHTML;
    itemsContainerElement = document.querySelector('#product_container5');
    innerHTML = '';
    items.forEach(item => {
        innerHTML += `
    <div class="swiper-slide box" >
                        <div class="img">
                            <img src="${item.Image}" alt="">
                        </div>
                        <div class="product-content">
                            <h3>${item.items_name}</h3>
                            <p>${item.description}</p>
                            <span class="span">₹${item.original_price}</span>
                            <div class="orderNow">
                                <button onclick="addToBag(${item.id})">Order Now </button>
                            </div>
                        </div>
                    </div>
    `
    });
    itemsContainerElement.innerHTML = innerHTML;
};


