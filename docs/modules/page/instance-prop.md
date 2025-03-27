# Instance Prop

The **Instance Prop** submodule provides functionality for managing properties associated with instances in your application. Instance properties allow the assignment of specific values to different instances, offering flexibility in the way you configure and interact with components in your system. This submodule provides the ability to create, update, delete, and retrieve instance properties, all with a focus on efficiency and ease of use.

### Features

- **Manage Instance Properties**: Allows the creation, modification, and deletion of properties for instances.
- **Pagination & Search**: Supports paginated retrieval of instance properties and allows search filtering based on property values.
- **Efficient CRUD Operations**: Provides methods to create, update, and delete instance properties with minimal effort.
- **Custom Data Structure**: Instance properties can hold values associated with instances, offering a dynamic way to customize the behavior or characteristics of your system's components.
- **Seamless Integration**: Works seamlessly with other Hedhog modules, ensuring consistent data handling throughout your application.

### Controller Endpoints

The submodule provides the following RESTful endpoints for interacting with instance properties:

- **Instance Property Endpoints**:
  - `GET /instance-prop`: List all instance properties with support for pagination and search.
  - `GET /instance-prop/:id`: Retrieve a specific instance property by its ID.
  - `POST /instance-prop`: Create a new instance property.
  - `PATCH /instance-prop/:id`: Update an existing instance property by its ID.
  - `DELETE /instance-prop`: Delete one or more instance properties.

### Service Methods

The service layer provides the following methods for managing instance properties:

- **Instance Property Service Methods**:
  - `list(paginationParams: PaginationDTO)`: Retrieve a paginated list of instance properties with optional search capabilities.
  - `get(id: number)`: Get the details of a specific instance property by its ID.
  - `create(data: CreateDTO)`: Create a new instance property with provided data.
  - `update({ id, data }: { id: number; data: UpdateDTO })`: Update an existing instance property by its ID with new data.
  - `delete({ ids }: DeleteDTO)`: Delete one or more instance properties based on their IDs.

### Folder Structure

```plaintext
├── instance-prop.controller.ts    # Controller for managing instance properties
├── instance-prop.service.ts       # Service for handling instance property business logic
├── instance-prop.module.ts        # Module that binds together the controller and service
├── dto
│   ├── create.dto.ts              # DTO for creating instance properties
│   ├── update.dto.ts              # DTO for updating instance properties
```
