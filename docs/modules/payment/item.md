# Item Submodule

The **Item** submodule provides functionality for managing items within your system. Items represent products or services with associated attributes such as name, price, and discount relationships. This submodule enables the creation, updating, deletion, and retrieval of items, offering a streamlined approach to managing them efficiently.

### Features

- **Manage Items**: Enables creation, modification, and deletion of items.
- **Pagination & Search**: Handle large datasets with pagination and search functionality.
- **Coupon & Discount Integration**: Supports relationships between items and coupons, as well as payment method discounts.
- **Efficient CRUD Operations**: Provides optimized methods to perform Create, Read, Update, and Delete operations.

### Controller Endpoints

The submodule provides the following RESTful endpoints for interacting with items:

- **Item Endpoints**:
  - `GET /item`: List all items with support for pagination and search.
  - `GET /item/:id`: Retrieve a specific item by its ID.
  - `POST /item`: Create a new item.
  - `PATCH /item/:id`: Update an existing item by its ID.
  - `DELETE /item`: Delete one or more items.

### Service Methods

The service layer offers the following methods for managing items:

- **Item Service Methods**:
  - `list(paginationParams: PaginationDTO)`: Retrieve a paginated list of items, with optional search capabilities.
  - `get(id: number)`: Get the details of a specific item by its ID.
  - `create(data: CreateDTO)`: Create a new item with the provided data.
  - `update({ id, data }: { id: number; data: UpdateDTO })`: Update an existing item by its ID with new data.
  - `delete({ ids }: DeleteDTO)`: Delete one or more items based on their IDs.

### Folder Structure

```plaintext
├── item.controller.ts          # Controller for managing items
├── item.service.ts             # Service for handling item business logic
├── item.module.ts              # Module that binds together the controller and service
├── dto
│   ├── create.dto.ts           # DTO for creating items
│   ├── update.dto.ts           # DTO for updating items
```
