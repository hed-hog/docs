# Getting Started with HedHog

**Simplify the creation of headless APIs with a modular administrative panel and RBAC permissions control.**

---

## Introduction

**HedHog** is a powerful and flexible framework that facilitates the development of headless APIs along with a modular administrative panel. With Role-Based Access Control (RBAC), you can manage pre-configured modules or easily create new ones to meet the specific needs of your project.

- **Back-end API**: Developed with [**NestJS**](https://nestjs.com/) and [**TypeScript**](https://www.typescriptlang.org/), ensuring scalability and ease of maintenance.
- **Administrative Panel**: Built with [**Vite**](https://vitejs.dev/), [**React**](https://react.dev/), and [**Shadcn**](https://ui.shadcn.com/), providing a fast and modern interface.
- **Flexible Integration**: Allows you to use any front-end technology, such as [**React**](https://reactjs.org/), [**Angular**](https://angular.io/), [**Vue**](https://vuejs.org/), or even pure [**HTML**](https://developer.mozilla.org/en-US/docs/Web/HTML). Additionally, it can be consumed by applications like [**Android**](https://developer.android.com/), [**iOS**](https://developer.apple.com/ios/), [**Flutter**](https://flutter.dev/), or [**ElectronJS**](https://www.electronjs.org/).

---

## Key Features

- **Headless API**: Provides a robust and scalable RESTful API.
- **Modular Administrative Panel**: Manage your content and settings through a user-friendly interface.
- **RBAC Permissions Control**: Define detailed permissions for different user roles.
- **Front-end Flexibility**: Integrate with any front-end technology of your choice.
- **Easy Module Creation**: Quickly create new modules to expand functionalities.
- **Simplified Configuration**: Use the HedHog CLI to start projects with ease.
- **Customizable Database**: Supports [**PostgreSQL**](https://www.postgresql.org/) and [**MySQL**](https://www.mysql.com/), with optional configuration via [**Docker**](https://www.docker.com/).

---

## Quickstart

### Prerequisites

- [**Node.js**](https://nodejs.org/en/) version **18** or higher
- [**npm**](https://www.npmjs.com/) or [**yarn**](https://yarnpkg.com/)
- [**Docker**](https://www.docker.com/) (optional, for automatic database setup)

### Installing the HedHog CLI

Install the HedHog CLI globally:

```bash
npm install -g @hedhog/cli
```

Or use it with npx without global installation:

```bash
npx @hedhog/cli [command]
```

Now, go to [**Module Development**](/docs/tutorial/module-development) topic to learn more about Hedhog modules and how to create yours!
