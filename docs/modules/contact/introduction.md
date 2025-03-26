# 🦔 @hedhog/contact

**Hedhog Contact** is a comprehensive module for managing person-related data, supporting physical, legal, and international entities. It handles associated documents, contacts, addresses, and custom attributes, designed to integrate seamlessly into Hedhog-based projects, providing a CRUD (Create, Read, Update, Delete) foundation for managing persons.

### Features

- **Multiple Person Types**: Supports different person types such as physical, legal, and international entities.
- **Document Management**: Handles multiple document types (e.g., CPF, CNPJ, passport) for each person.
- **Contact Information**: Stores and manages contact details, including phone numbers and email addresses.
- **Address Handling**: Tracks multiple address types (e.g., residential, commercial) for each person.
- **Custom Attributes**: Allows the addition of custom attributes to extend the person entity.

### Installation

This library is an integral part of the Hedhog framework and should be installed as a dependency in your Hedhog project.

```bash
npm i @hedhog/contact
```

### Included Modules:

- **person-address**: Manages the address information for individuals, including storage, updates, and deletions of address records.
- **person-address-type**: Provides a system for defining types of addresses (e.g., residential, business) to categorize and manage addresses.
- **person-contact**: Handles contact details for individuals, such as phone numbers and email addresses, including creation, updates, and deletion.
- **person-contact-type**: Manages various types of contact information (e.g., phone, email) to facilitate organized contact data management.
- **person-custom**: Provides a flexible system for managing additional customizable fields for individuals beyond default attributes.
- **person-custom-type**: Allows the definition of custom field types to extend person records with specialized data points.
- **person-document**: Manages documents related to individuals, such as IDs and licenses, supporting secure storage and retrieval.
- **person-document-type**: Facilitates the categorization of document types (e.g., passport, driver’s license) for organized document management.
- **person**: Manages individual and organizational profiles, including creation, updates, and deletion, along with support for linking associated addresses, contacts, documents, and custom attributes.
- **person-type**: Provides a system for defining and managing types of persons (e.g., individual, company) to support diverse person profiles within the application.

## Controller Endpoints

### `POST /person`

- **Description**: Creates a new person in the system.
- **Parameters**:
  - `data` (body): Data for the person, defined in `CreateDTO`.

### `GET /person`

- **Description**: Retrieves all persons with pagination and locale-based translations.
- **Parameters**:
  - `paginationParams` (query): Optional pagination parameters.
  - `locale` (header): Locale to fetch translated names of person types.

### `GET /person/:id`

- **Description**: Retrieves a person by their ID.
- **Parameters**:
  - `id` (path): Unique identifier of the person.

### `PATCH /person/:id`

- **Description**: Updates a specific person's details.
- **Parameters**:
  - `id` (path): Unique identifier of the person.
  - `data` (body): Data for updating, defined in `UpdateDTO`.

### `DELETE /person`

- **Description**: Deletes multiple persons by their IDs.
- **Parameters**:
  - `data` (body): Array of person IDs to delete, defined in `DeleteDTO`.

## Service Methods

### `create(data: CreateDTO)`

- **Description**: Creates a new person in the database.
- **Parameters**:
  - `data`: Object containing person information as defined in `CreateDTO`.

### `list(paginationParams: PaginationDTO)`

- **Description**: Retrieves all persons with pagination.
- **Parameters**:
  - `locale`: Locale to fetch translated names of person-related data.
  - `paginationParams`: Pagination parameters.

### `get(id: number)`

- **Description**: Retrieves a person by their unique ID.
- **Parameters**:
  - `id`: Unique identifier of the person.

### `update(id: number, data: UpdateDTO)`

- **Description**: Updates a person's details in the database.
- **Parameters**:
  - `id`: Unique identifier of the person to be updated.
  - `data`: Data for updating, as defined in `UpdateDTO`.

### `delete(data: DeleteDTO)`

- **Description**: Deletes multiple persons from the database by their IDs.
- **Parameters**:
  - `data`: Object containing an array of person IDs to delete.
