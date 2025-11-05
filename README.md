# Restaurant Ordering Application Template

This Next.js application serves as a starter template for building modern restaurant ordering and e-commerce experiences. It features a sophisticated theming system, CraveUp API integration for cart management and payments, and a customizable UI that can be adapted for any restaurant type. Currently showcasing **Leclerc Bakery** as an example implementation.

## Project Setup

To get started with this project, follow these steps:

1. Clone the repository:

```bash
git clone --depth 1 https://github.com/your-org/tomodachi-sushi-template
```

2. Install dependencies:

This project uses npm for package management. To install dependencies, execute the following command:

```bash
npm install
```

## Environment Setup

Create a `.env.local` file in the root directory and configure the following environment variables:

### Required Variables

```env
# CraveUp API Configuration
CRAVEUP_API_KEY=your_server_side_api_key
NEXT_PUBLIC_CRAVEUP_API_KEY=your_client_side_api_key
CRAVEUP_API_BASE_URL=https://api.craveup.com
NEXT_PUBLIC_LOCATION_ID=your_restaurant_location_id
```

### Getting Your API Keys

> **Note:** A paid CraveUp subscription is required to use the API. For testing access, please reach out to [hello@craveup.com](mailto:hello@craveup.com) and we'll provision a test API account for you. On-demand sandbox API keys are coming soon.

1. Sign up for a CraveUp account at [craveup.com](https://craveup.com)
2. Navigate to your dashboard and access the API section
3. Generate both server-side and client-side API keys
4. Copy your restaurant's location ID from the locations page

## Theme Configuration

This template uses a powerful JSON-based theming system that allows you to customize the entire look and feel of your restaurant application.

1. Navigate to `public/themes/` directory
2. Create a new theme JSON file or modify the existing `leclerc-theme.json`
3. Configure colors, typography, spacing, and animations to match your brand
4. Update the theme reference in your application to load your custom theme

Example theme structure:

```json
{
  "colors": {
    "primary": "#your-primary-color",
    "secondary": "#your-secondary-color"
  },
  "typography": {
    "fontFamily": "Your Font",
    "headingSizes": {}
  }
}
```

## Running the Project

After completing the setup steps, you can run the project using the following commands:

### Development

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Key Features

- **Dynamic Theming System**: JSON-driven themes with CSS custom properties and dark mode support
- **CraveUp API Integration**: Full cart management, payment processing, and order handling
- **Multi-Provider Architecture**: Layered providers for theme, cart, and address management
- **Responsive Design**: Mobile-first design with desktop enhancements
- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- **Component Library**: Extensive UI component system using Shadcn/ui with Radix UI primitives
- **State Management**: Hybrid API-driven state with localStorage fallback for offline functionality

## Project Structure

```
├── src/
│   ├── app/              # Next.js App Router pages and layouts
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # Shadcn/ui base components
│   │   └── crave-ui/    # Restaurant-specific components
│   ├── lib/             # Utilities and API clients
│   │   ├── api/         # CraveUp API integration
│   │   └── theme-engine.ts  # Theme management system
│   ├── hooks/           # Custom React hooks
│   └── types/           # TypeScript type definitions
├── public/
│   ├── themes/          # Theme JSON configurations
│   └── images/          # Static assets
```

## Customization Guide

1. **Update Branding**: Replace images in `public/images/` with your restaurant's photos
2. **Configure Theme**: Create a custom theme JSON in `public/themes/`
3. **Menu Setup**: Configure your menu items and categories through the CraveUp dashboard
4. **Component Styling**: Customize components in `src/components/crave-ui/` to match your design
5. **API Integration**: Update environment variables with your CraveUp credentials

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [CraveUp API Documentation](https://docs.craveup.com) - API integration guide
- [Shadcn/ui](https://ui.shadcn.com) - Component library documentation
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework

## Deploy on Vercel

The easiest way to deploy this application is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to a Git repository
2. Import your repository in Vercel
3. Configure environment variables in the Vercel dashboard
4. Deploy!

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more deployment options.
