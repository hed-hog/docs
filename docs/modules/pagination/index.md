# 🦔 @hedhog/pagination

**Hedhog Pagination** is a powerful and flexible pagination library designed for use with HedHog-based projects. It simplifies the process of paginating data results from your database queries, making it easy to handle large datasets and provide users with a smooth and efficient browsing experience.

## Features

- **Flexible Pagination**: Supports pagination with configurable page sizes and sorting options.
- **Search Functionality**: Enables search functionality within paginated results.
- **Field Selection**: Allows selecting specific fields to be returned in the results.
- **Sorting**: Provides sorting capabilities based on specified fields and order.

## Installation

This library is an integral part of the HedHog framework and should be installed as a dependency in your HedHog project. Ensure that the necessary dependencies are configured in your HedHog project.

```bash
npm i @hedhog/pagination
```

## Folder Structure

```plaintext

├── constants/
│   └── pagination.constants.ts # Constants related to pagination
├── databases/
│   ├── abstract.database.ts   # Abstract class for database implementations
│   ├── database.factory.ts    # Factory for creating database instances
│   ├── database.ts            # Base database class
│   ├── index.ts               # Entry point for database files
│   ├── mysql.database.ts      # MySQL database implementation
│   └── postgres.database.ts   # PostgreSQL database implementation
├── decorator/
│   └── pagination.decorator.ts # Decorators for pagination
├── dto/
│   └── pagination.dto.ts      # Data Transfer Object for pagination parameters
├── enums/
│   └── pagination.enums.ts    # Enums for pagination
├── types/
│   └── pagination.types.ts    # Type definitions for pagination
│   ├── query-option.ts         # Type definitions for query options
│   ├── relation-n2n-result.ts  # Type definitions for many-to-many relation results
│   └── transaction-queries.ts  # Type definitions for transaction queries
├── index.ts                  # Entry point for pagination files
├── pagination.module.ts      # Module definition for pagination functionalities
├── pagination.service.spec.ts # Unit tests for PaginationService
└── pagination.service.ts     # Service class for pagination logic
```

## Usage Example

The core of the `@hedhog/pagination` library is the PaginationService. It provides the paginate method to handle pagination logic for your models.

```typescript
import { Injectable } from "@nestjs/common";
import { PaginationService } from "@hedhog/pagination";
import { PrismaService } from "@hedhog/prisma";

@Injectable()
export class MyService {
  constructor(
    private readonly paginationService: PaginationService,
    private readonly prismaService: PrismaService
  ) {}

  async getPaginatedResults(paginationParams: PaginationParams) {
    const model = this.prismaService.myModel; // Replace with your model
    return this.paginationService.paginate(model, paginationParams);
  }
}
```

## Parameters

- **model**: The model to paginate, typically from your ORM (e.g., Prisma).
- **paginationParams**: An object containing pagination parameters:
  - **page**: The current page number (default: 1).
  - **pageSize**: The number of items per page (default: 10).
  - **search**: The search query string.
  - **sortField**: The field to sort by.
  - **sortOrder**: The order of sorting (ascending or descending).
  - **fields**: Comma-separated list of fields to include in the result.
