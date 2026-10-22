const themeButton = document.querySelector('.theme-toggle');

if (themeButton) {
  // Keep the site usable even when the browser blocks saved preferences.
  let savedTheme;
  try {
    savedTheme = localStorage.getItem('portfolio-theme');
  } catch (error) {
    savedTheme = null;
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
  }

  applyTheme(savedTheme === 'dark' ? 'dark' : 'light');
  themeButton.hidden = false;

  themeButton.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch (error) {
      // The toggle still works for this page if storage is unavailable.
    }
  });
}

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
