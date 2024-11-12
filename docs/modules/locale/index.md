# 🦔 @hedhog/locale

**Hedhog Locale** module provides a powerful solution for managing locales and translations across applications. It includes functionalities to retrieve, create, update, and delete locale data, with support for pagination and localization. The module integrates seamlessly within the HedHog ecosystem, using @hedhog/pagination for handling paginated responses and @hedhog/prisma for database interactions.

## Features

- **Locale Management**: Comprehensive CRUD operations for managing locale data.
- **Translation Retrieval**: Fetch translations for specific locales and namespaces.
- **Pagination Support**: Integrated pagination for listing locales and translations.
- **Localization**: Seamless integration with the HedHog ecosystem for localized content.
- **Middleware and Decorators**: Tools for injecting and processing locale data in requests.

## Installation

To install the `@hedhog/locale` module, use the following command:

```bash
npm i @hedhog/locale
```

## Controller Endpoints

#### `GET /locale/system/enabled`

- **Description**: Retrieve a paginated list of enabled locales.
- **Authentication**: Not required (public endpoint).
- **Parameters**:
  - `locale (string)`: Locale code for filtering.
  - Pagination parameters (optional).

#### `GET /locale/:localeCode/:namespace`

- **Description**: Retrieve translations for a specific locale and namespace.
- **Authentication**: Not required (public endpoint).
- **Parameters**:
  - `localeCode (string)`: The locale code to fetch translations for.
  - `namespace (string)`: The namespace to fetch translations from.

#### `GET /locale`

- **Description**: Retrieve a paginated list of locales.
- **Authentication**: Required.
- **Pagination**: Supports pagination through query parameters.

#### `GET /locale/:id`

- **Description**: Retrieve a specific locale by its ID.
- **Authentication**: Required.
- **Parameters**:
  - `id (number)`: The ID of the locale to retrieve.

#### `POST /locale`

- **Description**: Create a new locale entry.
- **Authentication**: Required.
- **Body**:
  - `code (string)`: The code of the locale.
  - `region (string)`: The region of the locale.

#### `PATCH /locale/:id`

- **Description**: Update an existing locale entry.
- **Authentication**: Required.
- **Parameters**:
  - `id (number)`: The ID of the locale to update.
- **Body**:
  - `code (string, optional)`: Updated code of the locale.
  - `region (string, optional)`: Updated region of the locale.

#### `PUT /locale`

- **Description**: Set the enabled status for multiple locales.
- **Authentication**: Required.
- **Body**:
  - `codes (string[])`: Array of locale codes to set as enabled.

#### `DELETE /locale`

- **Description**: Delete one or more locales.
- **Authentication**: Required.
- **Body**:
  - `ids (number[])`: Array of locale IDs to delete.

## Service Methods

#### `setEnabled(codes: string[])`

- **Description**: Sets the enabled status for multiple locales.
- **Parameters**:
  - `codes (string[])`: Array of locale codes to set as enabled.

#### `parseLocale(locale: string)`

- **Description**: Parses a locale string into its code and region components.
- **Parameters**:
  - `locale (string)`: The locale string to parse.

#### `getEnables(locale: string, paginationParams: PaginationDTO)`

- **Description**: Retrieves a paginated list of enabled locales based on locale code and pagination parameters.
- **Parameters**:
  - `locale (string)`: Locale code for filtering.
  - `paginationParams (PaginationDTO)`: Includes pagination criteria.

#### `getTranslations(localeCode: string, namespace: string)`

- **Description**: Retrieves translations for a given locale code and namespace.
- **Parameters**:
  - `localeCode (string)`: The locale code to fetch translations for.
  - `namespace (string)`: The namespace to fetch translations from.

#### `list(locale: string, paginationParams: PaginationDTO)`

- **Description**: Retrieves a paginated list of all locales.
- **Parameters**:
  - `paginationParams (PaginationDTO)`: Includes pagination criteria.

#### `getByCode(code: string)`

- **Description**: Retrieves a locale by its code.
- **Parameters**:
  - `code (string)`: The code of the locale to retrieve.

#### `get(localeId: number)`

- **Description**: Retrieves a specific locale by its ID.
- **Parameters**:
  - `localeId (number)`: ID of the locale to retrieve.

#### `create(data: CreateDTO)`

- **Description**: Creates a new locale entry.
- **Parameters**:
  - `data (CreateDTO)`: Includes code and region of the new locale.

#### `update(id: number, data: UpdateDTO)`

- **Description**: Updates an existing locale entry.
- **Parameters**:
  - `id (number)`: ID of the locale to update.
  - `data (UpdateDTO)`: Includes updated code and region.

#### `delete(data: DeleteDTO)`

- **Description**: Deletes one or more locale entries.
- **Parameters**:
  - `data (DeleteDTO)`: Includes array of IDs to delete.

### Folder Structure

```plaintext
|── dto/                         # Data Transfer Objects
│   ├── create.dto.ts            # DTO for creating locales
│   ├── delete.dto.ts            # DTO for deleting locales
│   └── update.dto.ts            # DTO for updating locales
|── locale.controller.ts         # Controller for locales
|── locale.decorator.ts          # Decorator for injecting locale into requests
|── locale.middleware.ts         # Middleware to handle locale-specific processing
|── locale.module.ts             # Module definition for locales
|── locale.service.ts            # Service class for locales logic
├── locale.service.spec.ts       # Testing file for locale service
|── index.ts                     # Main export file for the module
```
