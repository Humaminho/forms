const form = document.getElementById('form');
const email = document.getElementById('email');
const errorMsg = document.querySelector('.error')

email.addEventListener('input', (e) => {
  if ( email.validity.valid ) {
    errorMsg.textContent = "";
  } else throwError();
});

form.addEventListener('submit', (e) => {
  if ( !email.validity.valid ) {
    throwError();
    e.preventDefault();
  } else return;
});

function throwError() {
  if (email.validity.valueMissing) {
    errorMsg.textContent = '*You should enter an email'
  } else if (email.validity.typeMismatch) {
    errorMsg.textContent = '*You should type in an email.'
  } else if (email.validity.tooShort) {
    errorMsg.textContent = `*The password should be atleast ${email.minLength} characters long.`
  } else if (email.validity.tooLong) {
    errorMsg.textContent = `*The password can't exceed ${email.maxLength} characters.`
  }
}