# Installation Guide

Follow these steps to set up and run the Next.js Template locally.

## Prerequisites

- Node.js (v20+ recommended)
- pnpm (see [pnpm installation](https://pnpm.io/installation))
- Docker (optional, for containerization)

## 1. Clone the Repository

```sh
git clone https://github.com/koushikpuppala/nextjs-template.git
cd nextjs-template
```

## 2. Install Dependencies

```sh
pnpm install
```

## 3. Configure Environment Variables

- Copy `.env.example` to `.env.local`:
  ```sh
  cp .env.example .env.local
  ```
- Fill in the required values for your environment (database URIs, Sentry, analytics, etc.)

## 4. Set Up the Database

- If using Prisma, update `PRISMA_URI` in `.env.local`.
- Generate Prisma client:
  ```sh
  pnpm generate
  ```
- (Optional) Open Prisma Studio:
  ```sh
  pnpm studio
  ```

## 5. Start the Development Server

```sh
pnpm dev
```

- The app will be available at `http://localhost:3000`

## 6. Build for Production

```sh
pnpm build
pnpm start
```

## 7. Lint & Format

```sh
pnpm lint
pnpm format:fix
```

## 8. Docker (Optional)

- Build and run the app using Docker:
  ```sh
  docker build -t nextjs-app .
  docker run -p 3000:3000 nextjs-app
  ```

## GitHub Actions

- After installation, CI/CD workflows in `.github/workflows/` will automatically run on push and pull requests.
- These workflows check code quality, run tests, and can deploy your app.

## Middleware

- The `middleware.ts` file in the root directory can be used for authentication, logging, redirects, and more. Update this file as needed for your project requirements.

## Troubleshooting

- Ensure all environment variables are set correctly.
- For database issues, check your connection string and run `pnpm generate`.
- For more help, see the README or open an issue.

---

You're ready to start developing with the Next.js Template!
