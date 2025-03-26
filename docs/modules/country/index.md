# 🦔 @hedhog/country

**Hedhog Country** module has a simple setup for managing and retrieving country data. This module includes a basic controller to fetch all countries and a service to interface with the database using `PrismaService`.

### Controller Endpoints

#### `GET /country`

- **Description**: Retrieves a list of all countries.

### Service Methods

#### `list()`

- **Description**: Retrieves all countries from the database.

### Installation

To install the `@hedhog/country` module, use the following command:

```bash
npm i @hedhog/country
```

### Folder Structure

```plaintext
|── country.controller.ts        # Controller for country
|── country.module.ts            # Module definition for country
|── country.service.ts           # Service class for country logic
```
