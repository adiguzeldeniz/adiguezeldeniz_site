# Deniz Adigüzel - Personal Website

A professional academic website built with Jekyll, showcasing research experience, education, and publications in Physics.

## Features

- Clean, modern design optimized for academic professionals
- Responsive layout that works on all devices
- Smooth scrolling navigation
- Sections for education, research, talks, and contact information
- Easy to deploy on GitHub Pages

## Local Development

### Prerequisites

- Ruby 2.7 or higher
- Bundler gem

### Setup

1. Install dependencies:
```bash
bundle install
```

2. Run the development server:
```bash
bundle exec jekyll serve
```

3. Open your browser and visit: `http://localhost:4000`

## Deploying to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Create a new repository on GitHub
2. Push this code to your repository
3. Go to Settings > Pages
4. Under "Build and deployment", select "GitHub Actions" as the source
5. Create a file `.github/workflows/jekyll.yml` with:

```yaml
name: Deploy Jekyll site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.1'
          bundler-cache: true
          cache-version: 0
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v4
      - name: Build with Jekyll
        run: bundle exec jekyll build --baseurl "${{ steps.pages.outputs.base_path }}"
        env:
          JEKYLL_ENV: production
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

6. Push this workflow file to your repository
7. Your site will be automatically built and deployed!

### Option 2: Manual Deployment

1. Build the site:
```bash
bundle exec jekyll build
```

2. The built site will be in the `_site/` directory
3. Deploy the contents of `_site/` to your hosting provider

## Customization

### Update Personal Information

Edit `_config.yml` to update your:
- Name
- Email
- Phone
- LinkedIn URL
- Site description

### Modify Content

Edit `index.html` to update:
- Your bio
- Education history
- Research experience
- Talks and presentations
- Skills

### Change Colors

Edit `assets/css/style.css` and modify the CSS variables at the top:
```css
:root {
    --primary-color: #0c4a6e;
    --accent-color: #0891b2;
    /* ... other colors */
}
```

## Structure

```
.
├── _config.yml          # Site configuration
├── _layouts/
│   └── default.html     # Main page layout
├── assets/
│   └── css/
│       └── style.css    # Stylesheet
├── index.html           # Homepage content
├── Gemfile              # Ruby dependencies
└── README.md           # This file
```

## License

This website template is free to use and modify for your personal academic website.
