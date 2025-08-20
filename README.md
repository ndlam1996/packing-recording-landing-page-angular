# PackingRecordingLandingPage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.9.

## Live Demo

🌐 **Live Site**: [https://quayvideodongdon.com/](https://quayvideodongdon.com/)

This application is automatically deployed to GitHub Pages with a custom domain whenever changes are pushed to the main branch.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

For GitHub Pages deployment with custom domain, use `npm run build:custom-domain` which builds with root path base href.

For GitHub Pages deployment without custom domain, use `npm run build:gh-pages` which builds with the correct subdirectory base href.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions with a custom domain.

### Automatic Deployment
- Push changes to the `main` branch
- GitHub Actions will automatically build and deploy the application using the custom domain configuration
- The site will be available at: https://quayvideodongdon.com/

### Custom Domain Setup
The project is configured with:
- CNAME file pointing to `quayvideodongdon.com`
- Custom build script `build:custom-domain` that builds with root path (`/`) base href
- GitHub Actions workflow that uses the custom domain build

### Manual Setup (if needed)
1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. Configure custom domain in the Pages settings
5. The workflow will handle the rest automatically

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
