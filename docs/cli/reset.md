# hedhog reset

The `hedhog reset` command is used to redefine and reset the Hedhog project by removing additional dependencies and their related migrations. This command is particularly useful when you want to clean up the project or revert it to a baseline configuration, removing unnecessary files and resetting the database and environment settings.

---

#### Usage

```bash
hedhog reset <dependency> [options]
```

#### Output Example

```bash
Resetting the project...
✔ Migrations cleared.
✔ Dependencies cleared.
✔ AppModule created.
✔ Prisma Schema created.
✔ Environment file found.
ℹ Recreating database...
✔ Database recreated.
Project reset successfully.
```

#### Why it's useful?

- **Clean Slate**: Removes all additional Hedhog dependencies (except essential ones like @hedhog/prisma) and their related migrations, providing a fresh start for the project.
- **Recreate Key Files**: Rebuilds important files such as the app.module.ts, [**Prisma**](https://www.prisma.io/) schema, and .env, ensuring that the project is properly configured.
- **Database Reset**: Drops and recreates the project database, ensuring a clean state for further development or testing.
- **Troubleshooting**: Useful for addressing issues related to dependency conflicts, migrations, or broken configurations by resetting everything to default.

#### Steps Performed by the Command:

- **Check for Valid Project**: Verifies if the directory is a Hedhog project.
- **Remove Migrations**: Clears the existing migrations and recreates the migration folder.
- **Remove Dependencies**: Removes Hedhog dependencies from package.json (excluding core ones like @hedhog/prisma).
- **Recreate app.module.ts**: Downloads and recreates the main application module from the Hedhog bootstrap repository.
- **Recreate Prisma Schema**: Based on the environment's database type ([**MySQL**](https://www.mysql.com/) or [**PostgreSQL**](https://www.postgresql.org/)), recreates the [**Prisma**](https://www.prisma.io/) schema file.
- **Check .env File**: Ensures that the .env file exists and creates one if it's missing.
- **Recreate Database**: Connects to the database and recreates it based on the current environment variables.
