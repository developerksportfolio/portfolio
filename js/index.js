let mainWrapper = document.getElementById( 'main-wrapper' );
let darkMode    = false;

document.querySelectorAll( '.bounce-animation' ).forEach( ( el ) => {
  el.addEventListener( 'click', handleButtonClick );
} );

function handleButtonClick() {
    if( darkMode ) {
      darkMode = false;
      mainWrapper.classList.add( 'light-mode' );
      mainWrapper.classList.remove( 'dark-mode' );
    } else {
      darkMode = true;
      mainWrapper.classList.add( 'dark-mode' );
      mainWrapper.classList.remove( 'light-mode' );
    }
}

const btncss = document.querySelector('.dropdown-btn-css');
const btnjs = document.querySelector('.dropdown-btn-js');
const btnphp = document.querySelector('.dropdown-btn-php');
const btnsql = document.querySelector('.dropdown-btn-sql');
const menucss = document.getElementById('menucss');
const menujs = document.getElementById('menujs');
const menuphp = document.getElementById('menuphp');
const menusql = document.getElementById('menusql');

btncss.addEventListener('click', () => {
  menucss.style.display = menucss.style.display === 'inline-block' ? 'none' : 'inline-block';
});

btnjs.addEventListener('click', () => {
  menujs.style.display = menujs.style.display === 'inline-block' ? 'none' : 'inline-block';
});

btnphp.addEventListener('click', () => {
  menuphp.style.display = menuphp.style.display === 'inline-block' ? 'none' : 'inline-block';
});

btnsql.addEventListener('click', () => {
  menusql.style.display = menusql.style.display === 'inline-block' ? 'none' : 'inline-block';
});