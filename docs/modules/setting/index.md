# 🦔 @hedhog/setting

**Hedhog Setting** module provides a comprehensive solution for managing application settings. It includes functionalities to create, read, update, and delete settings, along with support for pagination and search capabilities. This module integrates with the HedHog ecosystem, utilizing @hedhog/pagination for managing paginated results and @hedhog/prisma for database interactions.

### Features

- **CRUD Operations**: Create, read, update, and delete settings.
- **Pagination**: Efficiently manage large sets of settings with pagination.
- **Search**: Easily find settings using search functionality.
- **Locale Support**: Filter settings based on locale.
- **Group Management**: Organize settings into groups for better management.
- **Transaction Support**: Update multiple settings in a single transaction.

### Controller Endpoints

#### `GET /setting`

- **Description**: Retrieve a paginated list of settings.
- **Authentication**: Required (uses `AuthGuard`).
- **Pagination**: Supports pagination through query parameters.

#### `GET /setting/:settingId`

- **Description**: Retrieve a specific setting by its ID.
- **Authentication**: Required (uses AuthGuard).
- **Parameters**:
  - **settingId** (number): The ID of the setting to retrieve.

#### `POST /setting`

- **Description**: Create a new setting.
- **Authentication**: Required (uses AuthGuard).
- **Body**:
  - **name** (string): Name of the setting.

#### `PATCH /setting/:settingId`

- **Description**: Update an existing setting.
- **Authentication**: Required (uses AuthGuard).
- **Parameters**:
  - **settingId** (number): The ID of the setting to update.
- **Body**:
  - **name** (string, optional): Updated name of the setting.

#### `DELETE /setting`

- **Description**: Delete one or more settings.
- **Authentication**: Required (uses AuthGuard).
- **Body**:
  - **ids** (number[]): Array of setting IDs to delete.

### Service Methods

#### `setManySettings(data: SettingDTO)`

- **Description**: Updates multiple settings in a single transaction.
- **Parameters**:
  - **data**: Includes an array of settings with their slugs and values.

#### `getSettingFromGroup(locale: any, paginationParams: any, slug: string)`

- **Description**: Retrieves settings from a specific group with pagination and locale-based filtering.
- **Parameters**:
  - **locale**: Locale code for filtering.
  - **paginationParams**: Includes pagination and search criteria.
  - **slug**: Slug of the setting group.

#### `listSettingGroups(locale: string, paginationParams: PaginationDTO)`

- **Description**: Retrieves a paginated list of setting groups with locale-based filtering.
- **Parameters**:
  - **locale**: Locale code for filtering.
  - **paginationParams**: Includes pagination and search criteria.

#### `listSettings(locale: string, paginationParams: PaginationDTO)`

- **Description**: Retrieves a paginated list of settings with optional search functionality.
- **Parameters**:
  - **locale (string)**: Locale code for filtering.
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

#### `updateFromSlug(slug: string, data: UpdateDTO)`

- **Description**: Updates a setting based on its slug.
- **Parameters**:
  - **slug**: Slug of the setting to update.
  - **data**: Includes updated name of the setting.

#### `delete(data: DeleteDTO)`

- **Description**: Deletes one or more settings.
- **Parameters**:
  - **data**: Includes array of ids to delete.

### Installation

To install the `@hedhog/setting` module, use the following command:

```bash
npm i @hedhog/setting
```

### Usage

Once installed, you can integrate the Setting module into your project to manage application settings seamlessly.

```typescript
import { SettingModule } from "@hedhog/setting";

@Module({
  imports: [SettingModule],
})
export class AppModule {}
```

By importing the `SettingModule`, you gain access to all the functionality provided by the module, including creating settings, updating configurations, retrieving setting data, and managing settings in groups. This simplifies the handling of application settings and ensures efficient management of configuration data in your application.

### Folder Structure

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
