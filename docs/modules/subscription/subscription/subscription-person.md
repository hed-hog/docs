# Subscription Person

The **Subscription Person** submodule manages the association of people with specific subscriptions. It allows creating, updating, retrieving, and deleting people linked to subscriptions, including their roles.

### Features

- **Person-Subscription Association**: Links people to specific subscriptions with roles.
- **Pagination Support**: Provides efficient pagination for listing subscription persons.
- **CRUD Operations**: Create, read, update, and delete person-subscription associations.

### Controller Endpoints

The submodule provides the following RESTful endpoints for managing subscription person associations:

- `POST /subscription/:subscriptionId/subscription-person` - Create a new person-subscription association.
- `GET /subscription/:subscriptionId/subscription-person` - Retrieve a paginated list of persons associated with a subscription.
- `GET /subscription/:subscriptionId/subscription-person/:id` - Retrieve details of a specific person-subscription association.
- `PATCH /subscription/:subscriptionId/subscription-person/:id` - Update an existing person-subscription association.
- `DELETE /subscription/:subscriptionId/subscription-person` - Delete one or more person-subscription associations.

### Service Methods

The service layer provides the following methods for managing subscription persons:

- `create(subscriptionId: number, data: CreateDTO)`: Creates a new person-subscription association with a specified role.
- `get(subscriptionId: number, id: number)`: Retrieves details of a specific person-subscription association.
- `list(paginationParams: PaginationDTO, subscriptionId?: number)`: Retrieves a paginated list of persons associated with a specific subscription.
- `update(subscriptionId: number, id: number, data: UpdateDTO)`: Updates a person-subscription association's details (person ID and role).
- `delete(subscriptionId: number, { ids }: DeleteDTO)`: Deletes one or more person-subscription associations.

### Folder Structure

```plaintext
├── subscription-person.controller.ts   # Controller for handling subscription person endpoints
├── subscription-person.service.ts      # Service for managing subscription person logic
├── dto
│   ├── create.dto.ts                   # DTO for creating a subscription person
│   ├── update.dto.ts                   # DTO for updating a subscription person
```
