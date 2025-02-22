let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
};


//Login form 
let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.add('active');
};

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
};
