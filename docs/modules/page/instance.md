# Instance Submodule

The **Instance** submodule provides functionality for managing instances within your system. Instances represent specific occurrences or components within the application and are associated with different attributes such as visibility, order, and components. This submodule enables the creation, updating, deletion, and retrieval of instances, offering a clean and efficient approach to managing these entities.

### Features

- **Manage Instances**: Allows the creation, modification, and deletion of instances across your system.
- **Pagination & Search**: Handle large datasets with pagination and search functionality, allowing users to find and manage instances easily.
- **Flexible Data Structure**: Each instance can be associated with attributes like `name`, `order`, `visibility`, and `parent_id`, providing a comprehensive model for organizing your data.
- **Visibility Control**: Easily toggle visibility for instances, ensuring control over which instances are visible in the system.
- **Efficient CRUD Operations**: Provides efficient methods to perform CRUD operations (Create, Read, Update, Delete) on instances.

### Controller Endpoints

The submodule provides the following RESTful endpoints for interacting with instances:

- **Instance Endpoints**:
  - `GET /instance`: List all instances with support for pagination and search.
  - `GET /instance/:id`: Retrieve a specific instance by its ID.
  - `POST /instance`: Create a new instance.
  - `PATCH /instance/:id`: Update an existing instance by its ID.
  - `DELETE /instance`: Delete one or more instances.

### Service Methods

The service layer offers the following methods for managing instances:

- **Instance Service Methods**:
  - `list(paginationParams: PaginationDTO)`: Retrieve a paginated list of instances, with optional search capabilities.
  - `get(id: number)`: Get the details of a specific instance by its ID.
  - `create(data: CreateDTO)`: Create a new instance with provided data.
  - `update({ id, data }: { id: number; data: UpdateDTO })`: Update an existing instance by its ID with new data.
  - `delete({ ids }: DeleteDTO)`: Delete one or more instances based on their IDs.

### Folder Structure

```plaintext
├── instance.controller.ts          # Controller for managing instances
├── instance.service.ts             # Service for handling instance business logic
├── instance.module.ts              # Module that binds together the controller and service
├── dto
│   ├── create.dto.ts               # DTO for creating instances
│   ├── update.dto.ts               # DTO for updating instances
```
