# Person Address Type Module

**Person Address Type** module provides management capabilities for address types within a system, enabling CRUD operations and localization features. This module is especially useful for applications that require multiple address categorizations (e.g., residential, commercial) with support for multi-language labels.

### Controller Endpoints

#### `POST /person-address-type`

- **Description**: Creates a new address type.
- **Body**:
  - `CreateDTO`: The data required to create an address type, including fields like name and additional optional properties.

#### `GET /person-address-type`

- **Description**: Retrieves all address types, supporting pagination and localization.
- **Parameters**:
  - `paginationParams (query param, optional)`: Controls pagination parameters (page, limit).
  - `locale (query param, optional)`: The locale code to filter address type translations.

#### `GET /person-address-type/:id`

- **Description**: Retrieves a specific address type by its ID.
- **Parameters**:
  - `id (URL param)`: The unique ID of the address type.

#### `PATCH /person-address-type/:id`

- **Description**: Updates an existing address type.
- **Parameters**:
  - `id (URL param)`: The unique ID of the address type to update.
- **Body**:
  - `UpdateDTO`: Data for updating the address type’s properties.

#### `DELETE /person-address-type`

- **Description**: Deletes one or more address types.
- **Body**:
  - `DeleteDTO`: An object containing the IDs of the address types to delete.

### Service Methods

#### `create(data: CreateDTO)`

- **Description**: Creates a new address type entry in the database.
- **Parameters**:
  - `data`: The data required to create an address type, following the CreateDTO structure.

#### `list(locale: string, paginationParams: PaginationDTO)`

- **Description**: Retrieves paginated address types, including translations based on the specified locale.
- **Parameters**:
  - `locale`: The locale code to filter the translations for address type names.
  - `paginationParams`: Pagination parameters like page and limit.

#### `get(id: number)`

- **Description**: Retrieves a specific address type by its ID.
- **Parameters**:
  - `id`: The unique identifier of the address type to retrieve.

#### `update(id: number, data: UpdateDTO)`

- **Description**: Updates an address type’s fields by its ID.
- **Parameters**:
  - `id`: The unique identifier of the address type to update.
  - `data`: Updated fields for the address type.

#### `delete(data: DeleteDTO)`

- **Description**: Deletes one or more address types by their IDs.
- **Parameters**:
  - `data`: Object containing an array of ids for the address types to delete.

### Folder Structure

```plaintext
|── dto/                              # Data Transfer Objects
│   ├── create.dto.ts                 # DTO for creating person-address types
│   └── update.dto.ts                 # DTO for updating person-address types
|── person-address-type.controller.ts        # Controller for person-address-type
|── person-address-type.enum.ts              # Enum definitions for person-address-type
|── person-address-type.module.ts            # Module definition for person-address-type
|── person-address-type.service.ts           # Service class for person-address-type logic
```
