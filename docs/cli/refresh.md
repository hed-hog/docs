# hedhog refresh

The `hedhog refresh` command is used to refresh the project's configuration and dependencies. This command can help solve issues related to outdated or mismatched settings, ensuring that your project is up to date with the latest configurations and modules.

---

#### Usage:

```bash
hedhog refresh
```

#### Output Example

```bash
Updated package.json and removed @hedhog dependencies (except @hedhog/prisma).
Updated app.module.ts and removed @hedhog modules (except PrismaModule).
Deleted package-lock.json.
Adding dependency <name>...
```

#### Why it's useful?

- **Configuration Updates**: Automatically updates the project's configuration files to reflect any changes made in the environment or dependencies.
- **Dependency Management**: Ensures that all project dependencies are synchronized and compatible with the current setup.
- **Troubleshooting**: Helpful for resolving issues caused by outdated configurations or missing dependencies, allowing for a smoother development experience.

---
