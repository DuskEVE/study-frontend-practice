let itemTotals = document.querySelectorAll(".item-total-price");
let itemPrices = document.querySelectorAll(".item-price");
let itemCounts = document.querySelectorAll(".item-count");
const totalPrice = document.querySelector(".total-price");
const addBtn = document.querySelector(".add-btn");
const table = document.querySelector(".tbody");
let id = [];

for(let i=0; i<itemTotals.length; i++) id.push(String(i+1));

function countTotal(){
    let totals = Array.from(itemTotals);
    let sum = totals.reduce((total, item) => Number(total) + Number(item.value), 0);

    if(sum > 500) totalPrice.innerText = `總價為: ${Math.floor(sum * 0.8)}元(原價為${sum}，超過500，打八折)`;
    else totalPrice.innerText = `總價為: ${sum}元`;
}

function countPrice(event){
    let targetClass = event.target.className;
    let targetId = '';
    for(let i=0; i<id.length; i++){
        if(targetClass.match(id[i]) !== null){
            targetId = id[i];
            break;
        }
    }

    const targetPrice = document.querySelector(`.item-price-${targetId}`);
    const targetCount = document.querySelector(`.item-count-${targetId}`);
    const targetTotal = document.querySelector(`.item-total-price-${targetId}`);
    targetTotal.value = targetPrice.value * targetCount.value;
}

function addItem(){
    let tr = document.createElement("tr");
    tr.innerHTML = `<td><img src="https://picsum.photos/id/${(id.length+1)}/150/150" alt=""></td>
    <td><input type="number" class="item-price item-price-${(id.length+1)} form-control" id="" name="" value="0" min="0"></td>
    <td><input type="number" class="item-count item-count-${(id.length+1)} form-control" id="" name="" value="0" min="0"></td>
    <td><input type="number" class="item-total-price item-total-price-${(id.length+1)} form-control" id="" name="" value="0" readonly></td>`;
    id.push(String(id.length+1));
    table.appendChild(tr);

    itemTotals = document.querySelectorAll(".item-total-price");
    itemPrices = document.querySelectorAll(".item-price");
    itemCounts = document.querySelectorAll(".item-count");

    let newInput = [itemPrices[itemPrices.length-1], itemCounts[itemCounts.length-1]];
    newInput.forEach(element => {
        element.addEventListener('change', countPrice);
        element.addEventListener('change', countTotal);
    });
}

itemPrices.forEach(element => {
    element.addEventListener('change', countPrice);
    element.addEventListener('change', countTotal);
});
itemCounts.forEach(element => {
    element.addEventListener('change', countPrice);
    element.addEventListener('change', countTotal);
});
addBtn.addEventListener('click', addItem);
