# Lumivirt Website Customization Guide

This guide explains how to customize the text content and colors of the Lumivirt website.

## 🎨 Color Customization

### Theme Colors
All colors are defined in `tailwind.config.js`. To modify the color scheme:

1. Open `tailwind.config.js`
2. Locate the `colors` section under `theme.extend`:

```js
colors: {
  dark: {
    800: '#1A1B23',
    850: '#15161D',
    900: '#111218',
    950: '#0D0E14'
  },
  accent: {
    yellow: '#FFE066',
    cyan: '#66F2F1',
    blue: '#66D9E8',
    purple: '#9775fa'
  }
}
```

- `dark`: Background colors (darker shades)
- `accent`: Primary brand colors

### Logo Colors
To change the logo colors:

1. Open `src/components/Logo.tsx`
2. Modify the color values in the `span` elements:

```jsx
<span className="text-[#FFE066]">LUMI</span>
<span className="text-[#66F2F1]">VIRT</span>
```

## 📝 Text Content Customization

### Hero Section
File: `src/components/Hero.tsx`
- Main headline: Update the `h1` tag
- Subheading: Modify the `p` tag
- Button text: Change the text inside the `button` element

### Rate Comparison
File: `src/components/RateComparison.tsx`
- Rates: Update the `rates` array
- Section title: Modify the `h2` tag
- Disclaimer: Update the text in the `Info` section

### About Section
File: `src/components/About.tsx`
- Section title: Update the `h2` tag
- Cards: Modify the array containing:
  - Origins
  - Mission
  - Impact

### Features Section
File: `src/components/Features.tsx`
- Section title: Update the `h2` tag
- Feature cards: Modify the array containing:
  - Complete Transparency
  - Rapid Response
  - Data-Driven Decisions
  - Quality Care Focus

### Metrics Section
File: `src/components/Metrics.tsx`
- Section title: Update the `h2` tag
- Metrics: Modify the `categories` array containing:
  - Financial metrics
  - Facility metrics
  - Staff metrics
  - Performance metrics

### Call to Action Section
File: `src/components/CallToAction.tsx`
- Section title: Update the `h2` tag
- Button text: Modify the `text` prop in each `CTAButton`

### Footer Section
File: `src/components/Footer.tsx`
- Links: Update the URLs and text in the navigation lists
- Contact text: Modify the content in the contact section
- Copyright: Update if necessary (auto-updates with current year)

## 🌟 Effects and Animations

### Glowing Effects
Modify shadow effects in `tailwind.config.js`:

```js
boxShadow: {
  'glow': '0 0 30px rgba(102, 242, 241, 0.15)',
  'glow-strong': '0 0 40px rgba(102, 242, 241, 0.2)',
  'glow-yellow': '0 0 30px rgba(255, 224, 102, 0.15)',
  'glow-cyan': '0 0 30px rgba(102, 242, 241, 0.15)',
  // ...
}
```

### Animations
Customize animations in `tailwind.config.js`:

```js
animation: {
  'shine': 'shine 3s infinite linear',
  'pulse-slow': 'pulse 3s infinite'
},
keyframes: {
  shine: {
    '0%': { backgroundPosition: '200% 0' },
    '100%': { backgroundPosition: '-200% 0' }
  }
}
```

## 🔄 After Making Changes

1. If you're in development mode, changes will reflect automatically
2. For production:
   ```bash
   npm run build
   ```
3. If deployed via Docker:
   ```bash
   docker-compose up -d --build
   ```

## ⚠️ Important Notes

- Always test changes in development mode first
- Keep color contrast ratios accessible (WCAG 2.1 guidelines)
- Maintain consistent spacing and typography
- Backup files before making significant changes