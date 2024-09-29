# Fulldev Starter Template

This is a template made by fulldev to create new projects internally using the Fulldev-UI library.

## Development

### Setup

1. Fork the [repository](https://github.com/fulldotdev/ui) by clicking the fork button on the top right of the repository page.

2. Clone the Github repository in your designated folder:

```bash
git clone https://github.com/your-user-name/ui
```
Ensure the cloned repo is named "ui" or replace "ui" with your fork's name.

2. Enter the folder using `cd ui`.

3. Create a new branch:

```bash
git checkout -b my-new-branch
```

4. Install the packages using pnpm:

```bash
pnpm install
```

Make sure to do this in root to make sure you're using the local version of the component package.

5. Run the development server:

```bash
pnpm dev
```


#### Repo Structure

```md
.
├── src/
│   ├── blocks/
│   │   └── ...
│   ├── components/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   ├── content/
│   │   ├── pages/
│   │   │   └── ...
│   │   ├── records/
│   │   │   └── ...
│   │   │       └── ...
│   │   ├── settings/
│   │   │   ├── base.yml
│   │   │   └── ...
│   │   └── ...
│   ├── css/
│   │   ├── custom.css
│   │   └── ...
├── public/
│   └── ...
└──
```

##### /src

The main source directory containing all the core files of the project.

- **blocks/**: Contains reusable block components that can be composed to build pages (Custom or overwrites existing fulldev-ui blocks)
- **components/**: Houses individual UI components used throughout the project (Custom or overwrites existing fulldev-ui components)
- **layouts/**: Contains layout components used to structure pages (Custom or overwrites existing fulldev-ui layouts)
- **content/**: Stores content-related files:
  - **pages/**: Contains markdown or MDX files for individual pages.
  - **records/**: Contains markdown or MDX files for content collections. Nested in directories by collection name.
  - **settings/**: Includes configuration files for various settings like the sidebar.
- **css/**: Contains global CSS files and styles.


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

1. clone the ui repo and run `pnpm link --global`
2. run `pnpm link fulldev-ui` in the root of this project repo.

### Editing the content

You will be greeted with a starter page, to edit the content of this page, see `src/content/pages/index.md`. We use content collections for all of our websites for seemless integration with [CMS](https://cloudcannon.com/) for our customers to easily edit the contents of the website without needing to be technical.

#### i18n (Internationalization)

With this starter, internationalization is already set up. To add a new language, create a new folder in `src/content/` with the language code (e.g. `en`, `es`, `fr`, etc.). Then, copy the `pages` folder from the default language to the new language folder. You can then edit the content of the pages in the new language.

to translate the blocks in `settings/base.yml` you can simply create another file with the language code (e.g. `en.yml`, `es.yml`, `fr.yml`, etc.) and copy/translate the content from `base.yml`.

### Blocks (sections)

To build sections we use blocks. Blocks are reusable components that can be used in any page. These blocks are now primarily sourced from the FullUI Library, providing a set of pre-built, customizable components. You can use these blocks directly in your pages.

If you need to customize a block, you can create a block with the same name in `src/blocks/` to override the FullUI version. This allows you to maintain consistency with the FullUI naming conventions while tailoring the block to your specific needs.

Additionally, you can still create entirely new custom blocks in `src/blocks/` if you need functionality not provided by the FullUI Library. This flexibility allows you to extend the available block set while leveraging the power of the FullUI components.

### Layouts

We use layouts to define the structure of the page. To create a new layout, see `src/layouts/` and use them following the same approach as done in `index.astro`.

### Theming

We use the Fulldev-UI library for theming. To change the theme, see `src/layouts/Layout.astro` and follow the Fulldev-UI [theming guide](https://ui.full.dev/overview/theming).

## Commands

- `dev`: Runs the Astro development server. This command starts a local development server, allowing you to preview your Astro project in real-time as you make changes.

- `build`: Builds the Astro project. This command compiles your Astro project into static files ready for deployment.

- `check`: Checks the Astro project for any errors or warnings. This is useful for catching potential issues before building or deploying your project.

- `preview`: Generates a preview of the Astro project. This command builds your project and then serves the built files locally, allowing you to preview the production version of your site.

- `astro`: Runs the Astro CLI. This is a general-purpose command that can be used with various subcommands to perform different Astro-related tasks.

- `test`: Runs a series of checks and builds for testing purposes. Specifically, it runs `astro check`, `astro build`, and `astro preview` in sequence, providing a comprehensive test of your project's integrity.

- `connect`: Links the global version of fulldev-ui to your project. This is useful when working with a local or development version of the fulldev-ui library.
