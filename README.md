# Thivvikan Premasri — Portfolio (Frontend)

This repository contains a frontend-only portfolio website for Thivvikan Premasri built with React + Vite.

Overview
- Static single-page portfolio showcasing About, Skills, Experience, Projects, Education, Certifications and Contact sections.
- Project search/filter and detail modal.
- Profile/avatar area with social links and downloadable resume placeholder.
- Contact form stub implemented using EmailJS REST API (frontend-only) — EmailJS credentials must be provided to enable sending.

Tech
- React 18
- Vite
- react-icons
- Vanilla CSS (src/styles.css)

Quick start (local)
1. Install dependencies

   npm install

2. Start dev server

   npm run dev

3. Build for production

   npm run build

4. Preview production build locally

   npm run preview

Assets
- Profile image placeholder: src/assets/profile.svg. Replace with your photo by adding src/assets/profile.jpg or profile.png or profile.webp — the app will attempt these names in order.
- Favicon: src/assets/favicon.svg
- Resume: place a resume PDF at public/Thivvikan Premasri-CV.pdf or public/THIVVIKAN PREMASRI-Resume.pdf and the header/profile will link to /resume.pdf. You can also replace the link in App.jsx.

Email / Contact form (EmailJS)
- The contact form uses the EmailJS REST endpoint. To enable:
  1. Sign up at https://www.emailjs.com and create a service and template.
  2. Copy your service_id, template_id and user_id (public key).
  3. Edit src/App.jsx and replace the placeholders (YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY) with your values.

Security note: the EmailJS public key is safe to use on the client, but do not include secret service credentials in public repositories.

Deployment
- Netlify: connect this repo and set the build command to `npm run build` and publish directory to `dist/`.
- Hostinger / static hosting: upload the generated `dist/` folder after running the build.

Repository push to GitHub
- This workspace contains the code. If you want to push to GitHub, make sure your local git environment is authenticated with GitHub (SSH or HTTPS with credential manager) before running push.

Files of interest
- index.html — document head and SEO/meta tags
- src/App.jsx — main React application
- src/styles.css — styles
- src/main.jsx — entry
- public/ — contains sample resume PDFs and a photo

Contributing
- This is a personal portfolio. For changes, edit the source files and open a PR if collaborating.

License
- MIT © 2026 Thivvikan Premasri
