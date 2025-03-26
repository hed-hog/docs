# 🦔 @hedhog/subscription

The **@hedhog/subscription** module is a comprehensive package designed to manage all aspects of subscription-based services within your application. It encapsulates the functionality of **Subscription Cancel**, **Subscription Create**, **Subscription Listener**, **Subscription Plan**, **Subscription Plan Gateway**, **Subscription Profile**, **Subscription Payment**, **Subscription Person**, and **Subscription Value** modules into a unified interface. This modular approach enables seamless management of subscription lifecycles, payment processing, user relationships, and subscription values.

By combining these modules, `@hedhog/subscription` provides a powerful framework for managing subscriptions in any service that requires recurring billing, user management, and plan customization. Whether you're building a SaaS platform, a content service, or any subscription-based system, this module offers all the tools you need to manage your subscription flows efficiently.

### Features

- **Subscription Management**: Create, update, and delete subscriptions for your users.
- **Subscription Cancellation**: Handle subscription cancellations with ease, including status tracking.
- **Payment Integration**: Manage subscription payments, including payment methods and amounts.
- **User and Person Associations**: Manage the relationship between users (persons) and their subscriptions.
- **Subscription Plan Management**: Handle subscription plans, including creating and associating them with subscriptions.
- **Gateway Integration**: Support for integrating subscription gateways for payment processing.
- **Profile Management**: Keep track of subscription-specific user profile data.
- **Subscription Values**: Manage subscription metadata such as pricing, benefits, and limits.
- **Event Listening**: Listen to subscription-related events to trigger business logic or notifications.

### Modules Included

- **Subscription Cancel Submodule**: Manages the cancellation process of subscriptions, including status updates and cleanup.
- **Subscription Create Submodule**: Handles the creation of new subscriptions with plans, limits, and status settings.
- **Subscription Listener Submodule**: Listens to events related to subscriptions, such as updates, payments, and cancellations.
- **Subscription Plan Submodule**: Manages subscription plans, including the creation and modification of plans available for subscriptions.
- **Subscription Plan Gateway Submodule**: Facilitates integration with payment gateways to manage subscription plan payments and processing.
- **Subscription Profile Submodule**: Manages the profile data of users related to their subscriptions, ensuring data consistency and personalization.
- **Subscription Payment Submodule**: Handles subscription payments, including tracking payment methods, amounts, and statuses.
- **Subscription Person Submodule**: Manages the relationship between subscriptions and users (persons) who are subscribed.
- **Subscription Value Submodule**: Manages metadata and values associated with subscriptions, including pricing, features, and limits.

### Installation

To install the `@hedhog/subscription` module, use the following command:

```bash
npm i @hedhog/subscription
```

This will install the core subscription management system along with all included modules. You can then integrate and configure them as per your application's needs.
