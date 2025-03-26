# Subscription Payment Submodule

The **Subscription Payment** submodule manages subscription payment details for a given subscription. It allows creating, updating, retrieving, and deleting payments associated with a subscription.

### Features

- **Payment Management**: Allows management of payments related to subscriptions.
- **Pagination Support**: Provides efficient pagination for listing subscription payments.
- **CRUD Operations**: Create, read, update, and delete subscription payments.

### Controller Endpoints

The submodule provides the following RESTful endpoints for managing subscription payments:

- `POST /subscription/:subscriptionId/subscription-payment` - Create a new payment for a subscription.
- `GET /subscription/:subscriptionId/subscription-payment` - Retrieve a paginated list of payments for a subscription.
- `GET /subscription/:subscriptionId/subscription-payment/:id` - Retrieve details of a specific payment for a subscription.
- `PATCH /subscription/:subscriptionId/subscription-payment/:id` - Update an existing payment for a subscription.
- `DELETE /subscription/:subscriptionId/subscription-payment` - Delete one or more payments for a subscription.

### Service Methods

The service layer provides the following methods for managing subscription payments:

- `create(subscriptionId: number, data: CreateDTO)`: Creates a new payment for a given subscription.
- `get(subscriptionId: number, id: number)`: Retrieves details of a specific payment for a given subscription.
- `list(paginationParams: PaginationDTO, subscriptionId?: number)`: Retrieves a paginated list of payments for a given subscription.
- `update(subscriptionId: number, id: number, data: UpdateDTO)`: Updates an existing payment for a given subscription.
- `delete(subscriptionId: number, { ids }: DeleteDTO)`: Deletes one or more payments for a given subscription.

### Folder Structure

```plaintext
├── subscription-payment.controller.ts  # Controller for handling subscription payment endpoints
├── subscription-payment.service.ts     # Service for managing subscription payment logic
├── dto
│   ├── create.dto.ts                   # DTO for creating a subscription payment
│   ├── update.dto.ts                   # DTO for updating a subscription payment
```
