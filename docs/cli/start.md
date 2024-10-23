# hedhog start

The `start` command is used to start the Hedhog application. It concurrently runs the backend API and the Admin interface, making sure both services are up and running. Additionally, it monitors the ports to ensure that the services are accessible.

---

#### 🚀 Usage

```bash
hedhog start
```

This command will:

- Start the backend API service (npm run dev in the backend directory)
- Start the Admin interface service (npm run dev in the admin directory)
- Wait for both services to be available on their respective ports (3000 for API and 3100 for Admin)

#### ❓ Why it's useful?

- **Concurrent Process Handling**: Runs multiple commands concurrently in separate environments.
- **Port Monitoring**: Continuously checks for the availability of API and Admin services on specific ports.
- **Custom Output**: Uses colors to differentiate logs for each service and provides real-time updates.
- **Cross-Platform Support**: Automatically adjusts commands based on the operating system (sh for Unix-based systems and cmd.exe for [**Windows**](https://www.microsoft.com/pt-br/windows/)).

#### 📋 Example Output

```bash
Starting HedHog 🦔...
[API] Starting development server...
[Admin] Starting development server...
Waiting for ports to be available...
[API] API is running on http://localhost:3000
[Admin] Admin is running on http://localhost:3100
====================================
🦔 HedHog is ready!
```

---
