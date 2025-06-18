function activateUFO() {
  const btn = document.getElementById("ufoButton");
  btn.disabled = true;
  btn.innerText = "🛸 Abduction in progress...";

  const beam = document.createElement("div");
  beam.id = "ufoBeam";
  beam.style.position = "fixed";
  beam.style.top = "0";
  beam.style.left = "50%";
  beam.style.transform = "translateX(-50%)";
  beam.style.width = "200px";
  beam.style.height = "100vh";
  beam.style.background = "linear-gradient(rgba(0,255,255,0.2), rgba(0,255,255,0.7), rgba(0,255,255,0.1))";
  beam.style.pointerEvents = "none";
  beam.style.zIndex = "9990";
  beam.style.animation = "pulseBeam 1s ease-in-out infinite alternate";
  document.body.appendChild(beam);

  document.querySelectorAll("img").forEach((img, i) => {
    img.classList.add("ufo-abduct");
    img.style.animationDelay = `${i * 0.1}s`;
  });

  setTimeout(() => {
    document.querySelectorAll("img").forEach(img => {
      img.classList.remove("ufo-abduct");
    });
    beam.remove();
    btn.disabled = false;
    btn.innerText = "👽 Again?";
  }, 15000);
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes ufoAbduct {
  0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 1; }
  50% { transform: translateY(-100px) rotate(180deg) scale(0.7); opacity: 0.8; }
  100% { transform: translateY(-1000px) rotate(720deg) scale(0); opacity: 0; }
}

@keyframes pulseBeam {
  from { opacity: 0.3; transform: translateX(-50%) scaleX(1); }
  to { opacity: 1; transform: translateX(-50%) scaleX(1.05); }
}

.ufo-abduct {
  animation: ufoAbduct 2s ease-in-out forwards;
  z-index: 9998 !important;
  position: relative;
}
`;
document.head.appendChild(style);
