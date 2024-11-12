# Document Type Module

The **Document Type** module manages document type definitions used for categorizing documents associated with persons. It includes operations for creating, reading, updating, and deleting document types, with support for pagination and localization.

### Controller Endpoints

#### `POST /document-type`

- **Description**: Creates a new document type.
- **Parameters**:
  - `data` (body): Document type data as defined in `CreateDTO`.

#### `GET /document-type`

- **Description**: Retrieves all document types with optional pagination and locale-based translations.
- **Parameters**:
  - `paginationParams` (query): Optional pagination parameters.
  - `locale` (header): Locale for fetching translated document type names.

#### `GET /document-type/:id`

- **Description**: Retrieves a document type by its unique ID.
- **Parameters**:
  - `id` (path): ID of the document type.

#### `PATCH /document-type/:id`

- **Description**: Updates a specific document type.
- **Parameters**:
  - `id` (path): ID of the document type.
  - `data` (body): Document type data to update as defined in `UpdateDTO`.

#### `DELETE /document-type`

- **Description**: Deletes multiple document types by ID.
- **Parameters**:
  - `data` (body): Array of IDs of document types to delete, as defined in `DeleteDTO`.

### Service Methods

#### `create(data: CreateDTO)`

- **Description**: Creates a new document type entry.
- **Parameters**:
  - `data`: Object containing document type information as defined in `CreateDTO`.

#### `list(locale: string, paginationParams: PaginationDTO)`

- **Description**: Retrieves all document types with pagination and locale-based translations.
- **Parameters**:
  - `locale`: Locale for fetching translated document type names.
  - `paginationParams`: Pagination parameters.

#### `get(id: number)`

- **Description**: Retrieves a document type by its unique ID.
- **Parameters**:
  - `id`: ID of the document type.

#### `update(id: number, data: UpdateDTO)`

- **Description**: Updates a document type.
- **Parameters**:
  - `id`: ID of the document type to update.
  - `data`: Document type data as defined in `UpdateDTO`.

#### `delete(data: DeleteDTO)`

- **Description**: Deletes multiple document types.
- **Parameters**:
  - `data`: Object containing an array of IDs to delete.

### Folder Structure

```plaintext
├── dto
│   ├── create.dto.ts                 # DTO for creating a document type
│   ├── update.dto.ts                 # DTO for updating a document type
|── document-type.controller.ts       # Controller for document type routes
|── document-type.module.ts           # Module definition for document types
|── document-type.service.ts          # Service class for document type operations
├── document-type.service.spec.ts     # Testing file for document type service
```
