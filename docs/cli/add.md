# hedhog add

The `hedhog add` command allows you to integrate new modules into your HedHog project with ease. Whether you need to add a pagination feature, an authentication module, or any other functionality, this command helps you expand your project’s capabilities quickly.

---

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

| Name           | Description                                                                                                |
| -------------- | ---------------------------------------------------------------------------------------------------------- |
| **admin**      | Provides administrative functionalities, including auth, menu, role, routes, screens, and user management. |
| **file**       | Provides file management capabilities, such as file uploads and storage.                                   |
| **mail**       | Handles sending emails, including templating and SMTP configuration.                                       |
| **pagination** | Provides pagination support for lists and data views.                                                      |
| **prisma**     | Integrates [**Prisma**](https://www.prisma.io/) ORM for database management and migrations.                |
| **setting**    | Allows for configuring application settings and preferences.                                               |
