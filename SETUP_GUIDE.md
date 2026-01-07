# 🚀 Quick Setup Guide

Get your portfolio running in 5 minutes!

## Step 1: Install & Run (2 minutes)

```bash
# Navigate to project
cd modern-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:5173 in your browser 🎉

## Step 2: Essential Customizations (10 minutes)

### ✏️ Update Your Name

**File:** `src/components/Hero.jsx`

Find line 14:
```jsx
<h1 className="...">Your Name</h1>
```

Change to:
```jsx
<h1 className="...">John Doe</h1>
```

### 🔗 Update Social Links

**Files to update:**
- `src/components/Hero.jsx` (lines 31-48)
- `src/components/Footer.jsx` (line 5)

Change:
```jsx
href="https://github.com/yourusername"
href="https://linkedin.com/in/yourusername"
href="https://twitter.com/yourusername"
href="mailto:your.email@example.com"
```

To your actual links!

### 💼 Add Your Projects

**File:** `src/components/Projects.jsx`

Replace the `projects` array (lines 6-60) with your actual projects:

```jsx
const projects = [
  {
    title: 'My Awesome Project',
    description: 'What this project does...',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourname/project',
    live: 'https://myproject.com',
    featured: true
  },
  // Add more projects...
];
```

### 📄 Add Your Resume

1. Place your resume PDF in the `public` folder
2. Rename it to `resume.pdf`
3. Done! The navbar download button will work

## Step 3: EmailJS Setup (10 minutes)

### Why EmailJS?
Free tier: 200 emails/month. Perfect for portfolios!

### Setup Steps

1. **Sign Up**
   - Go to https://www.emailjs.com/
   - Create free account

2. **Add Email Service**
   - Click "Add New Service"
   - Choose Gmail (or your provider)
   - Connect your email
   - Copy the **Service ID**

3. **Create Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this structure:

   ```
   Subject: Portfolio Contact - {{name}}
   
   From: {{name}}
   Email: {{email}}
   
   Message:
   {{message}}
   ```
   
   - Copy the **Template ID**

4. **Get Public Key**
   - Go to Account → API Keys
   - Copy your **Public Key**

5. **Update Code**
   
   Open `src/components/Contact.jsx` and find lines 27-29:
   
   ```jsx
   const serviceId = 'YOUR_SERVICE_ID';
   const templateId = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_PUBLIC_KEY';
   ```
   
   Replace with your actual credentials!

6. **Test It**
   - Go to the Contact section
   - Fill out the form
   - Click "Send Message"
   - Check your email inbox!

## Step 4: Customize (Optional)

### Change Colors

**File:** `tailwind.config.js`

```javascript
colors: {
  primary: {
    DEFAULT: '#64ffda',  // Change this! (main accent)
    dark: '#52e3c2',
  },
  // ... other colors
}
```

Try these popular combos:
- Purple: `#8b5cf6`
- Blue: `#3b82f6`
- Pink: `#ec4899`
- Orange: `#f97316`

### Update About Section

**File:** `src/components/About.jsx`

Update your bio (lines 24-40) and technologies (lines 5-14).

### Update Skills

**File:** `src/components/Skills.jsx`

Modify the `skillCategories` array (lines 7-30) with your actual skills.

## Step 5: Deploy (5 minutes)

### Option A: Netlify (Easiest)

```bash
# Build your project
npm run build

# Go to netlify.com
# Drag & drop the 'dist' folder
# Done! ✨
```

### Option B: Vercel

```bash
# Push to GitHub first
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main

# Then go to vercel.com
# Click "Import Project"
# Select your repo
# Click "Deploy"
```

### Option C: GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Update vite.config.js - add:
base: '/your-repo-name/',

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## ✅ Checklist

Before deploying, make sure you've:

- [ ] Updated your name in Hero section
- [ ] Updated all social media links
- [ ] Added your real projects
- [ ] Added your resume PDF
- [ ] Set up EmailJS
- [ ] Updated About section bio
- [ ] Updated Skills section
- [ ] Updated Footer with your name
- [ ] Changed colors (optional)
- [ ] Tested contact form
- [ ] Tested on mobile
- [ ] Built project: `npm run build`

## 🆘 Common Issues

### "npm install" fails
```bash
# Try clearing cache
npm cache clean --force
npm install
```

### Vite port already in use
```bash
# Kill process or change port in vite.config.js
```

### Tailwind classes not working
```bash
# Make sure tailwind.config.js content includes all files
content: ["./index.html", "./src/**/*.{js,jsx}"]
```

### EmailJS not sending
- Double-check all three credentials
- Make sure email service is active
- Check browser console for errors
- Verify template field names: `name`, `email`, `message`

## 🎓 Next Steps

1. Add your own projects regularly
2. Write a blog? Add a blog section
3. Have certifications? Add them to About
4. Custom domain? Most hosts support it!
5. Analytics? Add Google Analytics

## 📚 Resources

- [Vite Docs](https://vitejs.dev/)
- [TailwindCSS Docs](https://tailwindcss.com/)
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [React Icons](https://react-icons.github.io/)

## 💬 Need Help?

- Check the main README.md
- Search issues on GitHub
- Ask in discussions

---

**You're all set! Happy coding!** 🎉
