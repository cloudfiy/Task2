const slider = document.querySelector(".slider");
const image = slider.querySelector(".slider__image");
const city = slider.querySelector(".slider__city");
const area = slider.querySelector(".slider__area");
const timeRepair = slider.querySelector(".slider__timeRepair");

const prevButton = slider.querySelector(".slider__prev-button");
const nextButton = slider.querySelector(".slider__next-button");

const dots = document.querySelectorAll(".switchPoint");
const links = document.querySelectorAll(".sliderLink");

let currentSlide = 0;

const slides = [
  {
    image: "/image/projects/slider_1.png",
    city: "Rostov-on-Don LCD admiral",
    area: "81 m2",
    timeRepair: "3.5 months",
  },
  {
    image: "/image/projects/slider_2.png",
    city: "Sochi Thieves",
    area: "105 m2",
    timeRepair: "4 months",
  },
  {
    image: "/image/projects/slider_3.png",
    city: "Rostov-on-Don Patriotic",
    area: "93 m2",
    timeRepair: "3 months",
  },
];

function updateSlide() {
  image.src = slides[currentSlide].image;
  city.textContent = slides[currentSlide].city;
  area.textContent = slides[currentSlide].area;
  timeRepair.textContent = slides[currentSlide].timeRepair;

  dots.forEach((switchPoint) => {
    switchPoint.classList.remove("switchPoint_active");
  });
  links.forEach((sliderLink) => {
    sliderLink.classList.remove("sliderLink_active");
  });

  dots[currentSlide].classList.add("switchPoint_active");
  links[currentSlide].classList.add("sliderLink_active");


  dots.forEach((switchPoint, index) => {
    switchPoint.addEventListener("click", () => {
      currentSlide = index;
      updateSlide();
    });
  });

  links.forEach((sliderLink, index) => {
    sliderLink.addEventListener("click", (event) => {
      event.preventDefault(); 
      currentSlide = index;
      updateSlide();
    });
  });
}

updateSlide();

prevButton.addEventListener("click", () => {
  currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  updateSlide();
});

nextButton.addEventListener("click", () => {
  currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
  updateSlide();
});
