# The Internet Automation with Playwright and TypeScript

This project is designed to automate the testing of various web functionalities using Playwright in a TypeScript setup. It targets a demo website called [The Internet](https://the-internet.herokuapp.com/) for practicing automation testing.

## Features

- **Test Coverage**: Includes tests for file upload, file download, form authentication, dynamic controls, and more.
- **GitHub Actions CI**: Integrates with GitHub Actions for continuous integration, automatically running tests on push or pull request events to the main branch.
- **Report Generation**: Generates test reports in multiple formats including JSON, JUnit, and HTML, with the latter being deployable to [GitHub Pages](https://moatazeldebsy.github.io/the-internet-automation-playwright-typescript/) for easy access.
- **Slack Notification**: Sends Slack Notifications with the test report, including the Author of the commit or the pull request, branch and the status

<img width="883" alt="Screenshot 2024-08-07 at 12 57 48" src="https://github.com/user-attachments/assets/50b1c712-13e4-444e-887a-93ec8157594c">



## Getting Started

### Prerequisites

- Node.js (v16 as specified in the GitHub Actions workflow)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/moatazeldebsy/the-internet-automation-typescript-playwright.git
