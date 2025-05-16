# JPay Monorepo

This is a Turborepo-powered monorepo containing the following applications and packages:

### Applications

- `merchant-portal`: [Merchant dashboard application](https://merchant.jashan.cfd/)
- `checkout-portal`: [Customer checkout portal](https://jashan.cfd/)
- `worker-server`: Background worker server

### Tech Stack

#### Frontend

- **Framework**: Next.js 15.3.1 with React 19
- **Styling**: TailwindCSS 4.x with shadcn/ui components
- **State Management**: SWR for data fetching
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**:
  - Radix UI primitives
  - Framer Motion for animations
  - Lucide React for icons
  - Recharts for data visualization

#### Backend

- **Runtime**: Node.js (v18+)
- **API**: Next.js API Routes
- **Database**: Prisma 6.6 ORM
- **Authentication**: NextAuth.js 5.0
- **Job Queue**: BullMQ with Redis
- **File Storage**: AWS S3

#### Blockchain Integration

- **Network**: Solana
- **Libraries**:
  - `@solana/web3.js`
  - `@solana/spl-token`
  - `@solana/wallet-adapter`

#### Development Tools

- **Package Manager**: pnpm 8+
- **Monorepo**: Turborepo with Remote Caching
- **Language**: TypeScript 5.8
- **Linting & Formatting**:
  - ESLint 9
  - Prettier
- **Build Tool**: Turbopack
- **Container Platform**: Docker

## Prerequisites

Before you begin, ensure you have installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- [pnpm](https://pnpm.io/) (v8 or later)
- [Docker](https://www.docker.com/) (for local development)

## Initial Setup

1. **Clone the repository**

   ```sh
   git clone <repository-url>
   cd jpay
   ```

2. **Install dependencies**

   ```sh
   pnpm install
   ```

3. **Set up environment variables**

   Copy the example environment files for each application:

   ```sh
   # For merchant portal
   cp apps/merchant-portal/.env.example apps/merchant-portal/.env

   # For checkout portal
   cp apps/checkout-portal/.env.example apps/checkout-portal/.env

   # For worker server
   cp apps/worker-server/.env.example apps/worker-server/.env
   ```

4. **Start development environment**

   ```sh
   # Start Docker services
   docker-compose up -d

   # Start all applications in development mode
   pnpm dev
   ```

## Available Scripts

- `pnpm dev` - Start all applications in development mode
- `pnpm build` - Build all applications
- `pnpm lint` - Run linting across all applications
- `pnpm test` - Run tests across all applications
- `pnpm clean` - Clean all build outputs and caches

## Application Ports

- Merchant Portal: http://localhost:3000
- Checkout Portal: http://localhost:3001
- Worker Server: http://localhost:3002

## Development Guidelines

1. **Branch Naming Convention**

   - Feature: `feature/description`
   - Bugfix: `fix/description`
   - Hotfix: `hotfix/description`

2. **Commit Messages**
   Follow conventional commits:

   - `feat: description`
   - `fix: description`
   - `chore: description`
   - `docs: description`

3. **Code Quality**
   - Run `pnpm lint` before committing
   - Ensure all tests pass with `pnpm test`
   - Follow the TypeScript guidelines in `packages/typescript-config`

## Remote Caching

This project uses Turborepo's Remote Caching feature. To enable it:

1. Login to Vercel:

   ```sh
   npx turbo login
   ```

2. Link to Remote Cache:
   ```sh
   npx turbo link
   ```

## Troubleshooting

1. **Cache Issues**

   ```sh
   # Clear Turborepo cache
   pnpm clean

   # Clear pnpm store
   pnpm store prune
   ```

2. **Port Conflicts**
   - Check if any other services are using the required ports
   - Modify the port in the respective .env file if needed

## Additional Resources

- [Turborepo Documentation](https://turborepo.org/docs)
- [pnpm Documentation](https://pnpm.io/documentation)
- Internal documentation: Check `docs/` directory

## Contributing

1. Create a new branch from `main`
2. Make your changes
3. Submit a pull request
4. Ensure CI checks pass
5. Get approval from at least one reviewer

## Support

For internal support, contact the development team through:

mail: jashandeep1659@gmail.com
Discord: jashandeep31
