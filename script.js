/////////MENU///////////
let menutoggle = document.querySelector('.menu_toggle');
let header = document.querySelector('header');

menutoggle.onclick = function () {
  header.classList.toggle('active');
}

/////////TOP///////////
let mybutton = document.getElementById("TopBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

/////////SW///////////
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



/////////MODAL///////////
var modal = document.getElementById("myModal");
var btn = document.querySelector(".modal-btn");
var btn2 = document.querySelector(".modal-btn2");
var span = document.getElementById("close-modal");

btn.onclick = function () {
  modal.style.display = "block";
}

btn2.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/////////VALIDATION///////////
function formValidate(form) {
  let msg = Validate();
  if (msg === '') {
    return true;
  } else {
    const form_msg = document.querySelector(`.error_msg`);
    form_msg.innerHTML = msg;
    form_msg.style.display = 'block';

    if (msg >= 50) {
      input.style.height = 10;
    }
    return false;
  }
}

function Validate(let) {


  /////////NAME_VALIDATION///////////
  let = '';
  var first_name = document.getElementById('first_name').value.trim();
  var second_name = document.getElementById('second_name').value.trim();
  const Name = /^[A-Za-z]+$/;

  if (!Name.test(first_name)) {
    let = "Check first name input<br>";
  }

  if (!Name.test(second_name)) {
    let += "Check second name input<br>";
  }
  /////////EMAIL_VALIDATION///////////
  var email = document.getElementById('Email').value.trim();
  const Email = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]/;

  if (!Email.test(email)) {
    let += "Enter a valid email<br>";
  }

  /////////PHONE_VALIDATION///////////
  var phone = document.getElementById('Phone').value.trim();
  const Phone = /^\+\d{2}\(\d{3}\)\d{3}\-\d{2}\-\d{2}/;
  if (!Phone.test(phone)) {
    let += "Enter a valid phone number<br>";
  }

  /////////AGREEMENT_VALIDATION///////////
  var checkbox = document.getElementById('formAgreement');
  if (!checkbox.checked) {
    let += "Agree with terms and conditions<br>";
  }
  return let;
}

function email(){
    /////////EMAIL_VALIDATION///////////
    var email = document.getElementById('footer_email').value.trim();
    const Email = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]/;
  
    if (!Email.test(email)) {
      alert("Enter a valid email");
      return false;
    }  
    alert("Thank you for subscription!");
    return true;
}

//phone mask//
const element = document.getElementById('Phone');
const maskOptions = {
  mask: '+{00}(000)000-00-00'
};
const mask = IMask(element, maskOptions);

