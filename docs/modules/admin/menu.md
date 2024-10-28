# Menu Module

**HedHog Menu** is a library for managing menus within the HedHog framework. It provides a set of RESTful endpoints for CRUD operations on menu items, as well as functionalities to handle pagination and ordering of menus.

### Features

- **CRUD Operations**: Create, Read, Update, and Delete menu items.
- **Pagination**: Paginate menu items for efficient data retrieval.
- **Ordering**: Update the order of menu items.

### MenuController

The `MenuController` exposes the following endpoints:

- **GET /menus**: Retrieve a list of menus with pagination.
- **GET /menus/:menuId**: Retrieve a specific menu by ID.
- **POST /menus**: Create a new menu item.
- **PATCH /menus/:menuId**: Update an existing menu item by ID.
- **DELETE /menus**: Delete menu items based on provided IDs.
- **PATCH /menus/order**: Update the order of menu items.

### MenuService

The `MenuService` class contains the business logic for handling menu operations, including querying the database and processing data.

- **getMenu(paginationParams: PaginationDTO)**: Retrieves a paginated list of menu items.
- **get(menuId: number)**: Retrieves a menu item by ID.
- **create(data: CreateDTO)**: Creates a new menu item.
- **update(id: number; data: UpdateDTO)**: Updates an existing menu item by ID.
- **delete(data: DeleteDTO)**: Deletes menu items based on provided IDs.
- **updateOrder(data: OrderDTO)**: Updates the order of menu items.

### Folder Structure

```plaintext
├── menu.controller.ts       # Handles HTTP requests related to menus
├── menu.service.ts          # Contains business logic for menu operations
├── menu.service.spec.ts     # Testing file for menu service
├── menu.module.ts           # Module definition for menu functionalities
├── dto/
│   ├── create.dto.ts          # Data Transfer Object for creating a menu
│   ├── update.dto.ts          # Data Transfer Object for updating a menu
└── order.dto.ts           # Data Transfer Object for updating menu order
```
