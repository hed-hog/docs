# Custom Module

The **Custom** module is used to manage custom data associated with persons. This module includes a controller to handle various endpoints for CRUD operations on custom data and a service to interact with the database via `PrismaService`.

### Controller Endpoints

#### `POST /persons/:personId/customs`

- **Description**: Creates a custom record for a specific person.
- **Parameters**:
  - `personId` (path): ID of the person.
  - `data` (body): Object containing custom data (`name`, `value`, etc.) as defined in `CreatePersonCustomDTO`.

#### `GET /persons/:personId/customs`

- **Description**: Retrieves a list of all custom records for a specific person.
- **Parameters**:
  - `personId` (path): ID of the person.
  - `typeId` (query, optional): Filters custom records by type.
  - `id` (query, optional): Retrieves a specific custom record by ID if provided.

#### `PATCH /persons/:personId/customs/:customId`

- **Description**: Updates a specific custom record.
- **Parameters**:
  - `personId` (path): ID of the person.
  - `customId` (path): ID of the custom record.
  - `data` (body): Object containing updated custom data fields as defined in `UpdatePersonCustomDTO`.

#### `DELETE /persons/:personId/customs/:customId`

- **Description**: Deletes a specific custom record.
- **Parameters**:
  - `personId` (path): ID of the person.
  - `customId` (path): ID of the custom record.

### Service Methods

#### `create(personId: number, data: CreatePersonCustomDTO)`

- **Description**: Creates a custom record associated with a specific person.
- **Parameters**:
  - `personId`: ID of the person.
  - `data`: Object containing custom data (`name`, `value`, etc.).

#### `getCustoms(personId: number)`

- **Description**: Retrieves all custom records for a specific person with pagination.
- **Parameters**:
  - `personId`: ID of the person.

#### `getCustomByTypeId(personId: number, typeId: number)`

- **Description**: Retrieves a custom record for a person filtered by a specific type ID.
- **Parameters**:
  - `personId`: ID of the person.
  - `typeId`: ID of the custom type.

#### `getCustomById(customId: number)`

- **Description**: Retrieves a specific custom record by its ID.
- **Parameters**:
  - `customId`: ID of the custom record.

#### `update(customId: number, data: UpdatePersonCustomDTO)`

- **Description**: Updates a specific custom record with new data.
- **Parameters**:
  - `customId`: ID of the custom record.
  - `data`: Object containing updated custom data fields.

#### `remove(customId: number)`

- **Description**: Deletes a specific custom record.
- **Parameters**:
  - `customId`: ID of the custom record.

### Folder Structure

```plaintext
|── dto/                         # Data Transfer Objects
│   ├── create-custom.dto.ts     # DTO for creating customs
│   └── update-custom.dto.ts     # DTO for updating customs
|── custom.controller.ts         # Controller for custom
|── custom.module.ts             # Module definition for custom
|── custom.service.ts            # Service class for custom logic
├── custom.service.spec.ts       # Testing file for custom service
```
