# 🛒 Checkout

The **Checkout** submodule enables the management of various payment-related functionalities, offering support for multiple payment gateways, including credit card and Pix transactions, as well as managing subscriptions, payment resets, and coupon usage. This submodule integrates with various providers like Mercado Pago and is designed to support both standard and subscription-based payment flows.

### Features

- **Payment Notifications**: Handles payment gateway notifications and updates.
- **Payment Methods**: Supports multiple payment methods like credit card and Pix, allowing users to make payments through various channels.
- **Payment Settings**: Retrieve and manage the payment settings for your application, including gateway configurations.
- **Payment Reset**: Allows for resetting payment-related configurations or states when necessary.
- **Coupon Management**: Apply and manage coupons during the checkout process.
- **Subscription Management**: Create and manage subscriptions for recurring billing.
- **Payment Details**: Retrieve detailed information about specific payments and manage their states.
- **Dynamic Payment Gateway Integration**: Integrates with different payment providers using a provider-based architecture.

### Controller Endpoints

The **Checkout** submodule provides several key endpoints to manage payments and related tasks:

- **POST /checkout/notification/:gatewayId**: Receives notifications from payment gateways (e.g., Mercado Pago) and processes them.
- **GET /checkout/payment-settings**: Fetches the current payment settings, including gateway configurations.
- **POST /checkout/payment-reset**: Resets payment configurations or states.
- **POST /checkout/credit-card**: Initiates a credit card payment.
- **POST /checkout/pix**: Initiates a Pix payment.
- **GET /checkout/payment/:paymentId**: Fetches the details of a specific payment by its ID.
- **POST /checkout/init**: Initializes a payment session with the provided items, coupon, and user information.
- **PUT /checkout/method/:paymentId**: Updates the payment method for an existing payment.
- **POST /checkout/coupon**: Applies a coupon code to the current checkout session.
- **POST /checkout/subscription**: Creates a new subscription for the customer.

### Service Methods

Here's the updated version with the function names, arguments, and descriptions all mixed together:

### Service Methods

- `onModuleInit()`: This method initializes the module. It is typically used to set up necessary configurations or resources when the module is loaded.
- `getProviderPayment(id: string): Promise<any>`: Fetches the payment information for a given provider.
- `init({ items, slug, userId, coupon }: { items: number[]; slug?: string; userId?: number; coupon?: string })`: Initializes the payment process with necessary details.
- `hasMethodDiscount(paymentId: number)`: Checks if there is a discount available for the specified payment method.
- `putMethod(paymentId: number, methodId: number)`: Assigns a specific payment method to the given payment ID.
- `checkApplyMethodDiscount(paymentId: number)`: Verifies whether a discount can be applied to the specified payment method for a given payment ID.
- `createPayment(items: number[], personId?: number)`: Creates a new payment for a set of items, optionally associated with a specific person.
- `getPaymentItems(items: number[]): Promise<any[]>`: Retrieves the details of the specified payment items.
- `updatePaymentItems(paymentId: number, items: number[]): Promise<any>`: Updates the items associated with a given payment ID.
- `getPaymentSettings()`: Fetches the payment settings that may include methods, currencies, or other configurations.
- `getProvider(): Promise<AbstractProvider>`: Gets the current payment provider's information.
- `getProviderData(providerName: string): Promise<any>`: Retrieves specific data for a given provider.
- `createPaymentPix({ email, identificationNumber, identificationType, name, paymentSlug, phone }: PixDTO): Promise<any>`: Creates a new Pix payment.
- `saveQRCode(paymentId: number, paymentPix: any)`: Saves the generated QR code for a Pix payment.
- `setPaymentValue(paymentId: number, name: string, value: string)`: Sets the value for a specific payment.
- `getFirstAndLastName(name: string): Promise<{ firstName: string, lastName: string }>`: Extracts the first and last name from a full name string.
- `createPaymentCreditCard({ token, paymentMethodId, paymentMethodType, issuerId, installments, identificationNumber, paymentSlug, identificationType, name, email, phone }: CreditCardDTO): Promise<any>`: Creates a new credit card payment.
- `paymentReset({ slug }: ResetDTO)`: Resets the payment status to `PENDING`.
- `saveCreditCard(paymentId: number, data: any)`: Saves credit card details for the payment, sends a notification email if the payment is successful and updates payment values with credit card information.
- `eventEmmitterPayment(statusId: number, paymentId: number)`: Emits payment status events based on the provided `statusId` and `paymentId`.
- `createSubscription(priceId: string, customerId: string)`: (To be implemented) Creates a subscription.
- `getNewSlug()`Generates a new unique payment slug.
- `getPersonId(userId?: number)`: Retrieves the person ID associated with a given user ID.
- `getPaymentBySlug(slug?: string, personId?: number)`: Retrieves payment details based on the slug. If the payment does not have a `person_id`, it associates the payment with the provided `personId`.
- `getPaymentDetails(paymentId: number)`: Retrieves detailed information for a payment by its ID.
- `removeCoupon(paymentId: number, couponId: number)`: Removes a coupon from a payment and resets the discount.
- `setCoupon(couponCode: string, paymentSlug: string)`: Sets a coupon for a payment, applying the discount if the coupon is valid.
- `getPaymentWithItems(slug: string)`: Retrieves payment details, including associated items.
- `getCouponWithItems(code: string)`: Retrieves a coupon by its code, including associated items.
- `getItemsFromPaymentAndCoupon(payment: any, coupon: any)`: Retrieves the items from both the payment and the coupon.
- `applyCouponDiscount(paymentId: number, coupon: any, paymentAmount: number)`: Applies the coupon discount to the payment based on the coupon type.
- `notification(gatewayId: number, data: any)`: Handles notifications from payment gateways and updates payment statuses accordingly.
- `hasAccount(paymentId: number)`: Checks if a payment is associated with an account, returning whether the account exists and its code if applicable.

### Folder Structure

```
├── checkout.controller.ts        # Handles the HTTP requests and routes for the checkout functionality
└── checkout.module.ts            # Main module to integrate everything together
└── checkout.service.ts           # Business logic for managing payments, subscriptions, and related processes
├── provider/
│   ├── abstract.provider.ts        # Abstract base class for payment providers
│   ├── mercado-pago.provider.ts    # Integration with Mercado Pago payment gateway
│   ├── provider.enum.ts           # Enum for managing different payment providers
│   ├── provider.factory.ts        # Factory to initialize and manage different payment providers
├── dto/
│   ├── credit-card.dto.ts          # Data Transfer Object for credit card payment
│   ├── init.dto.ts                # DTO for initializing payment with items and coupons
│   ├── pix.dto.ts                 # DTO for Pix payment method
│   ├── put-method.dto.ts          # DTO for selecting a payment method
│   ├── set-coupon.dto.ts          # DTO for applying a coupon code
│   └── reset.dto.ts               # DTO for resetting payment configurations
```
