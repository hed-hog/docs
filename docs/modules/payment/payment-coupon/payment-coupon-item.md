# Payment Coupon Item Submodule

The **Payment Coupon Item** submodule manages the association between coupons and specific items. It enables the creation, updating, deletion, and retrieval of coupon items, allowing for fine-grained discount application on selected products.

### Features

- **Manage Coupon Items**: Enables creation, modification, and deletion of payment coupon items.
- **Pagination & Search**: Supports pagination and search functionality for efficient data handling.
- **Coupon Association**: Links coupon items to specific payment coupons.
- **Efficient CRUD Operations**: Provides optimized methods to perform Create, Read, Update, and Delete operations.

### Controller Endpoints

The submodule provides the following RESTful endpoints for interacting with payment coupon items:

- **Payment Coupon Item Endpoints**:
  - `POST /payment-coupon/:couponId/payment-coupon-item`: Create a new payment coupon item for a specific coupon.
  - `GET /payment-coupon/:couponId/payment-coupon-item`: List all items linked to a specific coupon, with support for pagination.
  - `GET /payment-coupon/:couponId/payment-coupon-item/:id`: Retrieve a specific payment coupon item by its ID.
  - `PATCH /payment-coupon/:couponId/payment-coupon-item/:id`: Update an existing payment coupon item by its ID.
  - `DELETE /payment-coupon/:couponId/payment-coupon-item`: Delete one or more payment coupon items.

### Service Methods

The service layer offers the following methods for managing payment coupon items:

- **Payment Coupon Item Service Methods**:
  - `create(couponId: number, data: CreateDTO)`: Create a new payment coupon item associated with a specific coupon.
  - `list(paginationParams: PaginationDTO, couponId?: number)`: Retrieve a paginated list of coupon items linked to a specific coupon.
  - `get(couponId: number, id: number)`: Get the details of a specific payment coupon item by its ID.
  - `update(couponId: number, id: number, data: UpdateDTO)`: Update an existing payment coupon item by its ID with new data.
  - `delete(couponId: number, { ids }: DeleteDTO)`: Delete one or more payment coupon items based on their IDs.

### Folder Structure

```plaintext
├── payment-coupon-item.controller.ts    # Controller for managing payment coupon items
├── payment-coupon-item.module.ts        # Module that binds together the controller and service
├── dto
│   ├── create.dto.ts                    # DTO for creating payment coupon items
│   ├── update.dto.ts                    # DTO for updating payment coupon items
```
