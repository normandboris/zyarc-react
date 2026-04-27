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

### Prerequisites
```bash
# Check Node version (need 18+)
node -v

# If not installed:
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Setup
```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/zyarc-react.git
cd zyarc-react

# 2. Install dependencies
npm install

# 3. Copy your images into public/images/
cp /path/to/your/images/* public/images/

# 4. Start dev server
npm run dev
# → Opens at http://localhost:5173/zyarc-react/
```

---

## Deploy to GitHub Pages

### One-time setup
```bash
# 1. Create a new repo on GitHub called "zyarc-react"
# 2. Push your code:
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/zyarc-react.git
git push -u origin main
```

### Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push any commit — the workflow runs automatically
4. Your site will be live at: `https://YOUR_USERNAME.github.io/zyarc-react/`

### Subsequent deploys
```bash
git add .
git commit -m "Update"
git push
# GitHub Actions automatically rebuilds and deploys
```

---

## Project Structure
```
zyarc-react/
├── public/
│   └── images/          ← Put your food/restaurant images here
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
