# Component Prop Submodule

The **Component Prop** submodule provides functionality for managing properties of components. In many cases, components in an application will have specific properties that define their behavior, appearance, or functionality. This submodule allows you to manage these properties effectively, supporting operations like creating, updating, deleting, and retrieving component properties with full pagination and search capabilities.

Component properties are essential for customizing the behavior and configuration of components in your system. This submodule helps you efficiently manage them in a structured way, ensuring you have full control over the attributes and settings that define how each component behaves.

### Features

- **Manage Component Properties**: Easily create, update, and delete properties for your components.
- **Flexible Searching**: Search properties by name, default value, or other fields.
- **Pagination Support**: Efficiently manage large numbers of component properties using pagination.
- **Dynamic Updates**: Update properties dynamically to meet your application’s evolving requirements.
- **Reusability**: Ideal for managing properties that can be reused across multiple components.

### Controller Endpoints

The following endpoints are exposed by the submodule to interact with component properties:

- **Component Property Endpoints**:
  - `GET /component-prop`: List component properties with pagination and search functionality.
  - `GET /component-prop/:id`: Retrieve details of a specific component property by its ID.
  - `POST /component-prop`: Create a new component property.
  - `PATCH /component-prop/:id`: Update an existing component property by ID.
  - `DELETE /component-prop`: Delete one or more component properties.

### Service Methods

The service layer provides the following methods for managing component properties:

- **Component Property Service Methods**:
  - `list(paginationParams: PaginationDTO)`: Retrieve a paginated list of component properties with optional search.
  - `get(id: number)`: Retrieve a specific component property by its ID.
  - `create(data: CreateDTO)`: Create a new component property.
  - `update({ id, data }: { id: number; data: UpdateDTO })`: Update an existing component property.
  - `delete({ ids }: DeleteDTO)`: Delete one or more component properties by ID.

### Folder Structure

```plaintext
├── component-prop.controller.ts        # Controller for handling component property-related routes
├── component-prop.service.ts           # Service containing logic for managing component properties
├── component-prop.module.ts            # Module setup that imports and configures all the services and controllers
├── dto
│   ├── create.dto.ts                   # DTO for creating new component properties
│   ├── update.dto.ts                   # DTO for updating existing component properties
```
