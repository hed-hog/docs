# 🦔 hedhog configure

> 🔧 **Configuration Command**: The `hedhog configure` command sets up and manages the configuration for the Hedhog CLI. It allows users to customize their Hedhog environment by configuring essential details like the OpenIA token, project directory, and more.

The `hedhog configure` command ensures that the necessary configuration files are in place, creates required directories, and manages integrations with external services, such as OpenIA, to facilitate a smooth setup for Hedhog-powered projects.

---

#### 🚀 Usage:

```bash
hedhog configure
```

#### ❓ Why it’s useful?

- **Centralized Configuration Management**: Handles and stores the necessary configuration for Hedhog CLI operations, such as OpenIA token management.
- **Seamless Integration**: Configures the Hedhog environment to work with OpenIA services, enabling automation and streamlined operations for your project.
- **Automated Setup**: Ensures the creation of necessary directories and files, and helps set up external integrations seamlessly.

#### 📋 Example:

```bash
hedhog configure
```

This command initializes the Hedhog configuration for the current project, prompting for essential details like the OpenIA token, and setting up directories and external service integrations.

---

#### Command Workflow

1. **📂 Project Directory Validation**:

   - Verifies if the current directory is a valid Hedhog project.
   - If not, an error is shown.

2. **🔑 OpenIA Token Setup**:

   - Prompts the user for their OpenIA token, or fetches it from provided options.
   - Ensures that the token is saved securely for future use.

3. **🗂 Directory Creation**:

   - Creates the necessary `.hedhog` directory in the user's home folder if it doesn't already exist.
   - Ensures that the required environment for Hedhog to function is in place.

4. **🔗 Integration with OpenIA**:

   - Connects to OpenIA's services, using the provided token, and sets up a custom assistant with instructions relevant to Hedhog's operation.
   - If an assistant is already configured, it will attempt to drop the old one before creating a new one, preventing conflicts.

5. **💾 Configuration Storage**:
   - Saves all the configuration to `config.yaml` located in the `.hedhog` directory.
   - Ensures that the configuration is available for future Hedhog CLI commands.

---

#### Main Files Created

- **📂 `.hedhog/config.yaml`**: Stores the configuration data, including API tokens and other necessary settings.
- **📝 OpenIA Assistant**: Configures an assistant for language models to assist in localization tasks related to the Hedhog CLI.
- **🛠️ `.hedhog` Directory**: A directory created in the user’s home folder for storing configuration files and managing Hedhog-related setups.

---

This setup empowers Hedhog users to easily configure their project environment, ensuring seamless integration with external services like OpenIA, while handling all required configuration files automatically.
