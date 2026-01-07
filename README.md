# Modern Developer Portfolio

A sleek, modern portfolio website built with **React + Vite + TailwindCSS**. Features a professional dark theme, smooth animations, and EmailJS integration for the contact form.

## ✨ Features

- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎨 **Modern Design** - Clean, professional dark theme with teal accents
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- 🌊 **Smooth Animations** - Professional transitions and effects
- 📧 **Contact Form** - EmailJS integration for message handling
- 📄 **Resume Download** - One-click resume download
- 🎯 **5 Main Sections** - Hero, About, Skills, Projects, Contact
- 🔗 **Social Links** - GitHub, LinkedIn, Twitter, Email
- 🚀 **Easy to Deploy** - Works with Netlify, Vercel, GitHub Pages

## 🛠️ Tech Stack

- **React 18** - Latest React with Hooks
- **Vite** - Next-generation frontend tooling
- **TailwindCSS** - Utility-first CSS framework
- **EmailJS** - Email service for contact form
- **React Icons** - Beautiful icon library

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Navigate to project: `cd modern-portfolio`
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Open http://localhost:5173

## 📝 Quick Customization

### Essential Updates

1. **Your Name & Info** (`src/components/Hero.jsx`)
   - Update name, tagline, social links

2. **Your Projects** (`src/components/Projects.jsx`)
   - Replace example projects with your work

3. **Resume** (`public/resume.pdf`)
   - Replace with your actual resume

4. **EmailJS** (`src/components/Contact.jsx`)
   - Sign up at emailjs.com (free)
   - Update Service ID, Template ID, Public Key

5. **Social Links** (Multiple files)
   - Update all GitHub, LinkedIn, Twitter, Email links

See full customization guide in README sections below.

## 🌐 Deploy

**Netlify (Easiest)**
```bash
npm run build
# Drag dist folder to netlify.com
```

**Vercel**
```bash
# Push to GitHub, import in vercel.com
```

**GitHub Pages**
```bash
npm install -D gh-pages
# Add to vite.config.js: base: '/repo-name/'
npm run deploy
```

## 📧 EmailJS Setup (10 minutes)

1. Sign up at [emailjs.com](https://www.emailjs.com/) (free - 200 emails/month)
2. Add email service (Gmail recommended)
3. Create template with fields: `{{name}}`, `{{email}}`, `{{message}}`
4. Get Service ID, Template ID, and Public Key
5. Update `src/components/Contact.jsx` (lines 27-29)

## 🎨 Customize Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { DEFAULT: '#64ffda', dark: '#52e3c2' },
  dark: { DEFAULT: '#0a192f', light: '#112240', lighter: '#1d2d50' },
  slate: { DEFAULT: '#8892b0', light: '#a8b2d1', lighter: '#ccd6f6' }
}
```

## 📦 Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run preview` - Preview build

## 🐛 Troubleshooting

**Tailwind not working?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**EmailJS not sending?**
- Check credentials are correct
- Verify template field names match
- Check browser console

## 📚 Full Documentation

See sections above for:
- Detailed customization guide
- Complete EmailJS setup
- Deployment instructions
- Project structure
- Design decisions

## 🤝 Support

Questions? Create an issue on GitHub or check the documentation.

---

**Built with ❤️ using React + Vite + Tailwind** 🚀
