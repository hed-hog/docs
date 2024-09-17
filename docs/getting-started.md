# Getting Started with HedHog

**Simplify the creation of headless APIs with a modular administrative panel and RBAC permissions control.**

---

## Introduction

**HedHog** is a powerful and flexible framework that facilitates the development of headless APIs along with a modular administrative panel. With Role-Based Access Control (RBAC), you can manage pre-configured modules or easily create new ones to meet the specific needs of your project.

- **Back-end API**: Developed with **NestJS** and **TypeScript**, ensuring scalability and ease of maintenance.
- **Administrative Panel**: Built with **Vite**, **React**, and **Shadcn**, providing a fast and modern interface.
- **Flexible Integration**: Allows you to use any front-end technology, such as **React**, **Angular**, **Vue**, or even pure **HTML**. Additionally, it can be consumed by applications like **Android**, **iOS**, **Flutter**, or **ElectronJS**.

---

## Key Features

- **Headless API**: Provides a robust and scalable RESTful API.
- **Modular Administrative Panel**: Manage your content and settings through a user-friendly interface.
- **RBAC Permissions Control**: Define detailed permissions for different user roles.
- **Front-end Flexibility**: Integrate with any front-end technology of your choice.
- **Easy Module Creation**: Quickly create new modules to expand functionalities.
- **Simplified Configuration**: Use the HedHog CLI to start projects with ease.
- **Customizable Database**: Supports **PostgreSQL** and **MySQL**, with optional configuration via **Docker**.

---

## Quickstart

### Prerequisites

- **Node.js** version **18** or higher
- **npm** or **yarn**
- **Docker** (optional, for automatic database setup)

### Installing the HedHog CLI

Install the HedHog CLI globally:

```bash
npm install -g @hedhog/cli
```

Or use it with npx without global installation:

```bash
npx @hedhog/cli [command]
```

### Creating a New Project

Create a new project named blog:

```bash
hedhog new blog
```

The CLI will guide you through the setup, including database connection. If you prefer, the CLI can automatically set up a database using Docker.

### Starting the Application

Navigate to the project directory and start the server:

```bash
cd blog
npm run dev
```

Access the administrative panel at http://localhost:3100 and the API at http://localhost:3000.

### Documentation

Refer to the full documentation to learn more about how to use HedHog and take advantage of all its features.

### Community and Support

GitHub: [github.com/hed-hog](https://github.com/hed-hog)
Contribute: Feel free to open issues or pull requests.

### License

HedHog is licensed under the MIT License.

Start building powerful applications with HedHog today!
