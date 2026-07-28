# 🔓 Password Cracker

A simple, front-end brute-force password guessing **simulation** built for the [Australian Schools Cyber Challenge 2025](https://www.ascc.cyberpathways.com.au/). Enter a password and watch a step-by-step visualisation of how a basic character-matching algorithm would "crack" it, complete with elapsed time and attempt tracking.

**🔗 Live demo:** [simple-password-cracker.netlify.app](https://simple-password-cracker.netlify.app/)

## About

This tool was built as an educational demonstration for students taking part in the Australian Schools Cyber Challenge, run in partnership with [Cyber Pathways](https://cyberpathways.com.au/). It illustrates — in a safe, self-contained way — the *concept* behind brute-force password guessing, helping learners understand why password length, complexity, and unpredictability matter.

> **Note:** This is a simulation for teaching purposes only. It does not perform real cryptographic cracking, hashing, or attacks against any system — it simply walks through a password character-by-character against a known dictionary and reports on progress and timing.

## Features

- 🔑 Enter any password and simulate a "crack" attempt
- 📊 Live progress feed showing each character as it's matched
- ⏱️ Elapsed time tracking (milliseconds/seconds)
- 🐍 View the equivalent Python implementation
- 🟨 View the equivalent JavaScript implementation
- 🔄 Clear/reset progress at any time
- 📱 Responsive layout for mobile, tablet, and desktop

## How It Works

1. Enter a password and hit **"Crack Password."**
2. The tool simulates a brute-force attempt, matching each character against a dictionary of common characters (lowercase, uppercase, digits, and symbols).
3. Progress is logged in real time, along with a small random delay per character to simulate processing.
4. The elapsed time and final cracked result are displayed.
5. Use the **Clear Progress** button to reset and try again.

## Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure |
| **CSS3** | Styling, layout, and responsive design |
| **JavaScript (Vanilla)** | Brute-force simulation logic and UI interactivity |
| Remix Icon / Font Awesome | Iconography |

## Project Structure

```
├── index.html
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── media-queries.css
│   ├── js/
│   │   ├── index.js          # Form handling & UI updates
│   │   ├── tab.js             # Tab switching & code viewer
│   │   └── brute-force.js     # Core cracking simulation logic
│   └── img/
│       ├── hexagonal-bg.jpg
│       ├── CyberPathways_WHITE.svg
│       └── cyberpathways-logo.svg
└── README.md
```

## Getting Started

Clone the repo and open `index.html` in your browser — no build step or dependencies required.

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
open index.html
```

## Credits

Built for the [Australian Schools Cyber Challenge](https://www.ascc.cyberpathways.com.au/) in partnership with [Cyber Pathways](https://cyberpathways.com.au/).

## License

© 2025 Tia Darvell. All Rights Reserved.
