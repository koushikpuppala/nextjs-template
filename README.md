# Next.js Template

A modern, opinionated Next.js template for building scalable web applications. This template is designed for rapid development, best practices, and easy deployment. It includes TypeScript, Tailwind CSS, Prisma, Firebase, Sentry, and more.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **Prisma ORM** for database access
- **Firebase** integration (client & admin)
- **Sentry** for error monitoring
- **PWA support** via `@ducanh2912/next-pwa`
- **ESLint & Prettier** for code quality
- **Husky & Commitlint** for git hooks and commit standards
- **Docker** support for containerization
- **Structured logging** with Winston

## Screenshots

![App Screenshot](public/next.svg)

## Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- pnpm (see [pnpm installation](https://pnpm.io/installation))
- Docker (optional, for containerization)

### Installation & Development

```sh
pnpm install
pnpm dev
```

### Build & Format

```sh
pnpm build
pnpm lint
pnpm format:fix
```

### Prisma

Generate Prisma client:

```sh
pnpm generate
```

Open Prisma Studio:

```sh
pnpm studio
```

## Project Structure

- `app/` - Next.js app directory (routing, pages, API)
- `src/` - Source code (components, actions, lib, prisma, styles, utils)
- `public/` - Static assets
- `docs/` - Documentation and contribution guides
- `logs/` - Application logs

## Environment Variables

Copy `.env.example` to `.env.local` and configure as needed. Below are the available variables:

| Variable                          | Description                                                                            |
| --------------------------------- | -------------------------------------------------------------------------------------- |
| `PRISMA_URI`                      | Database connection URI with Accelerate for Prisma ORM                                 |
| `MONGO_URI`                       | MongoDB Atlas URI connection string                                                    |
| `ENABLE_SENTRY`                   | Enable Sentry error tracking (`true`/`false`)                                          |
| `SENTRY_AUTH_TOKEN`               | Auth token used by Sentry CLI for uploading source maps (optional, used in CI/CD)      |
| `NEXT_PUBLIC_SENTRY_DSN`          | Public Sentry DSN used for error tracking on the client side                           |
| `NEXT_PUBLIC_DEPLOY_URL`          | Public deployment URL without trailing slash (used for metadata, redirects, SEO, etc.) |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS`    | Google Analytics Measurement ID for tracking site usage                                |
| `NEXT_PUBLIC_MICROSOFT_CLARITY`   | Microsoft Clarity tracking code for session recording and heatmaps                     |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`  | Google ReCaptcha (v2 or v3) Site Key for client-side integration                       |
| `RECAPTCHA_SECRET_KEY`            | Google ReCaptcha Secret Key for server-side verification                               |
| `NEXT_PUBLIC_API_KEY`             | Firebase Client API Key                                                                |
| `NEXT_PUBLIC_AUTH_DOMAIN`         | Firebase Auth Domain                                                                   |
| `NEXT_PUBLIC_DATABASE_URL`        | Firebase Database URL                                                                  |
| `NEXT_PUBLIC_PROJECT_ID`          | Firebase Project ID                                                                    |
| `NEXT_PUBLIC_STORAGE_BUCKET`      | Firebase Storage Bucket                                                                |
| `NEXT_PUBLIC_MESSAGING_SENDER_ID` | Firebase Messaging Sender ID                                                           |
| `NEXT_PUBLIC_APP_ID`              | Firebase App ID                                                                        |
| `FIREBASE_PRIVATE_KEY`            | Firebase Admin Private Key                                                             |
| `FIREBASE_CLIENT_EMAIL`           | Firebase Admin Client Email                                                            |
| `LOG_DIR`                         | Logging directory (default: `logs`)                                                    |

> See `.env.example` for the full list and format. All variables should be set in your `.env.local` for local development and deployment.

## Middleware

This template includes a `middleware.ts` file for handling advanced routing, authentication, logging, or other server-side logic. You can customize `middleware.ts` in the root directory to add features such as:

- Authentication and access control
- Request logging
- URL rewrites and redirects
- Custom headers

Refer to [Next.js Middleware documentation](https://nextjs.org/docs/app/building-your-application/routing/middleware) for more details.

## Deployment

Supports Vercel, Docker, and other platforms.

## FAQ

**Q: How do I add a new page?** A: Add a new file in the `app/` directory. Next.js will automatically route it.

**Q: How do I use Prisma with a different database?** A: Update `PRISMA_URI` or `MONGO_URI` in your `.env.local` and run `pnpm generate`.

**Q: How do I enable/disable analytics or session tracking?** A: Set `NEXT_PUBLIC_GOOGLE_ANALYTICS` and/or `NEXT_PUBLIC_MICROSOFT_CLARITY` in your environment variables.

**Q: How do I configure Sentry?** A: Set `SENTRY_AUTH_TOKEN` and `NEXT_PUBLIC_SENTRY_DSN` as needed.

## Troubleshooting

- If you encounter build errors, ensure all environment variables are set.
- For Prisma issues, check your database connection and run `pnpm generate`.
- For Tailwind CSS issues, ensure your config files are present and valid.

## Security

If you discover a security vulnerability, please see [`docs/SECURITY.md`](docs/SECURITY.md) for responsible disclosure.

## Related Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Sentry Documentation](https://docs.sentry.io/platforms/javascript/guides/nextjs/)

## GitHub Actions

This template includes GitHub Actions for CI/CD automation, supporting both production and development deployments. Common workflows include:

- Linting and type checking
- Building and testing
- Deployment to production and development environments

You can find workflow files in the `.github/workflows/` directory. These workflows are configured to run on push and pull requests, and can deploy to different environments based on branch or configuration. Customize these workflows to fit your project's needs. For more information, see the [GitHub Actions documentation](https://docs.github.com/en/actions).

## Contributing

See [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md) for guidelines.

## License

See [`LICENSE`](LICENSE) for details.

---

Feel free to customize further for your needs!
