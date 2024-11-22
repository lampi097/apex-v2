# Apex Game Studio Website

A modern, interactive website for Apex Game Studio built with React, TypeScript, and Tailwind CSS.

## Project Structure

```
/
├── public/
│   ├── images/
│   │   └── footer/        # Footer images
│   │       ├── left-image.png
│   │       └── right-image.png
│   └── png/
│       ├── team/          # Team member images
│       │   ├── lampi.png
│       │   ├── max.png
│       │   ├── sauce.png
│       │   └── david.png
│       └── apex-logo.png
└── src/
    ├── components/        # React components
    ├── pages/            # Page components
    └── ...               # Other source files
```

## Required Images

Add the following images to make the website work properly:

1. Footer Images (in `public/images/footer/`):
   - `left-image.png`
   - `right-image.png`

2. Team Member Images (in `public/png/team/`):
   - `lampi.png`
   - `max.png`
   - `sauce.png`
   - `david.png`

3. Logo (in `public/png/`):
   - `apex-logo.png`

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Add your images to the appropriate directories as listed above

3. Start the development server:
```bash
npm run dev
```

## Development

- Built with Vite + React + TypeScript
- Styled with Tailwind CSS
- Uses React Router for navigation
- Includes Spline for 3D elements
- Lucide React for icons

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.