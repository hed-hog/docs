# Core Module

The **Core Module** provides essential functionalities for monitoring and managing the runtime environment of the application. It offers features such as retrieving system information, CPU usage, memory, disk usage, user activity, module versions, and database health.

### Features

- **Operating System (OS)**: Information about the operating system such as its name, platform, version, architecture, uptime, CPU details, memory usage, and disk information.
- **Modules**: Verifies the version of modules used in the project, including internal @hedhog modules, and checks if they are up-to-date.
- **Users**: Information about the users in the system, including their roles, activity over the last 7 days, and total active users.
- **Database**: Provides health metrics for the database, such as active connections, database size, and queries per second.

#### Controller

The `CoreController` defines the following endpoints:

- `GET /core`: Retrieves the current state of the system, including information about the OS, CPU, memory, disk usage, active modules, users, and database health.

#### CoreService

The `CoreService` provides methods for:

- `index()`: Retrieves the current status of the system.
- `getDatabaseInfo()`: Fetches database health metrics depending on the type of database (PostgreSQL or MySQL)
- `getModulesInfo()`: Checks the versions of modules used in the project and compares them with the latest versions available in the npm registry.
- `getUsersInfo()`: Retrieves information about users.
- `getCpuInfo(cpus: os.CpuInfo[], averageSpeed: number)`: Retrieves the CPU information.
- `getMemoryInfo()`: Returns memory details.
- `getDiskInfo()`: Retrieves disk information by executing system commands to fetch the disk usage.

### Folder Structure

```plaintext
├── core.controller.ts         # Defines routes for core
├── core.service.ts            # Contains core logic
├── core.module.ts             # Core module
```
