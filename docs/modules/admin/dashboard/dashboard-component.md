# Dashboard Component Module

The **Dashboard Component Module** enables the creation and management of custom components that can be inserted into dashboards. It provides full CRUD functionality while supporting localization and pagination.

### Features

- **Custom Components**: Create and manage components for dashboards.
- **Localization Support**: Retrieves component data with locale-specific configurations.
- **Pagination**: Supports paginated queries for listing components.
- **CRUD Operations**: Full support for creating, retrieving, updating, and deleting components.

### Controller

The `DashboardComponentController` defines the following endpoints:

- `GET /dashboard-component`: Retrieves a paginated list of components with locale-specific data.
- `GET /dashboard-component/:id`: Retrieves a specific component by its ID.
- `POST /dashboard-component`: Creates a new component.
- `PATCH /dashboard-component/:id`: Updates an existing component.
- `DELETE /dashboard-component`: Deletes one or more components based on the provided IDs.

### Service

The `DashboardComponentService` provides methods for:

- `list(locale: string, paginationParams: PaginationDTO)`: Retrieves a paginated list of dashboard components.
- `get(id: number)`: Retrieves details of a specific dashboard component.
- `create(data: CreateDTO)`: Creates a new dashboard component.
- `update({ id, data }: { id: number; data: UpdateDTO })`: Updates an existing dashboard component.
- `delete({ ids }: DeleteDTO)`: Deletes dashboard components by ID.

### Folder Structure

```plaintext
├── dashboard-component.controller.ts   # Defines routes for dashboard components
├── dashboard-component.service.ts      # Contains component logic
├── dashboard-component.module.ts       # Dashboard component module
├── dto
│   ├── create.dto.ts                   # DTO for creating components
│   ├── update.dto.ts                   # DTO for updating components
```
