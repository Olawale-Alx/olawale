var typed = new Typed('.typing', {
  strings: ['My name is ^1000 Olawale,', 'I design,', 'I create,', 'I code,', 'I write programs.'],
  loop: true,
  typeSpeed: 80,
  backSpeed: 40
});

AOS.init();

document.getElementById('copyright').innerText = new Date().getFullYear()

document.getElementById('submitButton').addEventListener('click', function(e) {
  e.preventDefault()

  cname = document.getElementById('contact-name').value;
  email = document.getElementById('email').value;
  message = document.getElementById('message').value;

  cnameRegex = /[a-zA-Z]{2,}/i;
  emailRegex = /[\w]{3,}\@[\w]{2,}\.[a-zA-Z]{2,}/i;

  if (!(cnameRegex.test(cname))) {
    alert('Name cannot be less than two and must be characters')
  }

  else if (!(emailRegex.test(email))) {
    alert('Email cannot be emoty and must be in correct format')
  }

  else if (message === '') {
    alert('Message cannot be empty')
  }

  else {
    emailjs.init("tE548ckQsPN00wh_i");

    const request = {
      from_name: `${cname}`,
      from_email: email,
      to_name: "Olawale Olaleye",
      message: message,
      to_email: "olaleyeolawale9620@gmail.com"
    } 
    
    emailjs.send("service_9dmtfz6","template_rd3o94v", request).then(()=> {
      alert("Message sent!").catch((error)=> {
        alert("Message not sent!")
      })
    })
  }
})
