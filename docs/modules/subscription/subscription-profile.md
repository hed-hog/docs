# Subscription Profile Submodule

The **Subscription Profile** submodule provides functionalities for retrieving and managing the subscription details and associated tokens for users. It includes methods to get active subscriptions and generate subscription tokens for a user.

### Features

- **Subscription Management**: Retrieves active subscriptions for a user.
- **Token Generation**: Generates a signed JWT containing active subscription information.
- **Payment Details**: Provides information about the subscription payment and method.

### Controller Endpoints

The submodule provides the following RESTful endpoints for managing subscription profiles:

- `GET /subscription-profile/tokens` - Retrieve a JWT containing active subscription tokens for the user.
- `GET /subscription-profile/subscriptions` - Retrieve a list of active subscriptions for the user.

### Service Methods

The service layer provides the following methods for managing subscription profiles:

- `getSubscriptionsTokens(userId: number)`: Retrieves a signed JWT containing active subscriptions for the user.
- `getSubscriptions(userId: number)`: Retrieves a list of active subscriptions for the user, including details about the subscription plan and associated payment information.

### Folder Structure

```plaintext
├── subscription-profile.controller.ts  # Controller for handling subscription profile endpoints
├── subscription-profile.service.ts     # Service for managing subscription profile logic
├── subscription-profile.module.ts      # Module that binds together the controller and service
```
