# 🦔 @hedhog/faq

The **FAQ Module** enables the management of frequently asked questions (FAQs) in the application. It provides the ability to list, create, update, and delete FAQ entries, supporting localization and pagination. This module is essential for applications that need to manage and display FAQs dynamically.

### Features

- **Retrieve FAQ by ID**: Fetch FAQ entries by their unique IDs.
- **Create New FAQ**: Add new FAQ entries to the system.
- **Update Existing FAQ**: Modify existing FAQ entries.
- **Delete FAQ**: Remove FAQ entries from the database.
- **Pagination Support**: Retrieve FAQ entries with pagination.
- **Localization**: FAQs are managed based on locale settings.

### Controller Endpoints

- `GET /faq`: List all FAQ entries with pagination and locale support.
- `GET /faq/:id`: Retrieve an FAQ entry by its ID.
- `POST /faq`: Create a new FAQ entry.
- `PATCH /faq/:id`: Update an existing FAQ entry by its ID.
- `DELETE /faq`: Delete one or more FAQ entries by their IDs.

### Service Methods

- `list(locale: string, paginationParams: PaginationDTO)`: Retrieve a paginated list of FAQ entries, filtered by locale.
- `get(id: number)`: Retrieve a single FAQ entry by its ID, filtered by locale.
- `create(data: CreateDTO)`: Create a new FAQ entry and assign it to the appropriate locale.
- `update({ id, data }: { id: number, data: UpdateDTO })`: Update an existing FAQ entry with the provided data, including localization.
- `delete({ ids }: DeleteDTO)`: Delete one or more FAQ entries by their IDs.

### Installation

To install the `@hedhog/faq` module, use the following command:

```bash
npm i @hedhog/faq
```

### Usage

Once installed, you can integrate the FAQ module into your project to quickly set up and manage essential features for handling frequently asked questions.

```typescript
import { FAQModule } from "@hedhog/faq";

@Module({
  imports: [FAQModule],
})
export class AppModule {}
```

By importing the FAQModule, you gain access to all the functionality provided by the module, making it easier to retrieve and manage frequently asked questions (FAQs).

### Folder Structure

```plaintext
├── faq.controller.ts      # Defines routes for FAQ management
├── faq.service.ts         # Contains business logic for FAQ management
├── faq.module.ts          # FAQ module setup
├── dto
│   ├── create.dto.ts      # DTO for creating new FAQ entries
│   ├── update.dto.ts      # DTO for updating FAQ entries
```

---

This module provides a comprehensive solution for managing frequently asked questions (FAQs) in your application, offering flexibility through localization and pagination, and ensuring easy management of FAQ entries.
