# Fulldev Starter Template

This is a template made by fulldev to create new projects internally using the Fulldev-UI library.

## Getting Started

First clone this repo or make a new one straight from Github by using the template and install the dependencies using pnpm.

```ts
pnpm install
```

Then start the development server.

```ts
pnpm dev
```

### Getting diffs/commits from the template

To get the latest changes from the template, you need to set up a remote in your project repository:

1. `cd` into your project directory (not this template).
2. Run the following command

```git
git remote add template https://github.com/fulldotdev/fulldev-starter.git
```

3. When you want to merge the latest changes from the template, run the following command:

```ts
git fetch template
```

To merge:

```git
git checkout <branch-to-merge-to>
git merge template/<branch-to-merge>
```

To rebase:

```git
git checkout <branch-to-merge-to>
git rebase upstream/<branch-to-merge>
```

NOTE: When rebasing, you must run `git push origin <branch-name> --force` in order to override your old commits on your remote branch. This is why It's recommend to rebase only on private repos.

### Working with a local version of the blocks package

1. clone the blocks repo and run `pnpm link --global` in `/package`
2. run `pnpm link --global` fulldev-blocks in the root of this project repo.

## Editing the content

You will be greeted with a starter page, to edit the content of this page, see `src/content/pages/index.md`. We use content collections for all of our websites for seemless integration with [CMS](https://cloudcannon.com/) for our customers to easily edit the contents of the website without needing to be technical.

### Schemas

We use schemas to define the structure of the content. This is used to validate the content and to provide a better and typesafe editing experience. To create a new schema, see `src/schemas/` and add it by to a collection in `src/content/config.ts`

### Blocks (sections)

To build sections we use blocks. Blocks are reusable components that can be used in any page. To create a new block, see `src/content/blocks/`. These blocks should be built using the FullUI library.

### Layouts

We use layouts to define the structure of the page. To create a new layout, see `src/layouts/` and use them following the same approach as done in `index.astro`.

### Theming

We use the Fulldev-UI library for theming. To change the theme, see `src/layouts/Layout.astro` and follow the Fulldev-UI [theming guide](https://ui.full.dev/overview/theming).

## Commands

- `dev`: Runs the Astro development server.
- `start`: Alias for `dev`, also runs the Astro development server.
- `build`: Builds the Astro project.
- `build:prod`: Builds the Astro project and then packages it using Jampack for production deployment.
- `check`: Checks the Astro project for any errors or warnings.
- `preview`: Generates a preview of the Astro project.
- `astro`: Runs the Astro CLI.
- `test`: Runs checks, builds, and generates a preview of the Astro project for testing purposes.
- `format`: Formats the source code files (`.ts`, `.js`, `.astro`) using Prettier, should run before commiting if you do not auto-format on save in your IDE.
