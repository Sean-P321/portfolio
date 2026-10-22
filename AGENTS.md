# Personal Portfolio

## Purpose and pages
Build a public personal portfolio for a class assignment using plain HTML, CSS, and JavaScript. Keep the code beginner-friendly so the owner can review and explain it during a three-minute demo.

Create five pages with shared navigation linking to all five pages on every page:
- `index.html`: a brief personal introduction.
- `about.html`: background, education, and interests.
- `projects.html`: at least three real projects, each with a description, image or screenshot, and a link when applicable. Class projects count.
- `skills.html`: technical skills and honest proficiency descriptions.
- `contact.html`: an approved public email address or other approved contact method.

The owner has approved `spp@njit.edu` as the public contact email. Display it as a mailto link without a placeholder warning.

Ask the owner for missing personal details, project information, screenshots, and contact information when needed. Do not invent credentials, projects, or personal history. Do not leave placeholder text or empty sections in the finished site.

## Design direction
Use this initial design unless the owner requests a change; update this file when the design changes.
- Style: clean, modern, and approachable, with a subtle springtime feel, generous spacing, simple project cards, and clear navigation. Keep most surfaces neutral; use pastel green sparingly for accents and occasional section backgrounds. Avoid bright greens, busy floral decorations, and heavy gradients.
- Colors: warm off-white background (`#FAFBF7`), white cards (`#FFFFFF`), pale sage accents (`#E4EFDF`), soft green borders (`#CDDCC7`), dark charcoal-green text (`#25332A`), muted text (`#526155`), and restrained deep green links and primary buttons (`#356044`, with white button text). Use pastel colors for surfaces and accents, with darker colors for readable text and controls. Verify contrast for each actual use.
- Fonts: a local system sans-serif stack such as `Arial, Helvetica, sans-serif`; no external font dependency.
- Layout: readable content width, flexible grids, and a single-column layout on small screens. Avoid sideways scrolling.
- Use consistent headers, footers, spacing, colors, and typography across all pages. Provide visible hover and keyboard focus states.

## Implementation rules
- Use semantic HTML5, one external stylesheet (`css/styles.css`), and external JavaScript (`js/main.js`). Keep images in `images/`.
- Plain HTML, CSS, and JavaScript only. No backend, database, login, frameworks, libraries, npm, or build tools. Do not use React, Vue, Tailwind, or Bootstrap.
- Every page must work when `index.html` is opened by double-clicking it and when hosted under the GitHub Pages `/portfolio/` path.
- Use relative file paths, including navigation and asset paths. Avoid root-relative paths and features requiring a server, such as fetching local page fragments.
- Use semantic elements such as `header`, `nav`, `main`, `section`, and `footer`. Use exactly one `h1` per page and a logical heading order.
- Do not use inline styles. Use media queries for phone and laptop layouts.
- Implement at least two JavaScript features: a responsive navigation menu that opens and closes, plus an accessible light/dark mode toggle. Keep the code small and understandable. Preserve the subtle green palette in both themes, default to light mode, and remember the visitor's choice when browser storage is available.
- Use a real button for the mobile menu, maintain `aria-expanded`, and support keyboard interaction. Keep navigation usable if JavaScript is unavailable.
- If the owner requests a contact form, label fields, validate valid and invalid input with JavaScript, explain that it cannot send messages, and direct visitors to email. Never claim a message was sent.
- Keep each image under 500 KB. Add meaningful alt text to informative images and empty alt text to purely decorative images.
- Ensure keyboard access, visible focus, sufficient color contrast, and reduced-motion support if animations are added. Aim for a Lighthouse Accessibility score of at least 90 on every page.
- Never add API keys, passwords, tokens, phone numbers, or home addresses to this public repository. Obtain the owner's choice of public contact information.

## Working process and Git
- Work on one small task at a time. Read existing files before editing and keep changes limited to the requested task.
- Explain what changed and how it was checked so the owner can review and understand the code.
- After each task, check the affected pages locally, at phone and laptop widths, and with the keyboard. Report any checks that could not be run; do not claim unperformed checks passed.
- Commit completed task changes with a clear, specific message, then push to GitHub. Follow any required push approval prompt. Do not include unrelated owner changes in a commit.
- If GitHub access, a remote, or deployment settings are missing, report the missing setup instead of claiming deployment succeeded.
- Use revert commits to undo committed changes. Do not reset shared history or force push.
- Build incrementally over multiple days as the owner works through the assignment. Never fabricate commit dates or history.

## Testing and completion
- Maintain `TESTING.md` with at least 12 test cases. Each case needs an ID, what is tested, steps, expected result, and actual result (Pass or Fail once run; mark unrun cases as Not run).
- Cover every navigation link on every page, every page at phone and laptop widths, every JavaScript feature, keyboard navigation with Tab and Enter on every page, and Lighthouse Accessibility on every page. Test both valid and invalid form input if a form exists.
- Check that images and links work and the browser console has no errors.
- Run the test plan on the live GitHub Pages site as well as checking locally. Record actual results, including initial failures, fixes, and retest results. Do not invent Lighthouse scores or live test results.
- Deployment target: the public `portfolio` repository, GitHub Pages using branch `main` and folder `/` (root). Verify the actual live URL before recording it.
- Keep `README.md` current with a project description, verified live site link, local viewing instructions, and acknowledgments or asset credits.
- When requested, help prepare the one- to two-page report with repository and live links at the top, features, challenges and solutions, a real Codex mistake and correction, and phone and laptop screenshots. Do not fabricate experiences or screenshots.
- Before calling the project complete, verify all five pages contain real content, at least three projects are present, the two interactions work, required live tests are recorded, and the owner can explain the JavaScript.
