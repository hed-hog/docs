# Country Module

**Country** module has a simple setup for managing and retrieving country data. This module includes a basic controller to fetch all countries and a service to interface with the database using `PrismaService`.

### Controller Endpoints

#### `GET /countries`

- **Description**: Retrieves a list of all countries.

### Service Methods

#### `getAll()`

- **Description**: Retrieves all countries from the database.

### Folder Structure

```plaintext
|── country.controller.ts        # Controller for country
|── country.module.ts            # Module definition for country
|── country.service.ts           # Service class for country logic
├── country.service.spec.ts      # Testing file for contact-type service
```
