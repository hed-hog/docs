# User Module

The **Hedhog User** module in HedHog provides functionality to manage user data within an application. This module leverages the HedHog framework components, including pagination and [**Prisma**](https://www.prisma.io/) integration, to offer a robust user management system.

### Integrations

- **Pagination**: Utilizes `@hedhog/pagination` for managing paginated results of user queries.
- **Database Interaction**: Uses `@hedhog/prisma` to interface with the database for user data management.
- **Authentication**: Secured with Auth Module from `@hedhog/admin` to ensure that only authorized users can access or modify user data.

### Controller Endpoints

#### `GET /users`

- **Description**: Retrieve a paginated list of users.
- **Authentication**: Required (uses `AuthGuard`).
- **Pagination**: Supports pagination through query parameters.

#### `GET /users/:userId`

- **Description**: Retrieve a specific user by its ID.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - **userId** (number): The ID of the user to retrieve.

#### `POST /users`

- **Description**: Create a new user.
- **Authentication**: Required (uses `AuthGuard`).
- **Body**:
  - **email** (string): Email address of the user.
  - **name** (string): Name of the user.
  - **password** (string): Password of the user.

#### `PATCH /users/:userId`

- **Description**: Update an existing user.
- **Authentication**: Required (uses `AuthGuard`).
- **Parameters**:
  - **userId** (number): The ID of the user to update.
- **Body**:
  - **email** (string, optional): Updated email address of the user.
  - **name** (string, optional): Updated name of the user.
  - **password** (string, optional): Updated password of the user.

#### `DELETE /users`

- **Description**: Delete one or more users.
- **Authentication**: Required (uses `AuthGuard`).
- **Body**:
  - **ids** (number[]): Array of user IDs to delete.

### Service Methods

#### `getUsers(paginationParams: PaginationDTO)`

- **Description**: Retrieves a paginated list of users with optional search functionality.
- **Parameters**:
  - **paginationParams**: Includes pagination and search criteria.

#### `get(userId: number)`

- **Description**: Retrieves a specific user by its ID.
- **Parameters**:
  - **userId**: ID of the user to retrieve.

#### `hashPassword(password: string): Promise<string>`

- **Description**: Hashes a password using bcrypt.
- **Parameters**:
  - **password**: The password to be hashed.

#### `create(data: CreateDTO)`

- **Description**: Creates a new user.
- **Parameters**:
  - **data**: Includes email, name, and password.

#### `update(id: number, data: UpdateDTO)`

- **Description**: Updates an existing user.
- **Parameters**:
  - **id**: ID of the user to update.
  - **data**: Includes updated email, name, and password.

#### `delete(data: DeleteDTO)`

- **Description**: Deletes one or more users.
- **Parameters**:
  - **data**: Includes array of user IDs to delete.

### Folder Structure

```plaintext
├── constants/
│   └── user.constants.ts    # Constants related to user module
├── dto/
│   ├── create.dto.ts        # Data Transfer Object for creating a user
│   └── update.dto.ts        # Data Transfer Object for updating a user
├── user.module.ts           # Module for UserService
├── user.controller.ts       # Controller for user-related endpoints
└── user.service.ts          # Service handling business logic for users
```
