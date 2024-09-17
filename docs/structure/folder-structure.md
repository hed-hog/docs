# Folder Structure

When creating a new project using the appropriate command, the directory structure is organized to facilitate development and maintenance. Below is a detailed explanation of each folder and file generated:

---

#### Directory Structure

```plaintext
project-root/
├── backend/              # Where the user's backend application resides
│   ├── src/              # Backend source code
│   ├── test/             # Backend tests
│   ├── .eslintrc.js      # ESLint configuration for backend code
│   ├── .prettierrc       # Prettier configuration for backend code
│   ├── nest-cli.json     # NestJS CLI configuration for the backend
│   ├── package.json      # Dependencies and scripts for the backend
│   ├── tsconfig.build.json # TypeScript build configuration for backend
│   └── tsconfig.json     # TypeScript configuration for the backend
├── admin/                # Where the user's administration interface resides
├── .gitignore            # File specifying which files Git should ignore
└── node_modules/         # Discardable folder with all project dependencies
```

#### Directory and File Details

**backend/**: This directory contains the backend code for the application, following the [**NestJS**](https://docs.nestjs.com/cli/monorepo) standard. Here you will find:

- **src/**: Contains the backend source code, including controllers, services, and modules.
- **test/**: Contains unit and integration tests for the backend.
- **.eslintrc.js**: ESLint configuration file for backend code to enforce code quality and style rules.
- **.prettierrc**: Prettier configuration file for backend code to maintain consistent code formatting.
- **nest-cli.json**: Configuration file for the NestJS CLI, which helps in running various CLI commands.
- **package.json**: Manages the dependencies and scripts for the backend application.
- **tsconfig.build.json**: TypeScript configuration file for building the backend code.
- **tsconfig.json**: TypeScript configuration file for the backend development.

**admin/**: This directory is dedicated to the administration interface of the application, where you can manage and configure the administrative aspects of the application. Here you will find:

**.gitignore**: The .gitignore file lists files and folders that Git should ignore when versioning the project. This helps avoid committing unnecessary files, such as dependencies and temporary files.

**node_modules/**: This directory contains all project dependencies installed via npm or yarn. It is generated automatically and can be discarded, as the content can be rebuilt from package.json.

This structure helps to organize the project efficiently by clearly separating the backend, administration interface, and configuration files. If you have any further questions about the structure or need additional assistance, feel free to consult the documentation or reach out to support.
