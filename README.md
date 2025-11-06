# 🐦 Blue Bird Farm House Website

A beautiful and responsive website for Blue Bird Farm House - your perfect countryside escape.

## 📋 Description

Blue Bird Farm House is a charming countryside retreat offering peaceful accommodations, organic farm-to-table dining, and various outdoor activities. This website showcases our services and allows potential guests to learn about and contact us for bookings.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Multiple Pages**: Home, About, Services, Gallery, and Contact pages
- **Interactive Elements**: Mobile navigation menu, contact form with validation, smooth scrolling
- **Modern UI**: Clean and attractive design with smooth animations
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🚀 Quick Start

### Viewing the Website Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/imtiyazmygit/bluebirdfarmhouse.git
   cd bluebirdfarmhouse
   ```

2. Open `index.html` in your web browser:
   - Simply double-click the `index.html` file, or
   - Right-click and select "Open with" your preferred browser

### Using a Local Server (Recommended)

For the best experience, use a local web server:

**Option 1: Using Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Using Node.js (http-server)**
```bash
npx http-server -p 8000
```

**Option 3: Using VS Code**
- Install the "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

Then visit: `http://localhost:8000`

## 📁 Project Structure

```
bluebirdfarmhouse/
├── index.html          # Home page
├── about.html          # About us page
├── services.html       # Services and pricing page
├── gallery.html        # Photo gallery page
├── contact.html        # Contact form page
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   └── script.js      # JavaScript functionality
└── README.md          # This file
```

## 🎨 Pages Overview

### Home Page (index.html)
- Hero section with call-to-action
- Featured services and amenities
- About preview section
- Customer testimonials
- Call-to-action sections

### About Page (about.html)
- Our story and mission
- Farm details and features
- Sustainability practices
- Team members

### Services Page (services.html)
- Accommodation options and pricing
- Dining services
- Activities and experiences
- Additional amenities

### Gallery Page (gallery.html)
- Photo gallery organized by categories
- Farm house, gardens, dining, and activities

### Contact Page (contact.html)
- Contact form with validation
- Contact information
- Location details
- FAQs

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties, flexbox, and grid
- **JavaScript**: Interactive features and form validation
- **Responsive Design**: Mobile-first approach with media queries

## 🎯 Key Features

### Responsive Navigation
- Desktop: Horizontal navigation bar
- Mobile: Hamburger menu with smooth animation

### Contact Form
- Client-side validation
- Date picker for reservations
- Guest count selector
- Success/error message display

### Visual Effects
- Smooth scroll animations
- Hover effects on cards and buttons
- Fade-in animations on scroll
- Scroll-to-top button

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images (placeholders)
- Keyboard navigation support

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📱 Mobile Responsive

The website is fully responsive and optimized for:
- Mobile phones (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1200px and up)

## 🔧 Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #2c5f2d;
    --secondary-color: #97bc62;
    --accent-color: #4a90e2;
    /* ... more variables */
}
```

### Content
- Update text directly in HTML files
- Replace emoji placeholders with actual images in the `gallery.html` and throughout the site
- Modify contact information in the footer and contact page

### Images
- Create an `images/` folder to store actual photos
- Replace emoji placeholders with `<img>` tags pointing to your images
- Recommended image sizes: 1200x800px for large images, 600x400px for thumbnails

## 📝 License

This project is open source and available for personal and commercial use.

## 👥 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

For questions about the website or the farm house:
- **Email**: info@bluebirdfarmhouse.com
- **Phone**: (555) 123-4567
- **Address**: 123 Countryside Road, Green Valley, State 12345

## 🙏 Acknowledgments

- Design inspiration from modern farm house and hospitality websites
- Icons and emojis used for visual representation

---

**Note**: This website uses emoji placeholders for images. For production use, replace these with actual high-quality photographs of the farm house, accommodations, and surroundings.

## 🚀 Deployment

### GitHub Pages
1. Go to your repository settings
2. Navigate to "Pages" section
3. Select the branch (usually `main` or `master`)
4. Click "Save"
5. Your site will be available at `https://yourusername.github.io/bluebirdfarmhouse/`

### Other Hosting Options
- **Netlify**: Drag and drop the folder or connect your GitHub repository
- **Vercel**: Import your GitHub repository
- **Traditional Hosting**: Upload files via FTP to your web host

---

Made with ❤️ for Blue Bird Farm House
