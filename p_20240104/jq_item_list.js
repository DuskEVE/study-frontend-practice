const cardBtns = $('.card-btn');
const option = $('.price-level');
let discount = {'A':0.7, 'B':0.8, 'C':0.9};

function calcPrice(event){
    let target = $(event.target).attr('data-bs-target');
    let price = $(event.target).attr('data-price');
    let level = option.find(':selected').val();
    price = Math.floor(price * discount[level]);

    $(`${target}-card-text`).text(`優惠價格為: ${price}`);
}

cardBtns.on('click', calcPrice);