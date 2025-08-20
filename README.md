# AI-Ready Law Firm Landing Page

A modern, responsive landing page for law firm webinar registration built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Optimized for all device sizes
- **Form Handling**: Netlify Forms integration for webinar registration
- **Performance**: Built with Vite for fast development and optimized builds
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant design patterns

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router
- **Icons**: Lucide React
- **Deployment**: Netlify
- **Forms**: Netlify Forms

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/ai-ready-law-firm-2.git
cd ai-ready-law-firm-2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚀 Deployment

This project is configured for deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Set the build command to `npm run build`
3. Set the publish directory to `dist`
4. Deploy!

### Environment Variables

No environment variables are required for basic functionality.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ContactForm.tsx
│   ├── Offer.tsx
│   ├── Amplify.tsx
│   ├── PatrickCarver.tsx
│   ├── Testimonials.tsx
│   └── Footer.tsx
├── pages/              # Page components
│   ├── LandingPage.tsx
│   └── ThankYouPage.tsx
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.js`:
- Primary: `#4FBC85` (Green)
- Accent: `#ef4444` (Red)

### Fonts
- Headings: Poppins
- Body: Roboto

### Content
Update the webinar details, testimonials, and other content directly in the component files.

## 📝 Forms

The contact form uses Netlify Forms for handling submissions. Make sure to:
1. Keep the `netlify` attribute on the form
2. Include the hidden form in `index.html` for form detection
3. Test form submissions after deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email support@constellationmarketing.com or create an issue in this repository.