# Mail Var Submodule

The **Mail Var** submodule provides functionality to manage mail variables, such as email templates and dynamic content placeholders. This submodule allows the creation, updating, listing, and deletion of mail variables, supporting an efficient approach to handling dynamic content within email templates.

### Features

- **List Mail Variables**: Retrieve a paginated list of mail variables.
- **Get Specific Mail Variable**: Retrieve detailed information about a specific mail variable.
- **Create Mail Variable**: Create a new mail variable.
- **Update Mail Variable**: Update an existing mail variable.
- **Delete Mail Variables**: Delete one or more mail variables.
- **Search and Filter**: Search and filter variables by name.

### Controller Endpoints

- `GET /mail-var`: List mail variables with pagination and search capabilities.
- `GET /mail-var/:id`: Retrieve details of a specific mail variable.
- `POST /mail-var`: Create a new mail variable.
- `PATCH /mail-var/:id`: Update an existing mail variable.
- `DELETE /mail-var`: Delete one or more mail variables.

### Service Methods

- `list(paginationParams: PaginationDTO)`: List mail variables with pagination and search functionality.
- `get(id: number)`: Retrieve a specific mail variable by its ID.
- `create(data: CreateDTO)`: Create a new mail variable.
- `update({ id, data }: { id: number; data: UpdateDTO })`: Update an existing mail variable record.
- `delete({ ids }: DeleteDTO)`: Delete one or more mail variables based on the provided IDs.

### Folder Structure

```plaintext
├── mail-var.controller.ts     # Defines routes for managing mail variables
├── mail-var.service.ts        # Contains business logic for handling mail variables
├── mail-var.module.ts         # Mail variable module setup
├── dto
│   ├── create.dto.ts          # DTO for creating a mail variable
│   ├── update.dto.ts          # DTO for updating a mail variable
```

---

This module is designed to handle dynamic content in email templates, enabling users to create and manage variables that can be used to personalize email communication effectively. It is an essential tool for systems that rely on email templating and require a flexible way to manage dynamic content placeholders.
