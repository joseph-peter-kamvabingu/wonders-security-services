'use strict';

// Navigation
const navButtonB = document.querySelector('.navbar .fa-bars');
const navButtonX = document.querySelector('.navbar .fa-x');
const navMenu = document.querySelector('nav ul');
const nav = document.querySelector('.nav');
const backOpen = document.querySelector('.background-opacity-nav-open');

navButtonB.addEventListener('click', () => {
  nav.classList.add('show-nav');
  navMenu.classList.add('show', 'show-menu-responsive');
  navButtonB.classList.add('not-show');
  navButtonX.classList.remove('not-show');
  backOpen.classList.remove('not-show');
});

navButtonX.addEventListener('click', () => {
  nav.classList.remove('show-nav');
  navMenu.classList.remove('show', 'show-menu-responsive');
  navButtonB.classList.remove('not-show');
  navButtonX.classList.add('not-show');
  backOpen.classList.add('not-show');
});

navMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    nav.classList.remove('show-nav');
    navMenu.classList.remove('show', 'show-menu-responsive');
    navButtonB.classList.remove('not-show');
    navButtonX.classList.add('not-show');
    backOpen.classList.add('not-show');
  }
});

// Contact Form Validation
const sendBtn = document.querySelector('.send-btn');
const contactName = document.querySelector('.c-name');
const contactPhone = document.querySelector('.c-phone');
const contactEmail = document.querySelector('.c-email');
const messageName = document.querySelector('.f-name');
const messagePhone = document.querySelector('.f-phone');
const messageEmail = document.querySelector('.f-email');
const messageSubmit = document.querySelector('.submit-feedback');

function isEmail(mail) {
  const patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return patternEmail.test(mail);
}

function isName(name) {
  const patternName = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/;
  return patternName.test(name);
}
function isPhoneNumber(number) {
  const patternPhone = /^\d{10,15}$/; // Matches 7 to 15 digits
  return patternPhone.test(number);
}


sendBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (!isName(contactName.value.trim())) {
    messageName.style.display = 'block';
  } else {
    messageName.style.display = 'none';
  }

  if (!isPhoneNumber(contactPhone.value.trim())) {
    messagePhone.style.display = 'block';
  } else {
    messagePhone.style.display = 'none';
  }

  if (!isEmail(contactEmail.value.trim())) {
    messageEmail.style.display = 'block';
  } else {
    messageEmail.style.display = 'none';
  }

  if (isName(contactName.value.trim()) && isPhoneNumber(contactPhone.value.trim()) && isEmail(contactEmail.value.trim())) {
    messageSubmit.style.display = 'block';
  } else {
    messageSubmit.style.display = 'none';
  }
});

// Testimonial Slider
 // Access the testimonials
 let testSlide = document.querySelectorAll('.testItem');
 // Access the indicators
 let dots = document.querySelectorAll('.dot');

 var counter = 0;

 // Add click event to the indicators
 function switchTest(currentTest){
     currentTest.classList.add('active');
     var testId = currentTest.getAttribute('attr');
     if(testId > counter){
         testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
         counter = testId;
         testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
     }
     else if(testId == counter){return;}
     else{
         testSlide[counter].style.animation = 'prev1 0.5s ease-in forwards';
         counter = testId;
         testSlide[counter].style.animation = 'prev2 0.5s ease-in forwards';
     }
     indicators();
 }

 // Add and remove active class from the indicators
 function indicators(){
     for(i = 0; i < dots.length; i++){
         dots[i].className = dots[i].className.replace(' active', '');
     }
     dots[counter].className += ' active';
 }

 // Code for auto sliding
 function slideNext(){
     testSlide[counter].style.animation = 'next1 0.8s ease-in forwards';
     if(counter >= testSlide.length - 1){
         counter = 0;
     }
     else{
         counter++;
     }
     testSlide[counter].style.animation = 'next2 0.8s ease-in forwards';
     indicators();
 }
 function autoSliding(){
     deleteInterval = setInterval(timer, 3000);
     function timer(){
         slideNext();
         indicators();
     }
 }
 autoSliding();

 // Stop auto sliding when mouse is over the indicators
 const container = document.querySelector('.indicators');
 container.addEventListener('mouseover', pause);
 function pause(){
     clearInterval(deleteInterval);
 }

 // Resume sliding when mouse is out of the indicators
 container.addEventListener('mouseout', autoSliding);