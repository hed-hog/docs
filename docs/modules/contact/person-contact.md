# Person Contact Module

The **Person Contact** module manages contacts associated with individual profiles, enabling CRUD operations and offering support for multiple contact types. This module allows you to create, retrieve, update, and delete contacts for a person and provides filtering options based on contact type or specific contact IDs.

### Controller Endpoints

#### `POST /person/:personId/person-contact`

- **Description**: Creates a new contact for a person.
- **Parameters**:
  - `personId (URL param)`: The ID of the person associated with the contact.
- **Body:**
  - `CreateDTO`: Data required to create the contact, including fields like type_id, value, primary, etc.

#### `GET /person/:personId/person-contact`

- **Description**: Retrieves contacts associated with a specific person, with optional filtering by contact type or contact ID.
- **Parameters**:
  - `personId (URL param)`: The ID of the person.
  - `typeId (query param, optional)`: Filters results by a specific contact type.
  - `contactId (query param, optional)`: Retrieves a specific contact by ID.

#### `PATCH /person/:personId/person-contact/:contactId`

- **Description**: Updates an existing contact for a person.
- **Parameters**:
  - `personId (URL param)`: The ID of the person.
  - `contactId (URL param)`: The ID of the contact to update.
- **Body**:
  - `UpdateDTO`: Data for updating contact fields.

#### `DELETE /person/:personId/person-contact/:contactId`

- **Description**: Deletes a contact associated with a person.
- **Parameters**:
  - `personId (URL param)`: The ID of the person.
  - `contactId (URL param)`: The ID of the contact to delete.

### Service Methods

#### `create(personId: number, data: CreateDTO)`

- **Description**: Creates a new contact entry in the database linked to a specific personId.
- **Parameters**:
  - `personId`: The ID of the associated person.
  - `data`: Contact data, including type_id, value, primary, and other details.

#### `list(personId?: number, typeId?: number, contactId?: number)`

- **Description**: Retrieves paginated contact data associated with a specific person.
- **Parameters**:
  - `personId`: The ID of the associated person.
  - `typeId`: TypeID of the contact.
  - `contactId`: ID of the contact.

#### `update(personId: number, contactId: number, data: UpdateDTO)`

- **Description**: Updates a contact’s fields by its ID.
- **Parameters**:
  - `personId`: The ID of the associated person.
  - `contactId`: The unique ID of the contact to update.
  - `data`: Updated contact data.

#### `delete(personId: number, data: DeleteDTO)`

- **Description**: Deletes a contact by its ID.
- **Parameters**:
  - `personId`: The ID of the associated person.
  - `data`: Object containing an array of ids for the address types to delete.

### Folder Structure

```plaintext
|── dto/                         # Data Transfer Objects
│   ├── create.dto.ts            # DTO for creating person-contacts
│   └── update.dto.ts            # DTO for updating person-contacts
|── person-contact.controller.ts        # Controller for person-contact
|── person-contact.service.ts           # Service class for person-contact logic
```
