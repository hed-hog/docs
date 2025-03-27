# 🦔 @hedhog/mail-manager

The **@hedhog/mail-manager** module is a comprehensive package designed to streamline the management of mail-related features in your application. It encapsulates the functionality of **Mail**, **Mail Var**, and **Mail Sent** modules into a unified interface, allowing you to manage emails, variables, and sent mail records with ease. This module integrates seamlessly with locale and pagination services, making it perfect for multi-language and scalable applications.

By combining the functionalities of these modules, `@hedhog/mail-manager` provides a powerful system for handling email records, managing dynamic variables used in emails, and tracking emails that have been sent. Whether you're building an email template system, a marketing platform, or an internal messaging tool, this module gives you the tools you need to handle mail management efficiently.

### Features

- **Manage Mail Records**: Create, update, and delete email records with ease.
- **Mail Variables**: Manage dynamic variables that can be injected into email templates, allowing for personalized messages.
- **Track Sent Mails**: Keep track of emails that have been sent, along with their metadata.
- **Localized Support**: Full support for multiple languages, ensuring that emails and mail variables can be managed according to different locale requirements.
- **Paginated Listings**: Support for paginated retrieval of mail records, mail variables, and sent emails, improving performance when dealing with large datasets.

### Submodules Included

- **Mail**: Handles email records, including creating, updating, and deleting mails.
- **Mail Var**: Manages dynamic variables that can be used in email templates, such as user names, email addresses, and other placeholders.
- **Mail Sent**: Keeps track of emails that have been sent, including metadata like subject, recipients, and timestamps.

### Installation

To install the `@hedhog/mail-manager` module, use the following command:

```bash
npm i @hedhog/mail-manager
```

### Usage

Once installed, you can integrate the Mail Manager module into your project to manage mail-related operations seamlessly.

```typescript
import { MailManagerModule } from "@hedhog/mail-manager";

@Module({
  imports: [MailManagerModule],
})
export class AppModule {}
```

By importing the `MailManagerModule`, you gain access to all the functionality provided by the module, including managing mail records, dynamic variables, and sent mail tracking. This makes it easier to handle email workflows and streamline mail-related operations in your application.
