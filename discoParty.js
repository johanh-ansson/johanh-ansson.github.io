function discoParty() {
  const all = document.querySelectorAll("body *");
  all.forEach(el => {
    el.classList.add("disco");
  });

  const btn = document.querySelector('button[onclick="discoParty()"]');
  if (btn) {
    btn.innerText = "🪩 TOO LATE";
    btn.disabled = true;
    btn.style.opacity = "0.6";
  }

  setTimeout(() => {
    all.forEach(el => {
      el.classList.remove("disco");
    });
    if (btn) {
      btn.innerText = "🪩 BAD IDEA (Again?)";
      btn.disabled = false;
      btn.style.opacity = "1";
    }
  }, 15000);
}
