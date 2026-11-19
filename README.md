# Six Smooth Motion Details — Part 5

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/six-smooth-motion-details/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive, runnable HTML/CSS/JavaScript recreation based on the uploaded 51.33-second video. The opening frame calls it “More smooth details, in slow-mo.” and “PART 5 · 6 NEW DETAILS”.

## Six examples and visible callouts

1. **01 · COPY BUTTON — “Morph, don't swap.”**
   - Share link: `motion.ui/p/5`
   - Button morphs from Copy to Copied.
   - Video callout: `ICON MORPHS · WIDENS 36 px`.

2. **02 · TEXT FIELD — “Float, don't vanish.”**
   - Sign-in email field retains its label as text is entered.
   - Video callout: `LABEL 20 → 14 px · LINE FROM CENTRE`.

3. **03 · CHECKOUT STEPS — “Draw, fill, wake.”**
   - Cart → Shipping → Payment progress indicator.
   - Video callout: `LINE FILLS IN 400 ms`.

4. **04 · MAP PIN — “Drop, then bounce.”**
   - Pin lands and makes two smaller bounces.
   - Video callout: `LANDS IN 200 ms · 2 BOUNCES`.

5. **05 · DELETE — “Fly into the bin.”**
   - File row flies toward the trash and the list closes the gap.
   - Video callout: `FLIES 400 ms · GAP CLOSES`.

6. **06 · PHOTO VIEWER — “Follow, then return.”**
   - Image zooms/follows and springs back to the grid.
   - Video callout: `FOLLOWS 1:1 · SPRINGS HOME`.

## Run locally

No dependencies or build step:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000.

## Files
- `index.html` — six motion demo scenes
- `styles.css` — layout, components and animations
- `app.js` — navigation and interactive motion behaviours
- `README.md` — setup and source notes

## Accuracy note
The video is a visual motion-design explainer, not a complete original source-code listing. The project recreates the six visible UI concepts, labels, example content and timing callouts as working browser demos. It is not the original creator's source code. Animation timings/easing are approximations of the motion shown, and clipboard access is optional; all other interactions are local front-end simulations.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
