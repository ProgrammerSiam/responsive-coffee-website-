let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

/*=============== HOME SWIPER ===============*/

var swiper = new Swiper(".home-slider", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  loop: true,
  grabCursor: true,
});
/*=============== REVIEW SWIPER ===============*/
var swiper = new Swiper(".review-slider", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  loop: true,
  grabCursor: true,
  spaceBetween: 15,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

/*=============== AOS===============*/
AOS.init({
  duration: 800,
  offset: 150,
});
