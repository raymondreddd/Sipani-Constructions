var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var orgError = document.getElementById('org-error');
var submitError = document.getElementById('submit-error');

const validateName = () => {
    // alert('yuo');
    var name = document.getElementById('name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    } if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-sharp fa-solid fa-shield-check"></i>';
    return true;
}

const validateOrg = () => {
    // alert('yuo');
    var org = document.getElementById('org').value;

    if(org.length == 0){
        orgError.innerHTML = 'Organisation Name is required';
        return false;
    } 
    orgError.innerHTML = '<i class="fa-sharp fa-solid fa-shield-check"></i>';
    return true;
}

const validateEmail= () => {
    var email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
     if (!email.match(/^[0-9]{10}$/)){
        emailError.innerHTML = 'Please use proper format';
        return false;
    }
    emailError.innerHTML = '<i class="fa-sharp fa-solid fa-shield-check"></i>';
    return true;
}

const validatePhone= () => {
    var phone = document.getElementById('phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone No. is required';
        return false;
    }if (phone.length != 10){
        phoneError.innerHTML = 'Phone No. should be 10 digits';
        return false;
    }
     if (!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-sharp fa-solid fa-shield-check"></i>';
    return true;
}


const validateForm = () =>  {
    if(!validateEmail ||  !validateOrg || !validateName || !validatePhone){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
    return true;
}

// validateName();

// pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$" 