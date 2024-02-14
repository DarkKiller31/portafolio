const btnSwitchEs = document.querySelector('#switch_es');

btnSwitchEs.addEventListener('click', () => {
    window.location.href = '/assets/en-lang/index.html';
    btnSwitchEs.classList.toggle('active');
});