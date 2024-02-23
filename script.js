let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let submitError = document.getElementById("submit-error");
let messageError = document.getElementById("message-error");
let emailError = document.getElementById("email-error");
function validateName() {
    var name = document.getElementById("contact-name").value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required  <i class="fa-solid fa-circle-xmark ss"></i>';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = ' write correct name <i class="fa-solid fa-circle-xmark ss"></i>';
        return false;
    }
    nameError.innerHTML = ' <i class="fa-solid fa-circle-check ss"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById("contact-phone").value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'phone is required  <i class="fa-solid fa-circle-xmark ss"></i>';
        return false;
    }
    if (phone.length !== 11) {
        phoneError.innerHTML = 'phone should  be 11 digit <i class="fa-solid fa-circle-xmark ss"></i> ';
        return false;
    }
    if (!phone.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = 'only digits plz <i class="fa-solid fa-circle-xmark ss"></i> ';
        return false;
    }

    phoneError.innerHTML = ' <i class="fa-solid fa-circle-check ss"></i>';
    return true;
}

function validateEmail() {
    let email = document.getElementById("contact-email").value;
    if (email.length == 0) {
        emailError.innerHTML = 'email is required  <i class="fa-solid fa-circle-xmark ss"></i>';
        return false;
    }
    // if (!email.match(/^[A-Za-z]{3,10}[@][A-Za-z][.]/)) {
    //     emailError.innerHTML = 'email is valid  <i class="fa-solid fa-circle-xmark ss"></i>';
    //     return false;
    // }
    emailError.innerHTML = ' <i class="fa-solid fa-circle-check ss"></i>';
    return true;
}

function validatemessage() {
    let message = document.getElementById("contact-message").value;
    var required = 30;
    var left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = left + ' more chars is require  <i class="fa-solid fa-circle-xmark ss"></i>';
        return false;
    }
    // }
    messageError.innerHTML = ' <i class="fa-solid fa-circle-check ss"></i>';
    return true;
}

function validateForm() {
    if (!validateEmail() || !validateName() || !validatePhone() || !validatemessage) {

        submitError.innerHTML = "plz check again";
        setTimeout(function () {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
}