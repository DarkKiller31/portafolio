const btn = document.getElementById('button');



document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();
    

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_980ma5b';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      document.getElementById('form').reset();
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });

    
});




// export default sendEmail