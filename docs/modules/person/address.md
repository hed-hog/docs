# Address Module

The **Address** module provides comprehensive tools to manage addresses associated with individual or organizational profiles. This module allows for CRUD operations on addresses, supporting various address types and filtering capabilities.

### Controller Endpoints

#### `POST /persons/:personId/address`

- **Description**: Creates a new address for a person.
- **Parameters**:
  - `personId (URL param)`: The ID of the person associated with the address.
- **Body**:
  - `CreatePersonAddressDTO`: Data required to create the address, including fields like country_id, type_id, street, city, postal_code, and more.

#### `GET /persons/:personId/address`

- **Description**: Retrieves addresses for a specific person, optionally filtered by typeId or addressId.
- **Parameters**:
  - `personId (URL param)`: The ID of the person.
  - `typeId (query param, optional)`: Filters results by a specific address type.
  - `addressId (query param, optional)`: Retrieves a specific address by ID.

#### `PATCH /persons/:personId/address/:addressId`

- **Description**: Updates an existing address.
- **Parameters**:
  - `personId (URL param)`: The ID of the person.
  - `addressId (URL param)`: The ID of the address to update.
- **Body**:
  - `UpdatePersonAddressDTO (body)`: Data for updating the address fields.

#### `DELETE /persons/:personId/address/:addressId`

- **Description**: Deletes an address.
- **Body**:
  - `personId (URL param)`: The ID of the person.
  - `addressId (URL param)`: The ID of the address to delete.

### Service Methods

#### `create(personId: number, data: CreatePersonAddressDTO)`

- **Description**: Creates a new address entry in the database linked to a specific personId.
- **Parameters**:
  - `personId`: The ID of the associated person.
  - `data`: Address data, including details like country_id, type_id, street, and more.

#### `getAddress(personId: number)`

- **Description**: Retrieves paginated address data associated with a specific person.
- **Parameters**:
  - `personId`: The ID of the associated person.

#### `getAddressByTypeId(personId: number, typeId: number)`

- **Description**: Retrieves an address by its type for a specific person.
- **Parameters**:
  - `personId`: The ID of the associated person.
  - `typeId`: The ID of the address type.

#### `getAddressById(addressId: number)`

- **Description**: Retrieves a specific address by ID.
- **Parameters**:
  - `addressId`: The unique ID of the address.

#### `update(addressId: number, data: UpdatePersonAddressDTO)`

- **Description**: Updates an address’s fields by its ID.
- **Parameters**:
  - `addressId`: The unique ID of the address to update.
  - `data`: Updated address data.

#### `remove(addressId: number)`

- **Description**: Deletes an address by its ID.
- **Parameters**:
  - `addressId`: The unique ID of the address to delete.

### Folder Structure

```plaintext
|── dto/                         # Data Transfer Objects
│   ├── create-address.dto.ts    # DTO for creating addresses
│   └── update-address.dto.ts    # DTO for updating addresses
|── address.controller.ts        # Controller for address
|── address.module.ts            # Module definition for address
|── address.service.ts           # Service class for address logic
├── address.service.spec.ts      # Testing file for address service
```
