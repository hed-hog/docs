# Subscription Plan Submodule

The **Subscription Plan** submodule manages subscription plans, allowing users to create, update, retrieve, and delete plans.

### Features

- **Plan Management**: Create, update, retrieve, and delete subscription plans.
- **Localization Support**: Handles localized data for subscription plans.
- **Pagination Support**: Provides efficient pagination for retrieving lists of plans.

### Controller Endpoints

The submodule provides the following RESTful endpoints for managing subscription plans:

- `GET /subscription-plan` - Retrieve a paginated list of subscription plans.
- `GET /subscription-plan/:id` - Retrieve details of a specific subscription plan.
- `POST /subscription-plan` - Create a new subscription plan.
- `PATCH /subscription-plan/:id` - Update an existing subscription plan.
- `DELETE /subscription-plan` - Delete one or more subscription plans.

### Service Methods

The service layer offers the following methods for managing subscription plans:

- `list(locale: string, paginationParams: PaginationDTO)`: Retrieves a paginated list of subscription plans.
- `get(id: number)`: Retrieves a specific subscription plan.
- `create(data: CreateDTO)`: Creates a new subscription plan.
- `update({ id, data }: { id: number; data: UpdateDTO })`: Updates an existing subscription plan.
- `delete({ ids }: DeleteDTO)`: Deletes one or more subscription plans.

### Folder Structure

```plaintext
├── subscription-plan.controller.ts    # Controller for handling subscription plan endpoints
├── subscription-plan.service.ts       # Service for managing subscription plans
├── subscription-plan.module.ts        # Module that binds together the controller and service
├── dto
│   ├── create.dto.ts                  # DTO for creating a subscription plan
│   ├── update.dto.ts                  # DTO for updating a subscription plan
```
