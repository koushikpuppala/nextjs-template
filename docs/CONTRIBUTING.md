# Contributing to Next.js Template

Thank you for your interest in contributing! We welcome all kinds of contributions to improve this template.

## How to Contribute

1. **Fork the repository** on GitHub.
2. **Clone your fork** locally:
   ```sh
   git clone https://github.com/<your-username>/nextjs-template.git
   cd nextjs-template
   ```
3. **Create a new branch** for your feature or fix:
   ```sh
   git checkout -b feature/my-feature
   ```
4. **Make your changes** in the appropriate files. Follow the project structure and naming conventions.
5. **Test your changes locally**:
   - Run `pnpm dev` to start the development server.
   - Run `pnpm lint` and `pnpm typecheck` to ensure code quality.
   - If you add or modify backend logic, run `pnpm generate` and test with Prisma Studio (`pnpm studio`).
6. **Add or update tests** in the `src/__tests__` or relevant test folders. Use [Jest](https://jestjs.io/) or the configured test runner.
7. **Commit your changes** with clear, conventional commit messages:
   ```sh
   git commit -m "feat: add new authentication flow"
   ```
8. **Push to your fork**:
   ```sh
   git push origin feature/my-feature
   ```
9. **Open a Pull Request** on GitHub. Fill out the PR template, describe your changes, and reference related issues if any.

## Pull Request Checklist

- [ ] Follows code style and conventions
- [ ] Passes linting (`pnpm lint`) and type checks (`pnpm typecheck`)
- [ ] All tests pass
- [ ] Documentation updated (README, environment variables, etc.)
- [ ] No sensitive data or secrets committed
- [ ] Linked to relevant issues (if applicable)

## Coding Standards

- Use [Prettier](https://prettier.io/) for formatting (`pnpm format:fix`)
- Use [ESLint](https://eslint.org/) for linting
- Use [TypeScript](https://www.typescriptlang.org/) for all code
- Use [Tailwind CSS](https://tailwindcss.com/) for styling
- Use [Prisma](https://www.prisma.io/) for database access
- Use [Zod](https://zod.dev/) for validation
- Use [Winston](https://github.com/winstonjs/winston) for logging

## Branching & Commit Conventions

- Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Branch names: `feature/<name>`, `fix/<name>`, `chore/<name>`, etc.
- Example commit messages:
  - `feat: add user profile page`
  - `fix: correct session expiration bug`
  - `chore: update dependencies`

## Environment Variables

- Document any new environment variables in `.env.example` and README
- Never commit secrets or sensitive data

## Code of Conduct

Please be respectful and considerate in all interactions. See [`SECURITY`](SECURITY.md) for reporting vulnerabilities.

## Issues & Feature Requests

- Use [GitHub Issues](https://github.com/koushikpuppala/nextjs-template/issues) for bugs and feature requests
- Provide as much detail as possible (steps to reproduce, expected behavior, screenshots, etc.)
- Tag issues appropriately (bug, enhancement, question, etc.)

## Getting Help

If you have questions, open an issue or start a discussion.

## Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Middleware

If you contribute middleware logic, document your changes in `middleware.ts` and update related documentation. Ensure your middleware follows project conventions and is well-tested.

## GitHub Actions

- If you add or update workflows, document changes in `.github/workflows/` and update related instructions.
- Ensure your PRs pass all required checks before merging.

---

Thank you for helping make this project better!
