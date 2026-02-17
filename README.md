# Upper Hand International Website

A modern, elegant one-page website for Upper Hand International, a non-profit organization dedicated to creating water pump solutions in Pakistan's Thar region.

## Features

- **One-Page Design**: Clean, scrollable layout with smooth navigation
- **Hero Section**: Eye-catching introduction with call-to-action
- **About Section**: Mission statement and impact statistics
- **Projects Gallery**: Showcase of water pump installation projects with images
- **Founder's Message**: Personal message from the President
- **Blog Section**: Latest updates and stories from the field
- **Contact Footer**: Organization details and supporter recognition

## Tech Stack

- **Astro**: Modern static site generator
- **Pure CSS**: No framework dependencies, custom elegant styling
- **Responsive Design**: Mobile-friendly layout

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Navigate to the astro-site directory:
   ```bash
   cd astro-site
   ```

2. Install dependencies (already done):
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Building for Production

Build the static site:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
astro-site/
├── public/              # Static assets
│   ├── logo.png
│   ├── apa-bolingbrook.jpeg
│   └── projects/        # Project photos
├── src/
│   ├── layouts/
│   │   └── BlogLayout.astro    # Blog post layout
│   └── pages/
│       ├── index.astro         # Main landing page
│       └── blog/               # Blog posts (markdown)
│           ├── new-water-pump-tharparkar.md
│           ├── community-partnership-update.md
│           └── support-from-apa-bolingbrook.md
└── package.json
```

## Adding New Blog Posts

To add a new blog post:

1. Create a new `.md` file in `src/pages/blog/`
2. Add frontmatter with the following fields:
   ```markdown
   ---
   layout: ../../layouts/BlogLayout.astro
   title: "Your Post Title"
   date: "Month Day, Year"
   excerpt: "A brief description of the post"
   author: "Author Name"
   ---
   
   # Your content here
   ```

The new post will automatically appear on the homepage blog section and will be accessible at `/blog/your-file-name/`

## Adding Project Photos

1. Add images to `public/projects/`
2. Update the `projectImages` array in `src/pages/index.astro` with the new image path:
   ```javascript
   const projectImages = [
     '/projects/your-new-image.jpeg',
     // ... other images
   ];
   ```

## Deployment

The site can be deployed to any static hosting service:

- **Netlify**: Connect your git repository and deploy automatically
- **Vercel**: Import your project and deploy
- **GitHub Pages**: Use the `gh-pages` npm package
- **Any static host**: Upload the contents of `dist/` folder

## Organization Information

**Upper Hand International**  
A 501(c) Non-Profit Organization

**Address:**  
20862 W Ardmore Circle  
Plainfield, IL 60544

**Email:**  
upperhandinternational@gmail.com

**Leadership:**
- Faheem Shahzad - President
- Dr. Shahid Sharer - Secretary
- Qazi M Yousaf - Treasurer

## License

&copy; 2026 Upper Hand International. All rights reserved.
