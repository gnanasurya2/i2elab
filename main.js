let slideindex = 0,
  menustate = false;
const slides = document.getElementsByClassName("image");
const cirlces = [];
(function indicators() {
  const parent = document.getElementById("indicators");
  for (let i = 0; i < slides.length; i++) {
    let element = document.createElement("div");
    element.className = "indi";
    cirlces.push(element);
    parent.appendChild(element);
  }
  cirlces[0].style.opacity = "0.7";
})();
const change = (initial, final) => {
  slides[initial].style.display = "none";
  slides[final].style.display = "block";
  cirlces[initial].style.opacity = "0.4";
  cirlces[final].style.opacity = "0.7";
};
const timeout = () => {
  let initial, final;
  if (slideindex === slides.length - 1) {
    slideindex = 0;
    initial = slides.length - 1;
    final = 0;
  } else {
    initial = slideindex;
    final = ++slideindex;
  }
  change(initial, final);
};

let timing = window.setInterval(timeout, 2000);

const changeSlide = (dir) => {
  window.clearInterval(timing);
  if (dir === 1) {
    if (slideindex !== slides.length - 1) {
      change(slideindex, ++slideindex);
    } else {
      slideindex = 0;
      change(slides.length - 1, 0);
    }
  } else {
    if (slideindex === 0) {
      slideindex = slides.length - 1;
      change(0, slideindex);
    } else {
      change(slideindex, --slideindex);
    }
  }
  timing = window.setInterval(timeout, 2000);
};

const menuToggle = () => {
  const boxes = document.getElementsByClassName("hamburger")[0].children;
  if (!menustate) {
    boxes[0].classList.add("bar1");
    boxes[1].classList.add("bar2");
    boxes[2].classList.add("bar3");
    document.getElementsByClassName("navWrapper")[0].style.right = "0";
    menustate = true;
  } else {
    boxes[0].classList.remove("bar1");
    boxes[1].classList.remove("bar2");
    boxes[2].classList.remove("bar3");
    document.getElementsByClassName("navWrapper")[0].style.right = "-80vw";
    menustate = false;
  }
};
