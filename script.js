//@tochange background header
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("scrollHeader")
    : header.classList.remove("scrollHeader");
};
window.addEventListener("scroll", scrollHeader);

//@modal show and close
const viewModal = document.querySelectorAll(".companyModal");
const modalBtn = document.querySelectorAll(".companyButton");
const closeModal = document.querySelectorAll(".companyModalClose");

let modal = function (modalClick) {
  viewModal[modalClick].classList.add("activeModal");
};
modalBtn.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

closeModal.forEach((mc) => {
  mc.addEventListener("click", () => {
    viewModal.forEach((mv) => {
      mv.classList.remove("activeModal")
    })
  })
});
