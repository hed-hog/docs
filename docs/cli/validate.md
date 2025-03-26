# 🦔 hedhog validate

> ✅ **Module Validation Command**: The `hedhog validate` command checks the integrity of a Hedhog module by loading its configuration and validating its structure. It ensures that all required components (tables, data, screens, routes, and enums) are correctly defined and available.

The `hedhog validate` command is designed to quickly validate a module’s setup, making sure everything is properly configured before moving forward with any further actions or deployments.

---

#### 🚀 Usage:

```bash
hedhog validate <module-name>
```

#### ❓ Why it’s useful?

- **Configuration Validation**: Quickly validates the integrity of a Hedhog module by inspecting its configuration files.
- **Comprehensive Checks**: Reviews essential components like tables, data, screens, routes, and enums to ensure that they are properly set up and defined.
- **Debugging Tool**: Helps identify any missing or misconfigured parts of a module by showing detailed information about its structure.

#### 📋 Example:

```bash
hedhog validate product-service
```

This command validates the `product-service` module, displaying information about its tables, data, screens, routes, and enums.

---

#### Command Workflow

1. **📂 Module Path Verification**:

   - The command first verifies that the specified module exists in the correct directory within the project structure.
   - If the module is not found, an error message is shown.

2. **🔍 Load Hedhog Configuration**:

   - The `hedhog validate` command loads the configuration file for the module (usually `hedhog.yaml` or similar).
   - It reads the structure of the module, ensuring all expected fields and configurations are present.

3. **🔑 Table, Data, Screen, Route, and Enum Validation**:

   - The command checks for defined tables, data entries, screens, routes, and enums in the module's configuration.
   - It prints out the details for each item, highlighting any issues or discrepancies.

4. **⚙️ Debug Information**:
   - If the `debug` option is provided, additional debug information will be shown to help developers identify issues with the module.
   - Information such as paths, inputs, and loaded files are displayed for transparency.

---

#### Main Outputs

- **Tables**: Displays all tables defined in the module’s configuration, along with their contents.
- **Data**: Shows any data entries associated with the module, including their content.
- **Screens**: Lists all screen configurations, with details about their setup.
- **Routes**: Displays the routing configuration for the module.
- **Enums**: Lists any enums defined in the module, showing their associated content.

---

This setup helps developers ensure that all parts of a Hedhog module are correctly defined and ready for use, reducing the chance of errors or missing configurations during the development process.
