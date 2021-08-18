const btn = document.querySelector('.btn-play');
const videoContainer = document.querySelector('.video-container');
const close = document.querySelector('.close');
const paused = document.querySelector('#video')
const closeContainer = document.querySelector('.close-container')

btn.addEventListener('click', () => {
    videoContainer.classList.add('show');
    body.style.overflowY = 'hidden'
})

close.addEventListener('click', () => {
    videoContainer.classList.remove('show');
    body.style.overflowY = 'visible'
    paused.pause(); 
})

closeContainer.addEventListener('click', () => {
    videoContainer.classList.remove('show');
    body.style.overflowY = 'visible'
    paused.pause(); 
})

const form = document.getElementById('form')

const name = document.querySelector('#name')
const surname = document.querySelector('#surname')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const numbed = document.querySelector('#numbed')
const precontact = document.querySelector('#precontact')

function sendMail(){
    if (form.checkValidity()) {
        let tempParams = {
            from_name: name.value,
            surname: surname.value,
            email: email.value,
            phone: phone.value,
            numbedroom: numbed.value,
            preftime: precontact.value
        }
        
        emailjs.send("service_mf37vbn", "template_ipr0sqb", tempParams)
        .then((res) => {
            if (res.status === 200) {
                alert('Sent form success')
            } else {
                alert('Went wrong')
            }
            name.value = ''
            surname.value = ''
            email.value = ''
            phone.value = ''
            numbed.value = ''
            precontact.value = ''
        })
    }
    else {
        form.reportValidity()
    }
}

const body = document.querySelector('body')
const modalForm = document.getElementById('exampleModal')
const modalBackdrop = document.createElement('div')
let interval = false 

function closeFunc(){
    body.classList.remove('modal-open')
    body.style.cssText = ''
    modalForm.classList.remove('show')
    modalForm.removeAttribute('role')
    modalForm.removeAttribute('aria-modal')
    modalForm.style.display = 'none'
    modalBackdrop.className = ''
    body.appendChild(modalBackdrop)
    interval = true
}

function funcBefore(){
    body.classList.add('modal-open')
    body.style.cssText = 'overflow: hidden; padding-right: 17px;'
    modalForm.classList.add('show')
    modalForm.setAttribute('role', 'dialog')
    modalForm.setAttribute('aria-modal', 'true')
    modalForm.style.display = 'block'
    modalBackdrop.className = 'modal-backdrop fade show'
    body.appendChild(modalBackdrop)
    interval = true
}
  
document.addEventListener('DOMContentLoaded', () => {
    let interval = setInterval(() => {
        funcBefore()
        clearInterval(interval)
    }, 3000)
})

$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 5,
    nav: false,
    dots: false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})