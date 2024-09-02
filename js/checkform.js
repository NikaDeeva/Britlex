function checkForm() {
    let name = document.getElementById('name').value;
    let mail = document.getElementById('mail').value;
    let password = document.getElementById('password').value;
    let checkBox = document.querySelector('.modal__confirm').checked;

    if (name.length >= 2 && mail && password.length >= 4 && checkBox) {
        alert('You have started');
    } else {
        alert('Fill all fields correctly and confirm the privacy to start');
    }
}