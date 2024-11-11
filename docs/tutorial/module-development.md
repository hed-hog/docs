# 🛠️ Hedhog Module Development

This guide will walk you through the steps to develop a new module within the Hedhog ecosystem. Follow these instructions to get your module up and running.

### Step 1: Clone the repository

Start by cloning the Hedhog development repository to your local machine. Open your terminal and run the following command:

```bash
git clone https://github.com/hed-hog/development.git
```

Here's the repository structure:

```plaintext
hedhog/
├── backend/              # Where the backend application resides
├── admin/                # Where the user's administration interface resides
├── lib/                  # Shared cosde library used by both backend and admin
├── package.json          # Manages the dependencies and scripts for the entire project
├── docker-compose.yml    # Docker compose file for managing containers
```

### Step 2: Navigate to the directory

After cloning the repository, you have to navigate to the hedhog/lib directory, according to the command below:

```bash
cd hedhog
cd lib
```

### Step 3: Create a new module

you can create a new module using the create command. This command sets up the initial structure and necessary files for your module. Run the following command, replacing `<module-name>` with your desired module name (you can learn more about the create command [**here**](/docs/cli/create)):

```bash
hedhog create <module-name>
```

When you run the `hedhog create <module-name>` command, it sets up a standardized directory structure for your Hedhog module. Here’s a breakdown of the files and directories created:

```plaintext
<module-name>/
├── node_modules/              # Contains all the dependencies for your project
├── .gitignore                 # Specifies files and directories to be ignored by Git
├── hedhog.yaml                # Configuration file defining settings and structures for your Hedhog module
├── package.json               # Contains metadata about your project, including name, version, and dependencies
├── tsconfig.production.json   # TypeScript compiler options specifically for production builds
└── src/                       # Directory holding all the source code for your module
    ├── <module-name>.module.ts    # Defines the main module for your Hedhog application
    └── index.ts                   # Entry point for your module, typically re-exports components

```

#### 1. `node_modules/`

- **Description**: This directory contains all the dependencies for your project, as specified in `package.json`. It is automatically managed by the package manager (e.g., npm or yarn).
- **Purpose**: It allows you to use external libraries and packages in your project without cluttering your source code.

#### 2. `.gitignore`

- **Description**: This file specifies which files and directories should be ignored by Git.
- **Purpose**: It helps keep your repository clean by excluding files that are not necessary to be version-controlled, such as `node_modules`, log files, and environment variables.

#### 3. `hedhog.yaml`

- **Description**: This YAML configuration file defines the settings and structures of your Hedhog module, including tables, columns, and other related configurations.
- **Purpose**: It serves as a central point for managing module configurations and is used by various commands (like `apply`) to generate code and configurations automatically.

#### 4. `package.json`

- **Description**: This file contains metadata about your project, including its name, version, scripts, and dependencies.
- **Purpose**: It is essential for managing project dependencies, scripts for building and running your application, and other configuration options for your project.

  ##### Dependencies Overview

  In your `package.json` file, dependencies are categorized into different types: `dependencies`, `devDependencies`, and `peerDependencies`. Here's what each category means and how to manage them:

  1. **`devDependencies`**:

  - **Description**: These are packages that are necessary for development, publishing and testing but are not needed in a production environment. They are typically tools like testing libraries, TypeScript, linters, and other utilities used during the development process.
  - **Example in `package.json`**:
    ```json
    "devDependencies": {
        "@hedhog/admin": "latest",
        "@hedhog/file": "latest",
        "@hedhog/mail": "latest",
        "@hedhog/pagination": "latest",
        "@hedhog/prisma": "latest",
        "@hedhog/utils": "latest",
        "ts-node": "^10.9.1",
        "typescript": "^5.1.3"
    }
    ```
  - **How to Add a devDependency**:
    To add a development dependency, you can use the following command:
    ```bash
    npm install <package-name> --save-dev
    ```
    For example:
    ```bash
    npm install typescript --save-dev
    ```

  2. **`peerDependencies`**:

  - **Description**: These are packages that your module expects its consumers (other modules that depend on yours) to have installed. This is particularly important when you want to ensure compatibility between different versions of a package.
  - **Example in `package.json`**:
    ```json
    "peerDependencies": {
        "@hedhog/admin": "latest",
        "@hedhog/file": "latest",
        "@hedhog/mail": "latest",
        "@hedhog/pagination": "latest",
        "@hedhog/prisma": "latest",
        "@hedhog/utils": "latest"
    }
    ```
  - **How to Add a peerDependency**:
    You typically specify peer dependencies manually in `package.json`, as they are not installed automatically. Use the following format:
    ```json
    "peerDependencies": {
    "<package-name>": "<version>"
    }
    ```
    For example, if you want to specify that your module requires `@hedhog/utils`, you would add:
    ```json
    "@hedhog/utils": "latest"
    ```

#### 5. `tsconfig.production.json`

- **Description**: This file contains TypeScript compiler options specifically for production builds.
- **Purpose**: It ensures that the TypeScript code is compiled with the correct settings for production, optimizing the output for deployment and performance.

#### 6. `src/`

- **Description**: This directory holds all the source code for your module.
- **Purpose**: It organizes your TypeScript files, keeping the codebase structured and manageable.

#### Inside the `src/` directory:

- **`<name>.module.ts`**:

  - **Description**: This file defines the main module for your Hedhog application.
  - **Purpose**: It registers the services, controllers, and other components for the module, making them available for use within the Hedhog framework.

- **`index.ts`**:
  - **Description**: This file serves as the entry point for your module.
  - **Purpose**: It typically re-exports components, allowing for easier imports in other parts of your application. It helps in encapsulating the module's exports neatly.

### Step 4: Define the Structure of Your Project in `hedhog.yaml`

In Hedhog, the `hedhog.yaml` file plays a crucial role in defining the structure of your project. This configuration file specifies the database tables, their relationships, and any additional settings necessary for your module. Here's how you can define the structure of your project within `hedhog.yaml`.

Example:

```yaml
# hedhog.yaml

tables:
  users:
    columns:
      - name: id
        type: int
        isPrimary: true
      - name: username
        type: varchar
        length: 50
      - name: password
        type: varchar
        length: 255
      - name: email
        type: varchar
        length: 100
      - name: created_at
      - name: updated_at
    ifNotExists: true

  posts:
    columns:
      - name: id
        type: int
        isPrimary: true
      - name: title
        type: varchar
        length: 100
      - name: content
        type: text
      - name: userId
        type: int
        references:
          table: users
          column: id
          onDelete: CASCADE
      - name: created_at
      - name: updated_at
    ifNotExists: true
```

### Step 5: Run the `hedhog apply` command

After creating the `hedhog.yaml` strucutre, you can proceed to the `hedhog apply`. This command applies the configurations from the hedhog.yaml file to create necessary components for your library. More about this command can be found [**here**](/docs/cli/apply).

```bash
hedhog apply <module-name>
```

When you run the hedhog apply command, it processes the configurations defined in the hedhog.yaml file and generates several files and updates within your Hedhog library module for each table specified on the yaml file. Here's an explanation of the main files created or modified:

#### Files Created or Modified by the `hedhog apply` Command

```plaintext
src/
├── <table-name>/                  # Directory created for each table defined in the YAML
│   ├── <table-name>.module.ts     # Main module file for the table
│   ├── <table-name>.service.ts    # Service file containing business logic for the table
│   ├── <table-name>.controller.ts # Controller file handling HTTP requests for the table
│   └── <table-name>.dto.ts        # Data Transfer Object file defining the structure for data communication
└── <library-name>.module.ts       # Updated main library module file
```

#### 1. `<table-name>/` Directory

- **Description**: A new directory is created for each table specified in the `hedhog.yaml` file.
- **Purpose**: This directory organizes all files related to a specific table, making the project structure clean and manageable.

#### 2. `<table-name>.module.ts`

- **Description**: This file defines the module for the specific table.
- **Purpose**: It registers services, controllers, and other components related to the table, making them available within the Hedhog framework.

#### 3. `<table-name>.service.ts`

- **Description**: This file contains the service logic for the table.
- **Purpose**: It encapsulates business logic and interacts with the database, providing methods to handle operations related to the table, such as creating, reading, updating, and deleting records.

#### 4. `<table-name>.controller.ts`

- **Description**: This file handles incoming HTTP requests for the table.
- **Purpose**: It processes requests, calls the appropriate service methods, and returns responses, effectively serving as the interface between the client and the backend logic.

#### 5. `<table-name>.dto.ts`

- **Description**: This file defines Data Transfer Objects (DTOs) for the table.
- **Purpose**: DTOs are used to specify the structure of data that will be sent or received, ensuring that the data conforms to expected formats when interacting with the service and controller.

#### 6. `<library-name>.module.ts`

- **Description**: This file is the main module for your Hedhog library.
- **Purpose**: It is updated to include references to the new modules created for each table, ensuring that everything is properly linked within the overall library structure.

#### Additional Updates and Changes

- **Translation Tables**: If any tables are identified as translation tables (e.g., ending with `_translations`), the command modifies both the service and controller files for multilingual support.
- **Prettier Formatting**: All generated and updated files are formatted using Prettier, ensuring consistency in code style throughout the project.

### Step 6: Publish Your Module

Once you have developed the module, service, controller and tested your Hedhog module, you can publish it to npm, making it available for others to use. Follow these steps to publish your module:

1. **Build Your Project**:
   Ensure your project is ready for production. Run the following command to compile your TypeScript files and prepare your module:

   ```bash
   npm run prod
   ```

   This command executes both the build process and the publish command in one go:

   ```bash
   npm run build && npm publish --access public
   ```

2. **Login to npm**:
   Ensure you are logged into your npm account. If you are not logged in, run the following command and follow the prompts:

   ```bash
   npm login
   ```

   You will need your npm username, password, and email associated with your npm account.

3. **Publish Your Module**:
   The `npm run prod` command will automatically publish your module after building it. Ensure that your `package.json` file is correctly configured, including the name, version, and any dependencies.

4. **Verify Your Publication**:
   After publishing, you can verify that your module is available on npm by searching for it on the npm website or using the following command:

   ```bash
   npm search <your-module-name>
   ```

#### Important Notes

- **Versioning**: Make sure to update the version number in your `package.json` file each time you publish a new release to avoid conflicts.
- **Scoped Packages**: If you are using a scoped package (e.g., `@username/your-module`), make sure to specify the scope when publishing, if necessary.
- **Access Control**: The `--access public` flag in the publish command ensures that your package is publicly accessible. If you want to publish a private package, adjust the access setting accordingly.

By following these steps, you will successfully publish your Hedhog module to npm, allowing others to easily integrate it into their applications!

### Step 7: Test your module

After publishing your module, you can test it to verify if it's working properly. Go to the Hedhog cloned repo and follow the steps below:

```bash
cd backend
hedhog add <your-module>
```

This command is going to add the created module to your Hedhog project, creating the tables in database and inserting data.

Finally, you can run `npm run preinstall` on the project root, and test it!

```bash
# on the root
npm run preinstall
```

### Community and Support

[**Github**](https://github.com/hed-hog)

Contribute. Feel free to open issues or pull requests.

### License

HedHog is licensed under the [**MIT License**](https://opensource.org/license/mit).

Start building powerful applications with HedHog today!
