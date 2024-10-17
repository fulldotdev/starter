# Fulldev Starter Template

This is a template made by fulldev to create new projects using the fulldev-ui library and markdown.

## Development

### Setup

1. Fork the [repository](https://github.com/fulldotdev/ui) by clicking the fork button on the top right of the repository page.

2. Clone the Github repository in your designated folder:

```bash
git clone https://github.com/your-user-name/starter
```

Ensure the cloned repo is named "ui" or replace "ui" with your fork's name.

2. Enter the folder using `cd ui`.

3. Install the packages using pnpm:

```bash
pnpm install
```

1. Run the development server:

```bash
pnpm dev
```

## Starter

### Working with the content-layer

For docs on what you can do and how to work with with the content layer, see the [fulldev-ui docs](https://ui.full.dev/overview/content-layer). Important things as the folder and file structure are all explained there.

### Editing the content

You will be greeted with a starter page, to edit the content of this page, see `src/content/pages/index.md`. This starter also comes with a few examples of everything we offer, you can safely delete anything you don't need.

### (Custom) Components

To build sections and structure pages, we use various components such as blocks, layouts, and other UI elements. These components are primarily sourced from the FullUI Library, providing a set of pre-built, customizable elements. You can use these components directly in your pages.

If you need to customize any component (blocks, layouts, individual UI components, or any other), you can create a component with the same name in the corresponding directory (`src/blocks/`, `src/layouts/`, `src/components/`, etc.) to override the FullUI version. This allows you to maintain consistency with the FullUI naming conventions while tailoring the component to your specific needs.

For example:

- To create a block: create a file in `src/blocks/`
- To create a layout: create a file in `src/layouts/`
- To create a UI component: create a file in `src/components/`

Additionally, you can still create entirely new custom components if you need functionality not provided by the FullUI Library. This flexibility allows you to extend the available component set while leveraging the power of the FullUI components.

For blocks, use them in your content files as demonstrated in the examples. For layouts, you can use them following the same approach as done in `index.astro`. For components, they will be automatically overwritten with your version.

### Customization & Theming

Theming is done through our own integration. To change the theme, see the fulldev-ui [customization guide](https://ui.full.dev/overview/customization).

## Commands

- `dev`: Runs the Astro development server. This command starts a local development server, allowing you to preview your Astro project in real-time as you make changes.

- `build`: Builds the Astro project. This command compiles your Astro project into static files ready for deployment.

- `check`: Checks the Astro project for any errors or warnings. This is useful for catching potential issues before building or deploying your project.

- `preview`: Generates a preview of the Astro project. This command builds your project and then serves the built files locally, allowing you to preview the production version of your site.

- `astro`: Runs the Astro CLI. This is a general-purpose command that can be used with various subcommands to perform different Astro-related tasks.

- `test`: Runs a series of checks and builds for testing purposes. Specifically, it runs `astro check`, `astro build`, and `astro preview` in sequence, providing a comprehensive test of your project's integrity.

- `connect`: Links the global version of fulldev-ui to your project. This is useful when working with a local or development version of the fulldev-ui library. Must run `pnpm run link` in the fulldev-ui repo first.

## For experienced developers

### Working with a local version of the blocks package

1. clone the ui repo and run `pnpm run link` in the root of the ui repo.
2. run `pnpm run connect` in the root of this project repo.

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
