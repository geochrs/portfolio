const navbar = document.querySelector('.navBar');
window.addEventListener('scroll', function () {
   if (document.documentElement.scrollTop > 300) {
      navbar.classList.add('sticky');
   } else {
      navbar.classList.remove('sticky');
   }
});

// const homeBtn = document.querySelectorAll('.nav-buttons')[0];
// homeBtn.addEventListener('click', () => {
//    document.documentElement.scrollTop = 0;
// });

// const about = {
//    btn: document.querySelectorAll('.nav-buttons')[0],
//    tag: document.querySelector('#aboutNav')
// };

// const work = {
//    btn: document.querySelectorAll('.nav-buttons')[1],
//    tag: document.querySelector('#workNav')
// };

// const contact = {
//    btn: document.querySelectorAll('.nav-buttons')[2],
//    tag: document.querySelector('#contactNav')
// }

// function scrollTo(el) {
//    el.tag.scrollIntoView();
// }

// about.btn.addEventListener('click', function () {
//    scrollTo(about);
// })

// work.btn.addEventListener('click', function () {
//    scrollTo(work);
// })

// contact.btn.addEventListener('click', function () {
//    scrollTo(contact);
// })

const links = document.querySelectorAll('.nav-links');
links.forEach(link => {
   link.addEventListener('click', function () {
      links.forEach(btn => btn.classList.remove('selected'));
      this.classList.add('selected');
   });
});


function sendMail() {
   let params = {
      from_name: document.querySelector('.person-name').value,
      email_id: document.querySelector('.person-email').value,
      message: document.querySelector('.person-text').value
   }
   emailjs.send('service_9ecsisg', 'template_c4nafhh', params).then(function (res) {
      alert('Message sent');
   })
}

const inputs = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');
const buttonSubmit = document.querySelector('.submit');

buttonSubmit.addEventListener('click', function (e) {
   e.preventDefault();
   sendMail();
   inputs.forEach(input => input.value = '');
   textarea.value = '';
}
);