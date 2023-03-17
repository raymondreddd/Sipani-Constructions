var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var orgError = document.getElementById('org-error');
var submitError = document.getElementById('submit-error');

const validateName = () => {
    var name = document.getElementById('name').ariaValueMax;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
    } if (!name.match)

}