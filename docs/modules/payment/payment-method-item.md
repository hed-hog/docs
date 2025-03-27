# Payment Method Item

The **Payment Method Item** submodule manages the specific items associated with various payment methods. It allows for the creation, updating, deletion, and retrieval of payment method items, providing fine-grained control over the available options under each payment method.

### Features

- **Manage Payment Method Items**: Enables the creation, modification, and deletion of payment method items.
- **Pagination & Search**: Supports pagination and search functionality for efficient listing of payment method items.
- **Flexible Item Management**: Allows linking of payment items to specific methods with adjustable properties.
- **Efficient CRUD Operations**: Implements optimized methods to perform Create, Read, Update, and Delete actions.

### Controller Endpoints

The submodule provides the following RESTful endpoints for interacting with payment method items:

- **Payment Method Item Endpoints**:
  - `GET /payment-method-item`: List all payment method items with support for pagination and search.
  - `GET /payment-method-item/:id`: Retrieve a specific payment method item by its ID.
  - `POST /payment-method-item`: Create a new payment method item.
  - `PATCH /payment-method-item/:id`: Update an existing payment method item by its ID.
  - `DELETE /payment-method-item`: Delete one or more payment method items.

### Service Methods

The service layer offers the following methods for managing payment method items:

- **Payment Method Item Service Methods**:
  - `list(paginationParams: PaginationDTO)`: Retrieve a paginated list of payment method items, with optional search functionality.
  - `get(id: number)`: Get the details of a specific payment method item by its ID.
  - `create(data: CreateDTO)`: Create a new payment method item using the provided data.
  - `update({ id, data }: { id: number; data: UpdateDTO })`: Update an existing payment method item by its ID with new data.
  - `delete({ ids }: DeleteDTO)`: Delete one or more payment method items based on their IDs.

### Folder Structure

```plaintext
├── payment-method-item.controller.ts    # Controller for managing payment method items
├── payment-method-item.service.ts       # Service for handling payment method item business logic
├── payment-method-item.module.ts        # Module that binds together the controller and service
├── dto
│   ├── create.dto.ts                    # DTO for creating payment method items
│   ├── update.dto.ts                    # DTO for updating payment method items
```
