# Dashboard Module

The **Dashboard Module** allows users to create and manage custom dashboards. It provides functionalities for retrieving, creating, updating, and deleting dashboards while supporting localization and pagination.

### Features

- **Custom Dashboards**: Create and manage personalized dashboards.
- **Localization Support**: Retrieves dashboard data with locale-specific configurations.
- **Pagination**: Supports paginated queries for listing dashboards.
- **Dashboard Components**: Includes dashboard items with related components.
- **CRUD Operations**: Full support for creating, retrieving, updating, and deleting dashboards.

### Controller

The `DashboardController` defines the following endpoints:

- `GET /dashboard`: Retrieves a paginated list of dashboards with locale-specific data.
- `GET /dashboard/:id`: Retrieves a specific dashboard by its ID.
- `POST /dashboard`: Creates a new dashboard entry.
- `PATCH /dashboard/:id`: Updates an existing dashboard entry.
- `DELETE /dashboard`: Deletes one or more dashboards based on the provided IDs.

### Service

The `DashboardService` provides methods for:

- `list(locale: string, paginationParams: PaginationDTO)`: Retrieves a paginated list of dashboards.
- `get(id: number)`: Retrieves details of a specific dashboard.
- `create(data: CreateDTO)`: Creates a new dashboard entry.
- `update({ id, data }: { id: number; data: UpdateDTO })`: Updates an existing dashboard.
- `delete({ ids }: DeleteDTO)`: Deletes dashboards by ID.

### Folder Structure

```plaintext
├── dashboard.controller.ts   # Defines routes for dashboard
├── dashboard.service.ts      # Contains dashboard logic
├── dashboard.module.ts       # Dashboard module
├── dto
│   ├── create.dto.ts         # DTO for creating dashboards
│   ├── update.dto.ts         # DTO for updating dashboards
```
