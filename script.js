const menu = [
  {
    dish: "Home made Pizza",
    price: 169,
    rating: "4.4",
    img: "./images/pizza1.png",
    discount: null,
  },
  {
    dish: "Margherita Pizza",
    price: 149,
    rating: "4.2",
    img: "./images/pizza2.png",
    discount: "20%",
  },
  {
    dish: "Farmhouse Pizza",
    price: 199,
    rating: "4.6",
    img: "./images/pizza3.png",
    discount: null,
  },
  {
    dish: "Pepperoni Pizza",
    price: 229,
    rating: "4.5",
    img: "./images/pizza4.png",
    discount: "50%",
  },
  {
    dish: "Spicy Pizza",
    price: 179,
    rating: "4.3",
    img: "./images/pizza12.png",
    discount: null,
  },
  {
    dish: "BBQ Pizza",
    price: 249,
    rating: "4.7",
    img: "./images/pizza5.png",
    discount: "20%",
  },
  {
    dish: "Paneer Pizza",
    price: 209,
    rating: "4.4",
    img: "./images/pizza6.png",
    discount: null,
  },
  {
    dish: "Mushroom Pizza",
    price: 189,
    rating: "4.2",
    img: "./images/pizza7.png",
    discount: "50%",
  },
  {
    dish: "Cheese Pizza",
    price: 239,
    rating: "4.6",
    img: "./images/pizza8.png",
    discount: null,
  },
  {
    dish: "Mexican Pizza",
    price: 199,
    rating: "4.3",
    img: "./images/pizza9.png",
    discount: null,
  },
  {
    dish: "Peri Pizza",
    price: 219,
    rating: "4.5",
    img: "./images/pizza10.png",
    discount: "20%",
  },
  {
    dish: "Cheesy Pizza",
    price: 169,
    rating: "4.1",
    img: "./images/pizza11.png",
    discount: null,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  function renderMenu() {
    const cont = document.body.querySelector(".product-grid");
    const template = document.body.querySelector(".product-card-grid").content;
    menu.forEach((item) => {
      const clone = template.cloneNode(true);
      clone.querySelector(".product-card__image-container img").src = item.img;
      clone.querySelector(".product-card__header > p:first-child").textContent =
        item.dish;
      clone.querySelector(".product-card__header-para").innerHTML =
        "&#8377;" + item.price;
      clone.querySelector(".product-card__rating > p").textContent = item.rating;
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

      const discountBadge = card.querySelector(".discount-badge");
      if (item.discount) {
        discountBadge.textContent = item.discount;
      } else {
        discountBadge.remove(); // Remove the badge element if no discount
      }
      swiperWrapper.appendChild(clone);
    });
  }

  renderCarousel();

  // Initialize Swiper
  const swiper = new Swiper(".product-carousel", {
    // loop: true,
    slidesPerView: 3,
    spaceBetween: 25,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
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

  // Modal Functionality
  const requestBtn = document.getElementById("request-dish-btn");
  const modalOverlay = document.getElementById("request-modal");
  const cancelBtn = document.getElementById("cancel-modal-btn");
  const submitBtn = document.getElementById("submit-modal-btn");
  const closeBtn = document.querySelector(".close-modal-btn");

  function openModal() {
    modalOverlay.style.display = "flex";
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    modalOverlay.style.display = "none";
    document.body.classList.remove("modal-open");
  }

  requestBtn.addEventListener("click", openModal);
  cancelBtn.addEventListener("click", closeModal);
  closeBtn.addEventListener("click", closeModal);
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevents form submission
    console.log("Submit request clicked. Data not stored as per requirement.");
    closeModal();
  });
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
});






document.addEventListener('DOMContentLoaded', () => {

  const video = document.getElementById('myVideo');
  const playPauseBtn = document.getElementById('play-pause-btn');
  const videoPlayer = document.querySelector('.video-player');

  function togglePlayPause() {
    if (video.paused || video.ended) {
      video.play();
      videoPlayer.classList.remove('paused');
    } else {
      video.pause();
      videoPlayer.classList.add('paused');
    }
  }

  // Event listener for the custom button
  playPauseBtn.addEventListener('click', togglePlayPause);
  
  // Event listener for the video itself (clicking the video also toggles)
  video.addEventListener('click', togglePlayPause);

  // Event listener to change the button icon
  video.addEventListener('play', () => {
    playPauseBtn.innerHTML = '';
    videoPlayer.classList.remove('paused');
  });

  video.addEventListener('pause', () => {
    playPauseBtn.innerHTML = '<img src="/images/plaay.svg" alt="">';
    videoPlayer.classList.add('paused');
  });

  // Event listener to reset the icon when the video ends
  video.addEventListener('ended', () => {
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    videoPlayer.classList.add('paused');
  });
});


