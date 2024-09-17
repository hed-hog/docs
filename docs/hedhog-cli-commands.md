# HedHog CLI Commands

**Enhance your development experience with the HedHog CLI. From project creation to adding external modules, manage everything with ease using simple commands.**

---

## Commands

### `hedhog info`

Displays system and project information.

#### Usage:

```bash
hedhog info
```

---

### `hedhog add`

Adds a new module to your HedHog project. This command allows you to add external modules like pagination, authentication, or any other modules to your project.

#### Usage:

```bash
hedhog add <module> [options]
```

#### Options:

- **--silent-complete**: Skip the completion message after the module is added.

---

### `hedhog create`

Generates a new HedHog project. This command helps you create the basic structure for a new HedHog library.

#### Usage:

```bash
hedhog create <library-name> [options]
```

#### Options:

- **--silent-complete**: Skip the completion message after the module is added.
- **-r, --remove-default-deps**: Remove the default dependencies.
- **-P, --package-manager [packageManager]**: Specify the package manager (default: npm).
- **-t, --table &lt;string&gt;**: Specify the table name.
- **-f, --fields &lt;fields...&gt;**: Fields for the migration in the format field:type:length or field:fk:table:column.

#### Example

```bash
hedhog create user-management --table users --fields id:int:10 name:string:255
```

This generates a new user-management library with a migration for a users table.

## Need more help?

Refer to the full CLI documentation or run hedhog --help for a list of available commands and options.

Start building amazing projects with HedHog CLI!
