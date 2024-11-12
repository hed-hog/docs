# 🦔 hedhog apply

> 🔄 **Library Update Command**: The `hedhog apply` command reads the hedhog.yaml file to create or update controllers, services, and other required files for a new or existing Hedhog library module. This automation streamlines the integration of libraries within Hedhog, handling relational configurations, multilingual tables, and other library setup needs.

The hedhog apply command simplifies the process of transforming hedhog.yaml configurations into functional components of a new or existing library, enabling seamless integration and localization support.

---

#### 🚀 Usage:

```bash
hedhog apply <library-name>
```

#### ❓ Why it’s useful?

- **Automated Module Creation**: Quickly generates all essential files such as modules, services, and controllers based on the hedhog.yaml configurations, minimizing manual setup.
- **Localization Support**: Automatically recognizes and applies locale-specific configurations for tables with translations.
- **Consistent Setup**: Ensures that all library files are correctly formatted and organized within the Hedhog ecosystem.

#### 📋 Example

```bash
hedhog apply product-service
```

This command applies the configurations from the `hedhog.yaml` file to create necessary components for the `product-service` library.

---

#### Command Workflow

1. **📄 YAML Parsing**: Reads and interprets `hedhog.yaml` to retrieve table and column configurations.

2. **🛠️ Module Creation**:

   - Generates TypeScript files for each table defined in `hedhog.yaml`.
   - Creates a **Module**, **Service**, and **Controller** for each table and links them within the library’s parent module.

3. **🌍 Translation Table Handling**:

   - If a table is identified as a translation table (ending with `_translations`), the command applies specific configurations:
     - **🔧 Service Update**: Enhances the `get` function in the service for multilingual data support, filtering by locale.
     - **📦 Controller Update**: Adds locale handling to controllers for translated data support.

4. **🎨 File Formatting**: Automatically applies Prettier formatting on all generated and modified files to maintain code consistency.

---

#### Main Files Created

- 📦 **Controller**: Handles HTTP requests, with added support for multilingual data if the table includes translations.
- 🛠️ **Service**: Manages business logic, including locale-based filtering for translation tables.
- 📄 **DTO (Data Transfer Objects)**: Defines the structures used for data transfer between the application and database.
- 📂 **Module**: Registers new entities and integrates them into the parent module for cohesive functionality.

---

This setup empowers developers to easily transform YAML configurations into fully functional library modules, providing structured files, consistent localization support, and seamless database integration.
