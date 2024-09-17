# hedhog new

The `hedhog new` command is used to generate a new Hedhog project with customizable options, including package management, database configuration, and [**Git**](https://git-scm.com/about) repository setup. It offers several flags to control how the project is initialized, making it flexible for different development environments.

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

#### Prompt Questions

When running the `hedhog new` command, several prompts may be displayed to gather necessary information for setting up a new project. Below is a list of these prompts, their meanings, and the conditions under which each prompt will be displayed.

| **Prompt Question**                                               | **Meaning**                                                                                                            | **Condition**                                                                                          | **Choices / Default**                                                                                                |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| `The directory [name] is not empty. Do you want to overwrite it?` | Asks whether to overwrite an existing, non-empty directory to prevent accidental data loss.                            | Appears if the specified directory exists and is not empty, and the `force` option is not `true`.      | Choices: `yes`, `no`                                                                                                 |
| `Select database type to use in project`                          | Allows selection of the database type for the project setup.                                                           | Appears if the `database` option is not provided.                                                      | Choices: `postgres`, `mysql`                                                                                         |
| `Enter database host`                                             | Requests the host address for the database connection.                                                                 | Appears if the `dbhost` option is not provided.                                                        | Default: `localhost`                                                                                                 |
| `Enter database port`                                             | Requests the port number for the database connection.                                                                  | Appears if the `dbport` option is not provided.                                                        | Default Values: `5432` ([**PostgreSQL**](https://www.postgresql.org/)), `3306` ([**MySQL**](https://www.mysql.com/)) |
| `Enter database user`                                             | Asks for the username to access the database.                                                                          | Appears if the `dbuser` option is not provided.                                                        | Default: `hedhog`                                                                                                    |
| `Enter database password`                                         | Requests the password for the database user.                                                                           | Appears if the `dbpassword` option is not provided.                                                    | Default: `changeme`                                                                                                  |
| `Enter database name`                                             | Asks for the name of the database to be used.                                                                          | Appears if the `dbname` option is not provided.                                                        | Default: `hedhog`                                                                                                    |
| `Would you like to use docker for create a database?`             | Inquires if [**Docker**](https://www.docker.com/) should be used for setting up and managing the database environment. | Appears if database credentials are invalid and if [**Docker**](https://www.docker.com/) is installed. | Choices: `yes`, `no`                                                                                                 |

#### Why it's useful?

- **Customizable Setup**: Control the project setup with options for skipping git initialization, skipping package installation, and selecting the package manager.
- **Database Support**: Specify different database configurations, including host, port, user, and password. Supports both [**PostgreSQL**](https://www.postgresql.org/) and [**MySQL**](https://www.mysql.com/).
- **[**Docker**](https://www.docker.com/) Support**: Automatically create a docker-compose file if database connection fails.
- **Forced Creation**: Use the --force flag to overwrite an existing directory and proceed with project creation.
