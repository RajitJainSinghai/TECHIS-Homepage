// open area for home merit section
const meritItems = document.querySelectorAll('.merit-msg__item');
meritItems.forEach((item) => {
  item.addEventListener('click', () => {
    const meritBtn = item.querySelector('.merit-msg__subttl');
    const meritMsg = meritBtn.nextElementSibling;
    if(meritMsg.classList.contains('active')) {
      meritMsg.classList.remove('active');
      meritBtn.classList.remove('active');
    } else {
      meritMsg.classList.add('active');
      meritBtn.classList.add('active');
    }
  })
});

// gnav course sp
const gnavBtn = document.querySelector('.gnav__item.wrap');
const gnavSubList = document.querySelector('.gnav__sublist');
gnavBtn.addEventListener('click', () => {
  if(gnavSubList.classList.contains('active')) {
    gnavSubList.classList.remove('active');
  } else {
    gnavSubList.classList.add('active');
  }
});
document.addEventListener('click', (e) => {
  if(!e.target.closest('.gnav__item.wrap')) {
    if(gnavSubList.classList.contains('active')) {
      gnavSubList.classList.remove('active');
    }
  }
})
