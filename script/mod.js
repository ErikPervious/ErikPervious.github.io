function mostraAlerta(i) {
  switch (i) {
    case 'github':
      window.open("https://github.com/erikpervious/", "_blank")
      break;
    case 'linkedin':
      window.open("https://www.linkedin.com/in/erikmatheus/", "_blank")
      break;
    case 'youtube':
      window.open("https://youtube.com/erikpervious", "_blank")
      break;
    case 'instagram':
      window.open("https://instagram.com/erik_pervious", "_blank")
      break;
    case 'whatsapp':
      window.open("https://wa.me/+5533998041133/?text=Vim%20Pelo%20Portfolio", "_blank")
      break;
    case 'tiktok':
      window.open("https://www.tiktok.com/@erik_pervious", "_blank")
      break;
    case 'twitter':
      window.open("https://twitter.com/erikpervious", "_blank")
      break;
    case 'facebook':
      window.open("https://www.facebook.com/profile.php?id=100008415363124", "_blank")
      break;
    default:
      alert('apertou')
  }
};

document.getElementById('open-link-svg').onclick = () => {
  window.open("https://github.com/ErikPervious?tab=repositories ", "_blank")
}