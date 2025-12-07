# Professional Portfolio Website

A modern, responsive portfolio website perfect for developers and designers. This portfolio features a beautiful dark
theme, smooth animations, and an intuitive user interface.

## Features

- 🎨 **Modern Design**: Clean, professional design with gradient accents
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- ✨ **Smooth Animations**: Engaging scroll animations and hover effects
- 🌙 **Dark Theme**: Easy on the eyes with a stunning dark color scheme
- 🚀 **Performance Optimized**: Fast loading and smooth interactions
- 💼 **Professional Sections**:
    - Hero/Landing section with introduction
    - About section with stats
    - Skills & Technologies showcase
    - Projects/Portfolio gallery
    - Contact form

## Sections Overview

### 1. **Home/Hero Section**

- Eye-catching introduction with animated text
- Call-to-action buttons
- Social media links (GitHub, LinkedIn, Twitter, Email)
- Smooth scroll indicator

### 2. **About Section**

- Professional introduction
- Experience statistics
- Personal story and background

### 3. **Skills Section**

- Categorized skill cards:
    - Frontend Technologies
    - Backend Technologies
    - Database Systems
    - Tools & DevOps

### 4. **Projects Section**

- Project showcase with 6 sample projects
- Hover effects revealing project links
- Technology tags for each project
- Links to live demo and GitHub repository

### 5. **Contact Section**

- Contact information (Email, Phone, Location)
- Functional contact form with validation
- Success message on form submission

## Customization Guide

### 1. Personal Information

Edit `index.html` and update the following:

```html
<!-- Hero Section -->
<h1>Hi, I'm <span class="highlight">Your Name</span></h1>
<p class="hero-subtitle">Full Stack Developer & Creative Designer</p>

<!-- Social Links -->
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourusername">LinkedIn</a>
<a href="mailto:your.email@example.com">Email</a>

<!-- Contact Information -->
<p>your.email@example.com</p>
<p>+91 98765 43210</p>
<p>Mumbai, India</p>
```

### 2. Projects

Update the projects section with your own projects:

```html
<div class="project-card">
    <div class="project-info">
        <h3>Your Project Name</h3>
        <p>Project description</p>
        <div class="project-tags">
            <span class="tag">Technology 1</span>
            <span class="tag">Technology 2</span>
        </div>
    </div>
</div>
```

### 3. Skills

Modify the skills in each category to match your expertise:

```html
<ul>
    <li>Your Skill 1</li>
    <li>Your Skill 2</li>
    <li>Your Skill 3</li>
</ul>
```

### 4. Color Scheme

Edit `style.css` to change the color scheme:

```css
:root {
    --primary-color: #6366f1;  /* Change primary color */
    --secondary-color: #8b5cf6; /* Change secondary color */
    --accent-color: #ec4899;    /* Change accent color */
}
```

### 5. Images

Replace the icon placeholders with your actual images:

```html
<!-- Replace this -->
<div class="image-placeholder">
    <i class="fas fa-user-circle"></i>
</div>

<!-- With this -->
<img src="your-image.jpg" alt="Your Name">
```

## Installation & Setup

1. **Clone or Download**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open in Browser**
    - Simply open `index.html` in your web browser
    - No build process or dependencies required!

3. **Deploy to GitHub Pages**
    - Create a new repository on GitHub
    - Push your files to the repository
    - Go to Settings > Pages
    - Select main branch and save
    - Your portfolio will be live at `https://yourusername.github.io/repository-name`

## File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── style.css           # All styling
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Interactive features and animations
- **Font Awesome**: Icons (via CDN)

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## Performance

- Fast loading time
- Optimized animations
- Lazy loading ready
- Mobile-first approach

## Contact Form

The contact form currently shows a success message on submission. To make it functional:

1. **Using a Backend Service**:
    - [FormSpree](https://formspree.io/)
    - [EmailJS](https://www.emailjs.com/)
    - [Netlify Forms](https://www.netlify.com/products/forms/)

2. **Example with FormSpree**:
   ```html
   <form action="https://formspree.io/f/your-form-id" method="POST">
       <!-- form fields -->
   </form>
   ```

## Tips for Deployment

### GitHub Pages

1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Your site will be live at `https://username.github.io/repo-name`

### Netlify

1. Drag and drop your folder on [Netlify](https://www.netlify.com/)
2. Your site will be live instantly with a custom URL

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

## SEO Optimization

Update meta tags in `index.html`:

```html
<meta name="description" content="Your custom description">
<meta name="keywords" content="portfolio, developer, your name">
<meta name="author" content="Your Name">
```

## Future Enhancements

- [ ] Add a blog section
- [ ] Implement theme switcher (dark/light mode)
- [ ] Add more project details with modals
- [ ] Include testimonials section
- [ ] Add resume/CV download option
- [ ] Integrate real-time contact form with backend

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

## Credits

Created with ❤️ by [Your Name]

---

**Happy Coding! 🚀**
