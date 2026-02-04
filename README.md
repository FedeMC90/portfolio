# Personal Portfolio - Federico Matias Ciociano

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-FF0080?style=for-the-badge&logo=framer)

**Modern professional web portfolio built with the latest React ecosystem technologies**

[View Demo](https://fmc-portfolio.vercel.app/) · [Report Bug](https://github.com/FedeMC90/portfolio/issues) · [Request Feature](https://github.com/FedeMC90/portfolio/issues)

</div>

---

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#-usage)
- [Testing](#-testing)
- [Project Structure](#-project-structure)
- [Highlighted Features](#-highlighted-features)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 About The Project

Personal portfolio designed to showcase my professional experience, technical skills, and featured projects. Developed with a focus on user experience, performance, and accessibility.

### Portfolio Sections

- **🏠 Home** - Personal introduction with dynamic video and professional description
- **💼 Experience** - Complete work history with quantifiable achievements
- **🎓 Education** - Academic background and professional certifications
- **🚀 Projects** - Showcase of featured projects with technologies used
- **📧 Contact** - Functional form integrated with EmailJS and social networks

---

## ✨ Key Features

- **🎨 Modern and Professional Design**
  - Clean and minimalist interface with Tailwind CSS 4
  - Consistent design system with reusable components
  - Customizable color palette with light/dark theme

- **🎭 Smooth Animations**
  - Smooth transitions between sections with Framer Motion
  - Micro-interactions that enhance user experience
  - Animated hover and scroll effects

- **🌐 Multi-language Support**
  - Support for 3 languages: Spanish, English, and Portuguese
  - Language preference persistence in localStorage
  - TypeScript-typed translation system

- **🌓 Light/Dark Mode**
  - Dynamic theme switching with persistence
  - Flash of Unstyled Content (FOUC) prevention
  - Smooth transitions between themes

- **📱 Fully Responsive**
  - Mobile-first design
  - Optimized for all screen sizes
  - Touch-friendly on mobile devices

- **⚡ Optimized Performance**
  - Next.js 16 Server Components
  - Lazy loading of components
  - Optimized images and videos

- **📧 Functional Contact Form**
  - EmailJS integration for email sending
  - Form validation
  - International phone number input support
  - Visual feedback for states (sending, success, error)

- **🧪 Comprehensive Testing**
  - Unit test suite with Vitest
  - Component testing with React Testing Library
  - Code coverage configured

- **♿ Accessibility**
  - Proper HTML semantics
  - Keyboard navigation
  - Optimized color contrast

---

## 🛠️ Tech Stack

### Core

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19.2](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Static typing for JavaScript

### Styling and Animations

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion 12](https://www.framer.com/motion/)** - Animation library for React

### Features

- **[EmailJS](https://www.emailjs.com/)** - Client-side email sending service
- **[react-phone-number-input](https://www.npmjs.com/package/react-phone-number-input)** - Phone input component with international validation

### Testing

- **[Vitest](https://vitest.dev/)** - Fast and modern testing framework
- **[React Testing Library](https://testing-library.com/react)** - Testing utilities for React
- **[jsdom](https://github.com/jsdom/jsdom)** - Web standards implementation for Node.js

### Development Tools

- **[ESLint](https://eslint.org/)** - JavaScript/TypeScript linter
- **[PostCSS](https://postcss.org/)** - CSS processor

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/FedeMC90/portfolio.git
```

2. **Navigate to the directory**

```bash
cd portfolio
```

3. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

4. **Configure environment variables (optional)**

If you want to use the contact form, you'll need to configure EmailJS:

- Create an account on [EmailJS](https://www.emailjs.com/)
- Set up an email service
- Create an email template
- Update the credentials in the `ContactSection.tsx` component

---

## 💻 Usage

### Development Mode

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

The page will automatically reload when you make changes to the code.

### Build for Production

Generate an optimized build:

```bash
npm run build
```

### Run in Production

After building, start the production server:

```bash
npm start
```

### Linting

Run the linter to check the code:

```bash
npm run lint
```

---

## 🧪 Testing

### Run Tests

```bash
npm test
```

### Run Tests with UI

```bash
npm run test:ui
```

### Generate Coverage Report

```bash
npm run test:coverage
```

Tests are configured with:

- **Vitest** as test runner
- **React Testing Library** for component testing
- **jsdom** as test environment
- Path aliases configured (`@/`)

---

## 📁 Project Structure

```
portfolio/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata and providers
│   ├── page.tsx                 # Main page with SPA navigation
│   └── globals.css              # Global styles and CSS variables
│
├── components/                   # React components
│   ├── Navigation/              # Navigation bar with responsive menu
│   │   ├── Navigation.tsx
│   │   └── Navigation.test.tsx
│   │
│   ├── HomeSection/             # Home/intro section
│   │   ├── HomeSection.tsx
│   │   └── HomeSection.test.tsx
│   │
│   ├── ExperienceSection/       # Work experience section
│   │   ├── ExperienceSection.tsx
│   │   └── ExperienceSection.test.tsx
│   │
│   ├── EducationSection/        # Education section
│   │   ├── EducationSection.tsx
│   │   └── EducationSection.test.tsx
│   │
│   ├── ProjectsSection/         # Projects section
│   │   ├── ProjectsSection.tsx
│   │   └── ProjectsSection.test.tsx
│   │
│   ├── ContactSection/          # Contact section with form
│   │   ├── ContactSection.tsx
│   │   └── ContactSection.test.tsx
│   │
│   ├── Footer/                  # Site footer
│   │   ├── Footer.tsx
│   │   └── Footer.test.tsx
│   │
│   └── ui/                      # Reusable UI components
│       ├── Badge/               # Badge component for technologies
│       ├── Button/              # Custom Button component
│       ├── Card/                # Card component for content
│       ├── SectionTitle/        # Styled section title
│       ├── ThemeToggle/         # Light/dark theme toggle
│       ├── LanguageSwitcher/    # Language selector
│       ├── icons.tsx            # Custom SVG icons
│       └── index.ts             # Centralized exports
│
├── contexts/                     # React Contexts
│   ├── ThemeContext.tsx         # Theme context (light/dark)
│   └── LanguageContext.tsx      # Language context (es/en/pt)
│
├── locales/                      # Translation files
│   ├── es.ts                    # Spanish translations
│   ├── en.ts                    # English translations
│   └── pt.ts                    # Portuguese translations
│
├── public/                       # Static files
│   ├── images/                  # Images and logos
│   │   ├── profile_video.mp4   # Profile video
│   │   ├── prosegur-logo.png
│   │   ├── fpay-logo.png
│   │   └── ...                  # Other logos
│   └── docs/                    # Documents (CV, etc.)
│
├── eslint.config.mjs            # ESLint configuration
├── next.config.ts               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.mjs           # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
├── vitest.config.ts             # Vitest configuration
├── vitest.setup.ts              # Test setup
└── package.json                 # Dependencies and scripts
```

---

## 🎯 Highlighted Features

### SPA Navigation System

The portfolio implements Single Page Application navigation without reloads:

- Active section state management
- Animated transitions between sections with AnimatePresence
- URL-friendly for sharing specific sections

### Theme System

Robust light/dark mode implementation:

- Automatic system preference detection
- localStorage persistence
- FOUC (Flash of Unstyled Content) prevention
- Custom CSS variables for easy customization

### Internationalization (i18n)

Complete translation system:

- 3 supported languages (ES, EN, PT)
- TypeScript-typed translations
- Language preference persistence
- Hydration mismatch prevention

### Contact Form

Functional and validated form:

- EmailJS integration for real email sending
- Field validation
- International phone input
- Loading states and visual feedback
- Error handling

---

## 🎨 Customization

### Modify Personal Information

#### 1. Section Content

Edit the translation files in `locales/`:

```typescript
// locales/en.ts
export const en = {
	home: {
		title: 'YOUR NAME',
		subtitle: 'YOUR TITLE',
		description: 'Your description...',
	},
	experience: {
		list: [
			{
				cargo: 'Your Position',
				empresa: 'Your Company',
				// ...
			},
		],
	},
	// ...
};
```

#### 2. Contact Information

Edit `components/ContactSection/ContactSection.tsx`:

```typescript
const contactInfo = {
	email: 'your@email.com',
	telefono: '+XX XX XXXX-XXXX',
	ubicacion: 'Your City, Your Country',
	// ...
};
```

#### 3. Metadata and SEO

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
	title: 'Your Name - Portfolio',
	description: 'Your SEO description...',
};
```

#### 4. Profile Photo/Video

Replace the file at `public/images/profile_video.mp4` or modify the `HomeSection.tsx` component to use a static image.

#### 5. Colors and Theme

Edit the CSS variables in `app/globals.css`:

```css
:root {
	--primary-cyan: #00d9ff;
	--text-primary: #1a1a1a;
	/* ... */
}

.dark {
	--text-primary: #ffffff;
	/* ... */
}
```

### Add New Sections

1. Create a new component in `components/`
2. Add translations in `locales/`
3. Register the section in `app/page.tsx`
4. Update the `Navigation` component

---

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live in seconds

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

The project can also be deployed on:

- **Netlify**
- **Railway**
- **AWS Amplify**
- **DigitalOcean App Platform**
- Any platform that supports Node.js

---

## 🤝 Contributing

Contributions are welcome. If you have suggestions to improve this project:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## 📧 Contact

**Federico Matias Ciociano**

- Email: [fedemc90@google.com](mailto:fedemc90@google.com)
- LinkedIn: [linkedin.com/in/fedeciociano](https://linkedin.com/in/fedeciociano)
- GitHub: [github.com/FedeMC90](https://github.com/FedeMC90)
- Portfolio: [fmc-portfolio.vercel.app](https://fmc-portfolio.vercel.app/)

---

<div align="center">

**⭐ If you liked this project, give it a star on GitHub ⭐**

Made with ❤️ and ☕ by [Federico Matias Ciociano](https://github.com/FedeMC90)

</div>
