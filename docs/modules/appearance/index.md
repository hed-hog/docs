# 🦔 @hedhog/appearance

The **Appearance Module** allows users to customize and override the styles of the admin interface dynamically. It provides the ability to modify colors, typography, spacing, and other visual aspects of the UI. This customization is achieved by storing style configurations in the database and generating a CSS file that reflects the selected appearance settings. This ensures that the admin panel can be visually tailored without modifying core styles directly in the codebase.

### Features

- **Retrieve Appearance Settings**: Retrieve appearance settings.
- **Serve Custom CSS**: Serve custom CSS for the admin interface.
- **Dynamic Updates**: Update appearance settings dynamically.
- **Color Conversion**: Convert theme colors to CSS variables.
- **Customization Support**: Support for font, spacing, and layout customization.

### Controller Endpoints

- `GET /appearance`: List all appearance settings with pagination.
- `GET /appearance/index.css`: Retrieve the generated CSS file for the admin interface.
- `PUT /appearance`: Update appearance settings.

### Service Methods

- `getAppearance(locale: any, paginationParams: any)`: Retrieve a paginated list of appearance settings.
- `handleIndexStyleFile()`: Retrieve the stored CSS file for the admin interface.
- `setAppearance(data: UpdateDTO)`: Update the appearance settings and regenerate the CSS file.
- `hexToHSL(hex: string)`: Convert a hex color code to HSL format.
- `parseSlugAndValue(slug: string, value: any)`: Parse appearance settings into valid CSS variables.

### Installation

To install the `@hedhog/appearance` module, use the following command:

```bash
npm i @hedhog/appearance
```

### Usage

Once installed, you can integrate the Appearance module into your project to quickly set up and manage essential features for your admin interface.

```typescript
import { AppearanceModule } from "@hedhog/appearance";

@Module({
  imports: [AppearanceModule],
})
export class AppModule {}
```

By importing the AppearanceModule, you gain access to all the functionality provided by the module, making it easier to manage interface styling.

### Folder Structure

```plaintext
├── appearance.controller.ts   # Defines routes for appearance
├── appearance.service.ts      # Contains business logic for appearance
├── appearance.module.ts       # Dashboard item module
├── dto
│   ├── create.dto.ts              # DTO for creating dashboard items
│   ├── update.dto.ts              # DTO for updating dashboard items
```
