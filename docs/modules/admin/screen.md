# Screen

**Hedhog Screen** submodule is part of the HedHog framework and provides functionalities for managing screens in your application. It offers a set of RESTful API endpoints and service methods to handle CRUD operations and pagination for screens.

### Features

- Create, Read, Update, and Delete (**CRUD**) operations for screens.
- **Pagination** for listing screens.
- **Search** functionality to filter screens based on various attributes.

### Controller Endpoints

#### `GET /screen`

- **Description**: Retrieve a paginated list of screens.
- **Authentication**: Required (uses `AuthGuard`).
- **Pagination**: Supports pagination through query parameters.

#### `GET /screen/:screenId`

- **Description**: Retrieve a specific screen by its ID.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `screenId` (number): The ID of the screen to retrieve.

#### `POST /screen`

- **Description**: Create a new screen.
- **Authentication**: Required (uses `AuthGuard`).
- **Body**:
  - `name` (string): Name of the screen.
  - `slug` (string): Unique identifier for the screen.
  - `description` (string): Description of the screen.
  - `icon` (string): Icon associated with the screen.

#### `PATCH /screen/:screenId`

- **Description**: Update an existing screen.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `screenId` (number): The ID of the screen to update.
- **Body**:
  - `name` (string, optional): Updated name of the screen.
  - `slug` (string, optional): Updated slug of the screen.
  - `description` (string, optional): Updated description of the screen.
  - `icon` (string, optional): Updated icon of the screen.

#### `DELETE /screen`

- **Description**: Delete one or more screens.
- **Authentication**: Required (uses `AuthGuard`).
- **Body**:
  - `ids` (number[]): Array of screen IDs to delete.

#### `GET /screen/:screenId/role`

- **Description**: Retrieve a paginated list of roles associated with a specific screen.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `screenId` (number): The ID of the screen to list roles for.
  - `paginationParams`: Includes pagination criteria.
  - `locale`: The locale for the roles.

#### `GET /screen/:screenId/route`

- **Description**: Retrieve a paginated list of routes associated with a specific screen.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `screenId` (number): The ID of the screen to list routes for.
  - `paginationParams`: Includes pagination criteria.

#### `PATCH /screen/:screenId/role`

- **Description**: Update roles associated with a specific screen.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `screenId` (number): The ID of the screen to update roles for.
- **Body**:
  - `data` (UpdateIdsDTO): Data containing an array of role IDs to associate with the screen.

#### `PATCH /screen/:screenId/route`

- **Description**: Update routes associated with a specific screen.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - `screenId` (number): The ID of the screen to update routes for.
- **Body**:
  - `data` (UpdateIdsDTO): Data containing an array of route IDs to associate with the screen.

### Service Methods

#### `list(paginationParams: PaginationDTO)`

- **Description**: Retrieves a paginated list of screens with optional search functionality.
- **Parameters**:
  - `paginationParams`: Includes pagination and search criteria.

#### `get(screenId: number)`

- **Description**: Retrieves a specific screen by its ID.
- **Parameters**:
  - `screenId`: ID of the screen to retrieve.

#### `create(data: CreateDTO)`

- **Description**: Creates a new screen.
- **Parameters**:
  - `data`: Includes `name`, `slug`, `description`, and `icon`.

#### `update(id: number, data: UpdateDTO)`

- **Description**: Updates an existing screen.
- **Parameters**:
  - `id`: ID of the screen to update.
  - `data`: Includes updated `name`, `slug`, `description`, and `icon`.

#### `delete(data: DeleteDTO)`

- **Description**: Deletes one or more screens.
- **Parameters**:
  - `data`: Includes array of `ids` to delete.

#### `updateRoles(screenId: number, data: UpdateIdsDTO)`

- **Description**: Updates roles associated with a specific screen.
- **Parameters**:
  - `screenId` (number): The ID of the screen to update roles for.
  - `data` (UpdateIdsDTO): Data containing an array of role IDs to associate with the screen.

#### `updateRoutes(screenId: number, data: UpdateIdsDTO)`

- **Description**: Updates routes associated with a specific screen.
- **Parameters**:
  - `screenId` (number): The ID of the screen to update routes for.
  - `data` (UpdateIdsDTO): Data containing an array of route IDs to associate with the screen.

#### `listRoutes(screenId: number, paginationParams: PaginationDTO)`

- **Description**: Retrieves a paginated list of routes associated with a specific screen.
- **Parameters**:
  - `screenId` (number): The ID of the screen to list routes for.
  - `paginationParams` (PaginationDTO): Includes pagination criteria.

#### `listRoles(locale: string, screenId: number, paginationParams: PaginationDTO)`

- **Description**: Retrieves a paginated list of roles associated with a specific screen.
- **Parameters**:
  - `locale` (string): The locale for the roles.
  - `screenId` (number): The ID of the screen to list roles for.
  - `paginationParams` (PaginationDTO): Includes pagination criteria.

### Folder Structure

```plaintext
├── dto/                        # Data Transfer Objects
│   ├── create.dto.ts           # DTO for creating a screen
│   ├── update.dto.ts           # DTO for updating a screen
├── screen.controller.ts        # Handles HTTP requests related to screens
├── screen.module.ts            # Module definition for the screen
└── screen.service.ts           # Service class for screen-related logic
└── screen.service.spec.ts      # Testing file for screen service
```
