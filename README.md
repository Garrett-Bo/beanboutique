
# Bean Boutique

> A modern, standards-compliant coffee shop website built with HTML, CSS, and JavaScript.

## Overview

Bean Boutique is a responsive, accessible, and visually appealing website for a specialty coffee shop. It features a product catalog, event calendar, shopping cart, subscription registration, and special offers. The site is designed for both desktop and mobile users, with a focus on clean UI, accessibility, and W3C HTML/CSS compliance.

## Features

- **Home Page:** Hero slider, featured products, event highlights, and about section.
- **Coffee Catalog:** Product cards for various coffee drinks, with search and add-to-cart functionality.
- **Events:** Calendar of upcoming events, accessible registration modal, and ARIA-compliant forms.
- **Offers:** Special deals, bundles, and subscription promotions.
- **Cart:** Interactive shopping cart with payment options (Visa, PayPal, Bank), dynamic field toggling, and order summary.
- **Subscription:** Registration form for coffee subscriptions, with success feedback.
- **Mobile Navigation:** Responsive menu and dropdowns, unified across all pages.
- **Accessibility:** ARIA roles, labels, and keyboard-friendly navigation.
- **W3C Compliance:** No inline styles; all layout and modal styles are in CSS files.

## Tech Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Modular, mobile-first styles (`hompage.css`, `event.css`, `cart.css`, etc.)
- **JavaScript** — Vanilla JS for interactivity (cart, modals, navigation)

## File Structure

```
beanboutique/
├── index.html
├── coffee.html
├── events.html
├── offers.html
├── cart.html
├── subscription.html
├── css/
│   ├── hompage.css
│   ├── event.css
│   ├── cart.css
│   └── ...
├── assets/
│   └── cart-functions.js
├── image/
│   └── [all images, renamed descriptively]
└── README.md
```

## How to Use

1. **Clone or download** this repository.
2. Open any HTML file in your browser (no build step required).
3. All features work client-side; no backend is needed.

## Customization

- Update product cards, event details, and images as needed.
- Edit CSS files for branding or layout changes.
- All images are referenced with descriptive names for easy swapping.

## Accessibility & Compliance

- All forms have proper labels and ARIA attributes.
- Modal dialogs are accessible and keyboard-friendly.
- No inline styles; all layout and modal styles are in CSS files.
- Validated for W3C HTML/CSS compliance.

## Credits

- UI/UX: In-house design, no templates used.
- Images: Stock and generated images, all renamed for clarity.
- Fonts: [Inter](https://fonts.google.com/specimen/Inter), [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)

---

For questions or contributions, please open an issue or pull request.
