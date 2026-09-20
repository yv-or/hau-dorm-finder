# HAU Dorm Finder

**Project members:** Rovy Dalusung and Angeline Borja  
**Repository:** [github.com/yv-or/hau-dorm-finder](https://github.com/yv-or/hau-dorm-finder)  
**Live site:** [yv-or.github.io/hau-dorm-finder](https://yv-or.github.io/hau-dorm-finder)

## Overview

HAU Dorm Finder is a student project that helps Holy Angel University students explore dormitory and boarding-house options near campus. It gathers sample information about price, distance, amenities, and contact details so students can compare options more easily.

The project responds to a common student concern: finding safe and affordable accommodation without relying only on social-media posts or word of mouth.

## How to view it

**Live:** Open [yv-or.github.io/hau-dorm-finder](https://yv-or.github.io/hau-dorm-finder) in any browser.

**Locally:** Clone or download the repository and open `index.html` in your browser.

```bash
git clone https://github.com/yv-or/hau-dorm-finder.git
cd hau-dorm-finder
# Open index.html in your browser
```

## Pages and features

| Page | What it does |
| --- | --- |
| **Home** (`index.html`) | Introduces the project, explains why students need it, and shows three featured dorms to start exploring. |
| **Listings** (`listings.html`) | Shows all sample dorms with live search and filtering by price range, distance, and amenities. Results update instantly without reloading. |
| **Dorm Details** (`detail.html`) | Displays full information for a selected dorm: monthly rent, description, amenities, address, distance from HAU, and contact number. |
| **Contact** (`contact.html`) | Provides project contact and a demo inquiry form with confirmation feedback. |

## How it is built

- **HTML5** — Semantic structure and accessibility
- **CSS3** — HAU-inspired maroon (#8B1538), gold (#D4AF37), and white design with responsive layout
- **JavaScript** — Live search/filters, dorm details routing, and form handling
- **Data** — Sample dorms stored in `assets/data/dorms.js` with fallback for local file access

## Project structure

```text
hau-dorm-finder/
├── index.html              # Home page
├── listings.html           # Search and filter page
├── detail.html             # Dorm information page
├── contact.html            # Inquiry page
├── css/
│   └── style.css           # Styling and responsive layout
├── js/
│   ├── main.js             # Navigation and contact-form behavior
│   ├── listings.js         # Search, filters, and dorm cards
│   └── detail.js           # Dorm details page logic
├── assets/
│   ├── data/
│   │   └── dorms.js        # Sample dorm data
│   └── images/             # HAU seal
├── REPORT.md               # Weekly project report
├── DIVISION.md             # Weekly division of work
└── journal/                # Weekly reflection entries
```

## Key features

✅ **Live search** — Filter dorms by name or area in real time  
✅ **Dynamic filtering** — Narrow results by price, distance, and amenities  
✅ **Responsive design** — Works on phone and desktop  
✅ **Dorm comparison** — View full details side-by-side  
✅ **HAU branding** — University colors and seal throughout  

## Known issues and next steps

- **Sample data:** All dorm listings, phone numbers, and descriptions are sample data for this school project.
- **Contact form:** Demo form shows confirmation but does not send email.
- **Future improvements:** Verified dorm-owner submissions, real reviews, map integration, real photos, working inquiry system.

## Presentation materials

- **Video walkthrough:** (Link to Google Drive video — 3–5 min)
- **Slides:** `HAU-Dorm-Finder-Presentation.pptx`
- **Square image:** `HAU-Dorm-Finder-Square-Image.png` (1080 × 1080)

## Credits

Created by Rovy Dalusung and Angeline Borja for Holy Angel University.  
Inspired by student feedback and the need for easier dorm searching.
