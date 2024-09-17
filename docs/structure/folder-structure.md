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
│   ├── .storybook/       # Storybook configuration for stories
│   ├── node_modules/     # Discardable folder with all admin dependencies
│   ├── public/           # Public assets and static files
│   ├── src/              # Source code for the admin interface
│   │   ├── components/  # Reusable React components
│   │   ├── enums/       # Enumeration types
│   │   ├── features/    # Feature-specific logic and components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility functions and libraries
│   │   ├── pages/       # Page components
│   │   ├── stories/     # Storybook stories
│   │   └── types/       # TypeScript type definitions
│   ├── index.css         # Global CSS styles
│   ├── main.tsx          # Main entry point for the React application
│   ├── router.tsx        # Application routing configuration
│   ├── .eslintrc.cjs     # ESLint configuration for admin code
│   ├── .gitignore        # File specifying which files Git should ignore
│   ├── .prettierignore   # Files and directories ignored by Prettier
│   ├── .prettierrc       # Prettier configuration for admin code
│   ├── docker-compose.yml # Docker compose file for managing containers
│   ├── Dockerfile        # Dockerfile for building the admin application image
│   ├── index.html        # Main HTML file for the admin application
│   ├── nginx.conf        # Nginx configuration for serving the admin app
│   ├── package-lock.json # Lock file for npm dependencies
│   ├── package.json      # Manages the dependencies and scripts for the admin application
│   ├── postcss.config.js # PostCSS configuration
│   ├── README.md         # Documentation for the admin application
│   ├── tailwind.config.js # Tailwind CSS configuration
│   ├── tsconfig.json     # TypeScript configuration for the admin application
│   ├── tsconfig.node.json # TypeScript configuration for Node.js
│   └── vite.config.ts    # Vite configuration for the admin application
├── frontend/             # Where the user's frontend application resides
├── .gitignore            # File specifying which files Git should ignore
├── package.json          # Manages the dependencies and scripts for the application
├── docker-compose.yaml   # Docker compose file if the user decides to create a new database
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

**admin/**: This directory is dedicated to the administration interface of the application, where you can manage and configure the administrative aspects of the application. The structure is as follows:

- **.storybook/**: Contains configuration and stories for Storybook, used for developing and testing UI components in isolation.
- **node_modules/**: Contains all project dependencies installed via npm or yarn. This folder is generated automatically and can be discarded as its content can be rebuilt from `package.json`.
- **public/**: Contains public assets and static files accessible to the web.
- **src/**: Contains the source code for the admin interface:
  - **components/**: Reusable React components.
  - **enums/**: Enumeration types.
  - **features/**: Feature-specific logic and components.
  - **hooks/**: Custom React hooks.
  - **lib/**: Utility functions and libraries.
  - **pages/**: Page components for the admin interface.
  - **stories/**: Storybook stories for UI components.
  - **types/**: TypeScript type definitions.
- **index.css**: Main CSS file for global styles.
- **main.tsx**: Entry point for the React application.
- **router.tsx**: Configuration for routing in the admin interface.
- **.eslintrc.cjs**: ESLint configuration file for admin code.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **.prettierignore**: Specifies files and directories to be ignored by Prettier.
- **.prettierrc**: Prettier configuration file for the admin code.
- **docker-compose.yml**: Docker Compose configuration file.
- **Dockerfile**: Dockerfile for building the admin interface container.
- **index.html**: Main HTML file for the admin interface.
- **nginx.conf**: Nginx configuration file for serving the admin interface.
- **package-lock.json**: Lock file for npm dependencies.
- **package.json**: Manages the dependencies and scripts for the admin application.
- **postcss.config.js**: PostCSS configuration file.
- **README.md**: Documentation file for the admin interface.
- **tailwind.config.js**: Tailwind CSS configuration file.
- **tsconfig.json**: TypeScript configuration file for the admin interface.
- **tsconfig.node.json**: TypeScript configuration file for Node.js-specific settings.
- **vite.config.ts**: Vite configuration file for building and bundling the admin interface.

**.gitignore**: The .gitignore file lists files and folders that Git should ignore when versioning the project. This helps avoid committing unnecessary files, such as dependencies and temporary files.

**package.json**: Manages the dependencies and scripts for the application.

**node_modules/**: This directory contains all project dependencies installed via npm or yarn. It is generated automatically and can be discarded, as the content can be rebuilt from package.json.

This structure helps to organize the project efficiently by clearly separating the backend, administration interface, and configuration files. If you have any further questions about the structure or need additional assistance, feel free to consult the documentation or reach out to support.
