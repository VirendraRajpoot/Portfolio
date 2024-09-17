// Typed Animation
var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

// About Us
const button = document.querySelector(".btn-box");
const aboutus = document.querySelector(".aboutus");
button.addEventListener("click", () => {
  if (aboutus.style.display === "none") {
    aboutus.style.display = "block";
  } else {
    aboutus.style.display = "none";
  }
});

// Education,skills,projects and contect Animation
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".container .items .item");
  const skillItems = document.querySelectorAll(".skills .skill .skill-item");
  const projects = document.querySelectorAll(
    ".Projects .Project .project-item"
  );

  const onScroll = () => {
    const windowHeight = window.innerHeight;

    const addAnimationClass = (element, animationClass) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < windowHeight - 50) {
        element.classList.add(animationClass);
      }
    };

    items.forEach((item) => addAnimationClass(item, "zoom-in"));
    skillItems.forEach((item) => addAnimationClass(item, "flip-in"));
    projects.forEach((item) => addAnimationClass(item, "spasile-animation"));
  };

  window.addEventListener("scroll", onScroll);
  onScroll();
});
