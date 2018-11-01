const ipattern = document.querySelectorAll('input');

// Define your Regular Expression pattern for each fields of the form
const forms = {
		fname: /^[A-Za-z][A-Za-z\s]*$/,
		lname: /^[A-Za-z][A-Za-z\s]*$/,
        username: /^[A-Za-z][A-Za-z\d_]{3,11}\s*$/,
        password: /^[A-Za-z\d@_-]{8,}$/,
        email: /^([A-Za-z\d\.-]+)@([A-Za-z\d-]+)\.([A-Za-z]{2,20})(\.[a-zA-z]{2,20})?$/,
        mobile: /^\+\d{1,3}-\d{10}$/
};

// Function to validate each fields in the form
function isValidForm(label, regexp){

    //mark the field name as valid
	if(regexp.test(label.value)){
        label.className = 'valid';
    } else {
		//mark the field name as invalid
        label.className = 'invalid';
    }

}

// Add EvenListener to each input fields
ipattern.forEach((input) => {
    input.addEventListener('keyup', (e) => {
            isValidForm(e.target, forms[e.target.attributes.name.value]);
    });
});
