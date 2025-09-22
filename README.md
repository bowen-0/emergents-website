# Personal Website - Bowen

A modern, minimalist personal website built with React, TypeScript, and Tailwind CSS, featuring a beautiful design system inspired by Reflect.app.

## Features

- 🎨 **Modern Design System** - Glassmorphism, gradients, and smooth animations
- 🌙 **Dark Theme** - Elegant dark mode design with purple/pink accents
- 📱 **Fully Responsive** - Looks great on all devices
- ⚡ **Fast Performance** - Optimized with Vite for lightning-fast loads
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🧩 **Reusable Components** - Modular design system for easy customization

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Customization

### Update Your Information

Edit `src/PersonalSite.tsx`:
- Replace social links with your actual URLs
- Update project information
- Add your profile image to `public/` folder

### Modify Design Tokens

Edit `tailwind.config.js` to customize:
- Colors and gradients
- Typography settings
- Spacing and sizing
- Animation timings

### Add New Sections

The component library includes:
- `PersonalHero` - Hero section with image
- `ProjectsGrid` - Projects showcase
- `Button`, `Card`, `Badge` - UI components
- `Container`, `Section`, `Grid` - Layout components

## Project Structure

```
src/
├── components/
│   ├── layout/       # Layout components
│   ├── sections/     # Page sections
│   └── ui/          # UI components
├── styles/          # Global styles
└── PersonalSite.tsx # Main page
```

## Technologies

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite

## License

Feel free to use this design system for your own projects!