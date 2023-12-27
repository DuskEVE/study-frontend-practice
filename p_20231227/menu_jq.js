
let itemTotals = $(".item-total-price");
let itemPrices = $(".item-price");
let itemCounts = $(".item-count");
const totalPrice = $(".total-price");
const addBtn = $(".add-btn");
const table = $(".tbody");
let id = [];

for(let i=0; i<itemTotals.length; i++) id.push(String(i+1));

function countTotal(){
    let sum = 0;
    itemTotals.each((index, element) => sum += Number(element.value));

    if(sum > 500) totalPrice.text(`總價為: ${Math.floor(sum * 0.8)}元(原價為${sum}，超過500，打八折)`);
    else totalPrice.text(`總價為: ${sum}元`);
}

function countPrice(event){
    let targetClass = $(event.target).attr('class');
    let targetId = '';

    for(let i=0; i<id.length; i++){
        if(targetClass.match(id[i]) !== null){
            targetId = id[i];
            break;
        }
    }

    const targetPrice = $(`.item-price-${targetId}`);
    const targetCount = $(`.item-count-${targetId}`);
    const targetTotal = $(`.item-total-price-${targetId}`);
    targetTotal.val(targetPrice.val() * targetCount.val());
}

function addItem(){
    table.append(`<tr>
                    <td><img src="https://picsum.photos/id/${(id.length+1)}/150/150" alt=""></td>
                    <td><input type="number" class="item-price item-price-${(id.length+1)} form-control" id="" name="" value="0" min="0"></td>
                    <td><input type="number" class="item-count item-count-${(id.length+1)} form-control" id="" name="" value="0" min="0"></td>
                    <td><input type="number" class="item-total-price item-total-price-${(id.length+1)} form-control" id="" name="" value="0" readonly></td>
                  </tr>`);
    let newInput = $([$(`.item-price-${(id.length+1)}`), $(`item-count-${(id.length+1)}`)]);

    id.push(String(id.length+1));
    itemTotals = $(".item-total-price");
    itemPrices = $(".item-price");
    itemCounts = $(".item-count");

    newInput.each(() => {
        $(this).on('change', countPrice);
        $(this).on('change', countTotal);
    });
}

itemPrices.each(() => {
    $(this).on('change', countPrice);
    $(this).on('change', countTotal);
});
itemCounts.each(() => {
    $(this).on('change', countPrice);
    $(this).on('change', countTotal);
});
addBtn.on('click', addItem);
