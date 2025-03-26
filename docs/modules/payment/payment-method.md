# Payment Method Submodule

The **Payment Method** submodule manages various payment methods available in the system. It allows for the creation, updating, deletion, and retrieval of payment methods, facilitating the integration of different payment options.

### Features

- **Manage Payment Methods**: Enables creation, modification, and deletion of payment methods.
- **Pagination & Search**: Supports listing payment methods with search functionality for easy management.
- **Flexible Payment Integration**: Provides a framework to integrate various payment gateways and options.
- **Efficient CRUD Operations**: Implements optimized methods for Create, Read, Update, and Delete actions.

### Controller Endpoints

The submodule provides the following RESTful endpoints for interacting with payment methods:

- **Payment Method Endpoints**:
  - `GET /payment-method`: List all payment methods with support for pagination and search.
  - `GET /payment-method/:id`: Retrieve a specific payment method by its ID.
  - `POST /payment-method`: Create a new payment method.
  - `PATCH /payment-method/:id`: Update an existing payment method by its ID.
  - `DELETE /payment-method`: Delete one or more payment methods.

### Service Methods

The service layer offers the following methods for managing payment methods:

- **Payment Method Service Methods**:
  - `list(paginationParams: PaginationDTO)`: Retrieve a paginated list of payment methods, with optional search functionality.
  - `get(id: number)`: Get the details of a specific payment method by its ID.
  - `create(data: CreateDTO)`: Create a new payment method using the provided data.
  - `update({ id, data }: { id: number; data: UpdateDTO })`: Update an existing payment method by its ID with new data.
  - `delete({ ids }: DeleteDTO)`: Delete one or more payment methods based on their IDs.

### Folder Structure

```plaintext
├── payment-method.controller.ts    # Controller for managing payment methods
├── payment-method.enum.ts          # Enum for classifying the main payment methods
├── payment-method.service.ts       # Service for handling payment method business logic
├── payment-method.module.ts        # Module that binds together the controller and service
├── dto
│   ├── create.dto.ts                # DTO for creating payment methods
│   ├── update.dto.ts                # DTO for updating payment methods
```
