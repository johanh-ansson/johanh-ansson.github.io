function spawnHamster() {
  const gif = document.createElement("img");
  gif.src = "picz/hamster-dance.gif"; 
  gif.className = "spinning-hamster";
  gif.style.position = "fixed";
  gif.style.left = Math.random() * (window.innerWidth - 80) + "px";
  gif.style.top = Math.random() * (window.innerHeight - 80) + "px";
  gif.style.width = "600px";
  gif.style.zIndex = 9999;
  gif.style.pointerEvents = "none";
  document.body.appendChild(gif);

  setTimeout(() => {
    gif.classList.remove("spin-in");
    gif.classList.add("spin-out");
  }, 7000);

  setTimeout(() => gif.remove(), 9000);
}
