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
const preloader = $('.preloader-wrapper');
const menuNavLink = $('.nav-item a');

const moveToTopBtn = $('.move-top-wrapper');

$(window).on('load', () => {
  preloader.hide();
});

$(() => {
  // Toggle Menu
  $('.menu-toggler').on('click', () => {
    $('.nav-drawer').toggleClass('slide');
    $('.menu-toggler-icon').toggleClass('click');
    overlay.toggleClass('show');
  });

  // Hide/Show Move To Top Button
  $(window).on('scroll', () => {
    if (window.pageYOffset > header.innerHeight()) {
      moveToTopBtn.show();
    } else {
      moveToTopBtn.hide();
    }
  });

  // Scroll To Top
  moveToTopBtn.on('click', () => {
    $(window).scrollTop(0);
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
