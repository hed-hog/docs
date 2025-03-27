# Payment Card Brand

The **Payment Card Brand** submodule provides functionality for managing card brands within the payment system. It allows the creation, updating, deletion, and retrieval of different card brands, ensuring a structured way to handle supported payment card providers.

### Features

- **Manage Card Brands**: Allows the creation, modification, and deletion of payment card brands.
- **Pagination & Search**: Efficient handling of large datasets with pagination and search functionality.
- **Flexible Data Structure**: Each card brand has attributes like `name` and `slug` for easy identification.
- **Efficient CRUD Operations**: Provides efficient methods to perform CRUD operations (Create, Read, Update, Delete) on card brands.

### Controller Endpoints

The submodule provides the following RESTful endpoints for interacting with payment card brands:

- **Payment Card Brand Endpoints**:
  - `GET /payment-card-brand`: List all payment card brands with support for pagination and search.
  - `GET /payment-card-brand/:id`: Retrieve a specific card brand by its ID.
  - `POST /payment-card-brand`: Create a new card brand.
  - `PATCH /payment-card-brand/:id`: Update an existing card brand by its ID.
  - `DELETE /payment-card-brand`: Delete one or more card brands.

### Service Methods

The service layer offers the following methods for managing payment card brands:

- **Payment Card Brand Service Methods**:
  - `list(paginationParams: PaginationDTO)`: Retrieve a paginated list of payment card brands, with optional search capabilities.
  - `get(id: number)`: Get the details of a specific payment card brand by its ID.
  - `create(data: CreateDTO)`: Create a new payment card brand with provided data.
  - `update({ id, data }: { id: number; data: UpdateDTO })`: Update an existing payment card brand by its ID with new data.
  - `delete({ ids }: DeleteDTO)`: Delete one or more payment card brands based on their IDs.

### Folder Structure

```plaintext
├── payment-card-brand.controller.ts   # Controller for managing payment card brands
├── payment-card-brand.enum.ts         # Enum to classify the main card brands
├── payment-card-brand.service.ts      # Service for handling payment card brand business logic
├── payment-card-brand.module.ts       # Module that binds together the controller and service
├── dto
│   ├── create.dto.ts                  # DTO for creating payment card brands
│   ├── update.dto.ts                  # DTO for updating payment card brands
```
