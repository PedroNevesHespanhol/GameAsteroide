const input = document.querySelector('.login-input');
const senha = document.querySelector('.login-senha');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');
const player = document.querySelector('.player');

const validateInput = ({ target}) => {
    if(target.value.length > 4){
        button.removeAttribute('disabled');
        return;
    }

    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('jogador', input.value);
    window.location = 'game.html';
}

senha.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);