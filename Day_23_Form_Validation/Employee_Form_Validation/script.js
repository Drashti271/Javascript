let inputs = document.querySelectorAll('.form-input');
let errors = {};

let registration = () => {
    inputs.forEach((input) => {
        let {name, value, checked, type} = input;

        if(value == '') {
            document.querySelector(`.${name}-message`).innerText = `${name} is required.`; 
        } else if ((type == 'radio' || type == 'checkbox') && !checked) {
            document.querySelector(`.${name}-message`).innerText = `${name} is required.`;
        } else {
            document.querySelector(`.${name}-message`).innerText = '';
        }
    });
};