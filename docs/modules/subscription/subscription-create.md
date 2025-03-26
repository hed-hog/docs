# Subscription Create Submodule

The **Subscription Create Submodule** is responsible for handling the creation of new subscriptions. It allows users to create subscriptions with a defined plan, a limit on the number of people, and specified roles for each person in the subscription. This module integrates with Prisma for database interactions, ensuring smooth creation and validation of subscription data.

### Features

- **Create Subscription**: Create a new subscription with a plan, limit, and people.
- **Role Assignment**: Assign roles to people within the subscription.
- **Validation**: Ensures that the number of people does not exceed the defined limit.
- **Status Assignment**: Set the initial status of the subscription (e.g., active, pending).

### Controller Endpoints

- `POST /subscription-create`: Creates a new subscription with the provided data, including the plan, limit, and roles for each person.

### Service Methods

- `addSubscription(data: CreateDTO)`: Handles the creation of a new subscription, validates the data, and assigns roles to the people within the subscription.

### Folder Structure

```plaintext
├── subscription-create.controller.ts    # Defines routes for subscription creation
├── subscription-create.service.ts       # Contains business logic for creating subscriptions
├── subscription-create.module.ts        # Subscription create module setup
├── dto
│   └── create.dto.ts                    # DTO for creating subscriptions
```
