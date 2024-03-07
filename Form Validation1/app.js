const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const confPassword = document.getElementById('confPassword');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (await validateInputs()) {
        form.submit();
    }
});

async function validateInputs() {
    const usernameVal = username.value.trim();
    const passwordVal = password.value.trim();
    const emailVal = email.value.trim();
    const confPasswordVal = confPassword.value.trim();

    let success = true;

    if (usernameVal === '') {
        success = false;
        setError(username, 'Enter a valid one');
    } else {
        setSuccess(username);
    }

    if (emailVal === '') {
        success = false;
        setError(email, 'Enter a valid email');
    } else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, 'Enter a valid email');
    } else {
        setSuccess(email);
    }

    if (passwordVal.length < 8) {
        success = false;
        setError(password, 'Password must be at least 8 characters');
    } else {
        setSuccess(password);
    }

    if (confPasswordVal.length < 8 || confPasswordVal !== passwordVal) {
        success = false;
        setError(confPassword, 'Passwords do not match');
    } else {
        setSuccess(confPassword);
    }

    return success;
}

function setError(element, message) {
    const inputParent = element.parentElement;
    const errorElement = inputParent.querySelector('.error');
    errorElement.innerText = message;
    inputParent.classList.add('error');
    inputParent.classList.remove('success');
}

function setSuccess(element) {
    const inputParent = element.parentElement;
    const errorElement = inputParent.querySelector('.error');
    errorElement.innerText = '';
    inputParent.classList.add('success');
    inputParent.classList.remove('error');
}

const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
