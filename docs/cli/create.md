# 🦔 hedhog create

> 🚀 **Project Initialization Command**: The `hedhog create` command is essential for establishing a new HedHog project from the ground up. It automatically sets up the fundamental project structure, including all necessary dependencies and configurations, enabling you to dive into development right away.

The `hedhog create` command is used to generate a new HedHog project from scratch. This command sets up the basic structure, including necessary dependencies and configurations, allowing you to start development immediately.

---

#### 🚀 Usage:

```bash
hedhog create <library-name> [options]
```

#### ⚙️ Options:

- **--silent-complete**: Skip the completion message after the module is added.
- **-r, --remove-default-deps**: Remove the default dependencies.
- **-P, --package-manager [packageManager]**: Specify the package manager (default: npm).
- **-t, --table &lt;string&gt;**: Specify the table name.
- **-f, --fields &lt;fields...&gt;**: Fields for the migration in the format field:type:length or field:fk:table:column.

#### ❓ Why it's useful?

- **Project Initialization**: Quickly initialize a new project with a standardized setup, reducing manual configuration efforts.
- **Customization**: Offers options to tailor the project setup according to your needs, such as removing default dependencies or specifying a package manager.
- **Consistency**: Ensures that new projects adhere to best practices and have a consistent structure.

#### 📋 Example

```bash
hedhog create user-management --table users --fields id:int:10 name:string:255
```

This generates a new user-management library with a migration for a users table.

---
