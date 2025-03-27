# Payment Value

The **Payment Value** submodule manages the values associated with payments, allowing for creating, retrieving, updating, and deleting payment values. It provides a simple interface to associate specific values with payments and supports pagination for listing these values.

### Features

- **Manage Payment Values**: Create, update, and delete values associated with a specific payment.
- **List Payment Values**: Retrieve a paginated list of values for a specific payment.
- **Payment ID Association**: Each payment value is linked to a specific payment using the `paymentId` as a reference.
- **Efficient Value Management**: Allows bulk deletion and updates for payment values.

### Controller Endpoints

The submodule provides the following RESTful endpoints for interacting with payment values:

- **Payment Value Endpoints**:
  - `POST /payment/:paymentId/payment-value`: Create a new payment value for a specific payment.
  - `GET /payment/:paymentId/payment-value`: List all values for a specific payment, with pagination support.
  - `GET /payment/:paymentId/payment-value/:id`: Retrieve a specific payment value for a payment by its ID.
  - `PATCH /payment/:paymentId/payment-value/:id`: Update a specific payment value.
  - `DELETE /payment/:paymentId/payment-value`: Delete one or more payment values for a specific payment.

### Service Methods

The service layer provides the following methods for managing payment values:

- **Payment Value Service Methods**:
  - `create(paymentId: number, data: CreateDTO)`: Create a new payment value associated with a specific payment.
  - `get(paymentId: number, id: number)`: Get the details of a specific payment value by its ID within the given payment.
  - `list(paginationParams: PaginationDTO, paymentId?: number)`: Retrieve a paginated list of payment values, optionally filtering by payment ID.
  - `update(paymentId: number, id: number, data: UpdateDTO)`: Update a specific payment value based on its ID within the given payment.
  - `delete(paymentId: number, { ids }: DeleteDTO)`: Delete one or more payment values associated with a specific payment.

### Folder Structure

```plaintext
├── payment-value.controller.ts        # Controller for managing payment values
├── payment-value.service.ts           # Service for handling payment value business logic
├── dto
│   ├── create.dto.ts                 # DTO for creating payment values
│   ├── update.dto.ts                 # DTO for updating payment values
```
