# YAML Table Definition Pattern

This document outlines the standard format for defining database tables for Hedhog projects in YAML. This format ensures consistency and clarity when creating and managing database schemas across the application.

## Structure

Each table definition is represented as a key-value pair, where the key is the table name and the value is an object containing the table's properties. The root properties are **data** (representing the inserts on tables) and **tables** (representing the tables on database)

```yaml
data: # Root property that contains application data definitions (inserts)
  routes: # A list of API routes for the application
    - url: /auth/verify # URL endpoint for verification
      method: GET # HTTP method used for the endpoint

tables: # Root property representing the tables in the database
  table_name: # Key representing the name of the table
    columns: # Property listing all the columns of the table
      - name: column_name # Name of the column
        type: column_type # Data type of the column
        length: column_length # Optional, only for certain types
        isPrimary: true_or_false # Indicates if the column is a primary key
        references: # Optional, used for foreign keys
          table: referenced_table_name
          column: referenced_column_name
          onDelete: delete_action # Options: CASCADE, RESTRICT, NO ACTION
    ifNotExists: true_or_false # Indicates if the table should only be created if it does not already exist
```

## Properties

### columns

**Type**: Array

**Description**: This property lists all the columns that the table will contain. Each column is defined by an object that specifies its name, type, and any additional properties.
Column Properties
| Property | Description |
|------------|---------------------------------------------------------------------------------------------------------|
| `name` | The name of the column. |
| `type` | The data type of the column. Common types include `varchar`, `int`, `boolean`, `timestamp`, etc. |
| `length` | (Optional) The maximum length of the column, applicable for string types (e.g., `varchar`). |
| `isPrimary`| (Optional) A boolean value indicating whether the column is a primary key. |
| `references`| (Optional) An object defining foreign key constraints. |
| `table` | The name of the referenced table. |
| `column` | The name of the referenced column. |
| `onDelete` | (Optional) Defines the action to be taken when the referenced record is deleted. Common values include `CASCADE`, `RESTRICT`, and `NO ACTION`. |

### ifNotExists

**Type**: Boolean

**Description**: This property indicates whether the table should be created only if it does not already exist in the database. It helps prevent errors when attempting to create tables that may already be defined.

## Example

```yaml
data:
  person_types: # Inserting new data on person_types table
    - name: Física
      description: Pessoa Física

tables:
  # Tabela 1 - Person Types
  person_types:
    columns:
      - name: id
        type: pk # Primary key
      - name: name
        type: varchar
        length: 255
        isNullable: false
      - name: description
        type: varchar
        length: 512
        isNullable: true
    ifNotExists: true

  # Tabela 2 - Person Documents
  person_documents:
    columns:
      - name: id
        type: pk
      - name: person_id
        type: fk
        references:
          table: persons
          column: id
          onDelete: CASCADE
      - name: type_id
        type: fk
        references:
          table: person_document_types
          column: id
          onDelete: RESTRICT
      - name: value
        type: varchar
        length: 63
        isNullable: false
  ifNotExists: true
```

## Usage of `where` clause - data property

The where clause can be used in definitions that require looking up existing data. For example, it can be used to reference a foreign key, ensuring that the insertion of new records is tied to existing records in the database. Check the example below:

```yaml
data:
  menus:
    # Menu item for "Contacts"
    - menu_id:
        # The menu_id is dynamically determined based on the existing menu with the slug "/management".
        # This ensures that the menu item being defined is associated with the correct parent menu.
        where:
          slug: /management
      url: /management/persons
      icon: user-check
      name:
        en: Persons
        pt: Pessoas
```

## Usage of `relations` clause - data property

The relations clause is used to establish connections between different data entities within your YAML definitions. This property can help create dynamic relationships based on existing entries in the database. The relations clause allows you to specify conditions for these relationships, ensuring that the data is linked correctly.

```yaml
screens:
  - slug: /management/users # URL slug for the screen
    icon: users # Icon associated with the screen
    name: # Names in different languages
      en: Users # English name
      pt: Usuários # Portuguese name
    description: # Descriptions in different languages
      en: Manage users in the system. # English description
      pt: Gerenciar usuários no sistema. # Portuguese description
    relations: # Establishes relationships to other entities
      routes: # Related routes
        - where: # Condition for the route
            url: # Field to apply the condition
              like: /users% # Matches routes that start with /users
```
