# 🦔 hedhog add

> ⚙️ **Module Integration Command**: The `hedhog add` command is designed to seamlessly incorporate new modules into your HedHog project. Whether you want to enhance your project with pagination features, authentication modules, or other functionalities, this command allows for swift and straightforward expansion of your project's capabilities.

The `hedhog add` command allows you to integrate new modules into your HedHog project with ease. Whether you need to add a pagination feature, an authentication module, or any other functionality, this command helps you expand your project’s capabilities quickly.

---

#### 🚀 Usage:

```bash
hedhog add <module> [options]
```

#### ⚙️ Options:

- **--silent-complete**: Skip the completion message after the module is added.

#### 📋 Example

```bash
hedhog add pagination
```

This adds the pagination module to your project.

#### ❓ Why it’s useful?

- **Modular Expansion**: Quickly add new features or modules to your project without manual configuration.
- **Efficiency**: Saves time by automating the process of module integration.

---

| Name             | Description                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **admin**        | Provides admin functionalities, including auth, core, dashboard, menu, role, routes, screens, settings and user management.       |
| **appearance**   | Manages the visual appearance of the application, including themes and styles.                                                    |
| **chat**         | Adds real-time chat functionality for user communication.                                                                         |
| **contact**      | Manages person-related data, including CRUD operations and associations with addresses, contacts, documents and other attributes. |
| **content**      | Handles content management, including creation, editing, and publishing.                                                          |
| **country**      | Manages country-related data, such as country codes and regional settings.                                                        |
| **faq**          | Provides a framework for managing Frequently Asked Questions (FAQ) sections.                                                      |
| **file**         | Provides file management capabilities, such as file uploads and storage.                                                          |
| **locale**       | Manages localization settings, including language preferences and translations.                                                   |
| **mail**         | Handles sending emails, including templating and SMTP configuration.                                                              |
| **mail-manager** | Offers advanced email management features, including tracking and scheduling.                                                     |
| **page**         | Enables the creation and management of static and dynamic pages.                                                                  |
| **pagination**   | Provides pagination support for lists and data views.                                                                             |
| **payment**      | Integrates payment processing capabilities for various gateways.                                                                  |
| **prisma**       | Integrates [**Prisma**](https://www.prisma.io/) ORM for database management and migrations.                                       |
| **profile**      | Manages user profile data and customization options.                                                                              |
| **rabbitmq**     | Integrates [**RabbitMQ**](https://www.rabbitmq.com/) for message queuing and event-driven architecture.                           |
| **setting**      | Provides configuration management for application settings and preferences.                                                       |
| **subscription** | Adds subscription management features, including plans, billing, and renewals.                                                    |
