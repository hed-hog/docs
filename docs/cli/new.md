# hedhog new

The `hedhog new` command is used to generate a new Hedhog project with customizable options, including package management, database configuration, and git repository setup. It offers several flags to control how the project is initialized, making it flexible for different development environments.

#### Usage

```bash
hedhog new <project-name> [options]
```

#### Options

| Option                        | Description                                                      | Default |
| ----------------------------- | ---------------------------------------------------------------- | ------- |
| `--directory <directory>`     | Specify the destination directory for the project.               | `.`     |
| `-g, --skip-git`              | Skip git repository initialization.                              | `false` |
| `-s, --skip-install`          | Skip package installation.                                       | `false` |
| `-P, --package-manager`       | Specify the package manager to use (e.g., npm, yarn).            | `npm`   |
| `-d, --database <database>`   | Specify the database type (postgres or mysql).                   |         |
| `-h, --dbhost <host>`         | Specify the database host.                                       |         |
| `-p, --dbport <port>`         | Specify the database port.                                       |         |
| `-u, --dbuser <user>`         | Specify the database user.                                       |         |
| `-w, --dbpassword <password>` | Specify the database password.                                   |         |
| `-n, --dbname <database>`     | Specify the name of the database.                                |         |
| `-f, --force`                 | Force project creation if the directory already exists.          | `false` |
| `-c, --docker-compose`        | Create a `docker-compose` file if the database connection fails. | `false` |

#### Example

```bash
hedhog new my-hedhog-project --database postgres --skip-git --package-manager yarn
```

This command creates a new Hedhog project named `my-hedhog-project`, sets the database type to `postgres`, skips git initialization, and uses `yarn` as the package manager.

#### Why it's useful?

- **Customizable Setup**: Control the project setup with options for skipping git initialization, skipping package installation, and selecting the package manager.
- **Database Support**: Specify different database configurations, including host, port, user, and password. Supports both PostgreSQL and MySQL.
- **Docker Support**: Automatically create a docker-compose file if database connection fails.
- **Forced Creation**: Use the --force flag to overwrite an existing directory and proceed with project creation.
