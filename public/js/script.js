let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');


Fabars.onclick = () => {
  Navbar.classList.toggle("active")
};


var swiper = new Swiper(".home-slid", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 



// get data in firebase
var messagesRef = firebase.database()
  .ref('Collected Data');

document.getElementById('contactForm')
  .addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone')
  var text = getInputVal('textarea')

  saveMessage(name, email, phone, text);
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, textarea) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    text: textarea,
  });
}





