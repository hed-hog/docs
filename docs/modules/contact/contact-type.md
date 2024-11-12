# Contact Type Module

**Contact Type** module manages different categories or types of contacts, supporting internationalization, pagination, and CRUD operations. This allows admins to define and maintain the types of contacts associated with person records.

### Controller Endpoints

#### `POST /contact-type`

- **Description**: Creates a new contact type.
- **Body**:
  - `CreateDTO`: The data required to create a contact type, including fields like name and optional translations.

#### `GET /contact-type`

- **Description**: Retrieves paginated contact types, including localized translations based on the provided locale.
- **Parameters**:
  - `paginationParams (query)`: Optional pagination parameters from @hedhog/pagination.
  - `locale (query)`: The locale code for retrieving contact type translations.

#### `GET /contact-type/:id`

- **Description**: Retrieves a contact type by its ID.
- **Parameters**:
  - `id (URL param)`: The unique ID of the contact type.

#### `PATCH /contact-type/:id`

- **Description**: Updates an existing contact type.
- **Parameters**:
  - `id (URL param)`: The unique ID of the contact type to update.
- **Body**:
  - `UpdateDTO`: Updated data for the contact type, including translated values.

#### `DELETE /contact-type`

- **Description**: Deletes multiple contact types by their IDs.
- **Body**:
  - `DeleteDTO`: A list of IDs to delete.

### Service Methods

#### `create(data: CreateDTO)`

- **Description**: Creates a new contact type record.
- **Parameters**:
  - `data`: Information to create the contact type, including name and optional translations.

#### `list(locale: string, paginationParams: PaginationDTO)`

- **Description**: Retrieves paginated contact types, applying locale-based translations.
- **Parameters**:
  - `locale`: The locale code for the required translation.
  - `paginationParams`: Pagination options.

#### `get(id: number)`

- **Description**: Retrieves a specific contact type by its ID.
- **Parameters**:
  - `id`: The unique ID of the contact type.

#### `update(id: number, data: UpdateDTO)`

- **Description**: Updates an existing contact type by ID.
- **Parameters**:
  - `id`: The unique ID of the contact type.
  - `data`: New data for updating the contact type.

#### `delete(data: DeleteDTO)`

- **Description**: Deletes multiple contact types specified by an array of IDs.
- **Parameters**:
  - `data`: Object containing an array of ids for the address types to delete.

### Folder Structure

```plaintext
|── dto/                              # Data Transfer Objects
│   ├── create.dto.ts                 # DTO for creating contact-types
│   └── update.dto.ts                 # DTO for updating contact-types
|── contact-type.controller.ts        # Controller for contact-type
|── contact-type.module.ts            # Module definition for contact-type
|── contact-type.service.ts           # Service class for contact-type logic
├── contact-type.service.spec.ts      # Testing file for contact-type service
```