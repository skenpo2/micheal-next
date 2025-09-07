# Developer Portfolio

A modern, responsive portfolio website built with the latest web technologies.

## 🚀 Features

- **Modern Design**: Clean, professional design with glassmorphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 15.5.2 for optimal performance
- **Interactive Animations**: Smooth animations and hover effects
- **Contact Form**: Working contact form with validation
- **SEO Optimized**: Proper meta tags and structured data
- **Accessibility**: WCAG compliant with proper semantic markup

## 🛠️ Built With

- **Framework**: Next.js 15.5.2
- **Frontend**: React 19
- **Styling**: Tailwind CSS 4.1
- **TypeScript**: For type safety
- **Icons**: Lucide React
- **Animations**: Custom CSS animations with Tailwind

## 📁 Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       └── Contact.tsx
├── lib/
│   └── constants.ts
├── types/
│   └── index.ts
├── public/
├── next.config.js
├── tailwind.config.js
└── package.json
```

## 🎨 Design Features

- **Dark Theme**: Modern dark gradient background
- **Glassmorphism**: Frosted glass effect components
- **Gradient Accents**: Orange and purple gradient highlights
- **Corporate Feel**: Professional and clean design
- **Subtle Animations**: Smooth hover effects and transitions

## 📱 Sections

1. **Hero**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal introduction with statistics
3. **Skills**: Interactive skill categories with progress bars
4. **Experience**: Timeline of professional experience
5. **Projects**: Portfolio showcase with filtering
6. **Contact**: Contact form and social links

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📝 Customization

### Personal Information

Update the personal information in `lib/constants.ts`:

- Name, title, contact details
- Social media links
- Navigation items

### Content

Modify the content in each component:

- `Hero.tsx`: Update introduction and call-to-action
- `About.tsx`: Add your bio and statistics
- `Skills.tsx`: Update your skills and tech stack
- `Experience.tsx`: Add your work experience
- `Projects.tsx`: Showcase your projects
- `Contact.tsx`: Update contact information

### Styling

Customize colors and animations in `tailwind.config.js`:

- Primary/secondary color schemes
- Custom animations
- Gradient definitions

### Images

Replace placeholder images:

- Add your profile photo to the About section
- Update project screenshots in the Projects section
- Add any additional images to the `public` folder

## 🎯 SEO & Performance

- **Meta Tags**: Comprehensive meta tags for social sharing
- **Image Optimization**: Next.js Image component for optimal loading
- **Code Splitting**: Automatic code splitting with Next.js
- **Lazy Loading**: Components load as needed
- **Semantic HTML**: Proper HTML structure for accessibility

## 📧 Contact Form

The contact form is ready for integration with:

- **Email Services**: EmailJS, Formspree, etc.
- **Backend APIs**: Node.js, Python, etc.
- **Serverless Functions**: Vercel Functions, Netlify Functions

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the 'out' folder
```

### Other Platforms

```bash
npm run build
npm run start
```

## 🎨 Color Scheme

- **Primary**: Orange (#f0651e)
- **Secondary**: Purple/Blue (#4338ca)
- **Background**: Dark gradients (#0f172a to #312e81)
- **Text**: White and gray variations
- **Accents**: Gradient overlays and glass effects

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 💡 Tips

- Update the `metadata` in `app/layout.tsx` for SEO
- Replace all placeholder content with your actual information
- Test on different devices and browsers
- Add your own projects and experiences
- Customize the color scheme to match your brand

---

Built with ❤️ using Next.js, React, and Tailwind CSS
