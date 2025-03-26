# 🦔 @hedhog/chat

This topic includes several modules for building a comprehensive chat system. The following modules are designed to manage chat rooms, chat room participants, and chat messages within a chat application:

### Chat Room Module

The **Chat Room** module handles the creation, modification, and deletion of chat rooms. It also allows for retrieving information about existing chat rooms, including support for pagination and search functionality.

- **Features:** List, create, update, and delete chat rooms.
- **Purpose:** Organize conversations within specific rooms, making it easier to manage groups or individual chats.

### Chat Room Person Module

The **Chat Room Person** module is responsible for managing the participants within each chat room. It links users to specific chat rooms, allowing the application to track who is part of which chat room and what role they have within that room.

- **Features:** List, add, update, and remove participants from chat rooms.
- **Purpose:** Manage users' roles and associations with different chat rooms, ensuring that only authorized users can access and participate in the chats.

### Chat Message Module

The Chat Message module manages the individual messages exchanged within chat rooms. This module allows for creating, updating, and deleting messages, as well as providing the ability to retrieve specific messages or lists of messages with pagination.

- **Features:** Send, retrieve, update, and delete chat messages.
- **Purpose:** Facilitate communication between participants in each chat room, ensuring that messages are stored and easily accessible.

These modules work together to create a robust and scalable chat system. Whether you're building a group chat application or a more complex messaging platform, these modules provide the necessary components to handle chat rooms, users, and messages effectively.

### Installation

To install the `@hedhog/chat` module, use the following command:

```bash
npm i @hedhog/chat
```
