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
      items: ["ui/introduction", "ui/color-picker-field"],
    },
  ],
};

export default sidebars;
