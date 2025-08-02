# Using the Next.js Template

This documentation will help you understand how to use, customize, and integrate this template into your own projects.

## Overview

This template provides a full-stack Next.js setup with TypeScript, Tailwind CSS, Prisma, Firebase, Sentry, and more. It is suitable for building scalable web applications with modern best practices.

## Getting Started

1. **Use the "Use this template" button on GitHub** to create your own repository from this template.
2. **Fork or clone the repository** if you prefer manual setup.
3. **Follow the [Installation Guide](./INSTALLATION.md) to set up your environment**
4. **Configure your environment variables in `.env.local`**
5. **Start developing!**

## Customization

- **Pages & Routing:** Add or modify files in the `app/` directory for new pages or API routes.
- **Components:** Create reusable UI components in `src/components/`.
- **Database:** Update Prisma schema in `src/prisma/schema.prisma` and run `pnpm generate`.
- **Styling:** Use Tailwind CSS classes in your components. Global styles are in `src/styles/globals.css`.
- **Environment Variables:** Document and add new variables in `.env.example` and README.

## Integration

- **Copy files or folders** from this template into your own repo as needed.
- **Merge configuration files** (e.g., `package.json`, `tsconfig.json`, `next.config.ts`) with your existing setup.
- **Install required dependencies** using `pnpm install`.
- **Update project metadata** (name, description, author) in `package.json`.

## Middleware

The template provides a `middleware.ts` file at the project root. Use this file to implement custom logic for requests, such as authentication, logging, redirects, or header manipulation. See the Next.js documentation for more advanced usage.

## Best Practices

- Use conventional commits and branch naming
- Keep environment variables secret
- Write tests for new features
- Document your changes

## Resources

- [Installation Guide](./INSTALLATION.md)
- [Contributing Guide](./CONTRIBUTING.md)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Support

If you have questions or need help, open an issue or discussion in the [GitHub repository](https://github.com/koushikpuppala/nextjs-template).

## GitHub Actions

- Automated workflows for linting, testing, building, and deployment are included in `.github/workflows/`.
- You can customize these workflows for your own CI/CD needs.

---

Feel free to fork, clone, and adapt this template for your own needs!
