# Payment Submodule

The **Payment** submodule is designed to handle payment records, allowing for the creation, update, deletion, and retrieval of payment details. It provides features like searching, filtering by status, and integration with various payment gateways and methods.

### Features

- **Manage Payments**: Create, update, and delete payment records.
- **Search & Pagination**: Payments can be searched by various fields and paginated for easy retrieval.
- **Payment Status Filtering**: Payments can be filtered by their status, such as active (paid) or all payments.
- **Integration with Payment Methods and Gateways**: Payments are linked with payment methods, gateways, status, and other relevant details.
- **Locale & Detailed Payment Info**: Includes detailed payment information such as person, coupon, method, card brand, and more.

### Controller Endpoints

The submodule provides the following RESTful endpoints for interacting with payments:

- **Payment Endpoints**:
  - `GET /payment`: List all payments with pagination and search.
  - `GET /payment/active`: List only active (paid) payments.
  - `GET /payment/:id`: Retrieve a specific payment by its ID.
  - `POST /payment`: Create a new payment record.
  - `PATCH /payment/:id`: Update an existing payment record by its ID.
  - `DELETE /payment`: Delete one or more payment records.

### Service Methods

The service layer provides the following methods for managing payments:

- **Payment Service Methods**:
  - `list(paginationParams: PaginationDTO, isPaid: boolean)`: Retrieve a paginated list of payments with optional filtering for paid status.
  - `get(id: number)`: Get the details of a specific payment by its ID.
  - `create(data: CreateDTO)`: Create a new payment record.
  - `update({ id, data }: { id: number; data: UpdateDTO })`: Update an existing payment record by ID.
  - `delete({ ids }: DeleteDTO)`: Delete one or more payment records based on their IDs.

### Folder Structure

```plaintext
├── payment.controller.ts         # Controller for managing payments
├── payment.service.ts            # Service for handling payment business logic
├── payment.module.ts             # Module that binds together the controller and service
├── dto
│   ├── create.dto.ts             # DTO for creating payments
│   ├── update.dto.ts             # DTO for updating payments
```
