# hedhog add

The `hedhog add` command allows you to integrate new modules into your HedHog project with ease. Whether you need to add a pagination feature, an authentication module, or any other functionality, this command helps you expand your project’s capabilities quickly.

#### Usage:

```bash
hedhog add <module> [options]
```

#### Options:

- **--silent-complete**: Skip the completion message after the module is added.

#### Example

```bash
hedhog add pagination
```

This adds the pagination module to your project.

#### Why it’s useful?

- **Modular Expansion**: Quickly add new features or modules to your project without manual configuration.
- **Efficiency**: Saves time by automating the process of module integration.

---

### Available Hedhog Modules

| Name           | Description                                                                  |
| -------------- | ---------------------------------------------------------------------------- |
| **auth**       | Manages authentication processes, including login, registration, and tokens. |
| **file**       | Provides file management capabilities, such as file uploads and storage.     |
| **mail**       | Handles sending emails, including templating and SMTP configuration.         |
| **menu**       | Allows for the creation and management of application menus.                 |
| **pagination** | Provides pagination support for lists and data views.                        |
| **permission** | Controls access and permissions for various user roles.                      |
| **prisma**     | Integrates Prisma ORM for database management and migrations.                |
| **screen**     | Manages screen layouts and configurations for UI display.                    |
| **setting**    | Allows for configuring application settings and preferences.                 |
| **user**       | Manages user profiles, roles, and user-specific settings.                    |
