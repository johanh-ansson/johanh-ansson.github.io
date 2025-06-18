function createStars() {
  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.textContent = '✨';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * -100 + 'vh';
    star.style.animationDuration = 3 + Math.random() * 5 + 's';

    star.addEventListener('click', function (e) {
      for (let j = 0; j < 6; j++) {
        const glitter = document.createElement('div');
        glitter.className = 'glitter';
        glitter.textContent = '✨';
        glitter.style.left = e.pageX + (Math.random() * 40 - 20) + 'px';
        glitter.style.top = e.pageY + (Math.random() * 40 - 20) + 'px';
        document.body.appendChild(glitter);
        setTimeout(() => glitter.remove(), 600);
      }
      this.remove();
    });

    document.body.appendChild(star);
  }
}

createStars();