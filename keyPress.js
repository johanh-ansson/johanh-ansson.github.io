document.addEventListener("keydown", () => {
  document.body.style.transition = "transform 0.1s";
  document.body.style.transform = "translateX(5px)";
  setTimeout(() => document.body.style.transform = "translateX(-5px)", 50);
  setTimeout(() => document.body.style.transform = "translateX(0)", 100);
});
