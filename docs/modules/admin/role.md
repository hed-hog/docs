# Role

**HedHog Role** submodule is designed to handle role management within the HedHog framework. It allows for creating, updating, and deleting roles and managing their relationships with users, menus, routes, and screens.

### Features

- **Role Management**: Create, update, and delete roles.
- **User Associations**: Assign and manage users associated with roles.
- **Menu, Route, and Screen Associations**: Manage the association between roles and menus, routes, or screens.
- **Pagination**: Handle paginated responses for all resources.

### Controller Endpoints

#### `GET /role`

- **Description**: Retrieve a paginated list of all roles.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `paginationParams` (optional): Standard pagination parameters.

#### `GET /role/:roleId`

- **Description**: Retrieve details of a specific role.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `roleId (number)`: The ID of the role to retrieve.

#### `POST /role`

- **Description**: Create a new role.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `data` (CreateDTO): The data for the new role (name, description, etc).

#### `PATCH /role/:roleId`

- **Description**: Update an existing role.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `roleId (number)`: The ID of the role to update.
  - `data` (UpdateDTO): The data to update for the role.

#### `DELETE /role`

- **Description**: Delete one or more roles.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `data` (DeleteDTO): List of role IDs to delete.

#### `GET /role/:roleId/user`

- **Description**: Get a list of users associated with a specific role.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `roleId (number)`: The ID of the role to retrieve users for.
  - `paginationParams` (optional): Standard pagination parameters.

#### `GET /role/:roleId/menu`

- **Description**: Get a list of menus associated with a specific role.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `roleId (number)`: The ID of the role to retrieve menus for.
  - `paginationParams` (optional): Standard pagination parameters.

#### `GET /role/:roleId/route`

- **Description**: Get a list of routes associated with a specific role.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `roleId (number)`: The ID of the role to retrieve routes for.
  - `paginationParams` (optional): Standard pagination parameters.

#### `GET /role/:roleId/screen`

- **Description**: Get a list of screens associated with a specific role.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `roleId (number)`: The ID of the role to retrieve screens for.
  - `paginationParams` (optional): Standard pagination parameters.

#### `PATCH /role/:roleId/user`

- **Description**: Update the users associated with a specific role.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `roleId (number)`: The ID of the role. -`data` (UpdateIdsDTO): List of user IDs to associate with the role.

#### `PATCH /role/:roleId/menu`

- **Description**: Update the menus associated with a specific role.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `roleId (number)`: The ID of the role.
  - `data` (UpdateIdsDTO): List of menu IDs to associate with the role.

#### `PATCH /role/:roleId/route`

- **Description**: Update the routes associated with a specific role.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `roleId (number)`: The ID of the role.
  - `data` (UpdateIdsDTO): List of route IDs to associate with the role.

#### `PATCH /role/:roleId/screen`

- **Description**: Update the screens associated with a specific role.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `roleId (number)`: The ID of the role.
  - `data` (UpdateIdsDTO): List of screen IDs to associate with the role.

### Service Methods

#### `updateUsers(roleId: number, { ids }: UpdateIdsDTO)`

- **Description**: Updates the users associated with a specific role by deleting existing associations and creating new ones.
- **Parameters**:
  - `roleId (number)`: The ID of the role to update.
  - `data`: An object containing an array of user IDs to associate with the role.

#### `updateScreens(roleId: number, data: UpdateIdsDTO)`

- **Description**: Updates the screens associated with a specific role by deleting existing associations and creating new ones.
- **Parameters**:
  - `roleId (number)`: The ID of the role to update.
  - `data`: An object containing an array of screen IDs to associate with the role.

#### `updateRoutes(roleId: number, data: UpdateIdsDTO)`

- **Description**: Updates the routes associated with a specific role by deleting existing associations and creating new ones.
- **Parameters**:
  - `roleId (number)`: The ID of the role to update.
  - `data`: An object containing an array of route IDs to associate with the role.

#### `updateMenus(roleId: number, data: UpdateIdsDTO)`

- **Description**: Updates the menus associated with a specific role by deleting existing associations and creating new ones.
- **Parameters**:
  - `roleId (number)`: The ID of the role to update.
  - `data`: An object containing an array of menu IDs to associate with the role.

#### `listUsers(roleId: number, paginationParams: PaginationDTO)`

- **Description**: Retrieves a paginated list of users associated with a specific role.
- **Parameters**:
  - `roleId (number)`: The ID of the role to retrieve associated users.
  - `paginationParams`: Includes pagination criteria.

#### `listMenus(roleId: number, paginationParams: PaginationDTO)`

- **Description**: Retrieves a paginated list of menus associated with a specific role.
- **Parameters**:
  - `roleId (number)`: The ID of the role to retrieve associated menus.
  - `paginationParams`: Includes pagination criteria.

#### `listRoutes(roleId: number, paginationParams: PaginationDTO)`

- **Description**: Retrieves a paginated list of routes associated with a specific role.
- **Parameters**:
  - `roleId (number)`: The ID of the role to retrieve associated routes.
  - `paginationParams`: Includes pagination criteria.

#### `listScreens(roleId: number, paginationParams: PaginationDTO)`

- **Description**: Retrieves a paginated list of screens associated with a specific role.
- **Parameters**:
  - `roleId (number)`: The ID of the role to retrieve associated screens.
  - `paginationParams`: Includes pagination criteria.

#### `list(locale: string, paginationParams: PaginationDTO)`

- **Description**: Retrieves a paginated list of all roles, with optional search functionality based on name and description.
- **Parameters**:
  - `paginationParams`: Includes pagination and search criteria.

#### `get(locale: string, roleId: number)`

- **Description**: Retrieves a specific role by its ID.
- **Parameters**:
  - `roleId (number)`: The ID of the role to retrieve.

#### `create(data: CreateDTO)`

- **Description**: Creates a new role.
- **Parameters**:
  - `data`: An object containing the properties for role creation.

#### `update({ id, data }: { id: number; data: UpdateDTO })`

- **Description**: Updates an existing role identified by its ID.
- **Parameters**:
  - `id (number)`: The ID of the role to update.
  - `data`: An object containing the updated information for the role, defined in UpdateDTO.

#### `delete({ ids }: DeleteDTO)`

- **Description**: Deletes one or more roles identified by their IDs.
- **Parameters**:
  - `ids (array of number)`: An array containing the IDs of the roles to delete.

### Folder Structure

```plaintext
├── decorators/
│   ├── role.decorator.ts    # Custom decorator for roles
├── dto/                        # Data Transfer Objects
│   ├── create.dto.ts           # DTO for creating a role
│   ├── update.dto.ts           # DTO for updating a role
├── guards/
│   └── role.guard.ts         # Guard for roles
├── role.controller.ts        # Handles HTTP requests related to roles
├── role.module.ts            # Module definition for the role
└── role.service.ts           # Service class for role-related logic
└── role.service.spec.ts      # Testing file for role service
```
