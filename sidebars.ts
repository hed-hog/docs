import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "tutorial/getting-started",
    {
      type: "category",
      label: "HedHog CLI Commands",
      items: ["cli/introduction", "cli/add", "cli/create", "cli/info"],
    },
    {
      type: "category",
      label: "HedHog UI Components",
      items: [
        "ui/introduction",
        "ui/auth",
        {
          type: "category",
          label: "Fields",
          items: [
            "ui/fields/color-picker-field",
            "ui/fields/date-picker-field",
            "ui/fields/field",
            "ui/fields/multi-select-field",
            "ui/fields/password-input-field",
            "ui/fields/rich-text-field",
            "ui/fields/search-field",
            "ui/fields/sheet-picker-field",
          ],
        },
        {
          type: "category",
          label: "Openers",
          items: ["ui/openers/open-dialog", "ui/openers/open-sheet"],
        },
        {
          type: "category",
          label: "Panels",
          items: [
            "ui/panels/data-panel",
            "ui/panels/form-panel",
            "ui/panels/picker-panel",
          ],
        },
        {
          type: "category",
          label: "Views",
          items: [
            "ui/views/draggable-list-view",
            "ui/views/editable-table-view",
            "ui/views/grid-view",
            "ui/views/list-view",
            "ui/views/pagination-view",
            "ui/views/table-view",
            "ui/views/tree-view",
          ],
        },
      ],
    },
  ],
};

export default sidebars;
