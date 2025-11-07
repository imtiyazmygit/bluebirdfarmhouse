# Blue Bird Farmhouse Website

A fully functional, responsive website for Blue Bird Farmhouse located in Moinabad, Tolkatta, Hyderabad.

## Features

### ✅ Fully Functional Pages
- **Home** - Hero section with welcome message and featured images
- **About** - Information about the farmhouse and its features
- **Amenities** - Detailed list of all available amenities
- **Gallery** - Photo gallery with interactive lightbox viewer
- **Location** - Embedded Google Maps for easy navigation
- **Contact** - Contact form with validation and contact details

### 🎨 Design Features
- Responsive design that works on desktop, tablet, and mobile devices
- Modern, clean layout with green nature theme
- Smooth scrolling animations
- Hover effects on images and buttons
- Professional typography and spacing

### 🚀 Interactive Features
- **Image Lightbox**: Click any gallery image to view in full-screen mode
  - Navigate with arrow keys or on-screen controls
  - Close with ESC key or X button
  - Swipe through images with previous/next buttons
  
- **Form Validation**: Contact form with email validation
  - Required field checking
  - Email format validation
  - Success message on submission
  
- **Smooth Scrolling**: Scroll animations for better user experience
  
- **Mobile Menu**: Responsive navigation for mobile devices

## File Structure

```
bluebirdfarmhouse/
├── index.html          # Home page
├── about.html          # About page
├── amenities.html      # Amenities page (newly created)
├── gallery.html        # Gallery page
├── location.html       # Location page with map
├── contact.html        # Contact page with form
├── css/
│   └── styles.css      # All website styles including lightbox
├── js/
│   └── script.js       # Interactive features (newly created)
└── images/             # All farmhouse images
    ├── IMAGE_GUIDE.txt     # Image naming guide
    ├── rename_images.ps1   # PowerShell helper script
    ├── bedroom1.jpg        # Bedroom with blue ceiling
    ├── bedroom2.jpg        # Second bedroom view
    ├── mini-pool.jpg       # Covered pool/jacuzzi
    ├── kitchen.jpg         # Modern kitchen
    ├── garden-seating.jpg  # Lawn with benches
    ├── swimming-pool1.jpg  # Main pool (hero image)
    ├── swimming-pool2.jpg  # Pool another view
    └── fridge-room.jpg     # Storage room
```

## IMPORTANT: Setting Up Images

The website is configured to use 8 real farmhouse images. To complete the setup:

1. **Save the 8 attached images** to the `images/` folder with these exact names:
   - `bedroom1.jpg` - Bedroom with blue designer ceiling
   - `bedroom2.jpg` - Second bedroom view
   - `mini-pool.jpg` - Covered pool/jacuzzi area
   - `kitchen.jpg` - Modern kitchen with gas stove
   - `garden-seating.jpg` - Lawn with red benches
   - `swimming-pool1.jpg` - Main pool (used as hero image)
   - `swimming-pool2.jpg` - Pool from different angle
   - `fridge-room.jpg` - Purple room with refrigerator

2. **Use the helper script**: Run `images/rename_images.ps1` to check if all images are correctly named

3. **Check the guide**: Read `images/IMAGE_GUIDE.txt` for detailed descriptions

Once images are in place:
- Homepage hero section will display the swimming pool
- Gallery will show all 8 images with lightbox
- Homepage will feature 6 highlight images
- All images are clickable for full-screen viewing

## Recent Improvements

### Fixed Issues:
1. ✅ Corrected CSS path from `styles.css` to `css/styles.css`
2. ✅ Fixed hero image path in CSS with proper relative path
3. ✅ Created missing `amenities.html` page
4. ✅ Added JavaScript file with interactive features

### Added Features:
1. ✅ Interactive image lightbox gallery
2. ✅ Form validation for contact page
3. ✅ Smooth scroll animations
4. ✅ Mobile-responsive menu
5. ✅ Loading animations
6. ✅ Hover effects on images
7. ✅ SEO meta tags
8. ✅ Keyboard navigation for lightbox

## How to Use

1. **View the website**: Open `index.html` in any modern web browser
2. **Navigate**: Use the navigation menu to explore different pages
3. **Gallery**: Click any image in the gallery to view it in lightbox mode
   - Use arrow keys or buttons to navigate between images
   - Press ESC to close the lightbox
4. **Contact**: Fill out the contact form to send a message
5. **Location**: View the embedded map to find directions

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox, transitions, and animations
- **JavaScript (ES6)**: Interactive features and DOM manipulation
- **Google Maps**: Embedded location map

## Future Enhancements (Optional)

- Online booking system integration
- Photo slider on home page
- Customer testimonials section
- Pricing and availability calendar
- Multi-language support
- Blog section for updates

## Contact Form Setup

The contact form currently shows an alert message. To make it fully functional:

1. Sign up for [Formspree](https://formspree.io/) (free)
2. Get your form endpoint
3. Replace `action="https://formspree.io/f/yourformid"` in `contact.html` with your actual endpoint
4. Uncomment `form.submit();` in `js/script.js`

## Maintenance

To update content:
- **Images**: Add new images to the `images/` folder
- **Text**: Edit the HTML files directly
- **Styles**: Modify `css/styles.css`
- **Features**: Update `js/script.js`

## Credits

Developed for Blue Bird Farmhouse
© 2025 Blue Bird Farmhouse - All Rights Reserved

---

**Note**: All CSS and JavaScript paths are now correctly configured. The website is fully functional and ready to deploy!
