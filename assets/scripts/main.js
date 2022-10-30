function check() {
    let username = document.forms['sign-up']['username'].value;
    let password = document.forms['sign-up']['password'].value;
    let errors = document.getElementById('errors');
    if (username == "" || password == "" || password.length < 6) {
        document.getElementById('errors').innerText = "نام کاربری و پسورد نمیتوانند خالی بمانند و پسورد نمیتواند کمتر از شش کاراکتر باشد";
        errors.style.display = 'block';
        return false;
    } 
    return true;
}