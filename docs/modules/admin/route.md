# Route

**Hedhog Route** submodule provides a comprehensive system for managing routes within your application. It allows administrators to define, modify, and control access to different routes within the application. The submodule also integrates with other Hedhog modules to ensure that permissions and roles are respected when accessing routes.

### Features

- **CRUD Operations**: Create, Read, Update, and Delete routes.
- **Route Management**: Manage application routes, including their accessibility and assignment to user roles.
- **Permissions Integration**: Integrates with Hedhog Permission to control access to specific routes based on user roles.

### Controller Endpoints

#### `GET /route`

- **Description**: Retrieves a paginated list of all routes.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `paginationParams`: Includes pagination criteria.

#### `GET /route/:routeId`

- **Description**: Retrieves a specific route by its ID.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `routeId (number)`: The ID of the route to retrieve.

#### `POST /route`

- **Description**: Creates a new route with the specified URL and method.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `data`: An object containing the url and method for the new route.

#### `PATCH /route/:routeId`

- **Description**: Updates an existing route identified by its ID.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `routeId (number)`: The ID of the route to update.
  - `data`: An object containing the updated information for the route.

#### `DELETE /route`

- **Description**: Deletes one or more routes.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `data`: An object containing an array of route IDs to delete.

#### `GET /route/:routeId/role`

- **Description**: Retrieves a paginated list of roles associated with a specific route.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `routeId (number)`: The ID of the route to retrieve associated roles.
  - `paginationParams`: Includes pagination criteria.

#### `PATCH /route/:routeId/role`

- **Description**: Updates the roles associated with a specific route.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `routeId (number)`: The ID of the route.
  - `data`: An object containing an array of role IDs to associate with the route.

#### `GET /route/:routeId/screen`

- **Description**: Retrieves a paginated list of screens associated with a specific route.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `routeId (number)`: The ID of the route to retrieve associated screens.
  - `paginationParams`: Includes pagination criteria.

#### `PATCH /route/:routeId/screen`

- **Description:** Updates the screens associated with a specific route.
- **Authentication**: Required (uses AuthGuard).
- **Parameters**:
  - `routeId (number)`: The ID of the route.
  - `data`: An object containing an array of screen IDs to associate with the route.

### Service Methods

#### `list(paginationParams: PaginationDTO)`

- **Description**: Retrieves a paginated list of routes with optional search functionality based on URL and method.
- **Parameters**:
  - `paginationParams`: Includes pagination and search criteria.

#### `get(routeId: number)`

- **Description**: Retrieves a specific route by its ID.
- **Parameters**:
  - `routeId`: The ID of the route to retrieve.

#### `create(data: CreateDTO)`

- **Description**: Creates a new route with the specified URL and method.
- **Parameters**:
  - `data`: An object containing the URL and method for the new route.

#### `update({ id, data }: { id: number; data: UpdateDTO })`

- **Description**: Updates an existing route identified by its ID.
- **Parameters**:
  - `id`: The ID of the route to update.
  - `data`: An object containing the updated information for the route.

#### `delete({ ids }: DeleteDTO)`

- **Description**: Deletes one or more routes identified by their IDs.
- **Parameters**:
- `ids`: An object containing an array of route IDs to delete.

#### `listRoles(routeId: number, paginationParams: PaginationDTO)`

- **Description**: Retrieves a paginated list of roles associated with a specific route.
- **Parameters**:
  - `routeId`: The ID of the route to retrieve associated roles.
  - `paginationParams`: Includes pagination parameters.

#### `updateRoles(routeId: number, data: UpdateIdsDTO)`

- **Description**: Updates the roles associated with a specific route.
- **Parameters**:
  - `routeId`: The ID of the route.
  - `data`: An object containing an array of role IDs to associate with the route.

#### `listScreens(routeId: number, paginationParams: PaginationDTO)`

- **Description**: Retrieves a paginated list of screens associated with a specific route.
- **Parameters**:
  - `routeId`: The ID of the route to retrieve associated screens.
  - `paginationParams`: Includes pagination parameters.

#### `updateScreens(routeId: number, data: UpdateIdsDTO)`

- **Description**: Updates the screens associated with a specific route.
- **Parameters**:
  - `routeId`: The ID of the route.
  - `data`: An object containing an array of screen IDs to associate with the route.

### Folder Structure

```plaintext
├── dto/                        # Data Transfer Objects
│   ├── create.dto.ts           # DTO for creating a route
│   ├── update.dto.ts           # DTO for updating a route
├── guards/
│   └── route.guard.ts         # Guard for routes
├── route.controller.ts        # Handles HTTP requests related to routes
├── route.module.ts            # Module definition for the route
├── route.service.ts           # Service class for route-related logic
└── route.service.spec.ts      # Testing file for route service
```
