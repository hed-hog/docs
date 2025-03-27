# Chat Room

The **Chat Room** submodule manages the creation, modification, and deletion of chat rooms. It also allows for retrieving information about existing chat rooms and supports pagination for listing chat rooms.

### Features

- **List chat rooms** with pagination and optional search functionality.
- **Retrieve a specific chat room** by its ID.
- **Create new chat rooms** with the provided data.
- **Update existing chat rooms** with new data.
- **Delete chat rooms** by their IDs.

### Controller Endpoints

- `GET /chat-room`: List all chat rooms with pagination and optional search by ID or fields.
- `GET /chat-room/:id`: Retrieve a specific chat room by its ID.
- `POST /chat-room`: Create a new chat room with the provided data.
- `PATCH /chat-room/:id`: Update an existing chat room's details with the provided data.
- `DELETE /chat-room`: Delete one or more chat rooms by their IDs.

### Service Methods

- `list(paginationParams: PaginationDTO)`: Retrieve a paginated list of chat rooms, with optional search filters.
- `get(id: number)`: Retrieve a specific chat room by its ID.
- `create(data: CreateDTO)`: Create a new chat room with the given data.
- `update(id: number, data: UpdateDTO)`: Update an existing chat room's data by its ID.
- `delete(data: DeleteDTO)`: Delete chat rooms by their IDs.

### Folder Structure

```plaintext
├── chat-room.controller.ts   # Defines routes for chat-room
├── chat-room.service.ts      # Contains business logic for chat-room
├── chat-room.module.ts       # Dashboard item module
├── dto
│   ├── create.dto.ts              # DTO for creating dashboard items
│   ├── update.dto.ts              # DTO for updating dashboard items
```
