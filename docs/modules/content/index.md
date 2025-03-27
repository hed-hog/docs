# 🦔 @hedhog/content

The **Content Module** is primarily designed to manage static pages such as Terms of Use and Privacy Policy. It provides a robust set of operations to retrieve, create, update, and delete content entries. With built-in support for localization and pagination, this module ensures that your application's legal and informational pages are easily accessible and adaptable to various locales.

### Features

- **Retrieve Content by ID**: Retrieve content entries by their unique IDs.
- **Retrieve Content by Slug**: Fetch content entries by their slug (unique identifier).
- **Create New Content**: Add new content entries to the database.
- **Update Existing Content**: Modify existing content entries.
- **Delete Content**: Remove content entries from the database.
- **Pagination Support**: Fetch content entries with pagination support.
- **Localization**: Content entries are fetched and managed based on locale settings.

### Controller Endpoints

- `GET /content`: List all content entries with pagination and locale support.
- `GET /content/slug/:slug`: Retrieve a content entry by its slug.
- `GET /content/:id`: Retrieve a content entry by its ID.
- `POST /content`: Create a new content entry.
- `PATCH /content/:id`: Update an existing content entry by its ID.
- `DELETE /content`: Delete one or more content entries by their IDs.

### Service Methods

- `list(locale: string, paginationParams: PaginationDTO)`: Retrieve a paginated list of content entries, filtered by locale.
- `get(id: number)`: Retrieve a single content entry by its ID, filtered by locale.
- `getBySlug(slug: string)`: Retrieve a single content entry by its slug, filtered by locale.
- `create(data: CreateDTO)`: Create a new content entry and assign it to the appropriate locale.
- `update({ id, data }: { id: number, data: UpdateDTO })`: Update an existing content entry with the provided data, including localization.
- `delete({ ids }: DeleteDTO)`: Delete one or more content entries by their IDs.

### Folder Structure

```plaintext
├── content.controller.ts    # Defines routes for content management
├── content.service.ts       # Contains business logic for content management
├── content.module.ts        # Content module setup
├── dto
│   ├── create.dto.ts        # DTO for creating new content entries
│   ├── update.dto.ts        # DTO for updating content entries
```

### Installation

To install the `@hedhog/content` module, use the following command:

```bash
npm i @hedhog/content
```

### Usage

Once installed, you can integrate the Content module into your project to quickly set up and manage essential features for your application's static pages.

```typescript
import { ContentModule } from "@hedhog/content";

@Module({
  imports: [ContentModule],
})
export class AppModule {}
```

By importing the ContentModule, you gain access to all the functionality provided by the module, making it easier to manage static pages like Terms of Use, Privacy Policy, and other localized content.
