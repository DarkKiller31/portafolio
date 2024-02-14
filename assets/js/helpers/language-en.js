const btnSwitchEn = document.querySelector('#switch_en');

btnSwitchEn.addEventListener('click', () => {
    window.location.href = '/index.html';
    btnSwitchEn.classList.toggle('active');
});