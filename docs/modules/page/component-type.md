# Component Type

The **Component Type** submodule provides functionality for managing the types of components in your application. This submodule allows you to define and manipulate component types, enabling a structured approach to organizing and categorizing components in your system. With built-in support for localization, pagination, and flexible management of component types, it provides the tools needed to ensure a scalable and consistent architecture.

### Features

- **Manage Component Types**: Create, update, delete, and retrieve component types to organize your system’s components efficiently.
- **Localized Data**: Supports localization, ensuring that component types can be customized based on the user's language or region.
- **Pagination and Search**: Handle large datasets effectively with pagination and search capabilities.
- **Dynamic Updates**: Easily update and maintain component types across your system.
- **Consistency**: Ensure consistent use of component types throughout the application, with reusable and scalable design patterns.

### Controller Endpoints

The submodule provides the following RESTful endpoints for interacting with component types:

- **Component Type Endpoints**:
  - `GET /component-type`: List all component types with support for pagination and search.
  - `GET /component-type/:id`: Retrieve a specific component type by its ID.
  - `POST /component-type`: Create a new component type.
  - `PATCH /component-type/:id`: Update an existing component type by its ID.
  - `DELETE /component-type`: Delete one or more component types.

### Service Methods

The service layer provides the following methods for handling component types:

- **Component Type Service Methods**:
  - `list(locale: string, paginationParams: PaginationDTO)`: Retrieve a paginated list of component types, localized based on the provided locale.
  - `get(id: number)`: Get the details of a specific component type by its ID.
  - `create(data: CreateDTO)`: Create a new component type.
  - `update({ id, data }: { id: number; data: UpdateDTO })`: Update an existing component type.
  - `delete({ ids }: DeleteDTO)`: Delete one or more component types by their IDs.

### Folder Structure

```plaintext
├── component-type.controller.ts    # Controller for managing component types
├── component-type.service.ts       # Service handling the business logic for component types
├── component-type.module.ts        # Module that ties together the controller and service
├── dto
│   ├── create.dto.ts               # DTO for creating new component types
│   ├── update.dto.ts               # DTO for updating existing component types
```
