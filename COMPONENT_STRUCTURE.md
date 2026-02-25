# Component Structure - DRY Code Refactoring

## Overview
The website has been refactored to use reusable components following DRY (Don't Repeat Yourself) principles. The donation section is now available on all pages through the shared Footer component.

## Component Architecture

### 1. **BaseLayout.astro** (`src/layouts/BaseLayout.astro`)
- Main layout wrapper for all pages
- Handles HTML structure, head tags, and fonts
- Includes Header and Footer components
- Accepts props: `title`, `description`, `currentPath`

### 2. **Header.astro** (`src/components/Header.astro`)
- Reusable navigation header
- Contains logo and navigation menu
- Used across all pages via BaseLayout

### 3. **Footer.astro** (`src/components/Footer.astro`)
- Reusable footer component
- Includes the DonationSection component
- Contains contact info, leadership, and supporter information
- Used across all pages via BaseLayout

### 4. **DonationSection.astro** (`src/components/DonationSection.astro`)
- Standalone donation component
- Displays QR code for Zelle donations
- Shows email address for donations
- Includes tax-deductible notice
- **Now appears on all pages** through the Footer component

## Page Structure

### Home Page (`src/pages/index.astro`)
```
BaseLayout
  └── Page Content (Hero, About, Projects, Additional Work, Message, Blog)
```

### Blog Posts (`src/layouts/BlogLayout.astro`)
```
BaseLayout
  └── Blog Article Content
```

## Benefits of This Structure

1. **No Code Duplication**: Header, Footer, and Donation sections are defined once
2. **Easy Maintenance**: Update in one place, reflects everywhere
3. **Consistent Design**: All pages share the same header, footer, and donation section
4. **Scalability**: Easy to add new pages using BaseLayout
5. **Donation Visibility**: Donation section now appears on all pages automatically

## How to Add New Pages

To create a new page with the donation section:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout 
  title="Your Page Title"
  description="Your page description"
>
  <!-- Your page content here -->
</BaseLayout>
```

The Header, Footer (with donation section), and all styling will be automatically included!

## Files Modified

- ✅ Created: `src/components/Header.astro`
- ✅ Created: `src/components/Footer.astro`
- ✅ Created: `src/components/DonationSection.astro`
- ✅ Created: `src/layouts/BaseLayout.astro`
- ✅ Updated: `src/pages/index.astro` (now uses BaseLayout)
- ✅ Updated: `src/layouts/BlogLayout.astro` (now uses BaseLayout)

## Result

The donation section with the Zelle QR code is now prominently displayed in the footer of **every page** on the website, including:
- Home page
- All blog posts
- Any future pages that use BaseLayout

