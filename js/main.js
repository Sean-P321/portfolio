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
    themeButton.textContent = theme === 'dark' ? 'Dark mode: ON' : 'Dark mode: OFF';
  }

  applyTheme(savedTheme === 'light' ? 'light' : 'dark');
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

const jokeButton = document.querySelector('#joke-button');

if (jokeButton) {
  const setup = document.querySelector('#joke-setup');
  const punchline = document.querySelector('#joke-punchline');
  const download = document.querySelector('#joke-download');
  let downloadUrl;
  jokeButton.hidden = false;

  jokeButton.addEventListener('click', async () => {
    jokeButton.disabled = true;
    setup.textContent = 'Loading a joke...';
    punchline.textContent = '';
    download.hidden = true;
    if (downloadUrl) {
      URL.revokeObjectURL(downloadUrl);
      downloadUrl = null;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke', {
        signal: controller.signal
      });
      if (!response.ok) throw new Error('Joke request failed');
      const joke = await response.json();
      if (typeof joke.setup !== 'string' || !joke.setup.trim() ||
          typeof joke.punchline !== 'string' || !joke.punchline.trim()) {
        throw new Error('Invalid joke response');
      }

      // Treat API content as text, never HTML.
      setup.textContent = joke.setup;
      punchline.textContent = joke.punchline;
      const file = new Blob([`${joke.setup}\n${joke.punchline}\n`], { type: 'text/plain;charset=utf-8' });
      downloadUrl = URL.createObjectURL(file);
      download.href = downloadUrl;
      download.hidden = false;
    } catch (error) {
      setup.textContent = 'Could not load a joke. Please try again.';
      punchline.textContent = '';
    } finally {
      clearTimeout(timeout);
      jokeButton.disabled = false;
    }
  });
}
