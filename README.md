# E2E Test Suite Using Cypress with Page Object Model and BDD (Gherkin)

This repository contains an end-to-end (E2E) test suite using **Cypress**, written with a **Page Object Model (POM)** and **BDD-style (Gherkin)** feature files to automate test scenarios on [AutomationExercise.com](https://automationexercise.com/). The project is integrated with GitHub Actions to enable continuous integration, automatically running tests on every push and pull request to ensure code quality and reliability.

---

## Tech Stack

- Cypress
- Cucumber Preprocessor (Gherkin syntax)
- JavaScript
- GitHub Actions for CI/CD
- Allure Report

---

## Features Tested

- Homepage Verification
- User Signup, Login, and Logout
- Product Search and Filtering (Category, Brand)
- Add to Cart and Cart Verification
- Complete Order Placement (Checkout)
- Contact Form Submission
- Order History and Invoice
- Subscription Functionality

---

## Project Structure

<pre>├── cypress/
│   ├── e2e/              # BDD feature files and step definitions
│   ├── fixtures/         # Test data files
│   ├── support/          # Cypress commands and setup
│   └── POM/              # Page Object classes
├── .github/workflows/    # GitHub Actions CI configuration
├── cypress.config.js     # Cypress configuration
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
 </pre>

---

## ⚙️ How to Run

### 1. Clone the repository
```
git clone https://github.com/mashruf/AutomationExercise_E2E_Cypress.git

cd AutomationExercise_E2E_Cypress

```

### 2. Install dependencies
```
npm install

```
### 3. Run tests

#### Open Cypress UI:
```
npx cypress open

```
#### Run tests in terminal (headless):
```
npx cypress run

```

---

![screencapture-mashruf-github-io-AutomationExercise-E2E-Cypress-2025-06-18-22_13_01](https://github.com/user-attachments/assets/e356b198-e2db-4aca-a701-7298657769e2)





 

