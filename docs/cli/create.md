# 🦔 hedhog create

> 🚀 **Library Initialization Command**: The `hedhog create` command is essential for setting up a new Hedhog library with a structured foundation. It automatically organizes essential files, configurations, and dependencies, enabling you to dive into development with minimal setup.

The `hedhog create` command sets up the basic structure for a new Hedhog library, including necessary dependencies, configurations, and optional customization, allowing you to start development right away.

---

#### 🚀 Usage:

```bash
hedhog create <library-name> [options]
```

#### ⚙️ Options:

- **-r, --remove-default-deps**: Exclude the default dependencies when initializing the library.
- **-P, --package-manager [packageManager]**: Specify the package manager to use for installation (default: `npm`).

#### ❓ Why it’s useful?

- **Library Initialization**: Quickly initializes a new Hedhog library with a standardized structure, reducing manual configuration steps.
- **Flexibility**: Allows customization options like removing default dependencies or choosing a preferred package manager.
- **Consistency**: Establishes a consistent setup for new libraries, adhering to best practices and project structure.

#### 📋 Example

```bash
hedhog create notification-service --remove-default-deps --package-manager yarn
```

This command creates a `notification-service` library, excludes the default dependencies, and uses `yarn` for package management.
