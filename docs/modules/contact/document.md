# Document Module

The **Document** module handles operations related to documents associated with persons, including CRUD operations and pagination. It allows retrieving documents based on various criteria, such as document ID and type ID.

### Controller Endpoints

#### `POST /person/:personId/document`

- **Description**: Creates a new document for a specified person.
- **Parameters**:
  - `personId` (path): ID of the person associated with the document.
  - `data` (body): Document data as defined in `CreateDTO`.

#### `GET /person/:personId/document`

- **Description**: Retrieves documents for a specified person, with optional filtering by `typeId` or `documentId`.
- **Parameters**:
  - `personId` (path): ID of the person whose documents are being retrieved.
  - `typeId` (query): Optional type ID to filter documents by type.
  - `documentId` (query): Optional document ID to retrieve a specific document.

#### `PATCH /person/:personId/document/:documentId`

- **Description**: Updates a specific document associated with a person.
- **Parameters**:
  - `personId` (path): ID of the person.
  - `documentId` (path): ID of the document to be updated.
  - `data` (body): Document data as defined in `UpdateDTO`.

#### `DELETE /person/:personId/document/:documentId`

- **Description**: Deletes a specific document.
- **Parameters**:
  - `personId` (path): ID of the person.
  - `documentId` (path): ID of the document to delete.

### Service Methods

#### `create(personId: number, data: CreateDTO)`

- **Description**: Creates a new document for a specific person.
- **Parameters**:
  - `personId`: ID of the person associated with the document.
  - `data`: Object containing document information as defined in `CreateDTO`.

#### `list(personId?: number, typeId?: number, documentId?: number)`

- **Description**: Retrieves all documents for a specific person, with pagination.
- **Parameters**:
  - `personId`: ID of the person.
  - `typeId`: Type ID of the document.
  - `documentId`: ID of the document.

#### `update(personId: number, documentId: number, data: UpdateDTO)`

- **Description**: Updates a document’s data.
- **Parameters**:
  - `personId`: ID of the person.
  - `documentId`: ID of the document to update.
  - `data`: Document data to update.

#### `delete(personId: number, data: DeleteDTO)`

- **Description**: Deletes a document by its ID.
- **Parameters**:
  - `personId`: ID of the person.
  - `data`: Object containing an array of ids for the address types to delete.

### Folder Structure

```plaintext
├── dto
│   ├── create.dto.ts            # DTO for creating a document
│   └── update.dto.ts            # DTO for updating a document
|── document.controller.ts       # Controller for document routes
|── document.module.ts           # Module definition for documents
|── document.service.ts          # Service class for document operations
├── document.service.spec.ts     # Testing file for document service
```
