# Subscription Submodule

The **Subscription** submodule manages the creation, updating, retrieval, and deletion of subscriptions. It handles subscription-specific data, including their status, associated plans, limits, and relations to persons and payments.

### Features

- **Subscription Management**: Manage subscription lifecycle, including active and inactive subscriptions.
- **Pagination Support**: Efficient pagination for listing subscriptions.
- **CRUD Operations**: Create, update, retrieve, and delete subscription records.

### Controller Endpoints

The module provides the following RESTful endpoints for managing subscriptions:

- `GET /subscription` - Retrieve a paginated list of all subscriptions.
- `GET /subscription/active` - Retrieve a list of active subscriptions.
- `GET /subscription/:id` - Retrieve a specific subscription by its ID.
- `POST /subscription` - Create a new subscription.
- `PATCH /subscription/:id` - Update an existing subscription.
- `DELETE /subscription` - Delete one or more subscriptions.

### Service Methods

The service layer provides the following methods for managing subscriptions:

- `list(paginationParams: PaginationDTO, isActive: boolean)`: Retrieves a paginated list of subscriptions, filtered by active status.
- `get(id: number)`: Retrieves a specific subscription by its ID.
- `create(data: CreateDTO)`: Creates a new subscription.
- `update({ id, data }: { id: number; data: UpdateDTO })`: Updates an existing subscription.
- `delete({ ids }: DeleteDTO)`: Deletes one or more subscriptions.

### Folder Structure

```plaintext
├── subscription.controller.ts         # Controller for handling subscription endpoints
├── subscription.service.ts            # Service for managing subscription logic
├── subscription.module.ts             # Module that binds together the controller and service
├── dto
│   ├── create.dto.ts                  # DTO for creating a subscription
│   ├── update.dto.ts                  # DTO for updating a subscription
```
