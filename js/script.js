// debounce
const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// animações gerais
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3 / 4));
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

// animar menu
const targetMenu = document.querySelectorAll('[data-menu]');

function menuAnime() {
  targetMenu.forEach(function(element) {
    if((window.pageYOffset) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

// Menu mobile (outside click)
const menuButton = document.querySelector('.check-menu');
const body = document.querySelectorAll('.body-item');

for(let i = 0; i < body.length; i++) {
  body[i].addEventListener('click', function() {
    menuButton.checked = false;
  })
}

// executar funções de animação
if(target.length || targetMenu.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 100));

  window.addEventListener('scroll', debounce(function() {
    menuAnime();
  }, 100));
}

// Modal 
function iniciaModal(modalID) {
  const modal = document.getElementById(modalID);
  modal.classList.add('mostrar');
  modal.addEventListener('click', function(e) {
    if(e.target.id === modalID || e.target.id === "btn-cancelar") {
      modal.classList.remove('mostrar');
    }
  })
}

const email = document.querySelectorAll('.e-mail');
if (email.length) {
  for(let i = 0; i < email.length; i++) {
    email[i].addEventListener('click', function() {
      iniciaModal('modal-contato');
    })
  }
}
