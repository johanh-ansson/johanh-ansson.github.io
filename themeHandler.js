function applyBackgrounds() {
  const headerColor = document.getElementById('headerColor').value;
  const bgUrl = document.getElementById('bgUrl').value;

  if (headerColor) {
    document.querySelector('header').style.background = headerColor;
  }
  const imgurPattern = /^https?:\/\/(i\.)?imgur\.com\/.+/i;
  if (bgUrl && imgurPattern.test(bgUrl)) {
    document.body.style.background = `url('${bgUrl}') repeat`;
  } else if (bgUrl) {
    alert("Only Imgur image URLs are allowed.");
  }
}

function applyTheme() {
  const theme = document.getElementById('themeSelect').value;
  const body = document.body;
  const header = document.querySelector('header');

  switch (theme) {
    case 'goth':
      header.style.background = "url('themez/1.gif') repeat";
      body.style.background = "url('themez/2.gif') repeat";
      break;
    case 'vapor':
      header.style.background = "url('themez/3.gif') repeat";
      body.style.background = "url('themez/4.gif') repeat";
      break;
    case 'matrix':
      header.style.background = "url('themez/5.gif') repeat";
      body.style.background = "url('themez/6.gif') repeat";
      break;
    case 'gaga':
      header.style.background = "url('themez/7.gif') repeat";
      body.style.background = "url('themez/8.gif') repeat";
      break;
    case 'princess':
      header.style.background = "url('themez/9.gif') repeat";
      body.style.background = "url('themez/10.gif') repeat";
      break;
    default:
      header.style.background = '#000000';
      body.style.background = "url('0.gif') repeat";
      break;
  }
}