# 🦔 @hedhog/payment

The **@hedhog/payment** module is a comprehensive suite of tools designed to manage and interact with various aspects of payment processin- This module encompasses multiple submodules that provide functionality for handling payment checkout, payment items, methods, statuses, notifications, and more.

It is a highly extensible and scalable system built to handle complex payment flows and transactions in an organized manner, ensuring a smooth and efficient payment processing experience.

### Key Features

- **Extensibility**: Easily integrate with external payment providers and customize payment flows.
- **Flexible Payments**: Handle multiple payment methods, statuses, and transactions.
- **Real-Time Notifications**: Get notified instantly when important payment events occur.
- **Detailed Tracking**: Track individual payment items, methods, and statuses for complete transparency.

### Submodules

The **@hedhog/payment** module includes the following submodules:

- **Checkout**: Manages the checkout process for payments, including order handling, payment validation, and submissio- This submodule enables users to complete the payment process smoothly and securely.
- **Discount Type**: Handles different types of discounts that can be applied during the payment process, allowing for flexibility in how discounts are structured and applied.
- **Item**: Manages items that are associated with a payment, including the tracking of individual products or services being paid fo- This submodule allows for item-level breakdowns and adjustments.
- **Payment Card Brand**: Stores and manages payment card brands (e.g., Visa, MasterCard, etc.) associated with payment methods, providing a standardized way to track and handle card types.
- **Payment Gateway**: Integrates with payment gateways for processing transaction- This submodule ensures communication between the payment system and external payment providers, allowing for secure transactions.
- **Payment Method**: Provides functionality for different payment methods, enabling users to choose and use various types of payment options, such as credit cards, bank transfers, and digital wallets.
- **Payment Method Item**: Manages items that are associated with a specific payment metho- This allows for detailed tracking of items in the context of the chosen payment method.
- **Payment Status**: Tracks and updates the status of payments, providing real-time feedback on the payment status (e.g., pending, completed, failed) and allowing for more informed processing and handling of payments.
- **Payment Item**: Manages individual payment items that are part of a payment, allowing users to create, update, list, and delete payment items associated with a specific payment.
- **Payment Notification**: Handles the notifications related to payments, including success, failure, or status change- This submodule ensures that users are notified of important updates regarding their payment processes.
- **Payment Status**: Tracks the status of specific payment items or payments themselves, providing up-to-date status information for various parts of the payment process.

### Installation

To install the `@hedhog/payment` module, use the following command:

```bash
npm i @hedhog/payment
```

### Usage

Once installed, you can integrate the Payment module into your project to manage payment-related operations seamlessly.

```typescript
import { PaymentModule } from "@hedhog/payment";

@Module({
  imports: [PaymentModule],
})
export class AppModule {}
```

By importing the `PaymentModule`, you gain access to all the functionality provided by the module, including managing payment records, handling payment methods, and tracking payment statuses. This makes it easier to handle payment workflows and streamline payment-related operations in your application.

---

This module is ideal for developers looking to integrate and manage payments in their application- It provides the necessary tools and structure to handle payment processing effectively while offering flexibility for different business use cases.
