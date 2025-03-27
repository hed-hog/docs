# 🦔 @hedhog/country

**Hedhog Country** module has a simple setup for managing and retrieving country data. This module includes a basic controller to fetch all countries and a service to interface with the database using `PrismaService`.

### Controller Endpoints

- `GET /country`: Retrieves a list of all countries.

### Service Methods

- `list()`: Retrieves all countries from the database.

### Folder Structure

```plaintext
|── country.controller.ts        # Controller for country
|── country.module.ts            # Module definition for country
|── country.service.ts           # Service class for country logic
```

### Installation

To install the `@hedhog/country` module, use the following command:

```bash
npm i @hedhog/country
```

### Usage

Once installed, you can integrate the Country module into your project to quickly set up and manage essential features for handling country data.

```typescript
import { CountryModule } from "@hedhog/country";

@Module({
  imports: [CountryModule],
})
export class AppModule {}
```

By importing the CountryModule, you gain access to all the functionality provided by the module, making it easier to retrieve and manage country information.
