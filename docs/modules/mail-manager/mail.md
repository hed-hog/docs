# Mail Submodule

The **Mail Submodule** is responsible for managing email records within the system. It allows the creation, updating, listing, and deletion of mail items. This module integrates with locale management to ensure that emails are handled with language-specific data, making it essential for applications with internationalization support.

### Features

- **List Mails**: Retrieve a paginated list of mails with locale-specific content.
- **Get Specific Mail**: Retrieve detailed information about a specific mail entry.
- **Create Mail**: Create a new mail record.
- **Update Mail**: Update an existing mail record.
- **Delete Mails**: Delete one or more mail records.

### Controller Endpoints

- `GET /mail`: List mails with pagination and locale support.
- `GET /mail/:id`: Retrieve details of a specific mail entry.
- `POST /mail`: Create a new mail record.
- `PATCH /mail/:id`: Update an existing mail record.
- `DELETE /mail`: Delete one or more mail records.

### Service Methods

- `list(locale: string, paginationParams: PaginationDTO)`: List mail records, considering the locale for proper content.
- `get(id: number)`: Retrieve a specific mail record by its ID.
- `create(data: CreateDTO)`: Create a new mail record.
- `update({ id, data }: { id: number; data: UpdateDTO })`: Update an existing mail record.
- `delete({ ids }: DeleteDTO)`: Delete one or more mail records based on the provided IDs.

### Folder Structure

```plaintext
├── mail.controller.ts         # Controller that defines routes for managing mails
├── mail.service.ts            # Service that contains the logic for handling mail records
├── mail.module.ts             # Module setup for the mail submodule
├── dto
│   ├── create.dto.ts          # DTO for creating a mail record
│   ├── update.dto.ts          # DTO for updating a mail record
```

---

This module is designed for handling email-related records, ensuring that emails can be managed and localized as per different languages and regions. It's an essential part of an email management system for platforms that cater to a global audience, supporting seamless integration with internationalization features.
