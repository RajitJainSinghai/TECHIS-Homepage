const navbarBtn = document.querySelector(".navbar__item.wrap");
const navbarSublist = document.querySelector(".navbar__sublist");
navbarBtn.addEventListener("click", () => {
  if (navbarSublist.classList.contains("active")) {
    navbarSublist.classList.remove("active");
  } else {
    navbarSublist.classList.add("active");
  }
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar__item.wrap")) {
    if (navbarSublist.classList.contains("active")) {
      navbarSublist.classList.remove("active");
    }
  }
});
console.log("hello");

const meritItems = document.querySelectorAll(".merit-msg__item");
meritItems.forEach((item) => {
  item.addEventListener("click", () => {
    const meritBtn = item.querySelector(".merit-msg__subtitle");
    const MeritMsg = meritBtn.nextElementSibling;
    if (MeritMsg.classList.contains("active")) {
      MeritMsg.classList.remove("active");
      meritBtn.classList.remove("active");
    } else {
      MeritMsg.classList.add("active");
      meritBtn.classList.add("active");
    }
  });
});
