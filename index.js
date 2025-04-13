const email = document.getElementById('email');
const suscribeBtn = document.querySelector('.suscribe-btn');
const emailWarning = document.querySelector('.email-warning-text');
const main = document.querySelector('.main');
const confirmSection = document.querySelector('.confirm-message-section')
const dismissBtn = document.querySelector('.dismiss-btn');
const emailInput = document.getElementById('email-input');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


suscribeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    emailInput.textContent = email.value + '.';
    if (!emailRegex.test(email.value) || email.value === '') {
        emailWarning.classList.remove('inactive');
        email.style.backgroundColor = 'grey';
        console.log(email.style.backgroundColor);
    }
    if (!main.classList.contains('inactive')) {
        main.classList.add('inactive');
        confirmSection.classList.remove('inactive')
    }
})

dismissBtn.addEventListener('click', () => {
    main.classList.remove('inactive');
    confirmSection.classList.add('inactive');
    email.value = '';
})

email.addEventListener('input', function () {
    emailWarning.classList.add('inactive'); // Hide the warning when user starts typing
});
