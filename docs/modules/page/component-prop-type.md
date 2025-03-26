# Component Prop Type Submodule

The **Component Prop Type** submodule allows you to manage types of properties associated with components. In modern systems, components often have different types of properties, each with specific attributes or characteristics. This submodule provides an organized way to manage these property types, enabling the creation, updating, deletion, and retrieval of component property types with full support for pagination and localization.

### Features

- **Manage Component Property Types**: Create, update, and delete types for your component properties.
- **Localized Data**: The submodule supports localization, ensuring that property types can be presented in different languages or regions.
- **Flexible Pagination and Search**: Efficiently manage large datasets with built-in pagination and search capabilities.
- **Dynamic Updates**: Update the types of component properties as per your system’s needs.
- **Reusability**: Use the same property types across different components to maintain consistency.

### Controller Endpoints

The following endpoints are available to interact with component property types:

- **Component Property Type Endpoints**:
  - `GET /component-prop-type`: List all component property types with pagination and search capabilities.
  - `GET /component-prop-type/:id`: Retrieve a specific component property type by its ID.
  - `POST /component-prop-type`: Create a new component property type.
  - `PATCH /component-prop-type/:id`: Update an existing component property type by its ID.
  - `DELETE /component-prop-type`: Delete one or more component property types.

### Service Methods

The service layer provides the following methods for managing component property types:

- **Component Property Type Service Methods**:
  - `list(locale: string, paginationParams: PaginationDTO)`: Retrieve a paginated list of component property types, localized based on the provided locale.
  - `get(id: number)`: Retrieve a specific component property type by its ID.
  - `create(data: CreateDTO)`: Create a new component property type.
  - `update({ id, data }: { id: number; data: UpdateDTO })`: Update an existing component property type.
  - `delete({ ids }: DeleteDTO)`: Delete one or more component property types by their IDs.

### Folder Structure

```plaintext
├── component-prop-type.controller.ts    # Controller for managing component property types
├── component-prop-type.service.ts       # Service containing the business logic for managing component property types
├── component-prop-type.module.ts        # Module that sets up the controllers and services
├── dto
│   ├── create.dto.ts                    # DTO for creating new component property types
│   ├── update.dto.ts                    # DTO for updating existing component property types
```
