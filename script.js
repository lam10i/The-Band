const buyTicketBtns = document.querySelectorAll(".btn-buy-ticket");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const modalCloseBottom = document.querySelector(".modal-close-bottom");
const openNavBtn = document.querySelector(".open-nav-btn");
const header = document.querySelector("#header");
const aLinkNavs = document.querySelectorAll("#nav a");
const modal_container=document.querySelector(".modal-container")
const slider=document.querySelector("#slider");
const slider_text_location=document.querySelector("#slider .text-location");
const slider_text_description=document.querySelector("#slider .text-description");
// handle modal
for (const buyTicketBtn of buyTicketBtns) {
  buyTicketBtn.onclick = function () {
    modal.classList.add("open");
  };
}
modalClose.onclick = function () {
  modal.classList.remove("open");
};
modalCloseBottom.onclick = function () {
  modal.classList.remove("open");
};
modal.onclick = function () {
    modal.classList.remove("open");
};
modal_container.onclick=function(e) {
  e.stopPropagation();
}
// open and hide header,subnav
const headerHeight = header.clientHeight;
openNavBtn.onclick = function () {
  if (header.clientHeight == headerHeight) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

aLinkNavs.forEach((aLinkNav) => {
  const nextElementSibling = aLinkNav.nextElementSibling;
  if (!(nextElementSibling && nextElementSibling.classList.contains("subnav"))) {
    aLinkNav.onclick = function () {
      header.style.height = null;
    };
  }
});

// handle slider
var sliderInfos=[
  {
    img:"./assets/img/slide_image_1.jpg",
    location:"Los Angeles",
    description:"We had the best time playing at Venice Beach!"
  },
  {
    img:"./assets/img/slide_image_2.jpg",
    location:"New York",
    description:"The atmosphere in New York is lorem ipsum."
  },
  {
    img:"./assets/img/slide_image_3.jpg",
    location:"Chicago",
    description:"Thank you, Chicago - A night we won't forget."
  }
]
function handleSlider(){
  let currentIndex=0;
  setInterval(function() {
    if(currentIndex==sliderInfos.length){
      console.log("Hi")
      currentIndex=0
    }
    console.log(currentIndex);
    slider.style.backgroundImage=`url(${sliderInfos[currentIndex].img})`
    slider_text_location.innerText=sliderInfos[currentIndex].location
    slider_text_description.innerText=sliderInfos[currentIndex].description
    currentIndex++
    console.log(currentIndex)
  },4000)
}
handleSlider()

