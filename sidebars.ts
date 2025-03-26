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
              label: "Core",
              id: "modules/admin/core",
            },
            {
              type: "category",
              label: "Dashboard",
              items: [
                {
                  type: "doc",
                  label: "Dashboard",
                  id: "modules/admin/dashboard/dashboard",
                },
                {
                  type: "doc",
                  label: "Dashboard Component",
                  id: "modules/admin/dashboard/dashboard-component",
                },
                {
                  type: "doc",
                  label: "Dashboard Item",
                  id: "modules/admin/dashboard/dashboard-item",
                },
                {
                  type: "doc",
                  label: "Dashboard User",
                  id: "modules/admin/dashboard/dashboard-user",
                },
              ],
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
          type: "doc",
          label: "Appearance",
          id: "modules/appearance/index",
        },
        {
          type: "category",
          label: "Chat",
          items: [
            {
              type: "doc",
              label: "Introduction",
              id: "modules/chat/introduction",
            },
            {
              type: "doc",
              label: "Chat Room",
              id: "modules/chat/chat-room",
            },
            {
              type: "doc",
              label: "Chat Room Person",
              id: "modules/chat/chat-room-person",
            },
            {
              type: "doc",
              label: "Chat Nessage",
              id: "modules/chat/chat-message",
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
              label: "Person Address",
              id: "modules/contact/person-address",
            },
            {
              type: "doc",
              label: "Person Address Type",
              id: "modules/contact/person-address-type",
            },
            {
              type: "doc",
              label: "Person Contact",
              id: "modules/contact/person-contact",
            },
            {
              type: "doc",
              label: "Person Contact Type",
              id: "modules/contact/person-contact-type",
            },
            ,
            {
              type: "doc",
              label: "Person Custom",
              id: "modules/contact/person-custom",
            },
            {
              type: "doc",
              label: "Person Custom Type",
              id: "modules/contact/person-custom-type",
            },
            {
              type: "doc",
              label: "Person Document",
              id: "modules/contact/person-document",
            },
            {
              type: "doc",
              label: "Person Document Type",
              id: "modules/contact/person-document-type",
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
          label: "Content",
          id: "modules/content/index",
        },
        {
          type: "doc",
          label: "Country",
          id: "modules/country/index",
        },
        {
          type: "doc",
          label: "FAQ",
          id: "modules/faq/index",
        },
        {
          type: "doc",
          label: "File",
          id: "modules/file/index",
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
          type: "category",
          label: "Mail Manager",
          items: [
            {
              type: "doc",
              label: "Introduction",
              id: "modules/mail-manager/introduction",
            },
            {
              type: "doc",
              label: "Mail",
              id: "modules/mail-manager/mail",
            },
            {
              type: "doc",
              label: "Mail Sent",
              id: "modules/mail-manager/mail-sent",
            },
            {
              type: "doc",
              label: "Mail Var",
              id: "modules/mail-manager/mail-var",
            },
          ],
        },
        {
          type: "category",
          label: "Page",
          items: [
            {
              type: "doc",
              label: "Introduction",
              id: "modules/page/introduction",
            },
            {
              type: "doc",
              label: "Component Prop Type",
              id: "modules/page/component-prop-type",
            },
            {
              type: "doc",
              label: "Component Prop",
              id: "modules/page/component-prop",
            },
            {
              type: "doc",
              label: "Component Type",
              id: "modules/page/component-type",
            },
            {
              type: "doc",
              label: "Component",
              id: "modules/page/component",
            },
            {
              type: "doc",
              label: "Instance",
              id: "modules/page/instance",
            },
            {
              type: "doc",
              label: "Instance Prop",
              id: "modules/page/instance-prop",
            },
          ],
        },
        {
          type: "doc",
          label: "Pagination",
          id: "modules/pagination/index",
        },
        {
          type: "category",
          label: "Payment",
          items: [
            {
              type: "doc",
              label: "Introduction",
              id: "modules/payment/introduction",
            },
            {
              type: "doc",
              label: "Checkout",
              id: "modules/payment/checkout",
            },
            {
              type: "doc",
              label: "Discount Type",
              id: "modules/payment/discount-type",
            },
            {
              type: "doc",
              label: "Item",
              id: "modules/payment/item",
            },
            {
              type: "category",
              label: "Payment",
              items: [
                {
                  type: "doc",
                  label: "Submodule",
                  id: "modules/payment/payment/index",
                },
                {
                  type: "doc",
                  label: "Payment Item",
                  id: "modules/payment/payment/payment-item",
                },
                {
                  type: "doc",
                  label: "Payment Notification",
                  id: "modules/payment/payment/payment-notification",
                },
                {
                  type: "doc",
                  label: "Payment Value",
                  id: "modules/payment/payment/payment-value",
                },
              ],
            },
            {
              type: "doc",
              label: "Payment Card Brand",
              id: "modules/payment/payment-card-brand",
            },
            {
              type: "category",
              label: "Payment Coupon",
              items: [
                {
                  type: "doc",
                  label: "Payment Coupon",
                  id: "modules/payment/payment-coupon/index",
                },
                {
                  type: "doc",
                  label: "Payment Coupon Item",
                  id: "modules/payment/payment-coupon/payment-coupon-item",
                },
              ],
            },
            {
              type: "doc",
              label: "Payment Gateway",
              id: "modules/payment/payment-gateway",
            },
            {
              type: "doc",
              label: "Payment Method",
              id: "modules/payment/payment-method",
            },
            {
              type: "doc",
              label: "Payment Method Item",
              id: "modules/payment/payment-method-item",
            },
            {
              type: "doc",
              label: "Payment Status",
              id: "modules/payment/payment-status",
            },
          ],
        },
        {
          type: "doc",
          label: "Prisma",
          id: "modules/prisma/index",
        },
        {
          type: "doc",
          label: "Profile",
          id: "modules/profile/index",
        },
        {
          type: "doc",
          label: "Rabbitmq",
          id: "modules/rabbitmq/index",
        },
        {
          type: "doc",
          label: "Setting",
          id: "modules/setting/index",
        },
        {
          type: "category",
          label: "Subscription",
          items: [
            {
              type: "doc",
              label: "Introduction",
              id: "modules/subscription/introduction",
            },
            {
              type: "category",
              label: "Subscription",
              items: [
                {
                  type: "doc",
                  label: "Submodule",
                  id: "modules/subscription/subscription/index",
                },
                {
                  type: "doc",
                  label: "Subscription Payment",
                  id: "modules/subscription/subscription/subscription-payment",
                },
                {
                  type: "doc",
                  label: "Subscription Person",
                  id: "modules/subscription/subscription/subscription-person",
                },
                {
                  type: "doc",
                  label: "Subscription Value",
                  id: "modules/subscription/subscription/subscription-value",
                },
              ],
            },
            {
              type: "doc",
              label: "Subscription Cancel",
              id: "modules/subscription/subscription-cancel",
            },
            {
              type: "doc",
              label: "Subscription Create",
              id: "modules/subscription/subscription-create",
            },
            {
              type: "doc",
              label: "Subscription Listener",
              id: "modules/subscription/subscription-listener",
            },
            {
              type: "category",
              label: "Subscription Plan",
              items: [
                {
                  type: "doc",
                  label: "Subscription Plan",
                  id: "modules/subscription/subscription-plan/index",
                },
                {
                  type: "doc",
                  label: "Subscription Plan Gateway",
                  id: "modules/subscription/subscription-plan/subscription-plan-gateway",
                },
              ],
            },
            {
              type: "doc",
              label: "Subscription Profile",
              id: "modules/subscription/subscription-profile",
            },
          ],
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
          label: "Configure",
          id: "cli/configure",
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
        {
          type: "doc",
          label: "Validate",
          id: "cli/validate",
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
