document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let errors = [];

    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const food = document.getElementById('food').value;
    const address = document.getElementById('address').value.trim();
    const pincode = document.getElementById('pincode').value.trim();
    const state = document.getElementById('state').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const country = document.getElementById('country').value;

    if (firstName === '') {
        errors.push('First Name is required.');
    }
    if (lastName === '') {
        errors.push('Last Name is required.');
    }
    if (email === '' || !validateEmail(email)) {
        errors.push('Valid Email is required.');
    }
    if (food === '') {
        errors.push('Food selection is required.');
    }
    if (address === '') {
        errors.push('Address is required.');
    }
    if (pincode === '' || !validatePincode(pincode)) {
        errors.push('Valid Pincode is required.');
    }
    if (state === '') {
        errors.push('State is required.');
    }
    if (!gender) {
        errors.push('Gender is required.');
    }
    if (country === '') {
        errors.push('Country is required.');
    }

    const formErrors = document.getElementById('formErrors');
    formErrors.innerHTML = '';
    if (errors.length > 0) {
        errors.forEach(error => {
            const errorElement = document.createElement('p');
            errorElement.className = 'error';
            errorElement.innerText = error;
            formErrors.appendChild(errorElement);
        });
    } else {
        formErrors.innerHTML = '<p class="text-success">Form submitted successfully!</p>';
    }
});

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePincode(pincode) {
    const pincodePattern = /^[0-9]{5,6}$/;
    return pincodePattern.test(pincode);
}
