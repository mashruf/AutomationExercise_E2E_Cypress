# E2E Test Suite Using Cypress with Page Object Model and BDD (Gherkin)

This repository contains an end-to-end (E2E) test suite using **Cypress**, written with a **Page Object Model (POM)** and **BDD-style (Gherkin)** feature files to automate test scenarios on [AutomationExercise.com](https://automationexercise.com/).

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
│   └── PageObjectModel/  # Page Object classes
├── .github/workflows/    # GitHub Actions CI configuration
├── cypress.config.js     # Cypress configuration
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
 </pre>

