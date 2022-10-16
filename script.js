const buyTicketBtns = document.querySelectorAll(".btn-buy-ticket");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const modalCloseBottom = document.querySelector(".modal-close-bottom");
const openNavBtn = document.querySelector(".open-nav-btn");
const header = document.querySelector("#header");
const aLinkNavs = document.querySelectorAll("#nav a");

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
modal.onclick = function (e) {
  if (e.target.closest(".modal-container")) {
  } else {
    modal.classList.remove("open");
  }
};

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