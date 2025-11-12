# Web Automation Framework

A comprehensive Cypress-based test automation framework for end-to-end testing with API testing capabilities.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Framework Structure](#framework-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Test Specs](#test-specs)
- [Page Object Model](#page-object-model)
- [Test Tagging & Filtering](#test-tagging--filtering)
- [Fixtures & Test Data](#fixtures--test-data)
- [Running Tests](#running-tests)
- [Reports](#reports)

---

## 🎯 Project Overview

This framework is built using **Cypress 15.5.0** and provides:

- **End-to-End (E2E) Testing**: UI automation with Cypress
- **API Testing**: API endpoint validation and testing
- **Page Object Model**: Organized and maintainable test structure
- **Test Tagging**: Filter tests using tags like `@smoke`, `@regression`
- **HTML Reporting**: Mochawesome reporter with charts and embedded screenshots
- **Test Filtering**: Cypress grep plugin for selective test execution

---

## 📁 Framework Structure

```
Web-Automation/
├── cypress/
│   ├── e2e/
│   │   ├── pages/
│   │   │   └── login.page.js          # Page Object Model - Login page
│   │   └── specs/
│   │       ├── api.cy.js              # API test specifications
│   │       ├── first.cy.js            # UI test specifications
│   │       └── privacyLink.cy.js      # Privacy link navigation tests
│   ├── fixtures/
│   │   └── user.json                  # Test data (fixtures)
│   ├── support/
│   │   ├── e2e.js                     # Global test configuration
│   │   └── commands.js                # Custom Cypress commands
│   ├── downloads/                     # Downloaded files during tests
│   ├── reports/
│   │   └── html/                      # HTML test reports
│   └── screenshots/                   # Test failure screenshots
├── cypress.config.js                  # Cypress configuration
├── package.json                       # Project dependencies
└── README.md                          # This file
```

---

## 🔧 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Setup Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd Web-Automation
```

2. Install dependencies:
```bash
npm install
```

This will install:
- **cypress**: v15.5.0 - E2E testing framework
- **cypress-mochawesome-reporter**: v4.0.2 - HTML reporting with charts
- **@cypress/grep**: v5.0.0 - Test filtering and tagging

---

## ⚙️ Configuration

### Cypress Configuration (`cypress.config.js`)

The framework is configured with:

```javascript
{
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,                   // Enable chart generation
    reportPageTitle: 'custom-title', // Custom report title
    embeddedScreenshots: true,      // Embed screenshots in report
    inlineAssets: true,             // Inline CSS/JS in report
    saveAllAttempts: false,         // Don't save all retry attempts
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Mochawesome reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);
      // Cypress grep plugin for test filtering
      const { plugin: cypressGrepPlugin } = require('@cypress/grep/plugin')
      cypressGrepPlugin(config)
      return config
    },
  },
}
```

### Global Configuration (`cypress/support/e2e.js`)

- Imports custom commands
- Registers Mochawesome reporter
- Registers Cypress grep for test filtering

---

## 📝 Test Specs

### 1. **API Tests** (`cypress/e2e/specs/api.cy.js`)

#### Test Module: `api test module`

**Annotation**: `@smoke`, `@regression`

- **Test: First API Test** - GET Request
  - Endpoint: `https://jsonplaceholder.typicode.com/users`
  - Validates response status: 200
  - Logs response

- **Test: Post Operation** - POST Request
  - Endpoint: `https://jsonplaceholder.typicode.com/posts`
  - Creates a post with title, body, and userId
  - Validates response status: 201
  - Verifies response body title matches sent value

---

### 2. **UI Tests** (`cypress/e2e/specs/first.cy.js`)

#### Test Module: `Test Module`

**Annotation**: `@smoke`, `@regression`

- **Test: First Testcase**
  - Page: Google.com
  - Actions:
    - Navigate to Google
    - Verify page title equals 'Google'
    - Load user fixture data
    - Search using fixture user name
    - Validate search input value

---

### 3. **Navigation Tests** (`cypress/e2e/specs/privacyLink.cy.js`)

#### Test Module: `Test new window link`

**Annotation**: `@regression`

- **Test: Test privacy link**
  - URL: `https://staging-skyportcare.daikincomfort.com/`
  - Actions:
    - Visit staging site
    - Click "Privacy Policy" link
    - Remove `target` attribute to handle new window
    - Verify navigation to privacy page
    - Navigate back to previous page
    - Verify URL returns to staging site

---

## 🏗️ Page Object Model

### Login Page (`cypress/e2e/pages/login.page.js`)

```javascript
class Login {
  navigateToUrl() {
    cy.visit('www.google.com')
  }
}
export default Login
```

**Methods:**
- `navigateToUrl()` - Navigates to Google.com

---

## 🏷️ Test Tagging & Filtering

### Available Tags

- **`@smoke`**: Quick smoke tests for critical functionality
- **`@regression`**: Comprehensive regression tests

### Run Tests by Tag

```bash
# Run only smoke tests
npx cypress run --env grepTags="@smoke"

# Run only regression tests
npx cypress run --env grepTags="@regression"

```

**Original Command** (also supported):
```bash
npx cypress run --env grepTags="@smoke" - to run test cases where smoke tag used
```

---

## 📊 Fixtures & Test Data

### User Fixture (`cypress/fixtures/user.json`)

```json
{
  "name": "Using fixtures to represent data",
  "email": "hello@cypress.io",
  "body": "Fixtures are a great way to mock data for responses to routes"
}
```

**Usage in Tests:**
```javascript
cy.fixture('user').then((userdata) => {
  cy.get('.gLFyf').type(`${userdata.name}{enter}`)
})
```

---

## 🚀 Running Tests

### Open Cypress Test Runner

```bash
npx cypress open
```

### Run All Tests (Headless)

```bash
npx cypress run
```

### Run Specific Test File

```bash
npx cypress run --spec "cypress/e2e/specs/api.cy.js"
```

### Run with Specific Browser

```bash
npx cypress run --browser chrome
npx cypress run --browser firefox
```

### Run with Specific Tag

```bash
npx cypress run --env grep="@smoke"
```

---

## 📈 Reports

### Report Location

HTML reports are generated in: `cypress/reports/html/index.html`

### Report Features

- ✅ Test execution summary with pass/fail counts
- 📊 Charts for test statistics
- 🖼️ Embedded screenshots for failed tests
- 📝 Detailed test logs and assertions
- ⏱️ Execution time tracking

### View Report

Open the HTML report in your browser after running tests:

```bash
open cypress/reports/html/index.html
```

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| cypress | ^15.5.0 | E2E testing framework |
| cypress-mochawesome-reporter | ^4.0.2 | HTML reporting |
| @cypress/grep | ^5.0.0 | Test filtering and tagging |

---

## 🔗 Useful Links

- [Cypress Documentation](https://docs.cypress.io)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Mochawesome Reporter](https://github.com/adamgruber/mochawesome-reporter)
- [Cypress Grep Plugin](https://github.com/cypress-io/cypress/tree/develop/npm/grep)

---

## 📝 Notes

- Tests use **annotations** (tags) for categorization and selective execution
- **Page Object Model** is implemented for better test organization
- **Mochawesome reporter** generates comprehensive HTML reports with charts
- **Cypress grep** enables powerful test filtering capabilities
- Screenshots are automatically captured on test failures
- All tests are structured in the `specs` directory with clear naming conventions

---

## ✉️ Support

For issues or questions, please refer to the Cypress documentation or open an issue in the repository.

---

**Last Updated**: November 12, 2025  
**Framework**: Cypress 15.5.0  
**Current Branch**: staging