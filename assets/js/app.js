const routes = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
];

// Grab on to DOM Elements
const overlay = $('.overlay');
const header = $('header');
const main = $('main');
const menuNavLink = $('.nav-item a');

$(() => {
  // Toggle Menu
  $('.menu-toggler').on('click', () => {
    $('.nav-drawer').toggleClass('slide');
    $('.menu-toggler-icon').toggleClass('click');
    overlay.toggleClass('show');
  });

  // Set Active Link
  menuNavLink.each((index, value) => {
    if (location.href === value.href) {
      value.classList.add('active');
    }
  });

  const headerHeight = header.innerHeight();

  if (window.pageYOffset > headerHeight) {
    header.addClass('bg');
  } else {
    header.removeClass('bg');
  }

  //  Hide and Display Header on Scroll

  let prevScrollPos = window.pageYOffset;
  document.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > prevScrollPos) {
      header.css({ top: '-100px' });
    } else {
      header.css({ top: '0' });
    }
    prevScrollPos = currentScrollPos;

    if (currentScrollPos > header.innerHeight()) {
      header.addClass('bg');
    } else if (location.pathname !== '/') {
      header.addClass('bg');
    } else {
      header.removeClass('bg');
    }
  });

  if (location.pathname !== '/') {
    main.css({ 'margin-top': `${headerHeight}px` });
    header.addClass('bg');
  }
});
