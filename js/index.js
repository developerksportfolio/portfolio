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


