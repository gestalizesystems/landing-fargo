# Fargo Premium

Marketing website for Fargo, a premium pet nutrition brand.

## Overview

Fargo Premium is a single-page marketing website built to present a pet food brand's product line and value proposition to two distinct audiences: consumers evaluating nutrition options for their pets, and commercial partners (pet shops, veterinary clinics, and distributors) evaluating the brand for resale.

The site is implemented as a static, dependency-free front end. There is no backend, build pipeline, or content management system involved. All content is authored directly in HTML and rendered without a framework.

## Business Problem

Premium pet food brands typically need to address two different buyer journeys on the same site: the end consumer looking for product quality and trust signals, and the commercial partner evaluating margins, logistics, and brand growth potential. Serving both audiences usually results in either a fragmented set of pages or a diluted message that fails to fully address either group.

## Solution

The site is structured as a single continuous narrative that progressively builds trust and leads toward one of two outcomes: product purchase or partnership inquiry. Product information, brand credibility signals, and commercial partnership content share the same visual language and information hierarchy, so the experience does not feel like two separate sites stitched together.

Because the front end has no server dependency, the site can be deployed to any static hosting provider with no runtime infrastructure to manage.

## Key Features

- Responsive layout, optimized from mobile through desktop breakpoints
- Product catalog segmented by category (dry food, wet food, canned food, litter) with client-side filtering
- Product detail modal with focus management and keyboard support
- Testimonials carousel with autoplay and manual navigation
- Accordion-based FAQ section
- Scroll-triggered reveal animations and animated counters, with a reduced-motion fallback
- Dual conversion paths: product purchase and commercial partnership inquiry
- Structured metadata for search engines and social sharing (Open Graph, Twitter Card, Schema.org)
- Mobile viewport hardening: pinch-zoom and overscroll bounce are disabled to keep the layout stable during touch interaction

## Architecture Overview

The project follows a static site architecture with no build step:

- A single HTML document defines page structure and content.
- CSS is split by responsibility: design tokens, base styles, component styles, responsive overrides, and animations.
- JavaScript is split by responsibility: one module for user interactions (navigation, tabs, modal, carousel, form handling) and one module for scroll-based animation effects.
- All interactive behavior is implemented with vanilla DOM APIs, initialized on `DOMContentLoaded`, with each feature isolated in its own function and guarded against missing markup.
- There is no client-side routing, no state management layer, and no external JavaScript dependency.

## Technology Stack

- HTML5, semantic markup with accessibility attributes (ARIA roles, states, and labels)
- CSS3, using custom properties for design tokens and a mobile-first responsive strategy
- Vanilla JavaScript (ES2015+), no frameworks or third-party libraries
- Google Fonts (Fraunces, Plus Jakarta Sans)
- Inline SVG icon set

## Project Structure

```
.
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
├── js/
│   ├── main.js
│   └── animations.js
└── assets/
    ├── images/
    └── icons/
```

## Screenshots

Screenshots to be added.

## Future Improvements

- Integration with an e-commerce checkout or order management system
- Externalizing product data into a structured content source rather than inline markup
- Automated visual regression and accessibility testing
- Real photography for brand, facility, and lifestyle sections, replacing the current graphic treatment used as a placeholder
- Internationalization support beyond Brazilian Portuguese

## License

This project is proprietary. All rights reserved.
