// Navbar Sticky JS Code
const herosections = document.querySelector(".hero-section");
const observer = new IntersectionObserver(
  (entry) => {
    const ent = entry[0];
    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
  }
);
observer.observe(herosections);

// Scroll to Top Button Functionality
const heroSection = document.querySelector(".section-hero");
const headerSection = document.querySelector(".header");
const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;
footerElem.after(scrollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};
scrollElement.addEventListener("click", scrollTop);

// Swiper JS Code
new Swiper(".mySwiper", {
slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const myJsMedia = (widthSize) => {
  if (widthSize.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  } else {
    new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
    });
  }
};
const widthSize = window.matchMedia("(max-width: 780px)");
// call listener function at run time
myJsMedia(widthSize);
// Attach listener function on state changes
widthSize.addEventListener("change", myJsMedia);
// Counter Animate Section
const work_section = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    const counterNumbers = document.querySelectorAll(".counter-numbers");
    const speed = 300;
    counterNumbers.forEach((curElem) => {
      const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);

        const initialNum = parseInt(curElem.innerText);

        const incerementNum = Math.trunc(targetNumber / speed);
        if (initialNum < targetNumber) {
          curElem.innerText = `${initialNum + incerementNum}+`;

          setTimeout(updateNumber, 10);
        }
      };
      updateNumber();
    });
    observer.unobserve(work_section);
  },
  {
    root: null,
    threshold: 0,
  }
);
workObserver.observe(work_section);
