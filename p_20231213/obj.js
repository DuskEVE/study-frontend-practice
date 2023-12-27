
const username = document.querySelector("#username");
const phone = document.querySelector("#phone");
const adrass = document.querySelector("#adrass");
const email = document.querySelector("#email");
const genderM = document.querySelector("#male");
const genderF = document.querySelector("#female");
const select = document.querySelector("#select");


let worker = {
    name: "Dusk",
    phone: "0912345678",
    adrass: "泰山",
    email: "user@gmail.com",
    gender: "male",
    skill: ["javascript", "php"],
    note: "bruh"
};

username.value = worker.name;
phone.value = worker.phone;
adrass.value = worker.adrass;
email.value = worker.email;
genderM.setAttribute("checked", "");

worker.skill.forEach(element => {
    let option = document.createElement("option");
    option.value = element;
    option.text = element;
    console.log(element);
    select.appendChild(option);
});