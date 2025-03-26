# Discount Type Submodule

The **Discount Type** submodule provides functionality for managing different types of discounts within the system. This submodule allows users to create, update, delete, and retrieve discount types, enabling efficient categorization and management of discount strategies.

### Features

- **Manage Discount Types**: Create, modify, and delete discount types to suit different pricing strategies.
- **Pagination & Search**: Easily navigate and filter discount types using built-in pagination and search capabilities.
- **Flexible Data Structure**: Each discount type is defined with attributes like `slug` and `name`, ensuring clear identification and usage.
- **Efficient CRUD Operations**: Provides streamlined methods for performing CRUD operations (Create, Read, Update, Delete) on discount types.

### Controller Endpoints

The submodule provides the following RESTful endpoints for managing discount types:

- **Discount Type Endpoints**:
  - `GET /discount-type`: List all discount types with support for pagination and search.
  - `GET /discount-type/:id`: Retrieve a specific discount type by its ID.
  - `POST /discount-type`: Create a new discount type.
  - `PATCH /discount-type/:id`: Update an existing discount type by its ID.
  - `DELETE /discount-type`: Delete one or more discount types.

### Service Methods

The service layer offers the following methods for managing discount types:

- **Discount Type Service Methods**:
  - `list(paginationParams: PaginationDTO)`: Retrieve a paginated list of discount types, with optional search capabilities.
  - `get(id: number)`: Get the details of a specific discount type by its ID.
  - `create(data: CreateDTO)`: Create a new discount type with the provided data.
  - `update({ id, data }: { id: number; data: UpdateDTO })`: Update an existing discount type by its ID with new data.
  - `delete({ ids }: DeleteDTO)`: Delete one or more discount types based on their IDs.

### Folder Structure

```plaintext
├── discount-type.controller.ts     # Controller for managing discount types
├── discount-type.service.ts        # Service for handling discount type business logic
├── discount-type.enum.ts           # Enum to classify the discount type
├── discount-type.module.ts         # Module that binds together the controller and service
├── dto
│   ├── create.dto.ts               # DTO for creating discount types
│   ├── update.dto.ts               # DTO for updating discount types
```
