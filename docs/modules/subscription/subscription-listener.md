# Subscription Listener Submodule

The **Subscription Listener** submodule listens for payment-related subscription events and processes them accordingly. It ensures that subscription updates, cancellations, and renewals are handled efficiently.

### Features

- **Handles Payment Events**: Listens to payment events such as `paid`, `refunded`, and `canceled`.
- **Subscription Management**: Automatically updates subscription statuses based on payment events.
- **Email Notifications**: Sends emails to users about subscription status changes.
- **Logging & Monitoring**: Provides detailed logs for tracking subscription events and their outcomes.

### Controller Endpoints

The submodule provides the following RESTful endpoints for managing subscription-related payments:

- **Subscription Listener Endpoints**:
  - `GET /subscription-listener/show/:paymentId` - Retrieve subscriptions linked to a payment ID.
  - `GET /subscription-listener/paid/:paymentId` - Simulate the processing of a successful payment event.
  - `GET /subscription-listener/refunded/:paymentId` - Simulate the processing of a refunded payment event.
  - `GET /subscription-listener/canceled/:paymentId` - Simulate the processing of a canceled payment event.

### Service Methods

The service layer offers the following methods for handling subscription events:

- **Subscription Processing**:

  - `handlePaymentPaidEvent(paymentId: number)`: Processes successful payment events.
  - `handlePaymentRefoundedEvent(paymentId: number)`: Handles refund events and cancels subscriptions accordingly.
  - `handlePaymentCanceledEvent(paymentId: number)`: Processes canceled payments and terminates subscriptions.
  - `getSubscriptionsByPaymentId(paymentId: number)`: Retrieves all subscriptions linked to a given payment ID.

- **Subscription Management**:
  - `getSubscription(planId: number, personId: number)`: Retrieves or creates a subscription for a person.
  - `finishSubscriptions(paymentId: number)`: Marks subscriptions as ended for a given payment ID.
  - `markPaymentAsDelivered(paymentId: number)`: Updates the payment record to mark it as delivered.

### Folder Structure

```plaintext
├── subscription-listener.controller.ts    # Controller for handling subscription payment events
├── subscription-listener.service.ts       # Service for processing subscription payments
├── subscription-listener.module.ts        # Module that binds together the controller and service
```
