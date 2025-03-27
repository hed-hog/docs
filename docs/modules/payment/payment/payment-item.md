# Payment Item

The **Payment Item** submodule is used for managing individual items in a payment. It provides functionality to create, retrieve, update, and delete items within a payment record. It supports pagination and filtering of payment items.

### Features

- **Manage Payment Items**: Create, update, and delete payment items related to a specific payment.
- **List and Pagination**: Retrieve a paginated list of payment items.
- **Payment ID Association**: Each payment item is linked to a specific payment using the `paymentId` as a reference.
- **Efficient Update and Delete**: Update or delete multiple payment items at once based on their IDs.

### Controller Endpoints

The submodule provides the following RESTful endpoints for interacting with payment items:

- **Payment Item Endpoints**:
  - `POST /payment/:paymentId/payment-item`: Create a new payment item for a specific payment.
  - `GET /payment/:paymentId/payment-item`: List all payment items for a specific payment, with pagination support.
  - `GET /payment/:paymentId/payment-item/:id`: Retrieve a specific payment item by its ID.
  - `PATCH /payment/:paymentId/payment-item/:id`: Update a specific payment item.
  - `DELETE /payment/:paymentId/payment-item`: Delete one or more payment items for a specific payment.

### Service Methods

The service layer provides the following methods for managing payment items:

- **Payment Item Service Methods**:
  - `create(paymentId: number, data: CreateDTO)`: Create a new payment item associated with a specific payment.
  - `get(paymentId: number, id: number)`: Get the details of a specific payment item by its ID within a given payment.
  - `list(paginationParams: PaginationDTO, paymentId?: number)`: Retrieve a paginated list of payment items, optionally filtering by payment ID.
  - `update(paymentId: number, id: number, data: UpdateDTO)`: Update a specific payment item based on its ID within the given payment.
  - `delete(paymentId: number, { ids }: DeleteDTO)`: Delete one or more payment items associated with a specific payment.

### Folder Structure

```plaintext
├── payment-item.controller.ts      # Controller for managing payment items
├── payment-item.service.ts         # Service for handling payment item business logic
├── dto
│   ├── create.dto.ts               # DTO for creating payment items
│   ├── update.dto.ts               # DTO for updating payment items
```
