# Mail Sent

The **Mail Sent** submodule provides functionality to manage sent emails within the application. It allows creating, updating, listing, and deleting sent emails, offering a simple interface to handle email data. The module integrates pagination for listing emails and allows filtering by several fields such as subject, sender, and recipients.

### Features

- **List Sent Emails**: Retrieve a paginated list of sent emails.
- **Get Specific Email**: Retrieve detailed information about a specific sent email.
- **Create Sent Email**: Create a new record for a sent email.
- **Update Sent Email**: Update an existing sent email record.
- **Delete Sent Emails**: Delete one or more sent email records.
- **Search and Filter**: Search and filter emails by subject, sender, recipient, and other fields.

### Controller Endpoints

- `GET /mail-sent`: List sent emails with pagination and search capabilities.
- `GET /mail-sent/:id`: Retrieve details of a specific sent email.
- `POST /mail-sent`: Create a new sent email.
- `PATCH /mail-sent/:id`: Update an existing sent email.
- `DELETE /mail-sent`: Delete one or more sent emails.

### Service Methods

- `list(paginationParams: PaginationDTO)`: List sent emails with pagination and search functionality.
- `get(id: number)`: Retrieve a specific sent email by its ID.
- `create(data: CreateDTO)`: Create a new record for a sent email.
- `update({ id, data }: { id: number; data: UpdateDTO })`: Update an existing sent email record.
- `delete({ ids }: DeleteDTO)`: Delete one or more sent emails based on the provided IDs.

### Folder Structure

```plaintext
├── mail-sent.controller.ts     # Defines routes for managing sent emails
├── mail-sent.service.ts        # Contains business logic for handling sent emails
├── mail-sent.module.ts         # Mail sent module setup
├── dto
│   ├── create.dto.ts           # DTO for creating a sent email
│   ├── update.dto.ts           # DTO for updating a sent email
```

---

This module is essential for handling the sent email records, offering powerful features for managing email logs. It provides an organized way to store, search, and manipulate sent email data in the system.
