# Live app: https://normandboris.github.io/zyarc-react/
# ZyArc – React + Tailwind CSS

A fast food restaurant website rebuilt in React 18, React Router v6, and Tailwind CSS v3.

## Features
- Multi-page SPA (Home, Menu, Gallery, Contact)
- Shopping Cart with Context API + localStorage persistence
- Add / remove / quantity-change / clear cart
- Responsive design matching original brand
- Auto-deployed to GitHub Pages via GitHub Actions

---

## Local Development (VSCode + Ubuntu WSL)

## Project Structure
```
zyarc-react/
├── public/
│   └── images/        
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── CartDrawer.jsx
│   │   ├── Footer.jsx
│   │   └── Logo.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/workflows/deploy.yml
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```
