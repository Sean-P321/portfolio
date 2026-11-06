# Portfolio test plan

Run browser cases locally by double-clicking index.html and again on the verified GitHub Pages URL. The exact live URL has not yet been recorded as verified. Automated browser checks on 2026-11-05 could not run because no connected browser was available. Owner-reported manual results are recorded below. Not run does not mean Pass.

| ID | What is tested | Steps | Expected result | Local actual | Live actual |
| --- | --- | --- | --- | --- | --- |
| T01 | Navigation on every page | On each of the five pages, click every main navigation link. | All five destinations open correctly from every page. | Pass (owner tested) | Pass (owner tested) |
| T02 | Phone layout on every page | Open every page at 375px width and inspect all content. | Readable single-column layout without sideways scrolling. | Not run | Not run |
| T03 | Laptop layout on every page | Open every page at 1366px width and inspect all content. | Clear navigation, readable spacing, and intact cards. | Not run | Not run |
| T04 | Keyboard on every page | Use Tab, Shift+Tab, and Enter through each page, including the skip link. | Visible focus, logical order, working links, no traps. | Not run | Not run |
| T05 | Mobile menu | At phone width, open and close Menu; press Escape; resize to laptop. | Menu and aria-expanded stay synchronized; Escape returns focus. | Not run | Not run |
| T06 | Theme | With no saved preference, load each page; toggle theme with keyboard. | Dark default, both themes readable, aria-pressed synchronized. | Not run | Not run |
| T07 | Theme storage | Save light mode, reload, then visit another page; repeat with storage blocked. | Preference persists when available; blocked storage causes no error. | Not run | Not run |
| T08 | Carousel initial state | Open Projects with JavaScript enabled. | Only first project is visible; status says 1 of 3 with its title. | Not run | Not run |
| T09 | Carousel cycling | Click right three times, then left from first project. | Forward cycle returns to first; left from first shows third; titles update. | Not run | Not run |
| T10 | Carousel keyboard and accessibility | Tab to both arrows; use Enter and Space; inspect focus and screen-reader status. | Buttons retain focus; hidden project links are skipped; current title is announced. | Not run | Not run |
| T11 | No JavaScript | Disable JavaScript and reload every page. | Navigation remains usable; all three projects appear; carousel buttons are hidden. | Not run | Not run |
| T12 | Images and links | Inspect all images; open project links and contact email. | Images load with useful alt text; links reach intended destinations. | Not run | Not run |
| T13 | Joke demo | Cycle to Joke Reader; request and download a joke; repeat offline. | Setup and punchline appear; download matches; failure gives retry text. | Not run | Not run |
| T14 | Console | Load every page and exercise interactions with console open. | No uncaught errors. | Not run | Not run |
| T15 | Accessibility | Run Lighthouse Accessibility on each of the five pages. | Each page scores at least 90; record actual scores. | Not run | Not run |
| T16 | Carousel in both themes and sizes | Cycle all cards at 375px and 1366px in light and dark modes. | Arrows, status, cards and focus remain visible without overflow. | Not run | Not run |

## Checks performed on 2026-11-05

- Pass: JavaScript parsed successfully using Node's vm.Script.
- Pass: Executed the carousel code with DOM stubs: first slide, full forward cycle, wrap in both directions, matching status text, one visible card, and revealed controls. This checks logic only, not browser behavior or accessibility.
- Pass: git diff --check found no whitespace errors.
- T01: Owner confirmed all five navigation links on each of the five pages passed both locally and live. Recorded on 2026-11-05; these are owner-reported manual results, not agent-run browser checks.
- Remaining browser, keyboard, phone/laptop, console, and Lighthouse checks: Not run. No connected browser was available for agent testing. No Lighthouse scores claimed.

Record initial browser failures, fixes, and retest results here when those checks are run.

## Currency Exchange Rates image update (2026-11-05)

- Pass: Inspected the supplied screenshot and confirmed its file size is 44,044 bytes (under 500 KB).
- Pass: Source review confirms the relative image path appears after the project description and before its notebook link, with meaningful alt text and the existing responsive project-image class.
- Phone/laptop layout and keyboard checks after this update: Not run; no connected browser was available. T01's owner-reported results above predate this image update.
