# 🦔 @hedhog/prisma

**Hedhog Prisma** is a HedHog module that extends [**Prisma**](https://prisma.io/) Client to integrate seamlessly with HedHog projects. It provides an enhanced PrismaClient with additional methods for identifying the database provider and checking the type of database in use.

## Purpose

The Hedhog Prisma module is designed to simplify interactions with Prisma by adding convenience methods and ensuring proper database connection management within HedHog projects. It enhances the Prisma Client with functionality specific to HedHog’s requirements, including database provider detection and connection handling.

## Features

- **Database Connection Management**: Automatically connects to the database when the module is initialized.
- **Provider Detection**: Provides methods to detect the type of database provider being used (e.g., [**PostgreSQL**](https://www.postgresql.org/) or [**MySQL**](https://www.mysql.com/)).

## Methods

**onModuleInit()**: Automatically connects to the database when the module initializes.

**getProvider()**: Returns the active database provider (e.g., 'postgresql', 'mysql').

**isPostgres()**: Returns true if the active database provider is PostgreSQL.

**isMysql()**: Returns true if the active database provider is MySQL.

## Folder Structure

```plaintext
├── index.ts                  # Entry point for PrismaService
├── prisma.module.ts          # Module definition (if needed)
└── prisma.service.ts         # Service class extending PrismaClient
```

## Installation

This library is an integral part of the HedHog framework and should be installed as a dependency in your HedHog project. Ensure that the necessary dependencies are configured in your HedHog project.

```bash
npm i @hedhog/prisma
```

## Usage

After installed and imported @hedhog/prisma, to use it in your project, follow these steps:

1. **Import the PrismaService**:
   Import the `PrismaService` from the module into your service or controller.

   ```typescript
   import { PrismaService } from "@hedhog/prisma";
   ```

2. **Inject the PrismaService**:
   Use dependency injection to include the `PrismaService` in your class.

   ```typescript
   import { Injectable } from "@nestjs/common";
   import { PrismaService } from "@hedhog/prisma";

   @Injectable()
   export class ExampleService {
     constructor(private readonly prisma: PrismaService) {}

     async getUsers() {
       return this.prisma.user.findMany();
     }
   }
   ```

3. **Use the Extended Methods**:
   Utilize the additional methods provided by the module to interact with the database.

   ```typescript
   const provider = this.prisma.getProvider();
   console.log(`Database provider: ${provider}`);

   if (this.prisma.isPostgres()) {
     console.log("Using PostgreSQL database");
   }
   ```

This module simplifies database interactions and ensures seamless integration with HedHog projects.
