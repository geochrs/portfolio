//navbar scroll
const navbar = document.querySelector('.navBar');
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', function () {
   let currScrollPos = window.scrollY;
   if (currScrollPos > prevScrollPos) {
      navbar.style.transform = `translateY(-105%)`;
   } else {
      navbar.style.transform = `translateY(0%)`;
   }
   prevScrollPos = currScrollPos;
})

//add selected while scrolling
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", activeLink);

function activeLink() {

   let scrollY = window.scrollY;
   sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 200;
      let sectionId = current.getAttribute("id");

      if (
         scrollY > sectionTop &&
         scrollY <= sectionTop + sectionHeight
      ) {
         document.querySelector(".nav-container a[href*=" + sectionId + "]").classList.add("selected");
      } else {
         document.querySelector(".nav-container a[href*=" + sectionId + "]").classList.remove("selected");
      }
   });
}

//hamburger menu when mobile
const hamburger = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav-container");
const navLink = document.querySelectorAll('.nav-links');

function mobileMenu() {
   hamburger.classList.toggle("active");
   navContainer.classList.toggle("active");
}

function closeMenu() {
   hamburger.classList.remove('active');
   navContainer.classList.remove('active');
}

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener('click', closeMenu));

//send email
const inputs = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');
const form = document.querySelector('form');
const alertbox = document.querySelector('.alert');
const closebtn = document.querySelector('.closebtn');

function sendMail() {
   let params = {
      from_name: document.querySelector('.person-name').value,
      email_id: document.querySelector('.person-email').value,
      message: document.querySelector('.person-text').value
   }
   emailjs.send('service_9ecsisg', 'template_c4nafhh', params).then(function (res) {
      alertbox.classList.add('alertOn');
   })
}

form.addEventListener('click', function (e) {
   if (form.checkValidity()) {
      e.preventDefault();
      sendMail();
      inputs.forEach(input => input.value = '');
      textarea.value = '';
   }
})

closebtn.addEventListener('click', function () {
   this.parentElement.classList.remove('alertOn');
})

//typing effect
let typingEffect = new TypeIt(".typedText", {
   strings: "Front End Developer.",
   speed: 120,
   waitUntilVisible: true,
}).go();