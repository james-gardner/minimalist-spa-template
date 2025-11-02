# minimalist-spa-template

A complete single-page application (SPA) skeletal template built with modern web technologies.

## Tech Stack

- **Vite** - Fast build tool and development server
- **React** - UI library with functional components
- **Clerk** - Authentication and user management
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **TypeScript** - Type-safe JavaScript
- **React Router** - Client-side routing

## Features

- ✅ Fast development with Vite HMR
- ✅ Authentication with Clerk (sign in/sign up/sign out)
- ✅ Protected routes for authenticated users
- ✅ Responsive design with Tailwind CSS and DaisyUI
- ✅ TypeScript for type safety
- ✅ Modern React with functional components and hooks

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A Clerk account ([sign up for free](https://clerk.com))

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd minimalist-spa-template
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Get your Clerk publishable key:
   - Go to [Clerk Dashboard](https://dashboard.clerk.com)
   - Create a new application or select an existing one
   - Copy your publishable key from the API Keys section
   - Add it to your `.env` file:
   ```
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
   ```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Lint

Run ESLint:
```bash
npm run lint
```

## Project Structure

```
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable components
│   │   ├── Header.tsx
│   │   ├── Layout.tsx
│   │   └── ProtectedRoute.tsx
│   ├── pages/        # Page components
│   │   ├── Home.tsx
│   │   └── Dashboard.tsx
│   ├── App.tsx       # Main app component with routing
│   ├── main.tsx      # App entry point with Clerk provider
│   └── index.css     # Global styles with Tailwind directives
├── .env.example      # Environment variables template
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.ts    # Vite configuration
```

## Usage

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Optionally wrap it with `ProtectedRoute` for authentication

### Customizing Styles

- Edit `tailwind.config.js` to customize Tailwind theme
- DaisyUI themes can be configured in `tailwind.config.js`
- Add custom styles in `src/index.css`

### Authentication

The app uses Clerk for authentication. Key features:

- Sign in/sign up modals in the header
- User button with profile and sign out
- Protected routes that redirect unauthenticated users
- Access user data with `useUser()` hook

## License

MIT
