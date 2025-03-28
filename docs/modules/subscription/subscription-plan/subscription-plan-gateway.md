# Subscription Plan Gateway Submodule

The **Subscription Plan Gateway** submodule manages the integration of subscription plans with different payment gateways, allowing users to create, update, retrieve, and delete payment gateway configurations for specific subscription plans.

### Features

- **Gateway Management**: Associate subscription plans with payment gateways.
- **Flexible Filtering**: Retrieve payment gateway configurations by subscription plan.
- **Pagination Support**: Provides efficient pagination for retrieving lists of gateways.

### Controller Endpoints

The submodule provides the following RESTful endpoints for managing subscription plan gateways:

- `POST /subscription-plan/:planId/subscription-plan-gateway` - Create a new gateway configuration for a subscription plan.
- `GET /subscription-plan/:planId/subscription-plan-gateway` - Retrieve a paginated list of gateway configurations for a specific subscription plan.
- `GET /subscription-plan/:planId/subscription-plan-gateway/:id` - Retrieve details of a specific gateway configuration.
- `PATCH /subscription-plan/:planId/subscription-plan-gateway/:id` - Update an existing gateway configuration.
- `DELETE /subscription-plan/:planId/subscription-plan-gateway` - Delete one or more gateway configurations.

### Service Methods

The service layer provides the following methods for managing subscription plan gateways:

- `create(planId: number, data: CreateDTO)`: Creates a new gateway configuration for a subscription plan.
- `get(planId: number, id: number)`: Retrieves a specific gateway configuration.
- `list(paginationParams: PaginationDTO, planId?: number)`: Retrieves a paginated list of gateway configurations for a subscription plan.
- `update(planId: number, id: number, data: UpdateDTO)`: Updates an existing gateway configuration.
- `delete(planId: number, { ids }: DeleteDTO)`: Deletes one or more gateway configurations.

### Folder Structure

```plaintext
├── subscription-plan-gateway.controller.ts    # Controller for handling subscription plan gateway
├── subscription-plan-gateway.service.ts       # Service for managing subscription plan gateway
├── dto
│   ├── create.dto.ts                          # DTO for creating a subscription plan gateway
│   ├── update.dto.ts                          # DTO for updating a subscription plan gateway
```
