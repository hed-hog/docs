# Payment Status

The **Payment Status** submodule is designed to manage the various statuses associated with payments. It allows for the creation, updating, deletion, and retrieval of payment statuses, ensuring accurate tracking of payment state across different stages of processing.

### Features

- **Manage Payment Statuses**: Create, update, and delete payment statuses to reflect various stages of payment processing.
- **Locale Support**: Payment statuses are handled with locale-specific data for multi-language support.
- **Pagination & Search**: Features pagination and search to efficiently list and retrieve payment statuses.
- **Comprehensive CRUD Operations**: Provides robust methods for CRUD operations on payment statuses.

### Controller Endpoints

The submodule provides the following RESTful endpoints for interacting with payment statuses:

- **Payment Status Endpoints**:
  - `GET /payment-status`: List all payment statuses with support for pagination and search.
  - `GET /payment-status/:id`: Retrieve a specific payment status by its ID.
  - `POST /payment-status`: Create a new payment status.
  - `PATCH /payment-status/:id`: Update an existing payment status by its ID.
  - `DELETE /payment-status`: Delete one or more payment statuses.

### Service Methods

The service layer offers the following methods for managing payment statuses:

- **Payment Status Service Methods**:
  - `list(locale: string, paginationParams: PaginationDTO)`: Retrieve a paginated list of payment statuses, with locale-specific information.
  - `get(id: number)`: Get the details of a specific payment status by its ID, including locale support.
  - `create(data: CreateDTO)`: Create a new payment status with locale-specific data.
  - `update({ id, data }: { id: number; data: UpdateDTO })`: Update an existing payment status with new data.
  - `delete({ ids }: DeleteDTO)`: Delete one or more payment statuses based on their IDs.

### Folder Structure

```plaintext
├── payment-status.controller.ts         # Controller for managing payment statuses
├── payment-status.enum.ts               # Enum to classify the payment statuses
├── payment-status.service.ts            # Service for handling payment status business logic
├── payment-status.module.ts             # Module that binds together the controller and service
├── dto
│   ├── create.dto.ts                    # DTO for creating payment statuses
│   ├── update.dto.ts                    # DTO for updating payment statuses
```

---

This README will guide you in integrating and managing payment statuses efficiently. Let me know if you need further details or modifications!
