//TESTIMONIALS SLIDER
let swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  speed: 1000,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    992: {
      initialSlide: 1,
      slidesPerView: 2.59,
    },
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    centeredSlides: true,
    clickable: true,
  },
});

//EMAIL FORM
const form = document.querySelector("form");
const email = document.getElementById("email");

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(input.value.trim())) {
    showError(input, "Email is not valid");
  } else {
    showSuccess(input);
  }
}

function showError(input, message) {
  const form = input.parentElement;
  form.className = "error";
  const small = form.querySelector("small");
  small.innerText = message;
}

//Show success outline
function showSuccess(input) {
  const form = input.parentElement;
  form.className = "success";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkEmail(email);
});
