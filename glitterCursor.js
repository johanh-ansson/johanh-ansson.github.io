document.addEventListener("mousemove", e => {
  const sparkle = document.createElement("div");
  sparkle.innerText = "✨";
  sparkle.style.position = "fixed";
  sparkle.style.left = e.clientX + "px";
  sparkle.style.top = e.clientY + "px";
  sparkle.style.pointerEvents = "none";
  sparkle.style.fontSize = "1rem";
  sparkle.style.opacity = 1;
  sparkle.style.transition = "all 0.5s ease-out";
  document.body.appendChild(sparkle);
  setTimeout(() => {
    sparkle.style.transform = "translateY(-20px)";
    sparkle.style.opacity = 0;
  }, 0);
  setTimeout(() => sparkle.remove(), 500);
});
