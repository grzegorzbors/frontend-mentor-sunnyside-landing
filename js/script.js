const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector("nav");
const headerWithArrow = document.querySelector("#h1-with-arrow");

const showNav = () => {
  navigation.classList.toggle("mobile-nav");
  headerWithArrow.classList.toggle("h1-with-arrow-hidden");
  hamburger.classList.toggle("hamburger-opaque");
};

hamburger.addEventListener("click", showNav);
