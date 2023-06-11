const header = document.querySelector('header');
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const allLinks = document.querySelectorAll('a:link');

menu.onclick = () => {
  navbar.classList.toggle('active');
};

let darkmode = document.querySelector('#darkmode');
darkmode.onclick = () => {
  if (darkmode.classList.contains('bx-moon')) {
    darkmode.classList.replace('bx-moon', 'bx-sun');
    document.body.classList.add('active');
  } else {
    darkmode.classList.replace('bx-sun', 'bx-moon');
    document.body.classList.remove('active');
  }
};

allLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    //mobile device menu management
    if (link.classList.contains('main-nav-link')) {
      navbar.classList.toggle('active');
    }

    //smooth scrolling for a target link
    const targetLink = document.querySelector(link.getAttribute('href'));
    targetLink.scrollIntoView({
      behavior: 'smooth',
    });
  });
});
