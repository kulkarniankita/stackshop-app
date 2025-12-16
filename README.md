# StartShop - Modern E-Commerce Platform Built with TanStack Start

Get complete access to StartShop, a production-ready e-commerce platform that demonstrates the power of modern React frameworks with server-side rendering, type-safe routing, and seamless shopping cart functionality.

This application delivers a seamless shopping experience featuring:

**Shopping Experience**

- Beautiful product catalog with grid layouts
- Detailed product pages with images and descriptions
- Real-time shopping cart management
- Inventory status tracking (in-stock, backorder, preorder)
- Product badges and ratings display
- Recommended products section
- Responsive design for mobile and desktop

**Technical Foundation**

- TanStack Start for full-stack React with SSR
- TanStack Router for type-safe, file-based routing
- TanStack Query for powerful data synchronization
- PostgreSQL database with Drizzle ORM
- Server functions for secure server-side operations
- ShadCN UI components for beautiful, accessible interfaces
- TailwindCSS 4 for modern, utility-first styling

Perfect for developers, entrepreneurs, and anyone looking to build a modern e-commerce platform. StartShop demonstrates how to create a production-ready shopping experience with type safety, server-side rendering, and excellent developer experience.

## ⚡ Features

### 🛠️ Core Technologies:

- 🚀 TanStack Start for full-stack React with server-side rendering and API endpoints
- 🧭 TanStack Router for type-safe, file-based routing with automatic code splitting
- 🔄 TanStack Query for powerful data synchronization, caching, and server state management
- 💾 PostgreSQL database with Drizzle ORM for type-safe database operations
- 📦 Server Functions for secure, type-safe server-side operations
- 🎨 ShadCN UI for accessible, customizable React components
- 💅 TailwindCSS 4 for utility-first, responsive styling
- 📜 TypeScript for static typing and enhanced development experience
- 🔧 Vite for lightning-fast development and optimized production builds
- 🧪 Vitest for unit testing with React Testing Library

### 💫 Application Features:

- 🛍️ Complete shopping cart functionality (add, update, remove items)
- 📊 Product catalog with filtering and search capabilities
- 🎯 Product detail pages with images, descriptions, and ratings
- 🏷️ Product badges (New, Sale, Featured, Limited)
- 📦 Inventory management (in-stock, backorder, preorder)
- ⭐ Product ratings and reviews display
- 🔍 Recommended products section
- 🎨 Beautiful, modern UI with smooth animations
- 📱 Fully responsive design for all devices
- 🔄 Real-time cart updates with optimistic UI
- 🚀 Server-side rendering for optimal performance
- 🔐 Type-safe routes and API endpoints
- 📈 SEO-friendly product pages with meta tags
- 🎯 Loading states and error handling
- 🔔 Toast notifications for user feedback

## 🚀 Getting Started

To get started with this project:

1. Fork the repo
2. Install dependencies with `npm install`
3. Set up your PostgreSQL database
4. Configure your environment variables (database connection string)
5. Run database migrations with `npm run db:migrate`
6. Seed the database with sample products using `npm run db:seed`
7. Start the development server with `npm run dev`

## 🔨 How to Fork and Clone

1. Click the "Fork" button in the top right corner of this repository to create your own copy
2. Clone your forked repository to your local machine:
   ```bash
   git clone https://github.com/your-username/stackshop-app.git
   cd stackshop-app
   ```
3. Install dependencies:
```bash
npm install
   ```
4. Set up your environment variables:
   - Create a `.env` file in the root directory
   - Add your PostgreSQL connection string: `DATABASE_URL=postgresql://user:password@localhost:5432/stackshop`
5. Run database migrations:
   ```bash
   npm run db:migrate
   ```
6. Seed the database with sample products:
   ```bash
   npm run db:seed
   ```
7. Start the development server:
   ```bash
   npm run dev
   ```
8. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations
- `npm run db:push` - Push schema changes to the database
- `npm run db:studio` - Open Drizzle Studio for database management
- `npm run db:seed` - Seed the database with sample data
- `npm run test` - Run tests with Vitest
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run check` - Format and lint code

## 🏗️ Project Structure

```
stackshop-app/
├── src/
│   ├── components/          # React components
│   │   ├── cart/           # Cart-related components
│   │   └── ui/             # ShadCN UI components
│   ├── data/               # Data access layer
│   ├── db/                 # Database schema and connection
│   ├── lib/                # Utility functions
│   ├── routes/             # File-based routes (TanStack Router)
│   ├── types/              # TypeScript type definitions
│   └── styles.css          # Global styles
├── drizzle/                # Database migrations
├── scripts/                # Utility scripts (seeding, etc.)
└── public/                 # Static assets
```

## 🗄️ Database Schema

The application uses PostgreSQL with the following main tables:

- **products** - Stores product information (name, description, price, inventory, ratings, etc.)
- **cart_items** - Stores items in the shopping cart

See `src/db/schema.ts` for the complete schema definition.

## 🎨 UI Components

The application uses ShadCN UI components for a consistent, accessible design:

- Cards for product display
- Buttons with variants
- Input fields and forms
- Skeleton loaders
- Empty states

All components are located in `src/components/ui/`.

## 🔄 Data Flow

1. **Server Functions**: Secure server-side operations using `createServerFn`
2. **Loaders**: TanStack Router loaders fetch data before route rendering
3. **TanStack Query**: Client-side data synchronization and caching
4. **Optimistic Updates**: Cart updates happen optimistically for better UX

## 🧪 Testing

This project uses Vitest for testing. Run tests with:

```bash
npm run test
```

## 📝 Code Quality

This project uses:

- **ESLint** for linting (configured with `@tanstack/eslint-config`)
- **Prettier** for code formatting
- **TypeScript** for type safety

Run code quality checks:

```bash
npm run lint      # Check for linting errors
npm run format    # Format code
npm run check     # Format and lint
```

## 🙏 Acknowledgements

- [TanStack](https://tanstack.com) for the amazing React ecosystem
- [Drizzle ORM](https://orm.drizzle.team/) for type-safe database operations
- [ShadCN UI](https://ui.shadcn.com/) for beautiful, accessible components
- [TailwindCSS](https://tailwindcss.com/) for utility-first styling
- [Vite](https://vitejs.dev/) for the build tool

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)
