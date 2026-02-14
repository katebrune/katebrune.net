# katebrune.net

Personal blog and frontend playground.

## Current Stack

This repo is now a `pnpm` workspace monorepo focused on fast iteration.

- App: Next.js 15 (`apps/web`)
- UI library: shared React UI package (`packages/ui`)
- Language/tooling: TypeScript, ESLint, Prettier
- Styling: Tailwind CSS
- Testing strategy: unit tests with Jest + Testing Library
- Storybook: used as a development tool for component work

## Workspace Layout

- `apps/web`: main site app
- `packages/ui`: reusable UI primitives and utilities

## Requirements

- Node.js `22.14.0` (see `.nvmrc`)
- pnpm `10+`

## Install

```bash
nvm use
pnpm install
```

## Local Development

```bash
pnpm dev
```

## Quality Checks

```bash
pnpm lint
pnpm build
pnpm test
```

## Storybook (Dev Tool)

```bash
pnpm storybook
pnpm build-storybook
```

## Legacy Context

Earlier versions of this project documented a different setup (single-package layout, Storybook-based visual/a11y test flows, and older tooling).

To view the previous README snapshot directly:

```bash
git show c866add:README.md
```

To browse full README history:

```bash
git log --oneline -- README.md
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
