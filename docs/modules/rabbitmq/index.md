# 🦔 @hedhog/rabbitmq

The **@hedhog/rabbitmq Module** is responsible for managing interactions with a RabbitMQ instance. It allows the sending and receiving of messages from RabbitMQ queues, and it handles connection, channel management, and message persistence. This module provides an easy-to-use service for interacting with RabbitMQ in a NestJS application, supporting both message publishing and consuming operations.

### Features

- **Connect to RabbitMQ**: Establishes a connection with a RabbitMQ instance using configurable options.
- **Send Messages**: Publish messages to RabbitMQ queues with support for persistent messaging.
- **Listen to Queues**: Listen to RabbitMQ queues and execute callback functions when messages are received.
- **Automatic Queue Assertion**: Ensures queues are created and persistent when sending messages.
- **Debugging**: Optionally enables debug logs to track RabbitMQ connection and message operations.

### Service Methods

- `onModuleInit()`: Initializes the RabbitMQ connection and channel when the module is initialized.
- `sendToQueue(queue: string, message: object)`: Sends a message to a specified RabbitMQ queue. Ensures message persistence.
- `listenToQueue(queue: string, callback: (message: any) => void)`: Listens to a RabbitMQ queue and calls a user-defined callback function when a message is received.
- `onModuleDestroy()`: Closes the RabbitMQ connection and channel when the module is destroyed.

### Installation

To install the `@hedhog/rabbitmq` module, use the following command:

```bash
npm i @hedhog/rabbitmq
```

### Folder Structure

```plaintext
├── rabbitmq.service.ts      # Contains the logic for RabbitMQ connection and messaging
├── rabbitmq.module.ts       # Configures the RabbitMQ service in the NestJS application
├── rabbitmq.consts.ts       # Defines constants like RABBITMQ_MODULE_OPTIONS
└── rabbitmq-module.type.ts  # Defines types and interfaces for module configuration
```

### Example Usage

#### Sending a Message to a Queue

```typescript
import { Injectable } from "@nestjs/common";
import { RabbitMQService } from "@hedhog/rabbitmq";

@Injectable()
export class MyService {
  constructor(private readonly rabbitMQService: RabbitMQService) {}

  async sendMessage() {
    const message = { text: "Hello, RabbitMQ!" };
    await this.rabbitMQService.sendToQueue("my-queue", message);
  }
}
```

#### Listening to a Queue

```typescript
import { Injectable } from "@nestjs/common";
import { RabbitMQService } from "@hedhog/rabbitmq";

@Injectable()
export class MyService {
  constructor(private readonly rabbitMQService: RabbitMQService) {}

  async listenToQueue() {
    await this.rabbitMQService.listenToQueue("my-queue", (message) => {
      console.log("Received message:", message);
    });
  }
}
```

---

This module provides a robust solution for integrating RabbitMQ into NestJS applications, allowing for efficient messaging patterns and automated queue management while supporting debugging and persistence.
