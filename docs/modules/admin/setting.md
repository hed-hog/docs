# Setting Module

**Hedhog Setting** module provides a comprehensive solution for managing application settings. It includes functionalities to create, read, update, and delete settings, along with support for pagination and search capabilities. This module integrates with the HedHog ecosystem, utilizing @hedhog/pagination for managing paginated results and @hedhog/prisma for database interactions.

### Controller Endpoints

#### `GET /settings`

- **Description**: Retrieve a paginated list of settings.
- **Authentication**: Required (uses `AuthGuard`).
- **Pagination**: Supports pagination through query parameters.

#### `GET /settings/:settingId`

- **Description**: Retrieve a specific setting by its ID.
- **Authentication**: Required (uses AuthGuard).
- **Parameters**:
  - **settingId** (number): The ID of the setting to retrieve.

#### `POST /settings`

- **Description**: Create a new setting.
- **Authentication**: Required (uses AuthGuard).
- **Body**:
  - **name** (string): Name of the setting.

#### `PATCH /settings/:settingId`

- **Description**: Update an existing setting.
- **Authentication**: Required (uses AuthGuard).
- **Parameters**:
  - **settingId** (number): The ID of the setting to update.
- **Body**:
  - **name** (string, optional): Updated name of the setting.

#### `DELETE /settings`

- **Description**: Delete one or more settings.
- **Authentication**: Required (uses AuthGuard).
- **Body**:
  - **ids** (number[]): Array of setting IDs to delete.

### Service Methods

#### `getSettings(paginationParams: PaginationDTO)`

- **Description**: Retrieves a paginated list of settings with optional search functionality.
- **Parameters**:
  - **paginationParams**: Includes pagination and search criteria.

#### `get(settingId: number)`

- **Description**: Retrieves a specific setting by its ID.
- **Parameters**:
  - **settingId**: ID of the setting to retrieve.

#### `create(data: CreateDTO)`

- **Description**: Creates a new setting.
- **Parameters**:
  - **data**: Includes name of the setting.

#### `update(id: number, data: UpdateDTO)`

- **Description**: Updates an existing setting.
- **Parameters**:
  - **id**: ID of the setting to update.
  - **data**: Includes updated name of the setting.

#### `delete(data: DeleteDTO)`

- **Description**: Deletes one or more settings.
- **Parameters**:
  - **data**: Includes array of ids to delete.

## Folder Structure

```plaintext
|── dto/                     # Data Transfer Objects
│   |── create.dto.ts        # DTO for creating settings
│   |── delete.dto.ts        # DTO for deleting settings
│   |── update.dto.ts        # DTO for updating settings
|── setting.controller.ts    # Controller for settings
|── setting.module.ts        # Module definition for settings
|── setting.service.ts       # Service class for settings logic
|── setting.service.spec.ts  # Testing file for setting service
```
