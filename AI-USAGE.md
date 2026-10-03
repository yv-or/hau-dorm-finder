# AI-USAGE.md — HAU Dorm Finder

**Repository:** [HAU Dorm Finder](https://github.com/yv-or/hau-dorm-finder)

**Group members**

- **Rovy Dalusung** (`yv-or`) — HTML, JavaScript, page structure, functionality, testing, project integration
- **Angeline Borja** (`borja-angeline`) — CSS, visual styling, responsive layout, presentation materials, video

**AI tools used:** OpenAI Codex and Claude

**Our honest estimate of AI-assisted work:** 70% — We estimate that around 70% of the project was AI-assisted, mainly through generated code suggestions, coding guidance, debugging, explanations, and code review. The remaining part is code we wrote ourselves, and the final implementation was adapted and tested by the group members.

---

# 1. How We Used AI

We used Codex and Claude as development assistants. Most work was done in Visual Studio Code, where we wrote, tested, changed, and combined code, and we shared files with each other through Messenger. AI was used for explaining HTML/JavaScript concepts, suggesting implementations, debugging, and suggesting layout and styling improvements. We tested what it gave us in the browser before keeping it.

> Because we worked locally and pushed to GitHub afterward, some work reached the repository in larger commits. Each link below is the commit where that work first appears. The same commit may be linked in more than one entry.

---

## Entry 1 — HTML and page structure

**Date:** September 23, 2026 · **Tool:** OpenAI Codex

**What we asked:** How to organize the pages: navigation, listing sections, buttons, and forms.

**What AI gave us:** Example HTML structures using common containers and sections.

**What we kept / changed, and why:** We kept the general layout idea because it made the HTML easier to connect to the CSS and JavaScript. We changed the classes, IDs, text, and sections to fit our own pages, for example `#dormGrid`, `#detailContent`, and `#inquiryForm`, which our JavaScript looks for. Rovy did most of the HTML implementation.

**Commit:** [View commit](https://github.com/yv-or/hau-dorm-finder/commit/f3cccf9fa7af6d35e0529d846ddfc849a3d463c4)

---

## Entry 2 — JavaScript for listings and filters

**Date:** September 23, 2026 · **Tool:** OpenAI Codex
    
**What we asked:** How JavaScript could use dorm data and user input to update the listings.

**What AI gave us:** An approach using an array of dorm objects, event listeners, conditions, and a function that redraws the list.

**What we kept / changed, and why:** We kept the approach (data array, event listeners, one render function) because it suits a front-end-only project. We adapted it to our own dorm fields, filter controls, and HTML IDs, and changed parts that did not match the website when we tested it. We changed the generated selectors and data-field references so they matched our actual HTML and `DORM_DATA` structure.

**Commit:** [View commit](https://github.com/yv-or/hau-dorm-finder/commit/ada0a406e529115c600c772080ab93b259f138e5)

---

## Entry 3 — JavaScript debugging

**Date:** September 24, 2026 · **Tool:** Claude

**What we asked:** Why part of our JavaScript was not behaving as expected, what some sections of code were doing, and why the dorm detail page was not consistently loading the selected dorm from the URL.

**What AI gave us:** Possible causes and alternative ways of handling the logic.

**What we kept / changed, and why:** We kept the explanations that matched the real problem and tested each suggestion against our site. We changed selectors and logic so they matched our HTML and data.

**Commit:** [View commit](https://github.com/yv-or/hau-dorm-finder/commit/d87dc154316f0b21dd3337870cbeb74bf530eedc)

---

## Entry 4 — Dorm details page

**Date:** September 27, 2026 · **Tool:** Claude

**What we asked:** How to show the correct dorm's information after the user picks one.

**What AI gave us:** An approach for identifying the selected dorm in JavaScript and displaying its data.

**What we kept / changed, and why:** We kept the idea of passing the dorm in the link (`detail.html?id=`) and looking it up in the data. We adapted it to our HTML and dorm fields, then tested several dorm entries to check the right one showed.

**Commit:** [View commit](https://github.com/yv-or/hau-dorm-finder/commit/d87dc154316f0b21dd3337870cbeb74bf530eedc)

---

## Entry 5 — CSS and responsive design

**Date:** September 27, 2026 · **Tool:** Claude

**What we asked:** How to improve the layout and make the site responsive on different screen sizes.

**What AI gave us:** CSS approaches using responsive grids, flexible layouts, media queries, and cards.

**What we kept / changed, and why:** We kept the general responsive ideas. Angeline adjusted spacing, sizing, colors, typography, cards, and breakpoints in VS Code to match our maroon and gold design, judging the result in the browser.

**Commit:** [View commit](https://github.com/yv-or/hau-dorm-finder/commit/e41ad8df334773b3c20a4e814ac79d382bdf4511)

---

## Entry 6 — Testing and debugging the listings filters

**Date:** September 29, 2026 · **Tool:** OpenAI Codex

**What we asked:** We asked AI to help us check the JavaScript behavior of the dorm listings, especially the search, price range, distance range, and amenity filters.

**What AI gave us:** It suggested ways to organize the filtering logic, render the matching dorm cards, and update the result count.

**What we kept / changed, and why:** We kept the general filtering and rendering approach, but changed the selectors, data references, and conditions to match our actual HTML and `DORM_DATA`. We tested the functions in the browser and kept only the parts that worked with our project.

**Commit:** [View commit](https://github.com/yv-or/hau-dorm-finder/commit/ada0a406e529115c600c772080ab93b259f138e5)

---

# 2. Where the AI Got It Wrong

Each case below is something that actually happened while we built the site.

## Case 1 — JavaScript selectors did not match our HTML

**What AI gave us:** JavaScript that looked for element IDs and classes based on the example structure it generated, including selectors for the search input, filter controls, and dorm listing container.

**What was wrong:** The selectors in the AI's example were based on the structure it invented, not on our real HTML. Our actual elements are `#search`, `#price`, `#distance`, `#dormGrid`, and `[name="amenity"]`. When a selector does not match anything, `querySelector` returns `null`, so the script could not find the search box, the filter controls, or the listing container, and the filters could not work.

**What we did instead:** We checked our actual HTML and changed the selectors to match the elements that really exist in our project. We then tested the search and filters in the browser.

**Commit:** [View commit](https://github.com/yv-or/hau-dorm-finder/commit/ada0a406e529115c600c772080ab93b259f138e5)

## Case 2 — Generated CSS did not match our design

**What AI gave us:** A general responsive card and grid layout for the dorm listings.

**What was wrong:** The generated layout did not match our maroon and gold design. The dorm cards had padding and sizing that differed from what we wanted, and at phone and tablet widths the card columns and spacing did not stay consistent, so the listings looked cramped and uneven compared with the desktop view.

**What we did instead:** Angeline adjusted the CSS by hand in VS Code, changing the spacing, sizing, alignment, colors, cards, and responsive behavior until the pages matched our intended design.

**Commit:** [View commit](https://github.com/yv-or/hau-dorm-finder/commit/e41ad8df334773b3c20a4e814ac79d382bdf4511)

## Case 3 — Amenity filter matched dorms with only one selected amenity

**What AI gave us:** JavaScript for the amenity filter that used `selected.some(...)` to check whether a dorm matched the selected amenities. The logic checked whether the dorm had at least one of the amenities the user selected.

**What was wrong:** The behavior was wrong for our design. If a user selected "Wi-Fi" and "Aircon," a dorm that only had Wi-Fi would still show up in the results, because `some()` returns true as soon as one match is found. We wanted the filter to be stricter: a dorm should only appear if it has every amenity the user selected.

**What we did instead:** We changed the check to `selected.every(...)`, so a dorm is only included when all of the selected amenities are present in its amenity list. We tested it by selecting two amenities and confirming that dorms with only one of them were correctly excluded from the results.

**Commit:** [View commit](https://github.com/yv-or/hau-dorm-finder/commit/ada0a406e529115c600c772080ab93b259f138e5)

---

# 3. Who Wrote What

## `yv-or` — Rovy Dalusung

**What I wrote:** I adapted, wrote, and connected the HTML pages and the JavaScript in `js/listings.js`, `js/detail.js`, and `js/main.js`. Some of it started from AI suggestions (see Section 1), but I changed it to fit our own HTML and `DORM_DATA`, connected the files to each other, and tested everything in the browser. The parts below are the ones I can explain in my own words.

**Commits:** HTML pages: [f3cccf9](https://github.com/yv-or/hau-dorm-finder/commit/f3cccf9fa7af6d35e0529d846ddfc849a3d463c4) · `listings.js`: [ada0a40](https://github.com/yv-or/hau-dorm-finder/commit/ada0a406e529115c600c772080ab93b259f138e5) · `detail.js`: [d87dc15](https://github.com/yv-or/hau-dorm-finder/commit/d87dc154316f0b21dd3337870cbeb74bf530eedc)

### `listings.js` — the `render` function

**Commit:** [View commit](https://github.com/yv-or/hau-dorm-finder/commit/ada0a406e529115c600c772080ab93b259f138e5)

The `render` function handles the current filters in one place. Whenever the search box, a dropdown, or an amenity checkbox changes, it reads the current filter values and checks the dorms inside `DORM_DATA`.

It filters the dorms by the search text, price range, distance range, and selected amenities. For the amenities, `selected.every(...)` makes sure that a dorm has **all** of the amenities the user selected instead of only one of them.

After filtering, `render` updates the number of matching dorms and redraws the dorm cards. If there are no matches, it displays the no-results message.

I used one `render` function for the filters because all of the controls affect the same list of dorms. Calling `render()` once when the page loads also makes sure that the initial results are displayed immediately instead of waiting for the user to interact with a filter.

### `detail.js`

**Commit:** [View commit](https://github.com/yv-or/hau-dorm-finder/commit/d87dc154316f0b21dd3337870cbeb74bf530eedc)

`detail.js` reads the `id` from the URL, such as `detail.html?id=3`, and uses that ID to find the corresponding dormitory inside `DORM_DATA`.

The ID travels in the link because it tells the detail page exactly which dorm the user selected. The page then uses that dorm's information to fill in the title, description, price, location, amenities, and other details.

The fallback protects the page when the ID is missing or does not match a dorm in `DORM_DATA`. Instead of leaving the page empty or causing an error, it uses the first dorm as a fallback.

### One AI-written piece I understand best

**Piece:** The `dormCard` template in `js/listings.js`

**Commit:** [View commit](https://github.com/yv-or/hau-dorm-finder/commit/ada0a406e529115c600c772080ab93b259f138e5)

The `dormCard` template creates the HTML used for each dormitory result. It takes information from a dorm object, such as its name, location, price, image, and other details, and places those values into the card structure.

We kept this approach because generating the card from the dorm data means we do not have to manually write a separate HTML card for every dorm. When the filtered results change, JavaScript can generate the appropriate cards again using the same structure.

I understand the flow like this: `render` filters `DORM_DATA`, then calls `dormCard` once for each dorm that passed. Each call takes one dorm object and puts its name, location, price, and image into the card markup, then returns that HTML as a string. `render` joins all the strings together and puts them inside `#dormGrid`, replacing whatever was there before. That is why changing a filter only needs one `render()` call to redraw everything. If a dorm's data changes in `DORM_DATA`, its card updates automatically without editing any HTML.

---

## `borja-angeline` — Angeline Borja

**What I wrote:** `css/style.css` — the layout, navigation, dorm cards, buttons, forms, colors, spacing, and responsive behavior. I also worked on the PPT, presentation, and video.

**Commit:** [View commit](https://github.com/yv-or/hau-dorm-finder/commit/e41ad8df334773b3c20a4e814ac79d382bdf4511)

I worked on the visual side of the project after Rovy set up the HTML structure. I used the classes and IDs from the HTML to control how each page looks and how the sections are arranged.

I used a grid for the dorm cards instead of floats or plain flexbox because the cards need to line up in equal columns and wrap cleanly when the screen gets narrower. A grid lets me set the number of columns once and change it inside a media query, instead of adjusting each card individually.

The responsive section of the CSS changes the layout at smaller screen sizes. On a phone, the desktop grid was too cramped — the cards were too narrow and the text was hard to read. I added media queries that reduce the number of columns, shrink the padding, and stack the navigation so the site stays usable on a small screen.

I tested the responsive changes by resizing the browser window and checking the pages at phone, tablet, and desktop widths. I adjusted the breakpoints and spacing until the layout looked right at each size.

### One AI-written piece I understand best

**Piece:** The responsive media-query section in `css/style.css`

**Commit:** [View commit](https://github.com/yv-or/hau-dorm-finder/commit/e41ad8df334773b3c20a4e814ac79d382bdf4511)

The responsive section changes parts of the desktop layout when the screen becomes smaller. It adjusts things such as the number of columns, spacing, element sizes, and navigation behavior.

We kept the general media-query approach because CSS media queries are the right tool for making the same website adapt to different screen widths. I then changed the specific values and rules to match the HAU Dorm Finder design — the maroon and gold colors, the card sizing, and the breakpoints that actually looked right when I tested them in the browser.

---

# 4. Our Development Process

We planned the features and design together, then worked locally in VS Code. Rovy mainly handled the HTML and JavaScript, while Angeline mainly handled the CSS, visual styling, and presentation materials.

We used **OpenAI Codex and Claude** when we needed explanations, debugging help, or implementation ideas. We tested the suggestions in our browser before keeping them and changed the generated code when it did not fit our actual project.

Because we worked locally and shared changes through Messenger, the GitHub history does not represent every individual edit or AI interaction. Some related changes were pushed together in larger commits.

The group members reviewed and tested the final implementation rather than accepting AI output without checking it.
