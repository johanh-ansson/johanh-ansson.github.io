    let titleText = " ✨ 💫  ✨ 💫 ✨ 💫 ✨ 💫 ✨ 💫 ✨ 💫  ✨ 💫 ✨ 💫 ✨ 💫 ✨ 💫 ";
    let position = 0;

    function scrollTitle() {
      document.title = titleText.substring(position) + titleText.substring(0, position);
      position = (position + 1) % titleText.length;
      setTimeout(scrollTitle, 250);
    }

    scrollTitle();