document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 768) {
    const targets = document.querySelectorAll(
      ".sidebar .content h3, .sidebar .content label, .sidebar .content ul li"
    );

    targets.forEach((el) => {
      const text = el.innerText.trim();
      if (text.length === 0) return;

      const wrapper = document.createElement("div");
      wrapper.classList.add("marquee-wrapper");

      const span = document.createElement("span");
      span.classList.add("marquee-text");
      span.innerText = text;

      wrapper.appendChild(span);
      el.innerText = "";
      el.appendChild(wrapper);
    });
  }
});