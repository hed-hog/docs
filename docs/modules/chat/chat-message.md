# Chat Message Module

The **Chat Message** module provides functionality for managing chat messages in the system. It allows for the creation, retrieval, updating, and deletion of chat messages, along with paginated listing for easier management. This module is ideal for applications with messaging systems, such as customer support or real-time communication platforms.

### Features

- **List Messages**: List chat messages with pagination and search functionality.
- **Retrieve Message**: Retrieve a specific chat message by ID.
- **Create Messages**: Create new chat messages with content, type, chat, and person associations.
- **Update Messages**: Update existing chat messages to modify content or metadata.
- **Delete Messages**: Delete chat messages in bulk by selecting IDs.
- **Track Status**: Track message status such as "read" and "received."

### Controller Endpoints

- `GET /chat-message`: List all chat messages with pagination and optional search by ID or fields.
- `GET /chat-message/:id`: Retrieve a specific chat message by its ID.
- `POST /chat-message`: Create a new chat message with the provided content and metadata.
- `PATCH /chat-message/:id`: Update an existing chat message with new content or metadata.
- `DELETE /chat-message`: Delete one or more chat messages by their IDs.

### Service Methods

- `list(paginationParams: PaginationDTO)`: Retrieve a paginated list of chat messages, with optional search filters.
- `get(id: number)`: Retrieve a specific chat message by ID.
- `create(data: CreateDTO)`: Create a new chat message with the given data.
- `update(id: number, data: UpdateDTO)`: Update the specified chat message by ID with new data.
- `delete(data: DeleteDTO)`: Delete chat messages by IDs.

### Folder Structure

```plaintext
├── chat-message.controller.ts   # Defines routes for chat-message
├── chat-message.service.ts      # Contains business logic for chat-message
├── chat-message.module.ts       # Dashboard item module
├── dto
│   ├── create.dto.ts              # DTO for creating dashboard items
│   ├── update.dto.ts              # DTO for updating dashboard items
```
