const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const btn4 = document.querySelector('.btn-4');
const input1 = document.querySelector('.input-1');
const input2 = document.querySelector('.input-2');
const result = document.querySelector('.result');

const plus = () => {
    let num = Number(input1.value) + Number(input2.value);
    result.textContent = `計算結果為: ${num}`;
};
const minus = () => {
    let num = Number(input1.value) - Number(input2.value);
    result.textContent = `計算結果為: ${num}`;
};
const muti = () => {
    let num = Number(input1.value) * Number(input2.value);
    result.textContent = `計算結果為: ${num}`;
};
const divi = () => {
    let num = Number(input1.value) / Number(input2.value);
    result.textContent = `計算結果為: ${num}`;
};

btn1.addEventListener('click', plus);
btn2.addEventListener('click', minus);
btn3.addEventListener('click', muti);
btn4.addEventListener('click', divi);