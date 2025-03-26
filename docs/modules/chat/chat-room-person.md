# Chat Room Person Module

The **Chat Room Person** module allows managing the participants of a chat room. It includes functionality for adding, removing, and updating users within a chat room, along with retrieving information about specific participants.

### Features

- **List Participants:** List chat room participants with pagination and search functionality.
- **Retrieve Participant:** Retrieve a specific participant by their ID.
- **Create Participants:** Create new chat room participants, assigning roles and associating them with chat rooms.
- **Update Participant Details:** Update participant details, such as their role in the chat room.
- **Delete Participants:** Delete participants from a chat room by their IDs.

### Controller Endpoints

- `GET /chat-room-person`: List all chat room participants with pagination and optional search by ID or fields.
- `GET /chat-room-person/:id`: Retrieve a specific chat room participant by ID.
- `POST /chat-room-person`: Create a new chat room participant with the provided role and associations.
- `PATCH /chat-room-person/:id`: Update an existing participant's details, including their role and chat room association.
- `DELETE /chat-room-person`: Delete one or more chat room participants by their IDs.

### Service Methods

- `list(paginationParams: PaginationDTO)`: Retrieve a paginated list of chat room participants, with optional search filters.
- `get(id: number)`: Retrieve a specific chat room participant by their ID.
- `create(data: CreateDTO)`: Create a new chat room participant with the given data.
- `update(id: number, data: UpdateDTO)`: Update the participant by ID with new data.
- `delete(data: DeleteDTO)`: Delete chat room participants by their IDs.

### Folder Structure

```plaintext
├── chat-room-person.controller.ts   # Defines routes for chat-room-person
├── chat-room-person.service.ts      # Contains business logic for chat-room-person
├── chat-room-person.module.ts       # Dashboard item module
├── dto
│   ├── create.dto.ts              # DTO for creating dashboard items
│   ├── update.dto.ts              # DTO for updating dashboard items
```
