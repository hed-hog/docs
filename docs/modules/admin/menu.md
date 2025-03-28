# Menu

**HedHog Menu** is a library for managing menus within the HedHog framework. It provides a set of RESTful endpoints for CRUD operations on menu items, as well as functionalities to handle pagination and ordering of menus.

### Features

- **CRUD Operations**: Create, Read, Update, and Delete menu items.
- **Pagination**: Paginate menu items for efficient data retrieval.
- **Ordering**: Update the order of menu items.

### MenuController

The `MenuController` exposes the following endpoints:

- **GET /menu**: Retrieve a list of menus with pagination.
- **GET /menu/:menuId**: Retrieve a specific menu by ID.
- **POST /menu**: Create a new menu item.
- **PATCH /menu/:menuId**: Update an existing menu item by ID.
- **DELETE /menu**: Delete menu items based on provided IDs.
- **PATCH /menu/order**: Update the order of menu items.
- **GET /menu/:menuId/role**: Retrieve roles associated with a specific menu by ID.
- **PATCH /menu/:menuId/role**: Update roles associated with a specific menu by ID.
- **GET /menu/:menuId/screen**: Retrieve screens associated with a specific menu by ID.
- **PATCH /menu/:menuId/screen**: Update screens associated with a specific menu by ID.
- **GET /menu/system**: Retrieve system menus.

### MenuService

The `MenuService` class contains the business logic for handling menu operations, including querying the database and processing data.

- **list(locale: string, paginationParams: PaginationDTO)**: Retrieves a paginated list of menu items.
- **get(menuId: number)**: Retrieves a menu item by ID.
- **create(data: CreateDTO)**: Creates a new menu item.
- **update(id: number; data: UpdateDTO)**: Updates an existing menu item by ID.
- **delete(data: DeleteDTO)**: Deletes menu items based on provided IDs.
- **updateOrder(data: OrderDTO)**: Updates the order of menu items.
- **updateScreens(menuId: number, data: UpdateIdsDTO)**: Updates the screens associated with a specific menu by ID.
- **updateRoles(menuId: number, data: UpdateIdsDTO)**: Updates the roles associated with a specific menu by ID.
- **listScreens(locale: string, menuId: number, paginationParams: PaginationDTO)**: Retrieves a paginated list of screens associated with a specific menu by ID.
- **listRoles(locale: string, menuId: number, paginationParams: PaginationDTO)**: Retrieves a paginated list of roles associated with a specific menu by ID.
- **getMenus(locale: string, userId: number, menuId = 0)**: Retrieves a hierarchical list of menus accessible by a specific user.
- **getSystemMenu(locale: string, userId: number)**: Retrieves the system menus accessible by a specific user.

### Folder Structure

```plaintext
├── menu.controller.ts       # Handles HTTP requests related to menus
├── menu.service.ts          # Contains business logic for menu operations
├── menu.service.spec.ts     # Testing file for menu service
├── menu.module.ts           # Module definition for menu functionalities
├── dto/
│   ├── create.dto.ts          # Data Transfer Object for creating a menu
│   ├── update.dto.ts          # Data Transfer Object for updating a menu
│   ├── order.dto.ts           # Data Transfer Object for updating menu order
```
