# Document Module

The **Document** module handles operations related to documents associated with persons, including CRUD operations and pagination. It allows retrieving documents based on various criteria, such as document ID and type ID.

### Controller Endpoints

#### `POST /persons/:personId/documents`

- **Description**: Creates a new document for a specified person.
- **Parameters**:
  - `personId` (path): ID of the person associated with the document.
  - `data` (body): Document data as defined in `CreatePersonDocumentDTO`.

#### `GET /persons/:personId/documents`

- **Description**: Retrieves documents for a specified person, with optional filtering by `typeId` or `documentId`.
- **Parameters**:
  - `personId` (path): ID of the person whose documents are being retrieved.
  - `typeId` (query): Optional type ID to filter documents by type.
  - `documentId` (query): Optional document ID to retrieve a specific document.

#### `PATCH /persons/:personId/documents/:documentId`

- **Description**: Updates a specific document associated with a person.
- **Parameters**:
  - `personId` (path): ID of the person.
  - `documentId` (path): ID of the document to be updated.
  - `data` (body): Document data as defined in `UpdatePersonDocumentDTO`.

#### `DELETE /persons/:personId/documents/:documentId`

- **Description**: Deletes a specific document.
- **Parameters**:
  - `personId` (path): ID of the person.
  - `documentId` (path): ID of the document to delete.

### Service Methods

#### `create(personId: number, data: CreatePersonDocumentDTO)`

- **Description**: Creates a new document for a specific person.
- **Parameters**:
  - `personId`: ID of the person associated with the document.
  - `data`: Object containing document information as defined in `CreatePersonDocumentDTO`.

#### `getDocuments(personId: number)`

- **Description**: Retrieves all documents for a specific person, with pagination.
- **Parameters**:
  - `personId`: ID of the person.

#### `getDocumentByTypeId(personId: number, typeId: number)`

- **Description**: Retrieves a document by its type ID for a specific person.
- **Parameters**:
  - `personId`: ID of the person.
  - `typeId`: Type ID of the document.

#### `getDocumentById(documentId: number)`

- **Description**: Retrieves a document by its unique document ID.
- **Parameters**:
  - `documentId`: ID of the document.

#### `update(documentId: number, data: UpdatePersonDocumentDTO)`

- **Description**: Updates a document’s data.
- **Parameters**:
  - `documentId`: ID of the document to update.
  - `data`: Document data to update.

#### `remove(documentId: number)`

- **Description**: Deletes a document by its ID.
- **Parameters**:
  - `documentId`: ID of the document to delete.

### Folder Structure

```plaintext
├── dto
│   ├── create-document.dto.ts   # DTO for creating a document
│   └── update-document.dto.ts   # DTO for updating a document
|── document.controller.ts       # Controller for document routes
|── document.module.ts           # Module definition for documents
|── document.service.ts          # Service class for document operations
├── document.service.spec.ts     # Testing file for document service
```
