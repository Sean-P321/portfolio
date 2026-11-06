# portfolio
First SDET101 Project

Sean Persicano's personal portfolio, built with plain HTML, CSS, and JavaScript.

Live site: [Sean Persicano's portfolio](https://sean-p321.github.io/portfolio/)

## View locally
Download or clone this repository and double-click `index.html`. No installation or build step is required.

## Progress
All five pages (Home, About Me, Projects, Skills, and Contact) share a responsive navigation menu. The Projects page features three projects: SDET 420 Favorite Websites, Currency Exchange Rates, and Random Joke Reader. Both Python notebooks are linked on Google Colab and include owner-provided output screenshots. The Contact page includes a clickable email link to spp@njit.edu.

## Appearance

The Projects page has left and right arrow buttons that cycle through the three projects, wrapping from either end. Use Tab to reach a button and Enter or Space to activate it. A status label announces the current project. Without JavaScript, all projects remain visible.

The Random Joke Reader project includes a JavaScript demo that fetches and displays a joke on request. It requires an internet connection and displays a retry message if the API is unavailable.

Every page defaults to dark mode and includes a Dark mode toggle in the navigation (inside the Menu on phones). Toggle it to switch between light and dark mode. A saved preference takes priority over the default when browser storage is available.

## Project assets

All project images are stored in `images/`:

| Asset | Used for | Source |
| --- | --- | --- |
| [first-website-banner.png](images/first-website-banner.png) | Favorite Websites project banner | Copied from Sean's original NJIT-hosted class website. |
| [currencyExchange.png](images/currencyExchange.png) | Currency Exchange Rates notebook output showing an AUD-to-USD conversion and successful database insertion | Screenshot supplied by Sean. |
| [joke.png](images/joke.png) | Random Joke Reader notebook output showing a joke setup and punchline | Screenshot supplied by Sean. |

The live URL was verified on November 5, 2026: HTTP 200 with the page title "Sean Persicano | Personal Portfolio".
