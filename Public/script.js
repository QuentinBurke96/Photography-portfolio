const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');
const contactForm = document.querySelector('form')


contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    let formData = {
        name: nm.value,
        email: mail.value,
        subject: subject.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest()

    xhr.open('POST', '/')
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload = function() {
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email Sent');
            nm.value,
            mail.value,
            subject.value,
            message.value
        }else{
            alert('Something Wrong!')
        }
    }

    xhr.send(JSON.stringify(formData))
})

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});

/* Lightbox */
// var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

