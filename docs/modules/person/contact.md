# Contact Module

The **Contact** module manages contacts associated with individual profiles, enabling CRUD operations and offering support for multiple contact types. This module allows you to create, retrieve, update, and delete contacts for a person and provides filtering options based on contact type or specific contact IDs.

### Controller Endpoints

#### `POST /persons/:personId/contacts`

- **Description**: Creates a new contact for a person.
- **Parameters**:
  - `personId (URL param)`: The ID of the person associated with the contact.
- **Body:**
  - `CreatePersonContactDTO`: Data required to create the contact, including fields like type_id, value, primary, etc.

#### `GET /persons/:personId/contacts`

- **Description**: Retrieves contacts associated with a specific person, with optional filtering by contact type or contact ID.
- **Parameters**:
  - `personId (URL param)`: The ID of the person.
  - `typeId (query param, optional)`: Filters results by a specific contact type.
  - `contactId (query param, optional)`: Retrieves a specific contact by ID.

#### `PATCH /persons/:personId/contacts/:contactId`

- **Description**: Updates an existing contact for a person.
- **Parameters**:
  - `personId (URL param)`: The ID of the person.
  - `contactId (URL param)`: The ID of the contact to update.
- **Body**:
  - `UpdatePersonContactDTO`: Data for updating contact fields.

#### `DELETE /persons/:personId/contacts/:contactId`

- **Description**: Deletes a contact associated with a person.
- **Parameters**:
  - `personId (URL param)`: The ID of the person.
  - `contactId (URL param)`: The ID of the contact to delete.

### Service Methods

#### `create(personId: number, data: CreatePersonContactDTO)`

- **Description**: Creates a new contact entry in the database linked to a specific personId.
- **Parameters**:
  - `personId`: The ID of the associated person.
  - `data`: Contact data, including type_id, value, primary, and other details.

#### `getContacts(personId: number)`

- **Description**: Retrieves paginated contact data associated with a specific person.
- **Parameters**:
  - `personId`: The ID of the associated person.

#### `getContactByTypeId(personId: number, typeId: number)`

- **Description**: Retrieves a contact by its type for a specific person.
- **Parameters**:
  - `personId`: The ID of the associated person.
  - `typeId`: The ID of the contact type.

#### `getContactById(contactId: number)`

- **Description**: Retrieves a specific contact by ID.
- **Parameters**:
  - `contactId`: The unique ID of the contact.

#### `update(contactId: number, data: UpdatePersonContactDTO)`

- **Description**: Updates a contact’s fields by its ID.
- **Parameters**:
  - `contactId`: The unique ID of the contact to update.
  - `data`: Updated contact data.

#### `remove(contactId: number)`

- **Description**: Deletes a contact by its ID.
- **Parameters**:
  - `contactId`: The unique ID of the contact to delete.

### Folder Structure

```plaintext
|── dto/                         # Data Transfer Objects
│   ├── create-contact.dto.ts    # DTO for creating contacts
│   └── update-contact.dto.ts    # DTO for updating contacts
|── contact.controller.ts        # Controller for contact
|── contact.module.ts            # Module definition for contact
|── contact.service.ts           # Service class for contact logic
├── contact.service.spec.ts      # Testing file for contact service
```
