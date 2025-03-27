# Subscription Cancel

The **Subscription Cancel** submodule is designed to manage the cancellation of subscriptions, allowing users to specify reasons for cancellation, add comments, and track the status of subscription cancellations. This module integrates with a Prisma database for persistence and uses localization and pagination services to handle data retrieval efficiently.

### Features

- **List Cancellation Reasons**: Retrieve a list of available reasons for subscription cancellations with localization support.
- **Add Subscription Cancellation**: Create a new cancellation record, associating the subscription with specified reasons and an optional comment.
- **Update Subscription Status**: Change the subscription status to "canceled" once the cancellation is processed.
- **Localization Support**: Fetch cancellation reasons based on the specified locale.
- **Pagination**: Supports pagination for listing cancellation reasons.

### Controller Endpoints

- `GET /subscription-cancel/reasons`: Retrieves a list of reasons for subscription cancellations, supporting pagination and localization.
- `POST /subscription-cancel`: Adds a new subscription cancellation with specified reasons, person, and comments.

### Service Methods

- `listReasons(locale: string, paginationParams: PaginationDTO)`: Lists cancellation reasons in the specified locale, with pagination support.
- `addSubscriptionCancel(subscriptionId: number, reasonIds: number[], personId: number, comment: string)`: Creates a new cancellation record, associates reasons, and updates the subscription status to "canceled".

### Folder Structure

```plaintext
├── subscription-cancel.controller.ts      # Defines routes for subscription cancellation
├── subscription-cancel.service.ts         # Contains business logic for subscription cancellation
├── subscription-cancel.module.ts          # Subscription cancel module setup
├── dto
    └── add-subscription-cancel.dto.ts     # DTO for adding subscription cancellation data
```
