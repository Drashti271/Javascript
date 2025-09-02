let inputs = document.querySelectorAll('.form-control');
let span = document.createElement('span');
let isValid = true;
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

inputs.forEach((input) => {
    span.innerText = '';
    input.addEventListener('input', (e) => {
        let { name, value } = e.target;
        let message =
        {
            error: '',
            success: ''
        };
        if (name == 'email') {
            if (!value == "") {
                if (!emailPattern.test(value)) {
                    message.error = "Invalid Email.";
                } else {
                    message.success = "Valid Email.";
                }
            } else {
                isValid = false;
                message.error = 'Email Address.';
            }
        } else {
            if (!value == "") {
                if (!/[A-Za-z]/.test(value)) {
                    message.error += 'Atlest One Char.'
                    isValid = false;
                } else {
                    isValid = true;
                }
                if (!/\d/.test(value)) {
                    message.error += ' Atlest One Number.'
                    isValid = false;
                } else {
                    isValid = true;
                }
                if (!/[^A-Za-z0-9]/.test(value)) {
                    message.error += ' Atlest One Symbol.'
                    isValid = false;
                } else {
                    isValid = true;
                }
                if (value.length <= 8) {
                    message.error += ' Atlest 8 char.'
                    isValid = false;
                } else {
                    isValid = true;
                }
            } else {
                isValid = false
            }
            if (isValid) {
                delete message.error;
                message.success = "Valid Password."
            }
        }

        if(message.error){
            span.innerText = message.error;
        } else if(message.success != ''){
            span.innerText = message.success;
        }
        input.parentNode.appendChild(span);
    })
})