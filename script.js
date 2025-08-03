// 169
const menu = [
  {
    dish: "Home made Pizza",
    price: 169,
    rating: "4.4",
    img: "./images/pizza1.png",
  },
  {
    dish: "Margherita Pizza",
    price: 149,
    rating: "4.2",
    img: "./images/pizza2.png",
  },
  {
    dish: "Farmhouse Pizza",
    price: 199,
    rating: "4.6",
    img: "./images/pizza3.png",
  },
  {
    dish: "Pepperoni Pizza",
    price: 229,
    rating: "4.5",
    img: "./images/pizza4.png",
  },
  {
    dish: "Spicy Veggie Pizza",
    price: 179,
    rating: "4.3",
    img: "./images/pizza12.png",
  },
  {
    dish: "BBQ Chicken Pizza",
    price: 249,
    rating: "4.7",
    img: "./images/pizza5.png",
  },
  {
    dish: "Paneer Tikka Pizza",
    price: 209,
    rating: "4.4",
    img: "./images/pizza6.png",
  },
  {
    dish: "Mushroom Pizza",
    price: 189,
    rating: "4.2",
    img: "./images/pizza7.png",
  },
  {
    dish: "Four Cheese Pizza",
    price: 239,
    rating: "4.6",
    img: "./images/pizza8.png",
  },
  {
    dish: "Mexican Wave Pizza",
    price: 199,
    rating: "4.3",
    img: "./images/pizza9.png",
  },
  {
    dish: "Peri Peri Pizza",
    price: 219,
    rating: "4.5",
    img: "./images/pizza10.png",
  },
  {
    dish: "Cheesy Garlic Pizza",
    price: 169,
    rating: "4.1",
    img: "./images/pizza11.png",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  function renderMenu() {
    const cont = document.body.querySelector(".product-grid");

    const template = document.body.querySelector(".product-card-grid").content;

    menu.forEach((item) => {
      const clone = template.cloneNode(true);

      clone.querySelector(".product-card__image-container img").src = item.img;
      clone.querySelector(".product-card__header >p:first-child").textContent =
        item.dish;
      clone.querySelector(".product-card__header-para").innerHTML =
        "&#8377;" + item.price;
      clone.querySelector(".product-card__rating>p").textContent = item.rating;
      cont.appendChild(clone);
    });
  }
  renderMenu();

  const swiperWrapper = document.querySelector(
    ".product-carousel .swiper-wrapper"
  );
  const carouselTemplate = document.getElementById(
    "product-card-template-carousel"
  ).content;

  function renderCarousel() {
    menu.forEach((item) => {
      const clone = carouselTemplate.cloneNode(true);

      const card = clone.querySelector(".product-card");
      card.querySelector(".product-card__image-container img").src = item.img;
      card.querySelector(".product-name").textContent = item.dish;
      card.querySelector(".product-price").innerHTML = `&#8377;${item.price}`;
      card.querySelector(".product-rating").textContent = item.rating;

      swiperWrapper.appendChild(clone);
    });
  }

  renderCarousel();

  const swiper = new Swiper(".product-carousel", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 25,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation:false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
    },
  });
});
