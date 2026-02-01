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

const btnAi = document.querySelector('.dropdown-btn-ai');
const btnGit = document.querySelector('.dropdown-btn-git');
const btnApi = document.querySelector('.dropdown-btn-api');
const btnApp = document.querySelector('.dropdown-btn-app');
const btnFrontend = document.querySelector('.dropdown-btn-frontend');
const btnBackend = document.querySelector('.dropdown-btn-backend');
const btnWeb = document.querySelector('.dropdown-btn-web');
const btnWebFrontend = document.querySelector('.dropdown-btn-web-frontend');
const btnWebBackend = document.querySelector('.dropdown-btn-web-backend');
const btnDatabases = document.querySelector('.dropdown-btn-databases');
const btnServices = document.querySelector('.dropdown-btn-services');
const btnDevops = document.querySelector('.dropdown-btn-devops');
const menuAi = document.getElementById('menu-ai');
const menuGit = document.getElementById('menu-git');
const menuApi = document.getElementById('menu-api');
const menuApp = document.getElementById('menu-app');
const menuFrontend = document.getElementById('menu-frontend');
const menuBackend = document.getElementById('menu-backend');
const menuWeb = document.getElementById('menu-web');
const menuWebFrontend = document.getElementById('menu-web-frontend');
const menuWebBackend = document.getElementById('menu-web-backend');
const menuDatabases = document.getElementById('menu-databases');
const menuServices = document.getElementById('menu-services');
const menuDevops = document.getElementById('menu-devops');

btnAi.addEventListener('click', () => {
  menuAi.style.display = menuAi.style.display === 'inline-block' ? 'none' : 'inline-block';
});

btnGit.addEventListener('click', () => {
  menuGit.style.display = menuGit.style.display === 'inline-block' ? 'none' : 'inline-block';
});

btnApi.addEventListener('click', () => {
  menuApi.style.display = menuApi.style.display === 'inline-block' ? 'none' : 'inline-block';
});

btnApp.addEventListener('click', () => {
  menuApp.style.display = menuApp.style.display === 'inline-block' ? 'none' : 'inline-block';
});

btnFrontend.addEventListener('click', () => {
  menuFrontend.style.display = menuFrontend.style.display === 'inline-block' ? 'none' : 'inline-block';
});

btnBackend.addEventListener('click', () => {
  menuBackend.style.display = menuBackend.style.display === 'inline-block' ? 'none' : 'inline-block';
});

btnWeb.addEventListener('click', () => {
  menuWeb.style.display = menuWeb.style.display === 'inline-block' ? 'none' : 'inline-block';
});

btnWebFrontend.addEventListener('click', () => {
  menuWebFrontend.style.display = menuWebFrontend.style.display === 'inline-block' ? 'none' : 'inline-block';
});

btnWebBackend.addEventListener('click', () => {
  menuWebBackend.style.display = menuWebBackend.style.display === 'inline-block' ? 'none' : 'inline-block';
  menuWebBackend.style.marginTop = '0';
});

btnDatabases.addEventListener('click', () => {
  menuDatabases.style.display = menuDatabases.style.display === 'inline-block' ? 'none' : 'inline-block';
});

btnServices.addEventListener('click', () => {
  menuServices.style.display = menuServices.style.display === 'inline-block' ? 'none' : 'inline-block';
});

btnDevops.addEventListener('click', () => {
  menuDevops.style.display = menuDevops.style.display === 'inline-block' ? 'none' : 'inline-block';
});