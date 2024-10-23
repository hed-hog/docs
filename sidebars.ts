import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "doc",
      label: "Getting Started",
      id: "tutorial/getting-started",
    },
    {
      type: "doc",
      label: "Folder Structure",
      id: "structure/folder-structure",
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
