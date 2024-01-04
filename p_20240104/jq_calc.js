let calcBtns = $('.calc-btn');
const addBtn = $('.add-btn');
const container = $('.container');

function calc(event){
    let target = $(event.target).attr('data-target');
    let option = document.querySelector(`${target}-option`).selectedIndex;
    let num1 = Number($(`${target}-num1`).val());
    let num2 = Number($(`${target}-num2`).val());
    const result = $(`${target}-result`);

    if(option === 0) result.val(num1 + num2);
    else if(option === 1) result.val(num1 - num2);
    else if(option === 2) result.val(num1 * num2);
    else if(option === 3) result.val(num1 / num2);
}

function addRow(){
    let id = calcBtns.length + 1;
    let newElementName = `calc-${String(id).padStart(2, '0')}`;
    let calcUnit = `
                    <div class="row ${newElementName} m-3">
                    <div class="col-3">
                        <input type="number" name="num1" id="num1" class="${newElementName}-num1 form-control">
                    </div>
                    <div class="col-3">
                        <input type="number" name="num2" id="num2" class="${newElementName}-num2 form-control">
                    </div>
                    <div class="col-2">
                        <select name="option" id="option" class="${newElementName}-option form-control">
                            <option value="">加</option>
                            <option value="">減</option>
                            <option value="">乘</option>
                            <option value="">除</option>
                        </select>
                    </div>
                    <div class="col-2"><button id="calc" class="btn btn-success calc-btn ${newElementName}-calc" data-target=".${newElementName}">計算</button></div>
                    <div class="col-2">
                        <input type="number" name="result" id="result" class="${newElementName}-result form-control">
                    </div>
                </div>
    `;
    container.append(calcUnit);
    calcBtns = $('.calc-btn');
    $(`.${newElementName}-calc`).on('click', calc);
}

calcBtns.each((index, element) => {
    $(element).on('click', calc);
});
addBtn.on('click', addRow);