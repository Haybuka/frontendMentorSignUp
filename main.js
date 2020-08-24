var forms = document.querySelector('form');
let firstName = forms.querySelector('.firstName')
let errorFirst = forms.querySelector('.firstName + small')
let errorSecond = forms.querySelector('.lastName + small')
let lastName = forms.querySelector('.lastName')

forms.addEventListener('submit', function (e) {
    e.preventDefault();
    if (firstName.value.trim().length <= 0) {
        errorFirst.textContent = 'First Name cannot be Empty'
        firstName.classList.add('error')
    } else {
        if (firstName.value.trim().length <= 3) {
            errorFirst.textContent = 'Name should be more than 3 characters'
            firstName.classList.add('error')
            return;
        }
        errorFirst.textContent = ' '
        lastName.classList.remove('error')
    }
    if (lastName.value.trim().length <= 0) {
        errorSecond.textContent = 'Last Name Cannot be Empty'
        lastName.classList.add('error')
    } else {
        if (lastName.value.trim().length <= 3) {
            lastName.classList.add('error')
            errorSecond.textContent = 'Last Name should be more than 3 characters'
            return;
        }
        errorSecond.textContent = ' ';
        lastName.classList.remove('error')
    }
})