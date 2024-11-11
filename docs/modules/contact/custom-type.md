# Custom Type Module

The **Custom Type** module is responsible for managing types for custom data associated with persons. It includes a controller to handle CRUD operations and a service to manage database interactions using `PrismaService` and `PaginationService`.

### Controller Endpoints

#### `POST /custom-type`

- **Description**: Creates a new custom type.
- **Parameters**:
  - `data` (body): Object containing custom type data as defined in `CreateDTO`.

#### `GET /custom-type`

- **Description**: Retrieves a paginated list of custom types.
- **Parameters**:
  - `paginationParams` (query): Optional pagination parameters.

#### `GET /custom-type/:id`

- **Description**: Retrieves a specific custom type by its ID.
- **Parameters**:
  - `id` (path): ID of the custom type.

#### `PATCH /custom-type/:id`

- **Description**: Updates a specific custom type.
- **Parameters**:
  - `id` (path): ID of the custom type.
  - `data` (body): Object containing updated custom type fields as defined in `UpdateDTO`.

#### `DELETE /custom-type`

- **Description**: Deletes multiple custom types based on provided IDs.
- **Parameters**:
  - `data` (body): Object containing an array of IDs to delete as defined in `DeleteDTO`.

### Service Methods

#### `create(data: CreateDTO)`

- **Description**: Creates a new custom type in the database.
- **Parameters**:
  - `data`: Object with fields required to define a custom type.

#### `list(locale: string, paginationParams: PaginationDTO)`

- **Description**: Retrieves a paginated list of custom types with optional search filters.
- **Parameters**:
  - `paginationParams`: Optional pagination and filtering parameters.

#### `get(id: number)`

- **Description**: Retrieves a specific custom type by ID.
- **Parameters**:
  - `id`: ID of the custom type.

#### `update(id: number, data: UpdateDTO)`

- **Description**: Updates a custom type with new data.
- **Parameters**:
  - `id`: ID of the custom type.
  - `data`: Object containing updated custom type fields.

#### `delete(data: DeleteDTO)`

- **Description**: Deletes custom types with specified IDs.
- **Parameters**:
  - `data`: Object containing an array of custom type IDs to delete.

### Folder Structure

```plaintext
|── dto/                          # Data Transfer Objects
│   ├── create.dto.ts             # DTO for creating custom-types
│   └── update.dto.ts             # DTO for updating custom-types
|── custom-type.controller.ts     # Controller for custom types
|── custom-type.module.ts         # Module definition for custom types
|── custom-type.service.ts        # Service class for custom type logic
├── custom-type.service.spec.ts   # Testing file for custom type service
```
