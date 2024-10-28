# Document Type Module

The **Document Type** module manages document type definitions used for categorizing documents associated with persons. It includes operations for creating, reading, updating, and deleting document types, with support for pagination and localization.

### Controller Endpoints

#### `POST /document-types`

- **Description**: Creates a new document type.
- **Parameters**:
  - `data` (body): Document type data as defined in `CreateDocumentTypeDTO`.

#### `GET /document-types`

- **Description**: Retrieves all document types with optional pagination and locale-based translations.
- **Parameters**:
  - `paginationParams` (query): Optional pagination parameters.
  - `locale` (header): Locale for fetching translated document type names.

#### `GET /document-types/:id`

- **Description**: Retrieves a document type by its unique ID.
- **Parameters**:
  - `id` (path): ID of the document type.

#### `PATCH /document-types/:id`

- **Description**: Updates a specific document type.
- **Parameters**:
  - `id` (path): ID of the document type.
  - `data` (body): Document type data to update as defined in `UpdateDocumentTypeDTO`.

#### `DELETE /document-types`

- **Description**: Deletes multiple document types by ID.
- **Parameters**:
  - `data` (body): Array of IDs of document types to delete, as defined in `DeleteDTO`.

### Service Methods

#### `create(data: CreateDocumentTypeDTO)`

- **Description**: Creates a new document type entry.
- **Parameters**:
  - `data`: Object containing document type information as defined in `CreateDocumentTypeDTO`.

#### `getDocumentTypes(locale: string, paginationParams: PaginationDTO)`

- **Description**: Retrieves all document types with pagination and locale-based translations.
- **Parameters**:
  - `locale`: Locale for fetching translated document type names.
  - `paginationParams`: Pagination parameters.

#### `getDocumentTypeById(id: number)`

- **Description**: Retrieves a document type by its unique ID.
- **Parameters**:
  - `id`: ID of the document type.

#### `update(id: number, data: UpdateDocumentTypeDTO)`

- **Description**: Updates a document type.
- **Parameters**:
  - `id`: ID of the document type to update.
  - `data`: Document type data as defined in `UpdateDocumentTypeDTO`.

#### `remove(data: DeleteDTO)`

- **Description**: Deletes multiple document types.
- **Parameters**:
  - `data`: Object containing an array of IDs to delete.

### Folder Structure

```plaintext
├── dto
│   ├── create-document-type.dto.ts   # DTO for creating a document type
│   ├── update-document-type.dto.ts   # DTO for updating a document type
|── document-type.controller.ts       # Controller for document type routes
|── document-type.module.ts           # Module definition for document types
|── document-type.service.ts          # Service class for document type operations
├── document-type.service.spec.ts     # Testing file for document type service
```
