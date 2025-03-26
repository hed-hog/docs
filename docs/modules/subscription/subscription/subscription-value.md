# Subscription Value Submodule

The **Subscription Value** submodule manages the values associated with a subscription, such as subscription-related parameters or pricing details. It allows the creation, updating, retrieval, and deletion of subscription values.

### Features

- **Value Management**: Manages the various values associated with subscriptions.
- **Pagination Support**: Provides efficient pagination for listing subscription values.
- **CRUD Operations**: Create, read, update, and delete subscription values.

### Controller Endpoints

The submodule provides the following RESTful endpoints for managing subscription values:

- `POST /subscription/:subscriptionId/subscription-value` - Create a new subscription value.
- `GET /subscription/:subscriptionId/subscription-value` - Retrieve a paginated list of values associated with a subscription.
- `GET /subscription/:subscriptionId/subscription-value/:id` - Retrieve details of a specific subscription value.
- `PATCH /subscription/:subscriptionId/subscription-value/:id` - Update an existing subscription value.
- `DELETE /subscription/:subscriptionId/subscription-value` - Delete one or more subscription values.

### Service Methods

The service layer provides the following methods for managing subscription values:

- `create(subscriptionId: number, data: CreateDTO)`: Creates a new subscription value.
- `get(subscriptionId: number, id: number)`: Retrieves details of a specific subscription value.
- `list(paginationParams: PaginationDTO, subscriptionId?: number)`: Retrieves a paginated list of values associated with a specific subscription.
- `update(subscriptionId: number, id: number, data: UpdateDTO)`: Updates a subscription value's details.
- `delete(subscriptionId: number, { ids }: DeleteDTO)`: Deletes one or more subscription values.

### Folder Structure

```plaintext
├── subscription-value.controller.ts   # Controller for handling subscription value endpoints
├── subscription-value.service.ts      # Service for managing subscription value logic
├── dto
│   ├── create.dto.ts                  # DTO for creating a subscription value
│   ├── update.dto.ts                  # DTO for updating a subscription value
```
