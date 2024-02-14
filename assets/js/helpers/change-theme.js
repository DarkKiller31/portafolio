const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});



// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')) {
//     document.body.classList.add('dark');
// } else {
//     document.body.classList.remove('light');
// }
// window.matchMedia('(prefers-color-scheme: dark)')
//     .addEventListener('change', event => {
//         document.body.classList.add('dark');
//     })



// window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
//         document.body.classList.add('dark');
    
        
//     window.matchMedia('(prefers-color-scheme: dark)')
//         .addEventListener('change', event => {
//             document.body.classList.add('dark');
//         })