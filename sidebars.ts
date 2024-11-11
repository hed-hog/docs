import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Introduction",
      items: [
        {
          type: "doc",
          label: "Getting Started",
          id: "tutorial/getting-started",
        },
        {
          type: "doc",
          label: "Module Development",
          id: "tutorial/module-development",
        },
        {
          type: "doc",
          label: "Folder Structure",
          id: "structure/folder-structure",
        },
        {
          type: "doc",
          label: "Hedhog YAML",
          id: "yaml/hedhog-yaml",
        },
      ],
    },
    {
      type: "category",
      label: "Modules",
      items: [
        {
          type: "category",
          label: "Admin",
          items: [
            {
              type: "doc",
              label: "Introduction",
              id: "modules/admin/introduction",
            },
            {
              type: "doc",
              label: "Auth",
              id: "modules/admin/auth",
            },
            {
              type: "doc",
              label: "Menu",
              id: "modules/admin/menu",
            },
            {
              type: "doc",
              label: "Role",
              id: "modules/admin/role",
            },
            {
              type: "doc",
              label: "Route",
              id: "modules/admin/route",
            },
            {
              type: "doc",
              label: "Screen",
              id: "modules/admin/screen",
            },
            {
              type: "doc",
              label: "User",
              id: "modules/admin/user",
            },
          ],
        },
        {
          type: "category",
          label: "Contact",
          items: [
            {
              type: "doc",
              label: "Introduction",
              id: "modules/contact/introduction",
            },
            {
              type: "doc",
              label: "Address",
              id: "modules/contact/address",
            },
            {
              type: "doc",
              label: "Address Type",
              id: "modules/contact/address-type",
            },
            {
              type: "doc",
              label: "Contact",
              id: "modules/contact/contact",
            },
            {
              type: "doc",
              label: "Contact Type",
              id: "modules/contact/contact-type",
            },
            {
              type: "doc",
              label: "Country",
              id: "modules/contact/country",
            },
            {
              type: "doc",
              label: "Custom",
              id: "modules/contact/custom",
            },
            {
              type: "doc",
              label: "Custom Type",
              id: "modules/contact/custom-type",
            },
            {
              type: "doc",
              label: "Document",
              id: "modules/contact/document",
            },
            {
              type: "doc",
              label: "Document Type",
              id: "modules/contact/document-type",
            },
            {
              type: "doc",
              label: "Person Type",
              id: "modules/contact/person-type",
            },
          ],
        },
        {
          type: "doc",
          label: "Locale",
          id: "modules/locale/index",
        },
        {
          type: "doc",
          label: "Mail",
          id: "modules/mail/index",
        },
        {
          type: "doc",
          label: "Pagination",
          id: "modules/pagination/index",
        },
        {
          type: "doc",
          label: "Prisma",
          id: "modules/prisma/index",
        },
        {
          type: "doc",
          label: "Setting",
          id: "modules/setting/index",
        },
      ],
    },
    {
      type: "category",
      label: "CLI Commands",
      items: [
        {
          type: "doc",
          label: "Introduction",
          id: "cli/introduction",
        },
        {
          type: "doc",
          label: "Add",
          id: "cli/add",
        },
        {
          type: "doc",
          label: "Apply",
          id: "cli/apply",
        },
        {
          type: "doc",
          label: "Create",
          id: "cli/create",
        },
        {
          type: "doc",
          label: "Info",
          id: "cli/info",
        },
        {
          type: "doc",
          label: "New",
          id: "cli/new",
        },
        {
          type: "doc",
          label: "Refresh",
          id: "cli/refresh",
        },
        {
          type: "doc",
          label: "Reset",
          id: "cli/reset",
        },
        {
          type: "doc",
          label: "Start",
          id: "cli/start",
        },
      ],
    },
    {
      type: "category",
      label: "UI Components",
      items: [
        {
          type: "doc",
          label: "Introduction",
          id: "ui/introduction",
        },
        {
          type: "doc",
          label: "Auth",
          id: "ui/auth",
        },
        {
          type: "category",
          label: "Fields",
          items: [
            {
              type: "doc",
              label: "ColorPickerField",
              id: "ui/fields/color-picker-field",
            },
            {
              type: "doc",
              label: "DatePickerField",
              id: "ui/fields/date-picker-field",
            },
            {
              type: "doc",
              label: "Field",
              id: "ui/fields/field",
            },
            {
              type: "doc",
              label: "MultiSelectField",
              id: "ui/fields/multi-select-field",
            },
            {
              type: "doc",
              label: "PasswordInputField",
              id: "ui/fields/password-input-field",
            },
            {
              type: "doc",
              label: "RichTextField",
              id: "ui/fields/rich-text-field",
            },
            {
              type: "doc",
              label: "SearchField",
              id: "ui/fields/search-field",
            },
            {
              type: "doc",
              label: "SheetPickerField",
              id: "ui/fields/sheet-picker-field",
            },
          ],
        },
        {
          type: "category",
          label: "Openers",
          items: [
            {
              type: "doc",
              label: "OpenDialog",
              id: "ui/openers/open-dialog",
            },
            {
              type: "doc",
              label: "OpenSheet",
              id: "ui/openers/open-sheet",
            },
          ],
        },
        {
          type: "category",
          label: "Panels",
          items: [
            {
              type: "doc",
              label: "DataPanel",
              id: "ui/panels/data-panel",
            },
            {
              type: "doc",
              label: "FormPanel",
              id: "ui/panels/form-panel",
            },
            {
              type: "doc",
              label: "PickerPanel",
              id: "ui/panels/picker-panel",
            },
          ],
        },
        {
          type: "category",
          label: "Views",
          items: [
            {
              type: "doc",
              label: "DraggableListView",
              id: "ui/views/draggable-list-view",
            },
            {
              type: "doc",
              label: "EditableTableView",
              id: "ui/views/editable-table-view",
            },
            {
              type: "doc",
              label: "GridView",
              id: "ui/views/grid-view",
            },
            {
              type: "doc",
              label: "ListView",
              id: "ui/views/list-view",
            },
            {
              type: "doc",
              label: "PaginationView",
              id: "ui/views/pagination-view",
            },
            {
              type: "doc",
              label: "TableView",
              id: "ui/views/table-view",
            },
            {
              type: "doc",
              label: "TreeView",
              id: "ui/views/tree-view",
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
