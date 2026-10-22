const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

if (menuButton && navigation) {
  const mobileScreen = window.matchMedia('(max-width: 600px)');

  function setMenuOpen(open) {
    menuButton.setAttribute('aria-expanded', String(open));
    navigation.dataset.open = String(open);
  }

  function syncMenu() {
    menuButton.hidden = !mobileScreen.matches;
    setMenuOpen(!mobileScreen.matches);
  }

  menuButton.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  navigation.addEventListener('click', (event) => {
    if (mobileScreen.matches && event.target.closest('a')) {
      setMenuOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileScreen.matches && navigation.dataset.open === 'true') {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  mobileScreen.addEventListener('change', syncMenu);
  syncMenu();
}
