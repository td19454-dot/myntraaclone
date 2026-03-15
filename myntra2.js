let bagItems;



onload()


function onload(){
 let   bagItemsStr = localStorage.getItem('bagItems')
 bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
displayItemsOnHomePage()
displayBagIcon()
}



function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems))
    displayBagIcon()

}


function displayItemsOnHomePage(){
let itemsContainerElement = document.querySelector('.items-container')

if (itemsContainerElement===undefined){
    return;
}
let innerHtml = '';
items.forEach(item => {

innerHtml += ` <div class="item-container">
                <img  class = 'item-image'src = '${item.image}' alt = 'image 1'>
                <div class="rating"> ${item.rating.stars} ⭐ | ${item.rating.count} </div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class = 'current-price'>Rs ${item. current_price}</span>
                    <span class = 'original-price'>Rs ${item.original_price}</span>
                    <span class = 'discount'>(${item.discount_percentage}% OFF)</span>
                </div>
                <button class = 'btn-add-bag' onclick = 'addToBag(${item.id})'>Add To Bag</button>
            </div>`

 itemsContainerElement.innerHTML = innerHtml;

})
}


function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count')

    if(bagItems.length>0){
        bagItemCountElement.style.visibility = 'visible'
    bagItemCountElement.innerText = bagItems.length
    }else{
        bagItemCountElement.style.visibility = 'hidden'
    }

}

 