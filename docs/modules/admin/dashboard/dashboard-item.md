# Dashboard Item Module

The **Dashboard Item** module is responsible for linking dashboard components to dashboards. It facilitates the association between dashboard components and their respective dashboards, ensuring a structured and manageable relationship between these elements.

### Features

- **Component Linking**: Allows dashboard components to be linked to specific dashboards.
- **Pagination**: Supports paginated retrieval of dashboard items.
- **CRUD Operations**: Provides endpoints to create, read, update, and delete dashboard items.

### Controller

The `DashboardItemController` defines the following endpoints:

- `GET /dashboard-item`: Retrieves a paginated list of all dashboard items.
- `GET /dashboard-item/:id`: Retrieves details of a specific dashboard item by its ID.
- `POST /dashboard-item`: Creates a new dashboard item.
- `PATCH /dashboard-item/:id`: Updates an existing dashboard item.
- `DELETE /dashboard-item`: Deletes one or more dashboard items.

### Service

The `DashboardItemService` provides methods for:

- `list(paginationParams: PaginationDTO)`: Retrieves paginated dashboard items based on search parameters.
- `get(id: number)`: Retrieves details of a specific dashboard item.
- `create(data: CreateDTO)`: Creates a new dashboard item.
- `update({ id, data }: { id: number; data: UpdateDTO })`: Updates an existing dashboard item.
- `delete({ ids }: DeleteDTO)`: Deletes multiple dashboard items.

### Folder Structure

```plaintext
├── dashboard-item.controller.ts   # Defines routes for dashboard-item
├── dashboard-item.service.ts      # Contains business logic for dashboard-item
├── dashboard-item.module.ts       # Dashboard item module
├── dto
│   ├── create.dto.ts              # DTO for creating dashboard items
│   ├── update.dto.ts              # DTO for updating dashboard items
```
