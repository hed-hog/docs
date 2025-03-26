# Payment Notification Submodule

The **Payment Notification** submodule manages notifications associated with payments. It allows for creating, retrieving, updating, and deleting notifications related to specific payments. The submodule also supports pagination for listing notifications.

### Features

- **Manage Payment Notifications**: Create, update, and delete notifications for specific payments.
- **List Notifications**: Retrieve a paginated list of notifications related to a specific payment.
- **Payment ID Association**: Each notification is linked to a specific payment using the `paymentId` as a reference.
- **Efficient Notification Management**: Allows bulk deletion and updates for notifications.

### Controller Endpoints

The submodule provides the following RESTful endpoints for interacting with payment notifications:

- **Payment Notification Endpoints**:
  - `POST /payment/:paymentId/payment-notification`: Create a new payment notification for a specific payment.
  - `GET /payment/:paymentId/payment-notification`: List all notifications for a specific payment, with pagination support.
  - `GET /payment/:paymentId/payment-notification/:id`: Retrieve a specific notification for a payment by its ID.
  - `PATCH /payment/:paymentId/payment-notification/:id`: Update a specific payment notification.
  - `DELETE /payment/:paymentId/payment-notification`: Delete one or more notifications for a specific payment.

### Service Methods

The service layer provides the following methods for managing payment notifications:

- **Payment Notification Service Methods**:
  - `create(paymentId: number, data: CreateDTO)`: Create a new payment notification associated with a specific payment.
  - `get(paymentId: number, id: number)`: Get the details of a specific payment notification by its ID within the given payment.
  - `list(paginationParams: PaginationDTO, paymentId?: number)`: Retrieve a paginated list of payment notifications, optionally filtering by payment ID.
  - `update(paymentId: number, id: number, data: UpdateDTO)`: Update a specific payment notification based on its ID within the given payment.
  - `delete(paymentId: number, { ids }: DeleteDTO)`: Delete one or more payment notifications associated with a specific payment.

### Folder Structure

```plaintext
├── payment-notification.controller.ts      # Controller for managing payment notifications
├── payment-notification.service.ts         # Service for handling payment notification business logic
├── dto
│   ├── create.dto.ts                       # DTO for creating payment notifications
│   ├── update.dto.ts                       # DTO for updating payment notifications
```
