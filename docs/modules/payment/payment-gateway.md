# Payment Gateway Submodule

The **Payment Gateway** submodule manages different payment gateways available in the system. It enables the creation, updating, deletion, and retrieval of payment gateways, ensuring seamless integration with external payment providers.

### Features

- **Manage Payment Gateways**: Enables creation, modification, and deletion of payment gateways.
- **Pagination & Search**: Supports efficient listing of payment gateways with search capabilities.
- **Secure Transactions**: Provides structured management for payment processing integrations.
- **Efficient CRUD Operations**: Offers optimized methods to perform Create, Read, Update, and Delete operations.

### Controller Endpoints

The submodule provides the following RESTful endpoints for interacting with payment gateways:

- **Payment Gateway Endpoints**:
  - `GET /payment-gateway`: List all payment gateways with support for pagination and search.
  - `GET /payment-gateway/:id`: Retrieve a specific payment gateway by its ID.
  - `POST /payment-gateway`: Create a new payment gateway.
  - `PATCH /payment-gateway/:id`: Update an existing payment gateway by its ID.
  - `DELETE /payment-gateway`: Delete one or more payment gateways.

### Service Methods

The service layer offers the following methods for managing payment gateways:

- **Payment Gateway Service Methods**:
  - `list(paginationParams: PaginationDTO)`: Retrieve a paginated list of payment gateways, with optional search capabilities.
  - `get(id: number)`: Get the details of a specific payment gateway by its ID.
  - `create(data: CreateDTO)`: Create a new payment gateway with the provided data.
  - `update({ id, data }: { id: number; data: UpdateDTO })`: Update an existing payment gateway by its ID with new data.
  - `delete({ ids }: DeleteDTO)`: Delete one or more payment gateways based on their IDs.

### Folder Structure

```plaintext
├── payment-gateway.controller.ts    # Controller for managing payment gateways
├── payment-gateway.enum.ts          # Enum for classifying the main payment gateways
├── payment-gateway.service.ts       # Service for handling payment gateway business logic
├── payment-gateway.module.ts        # Module that binds together the controller and service
├── dto
│   ├── create.dto.ts                # DTO for creating payment gateways
│   ├── update.dto.ts                # DTO for updating payment gateways
```
