# Person Type Module

The **Person Type** module manages person type classifications used for categorizing different types of persons within the application. It provides endpoints for creating, reading, updating, and deleting person types, supporting pagination and locale-based translations.

### Controller Endpoints

#### `POST /person-type`

- **Description**: Creates a new person type.
- **Parameters**:
  - `data` (body): Data for the person type, defined in `CreatePersonTypeDTO`.

#### `GET /person-type`

- **Description**: Retrieves all person types with pagination and locale-based translations.
- **Parameters**:
  - `paginationParams` (query): Optional pagination parameters.
  - `locale` (header): Locale to fetch translated names of person types.

#### `GET /person-type/:id`

- **Description**: Retrieves a person type by its ID.
- **Parameters**:
  - `id` (path): ID of the person type.

#### `PATCH /person-type/:id`

- **Description**: Updates a specific person type.
- **Parameters**:
  - `id` (path): ID of the person type.
  - `data` (body): Data for updating, defined in `UpdatePersonTypeDTO`.

#### `DELETE /person-type`

- **Description**: Deletes multiple person types by IDs.
- **Parameters**:
  - `data` (body): Array of person type IDs to delete, defined in `DeleteDTO`.

### Service Methods

#### `create(data: CreateDTO)`

- **Description**: Creates a new person type.
- **Parameters**:
  - `data`: Object containing person type information as defined in `CreateDTO`.

#### `list(locale: string, paginationParams: PaginationDTO)`

- **Description**: Retrieves all person types with pagination and locale-based translations.
- **Parameters**:
  - `locale`: Locale to fetch translated names of person types.
  - `paginationParams`: Pagination parameters.

#### `get(id: number)`

- **Description**: Retrieves a person type by its ID.
- **Parameters**:
  - `id`: ID of the person type.

#### `update(id: number, data: UpdateDTO)`

- **Description**: Updates a person type.
- **Parameters**:
  - `id`: ID of the person type to update.
  - `data`: Data for updating, as defined in `UpdateDTO`.

#### `delete(data: DeleteDTO)`

- **Description**: Deletes multiple person types.
- **Parameters**:
  - `data`: Object containing an array of person type IDs to delete.

### Folder Structure

```plaintext
├── dto
│   ├── create.dto.ts                 # DTO for creating a person type
│   ├── update.dto.ts                 # DTO for updating a person type
|── person-type.controller.ts         # Controller for person type routes
|── person-type.module.ts             # Module definition for person types
|── person-type.service.ts            # Service class for person type operations
├── person-type.service.spec.ts       # Testing file for person type service
```
