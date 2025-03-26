# Component Submodule

The **Component** submodule provides a powerful framework for managing reusable components within your application. Components can represent anything from UI elements to functional building blocks within your system, such as buttons, modals, or other modular units. This submodule allows you to efficiently create, update, delete, and retrieve components, with full support for pagination and flexible querying.

Whether you're building a complex UI, managing dynamic content, or organizing reusable code, this submodule streamlines the management of components, making it easy to handle them in your system. With pagination and search capabilities, you can handle large collections of components without sacrificing performance.

### Features

- **Manage Components**: Create, update, and delete components for your application.
- **Flexible Searching**: Search components by name or other fields.
- **Pagination Support**: Efficiently retrieve large numbers of components using pagination.
- **Dynamic Updates**: Support for updating and customizing components dynamically.
- **Reusable and Scalable**: Ideal for managing modular components that can be reused across different parts of your application.

### Controller Endpoints

The following endpoints are exposed by the submodule to interact with components:

- **Component Endpoints**:
  - `GET /component`: List components with pagination and search functionality.
  - `GET /component/:id`: Retrieve details of a specific component by its ID.
  - `POST /component`: Create a new component.
  - `PATCH /component/:id`: Update an existing component by ID.
  - `DELETE /component`: Delete one or more components.

### Service Methods

The service layer exposes the following methods for managing components:

- **Component Service Methods**:
  - `list(paginationParams: PaginationDTO)`: Retrieve a paginated list of components with optional search.
  - `get(id: number)`: Retrieve a specific component by its ID.
  - `create(data: CreateDTO)`: Create a new component.
  - `update({ id, data }: { id: number; data: UpdateDTO })`: Update an existing component.
  - `delete({ ids }: DeleteDTO)`: Delete one or more components by ID.

### Folder Structure

```plaintext
├── component.controller.ts        # Controller for handling component-related routes
├── component.service.ts           # Service containing logic for managing components
├── component.module.ts            # Module setup that imports and configures all the services and controllers
├── dto
│   ├── create.dto.ts              # DTO for creating new components
│   ├── update.dto.ts              # DTO for updating existing components
```
