# 🦔 @hedhog/admin

The **Hedhog Admin** module is a collection of core modules essential for managing and administering applications within the HedHog framework. It brings together various modules that provide key functionalities such as authentication, menu configuration, permissions, screen management and user management.

Whether you need to secure access to resources, manage user roles, or handle file uploads, the `@hedhog/admin` module provides everything required to manage a modern web application’s backend with minimal setup.

### Included Modules

- **@hedhog/auth**: Provides authentication and authorization mechanisms, ensuring secure access to application resources.
- **@hedhog/core**: Provides essential functionalities for monitoring and managing the runtime environment of the application.
- **@hedhog/dashboard**: Provides tools for creating and managing customizable dashboards, enabling users to visualize data and monitor application metrics effectively.
- **@hedhog/menu**: Allows for the creation and management of dynamic menus within the application interface.
- **@hedhog/role**: Facilitates the management of roles, controlling access to specific features or areas.
- **@hedhog/route**: Provides a comprehensive system for managing routes within your application.
- **@hedhog/setting**: Provides a solution for managing application settings.
- **@hedhog/screen**: Provides a structure for managing different screens and UI components.
- **@hedhog/user**: Manages user accounts, including creation, updates, and deletion, along with password encryption and secure access.

### Installation

To install the `@hedhog/admin` module, use npm:

```bash
npm install @hedhog/admin
```

### Usage

The `@hedhog/admin` module acts as a base for administrative tasks in HedHog applications. Once installed, you can integrate the included modules into your project to quickly set up and manage essential features for your admin interface.

```typescript
import { AdminModule } from "@hedhog/admin";

@Module({
  imports: [AdminModule],
})
export class AppModule {}
```

By importing the AdminModule, you gain access to all the functionality provided by the individual modules, making it easier to manage authentication, permissions, users, and more.
