# Custom Module

The **Custom** module is used to manage custom data associated with persons. This module includes a controller to handle various endpoints for CRUD operations on custom data and a service to interact with the database via `PrismaService`.

### Controller Endpoints

#### `POST /person/:personId/custom`

- **Description**: Creates a custom record for a specific person.
- **Parameters**:
  - `personId` (path): ID of the person.
  - `data` (body): Object containing custom data (`name`, `value`, etc.) as defined in `CreateDTO`.

#### `GET /person/:personId/custom`

- **Description**: Retrieves a list of all custom records for a specific person.
- **Parameters**:
  - `personId` (path): ID of the person.
  - `typeId` (query, optional): Filters custom records by type.
  - `id` (query, optional): Retrieves a specific custom record by ID if provided.

#### `PATCH /person/:personId/custom/:customId`

- **Description**: Updates a specific custom record.
- **Parameters**:
  - `personId` (path): ID of the person.
  - `customId` (path): ID of the custom record.
  - `data` (body): Object containing updated custom data fields as defined in `UpdateDTO`.

#### `DELETE /person/:personId/custom/:customId`

- **Description**: Deletes a specific custom record.
- **Parameters**:
  - `personId` (path): ID of the person.
  - `customId` (path): ID of the custom record.

### Service Methods

#### `create(personId: number, data: CreateDTO)`

- **Description**: Creates a custom record associated with a specific person.
- **Parameters**:
  - `personId`: ID of the person.
  - `data`: Object containing custom data (`name`, `value`, etc.).

#### `list(personId?: number, typeId?: number, customId?: number)`

- **Description**: Retrieves all custom records for a specific person with pagination.
- **Parameters**:
  - `personId`: ID of the person.
  - `typeId`: TypeID of the custom attribute.
  - `customId`: ID of the custom attribute.

#### `update(personId: number, customId: number, data: UpdateDTO)`

- **Description**: Updates a specific custom record with new data.
- **Parameters**:
  - `personId`: ID of the person.
  - `customId`: ID of the custom record.
  - `data`: Object containing updated custom data fields.

#### `delete(personId: number, data: DeleteDTO)`

- **Description**: Deletes a specific custom record.
- **Parameters**:
  - `personId`: ID of the person.
  - `data`: Object containing an array of ids for the address types to delete.

### Folder Structure

```plaintext
|── dto/                         # Data Transfer Objects
│   ├── create.dto.ts            # DTO for creating customs
│   └── update.dto.ts            # DTO for updating customs
|── custom.controller.ts         # Controller for custom
|── custom.module.ts             # Module definition for custom
|── custom.service.ts            # Service class for custom logic
├── custom.service.spec.ts       # Testing file for custom service
```
