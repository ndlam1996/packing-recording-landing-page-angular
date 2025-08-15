#!/usr/bin/env node

/**
 * Script to verify GitHub Pages deployment setup
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying GitHub Pages deployment setup...\n');

// Check if required files exist
const requiredFiles = [
  '.github/workflows/deploy.yml',
  'package.json',
  'angular.json',
  'src/404.html'
];

let allFilesExist = true;

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} is missing`);
    allFilesExist = false;
  }
});

// Check package.json for required scripts
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  if (packageJson.scripts && packageJson.scripts['build:gh-pages']) {
    console.log('✅ build:gh-pages script exists');
  } else {
    console.log('❌ build:gh-pages script is missing');
    allFilesExist = false;
  }
} catch (error) {
  console.log('❌ Error reading package.json');
  allFilesExist = false;
}

// Check if 404.html matches index.html pattern (for SPA routing)
try {
  const html404 = fs.readFileSync('src/404.html', 'utf8');
  if (html404.includes('<app-root></app-root>')) {
    console.log('✅ 404.html is properly configured for Angular SPA');
  } else {
    console.log('⚠️  404.html might need Angular SPA configuration');
  }
} catch (error) {
  console.log('❌ Error reading 404.html');
}

// Check GitHub Actions workflow
try {
  const workflow = fs.readFileSync('.github/workflows/deploy.yml', 'utf8');
  
  if (workflow.includes('actions/deploy-pages@v4')) {
    console.log('✅ GitHub Actions workflow uses latest deploy action');
  } else {
    console.log('⚠️  Consider updating deploy action version');
  }
  
  if (workflow.includes('dist/packing-recording-landing-page/browser')) {
    console.log('✅ Workflow deploys correct build output path');
  } else {
    console.log('❌ Workflow might have incorrect deployment path');
    allFilesExist = false;
  }
} catch (error) {
  console.log('❌ Error reading workflow file');
  allFilesExist = false;
}

console.log('\n' + '='.repeat(50));

if (allFilesExist) {
  console.log('🎉 GitHub Pages deployment setup is ready!');
  console.log('\nNext steps:');
  console.log('1. Push changes to main branch');
  console.log('2. Enable GitHub Pages in repository settings (source: GitHub Actions)');
  console.log('3. Your site will be available at: https://ndlam1996.github.io/packing-recording-landing-page-angular/');
} else {
  console.log('❌ Some issues found with the deployment setup');
  console.log('Please fix the missing files/configurations above');
}

console.log('\n📖 For more help, see: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow');