var forms = document.querySelector('form');
let firstName = forms.querySelector('.firstName')
let lastName = forms.querySelector('.lastName')
let email = forms.querySelector("input[type='email']")
let password = forms.querySelector("input[type='password']")
let errorFirst = forms.querySelector('.firstName + small')
let errorSecond = forms.querySelector('.lastName + small')
let errorMail = forms.querySelector("input[type='email'] + small")
let errorPass = forms.querySelector("input[type='password'] + small")
let firstIcon = forms.querySelector('.firstIcon')
let secondIcon = forms.querySelector('.secondIcon')
let thirdIcon = forms.querySelector('.thirdIcon')
let fourthIcon = forms.querySelector('.fourthIcon')
forms.addEventListener('submit', function (e) {
    e.preventDefault();
    // first Name Validation
    if (firstName.value.trim().length <= 0) {
        errorFirst.textContent = 'First Name cannot be Empty'
        firstName.classList.add('error')
        firstIcon.classList.add('show')
    } else {
        if (firstName.value.trim().length <= 3) {
            errorFirst.textContent = 'Name should be more than 3 characters'
            firstName.classList.add('error')
            firstIcon.classList.add('show')
            return;
        }
        errorFirst.textContent = ' '
        firstName.classList.remove('error')
        firstIcon.classList.remove('show')
    }
    // last Name Validation
    if (lastName.value.trim().length <= 0) {
        errorSecond.textContent = 'Last Name Cannot be Empty'
        lastName.classList.add('error')
        secondIcon.classList.add('show')
    } else {
        if (lastName.value.trim().length <= 3) {
            lastName.classList.add('error')
            errorSecond.textContent = 'Last Name should be more than 3 characters'
            secondtIcon.classList.add('show')
            return;
        }
        errorSecond.textContent = ' ';
        lastName.classList.remove('error')
        secondIcon.classList.remove('show')
    }
    // email Validation
    if (email.value.trim().length <= 0) {
        errorMail.textContent = 'Email Cannot be Empty'
        email.classList.add('error')
        thirdIcon.classList.add('show')
    } else {
        if (!email.value.endsWith('.com')) {
            email.classList.add('error')
            errorMail.textContent = 'Looks Like this is not an Email'
            thirdIcon.classList.add('show')
            return;
        }
        errorMail.textContent = ' ';
        email.classList.remove('error')
        thirdIcon.classList.remove('show')
    }
    //Password Validation
    if (password.value.trim().length <= 0) {
        errorPass.textContent = 'Password Cannot be Empty'
        password.classList.add('error')
        fourthIcon.classList.add('show')
    } else {
        if (password.value.trim().length <= 5) {
            password.classList.add('error')
            errorPass.textContent = 'Password should be longer than 5 Characters'
            fourthIcon.classList.add('show')
            return;
        }
        errorPass.textContent = ' ';
        password.classList.remove('error')
        fourthIcon.classList.remove('show')
    }
})