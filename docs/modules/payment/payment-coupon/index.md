# Payment Coupon Submodule

The **Payment Coupon** submodule provides functionality for managing discount coupons within the system. It allows for creating, updating, deleting, and retrieving coupons, integrating them with products and discount types to facilitate promotions and special offers.

### Features

- **Manage Coupons**: Enables creation, modification, and deletion of payment coupons.
- **Pagination & Search**: Supports pagination and search functionality for better data handling.
- **Discount Type Integration**: Associates coupons with discount types for flexible pricing strategies.
- **Product Relationship**: Links coupons to specific products, ensuring targeted promotions.
- **Efficient CRUD Operations**: Provides optimized methods to perform Create, Read, Update, and Delete operations.

### Controller Endpoints

The submodule provides the following RESTful endpoints for interacting with payment coupons:

- **Payment Coupon Endpoints**:
  - `GET /payment-coupon`: List all payment coupons with support for pagination and search.
  - `GET /payment-coupon/:id`: Retrieve a specific payment coupon by its ID.
  - `POST /payment-coupon`: Create a new payment coupon.
  - `PATCH /payment-coupon/:id`: Update an existing payment coupon by its ID.
  - `DELETE /payment-coupon`: Delete one or more payment coupons.

### Service Methods

The service layer offers the following methods for managing payment coupons:

- **Payment Coupon Service Methods**:
  - `list(paginationParams: PaginationDTO)`: Retrieve a paginated list of coupons, with optional search capabilities.
  - `get(id: number)`: Get the details of a specific payment coupon by its ID.
  - `create(data: CreateDTO)`: Create a new payment coupon with the provided data.
  - `update({ id, data }: { id: number; data: UpdateDTO })`: Update an existing payment coupon by its ID with new data.
  - `delete({ ids }: DeleteDTO)`: Delete one or more payment coupons based on their IDs.

### Folder Structure

```plaintext
├── payment-coupon.controller.ts    # Controller for managing payment coupons
├── payment-coupon.service.ts       # Service for handling payment coupon business logic
├── payment-coupon.module.ts        # Module that binds together the controller and service
├── dto
│   ├── create.dto.ts               # DTO for creating payment coupons
│   ├── update.dto.ts               # DTO for updating payment coupons
```
