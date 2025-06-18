function discoParty() {
  const all = document.querySelectorAll("*");
  all.forEach(el => {
    el.style.transition = "all 0.2s ease";
    el.style.animation = "disco 0.4s infinite alternate";
  });
}
