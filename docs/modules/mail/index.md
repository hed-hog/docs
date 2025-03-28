# 🦔 @hedhog/mail

**HedHog Mail** is an email sending library that is part of the HedHog framework. This library provides support for sending emails using various email services such as AWS SES, Gmail, and SMTP. It is configured to handle multiple types of email sending, including emails with attachments and multi-part content.

## Features

- **Send Emails via AWS SES**: Send emails using Amazon Simple Email Service.
- **Send Emails via Gmail**: Send emails using the Gmail API.
- **Send Emails via SMTP**: Send emails through an SMTP server.
- **Create Emails with Attachments**: Support for emails with multiple attachments and formatted content.

## Installation

This library is an integral part of the HedHog framework and should be installed as a dependency in your HedHog project. Ensure that the necessary dependencies are configured in your HedHog project.

```bash
npm i @hedhog/mail
```

## Usage

The `MailService` is the main class responsible for sending emails. Here is a basic example of how to use the email service:

### Configuration and Sending Emails

```typescript
import { MailService } from "@hedhog/mail";
import { Mail } from "@hedhog/mail/interfaces/mail.interface";

// Assuming you have properly configured MailService in your module

const mailService = new MailService(/* configuration options */);

const mail: Mail = {
  from: "sender@example.com",
  to: "recipient@example.com",
  subject: "Test Email",
  body: "<h1>Hello World!</h1>",
  attachments: [
    {
      filename: "attachment.txt",
      content: Buffer.from("Hello, this is an attachment!"),
      contentType: "text/plain",
    },
  ],
};

mailService
  .send(mail)
  .then((response) => {
    console.log("Email sent successfully:", response);
  })
  .catch((error) => {
    console.error("Error sending email:", error);
  });
```

## Available Methods

- **send(mail: Mail)**: Sends an email based on the specified configuration (AWS, GMAIL, or SMTP).
- **createRawEmail(mail: Mail)**: Creates a raw representation of the email for sending.

## Folder Structure

```plaintext
├── mail.service.ts           # Email sending service
├── mail.module.ts            # Module for MailService
└── mail.consts.ts            # Constants related to email sending
├── mail.service.spec.ts      # Unit tests for MailService
└── mail.template.ejs         # Email templates in EJS format
├── index.ts                  # Entry point for mail files
├── interfaces/
│   ├── mail-module-options.interface.ts # Interface for configuration options
│   ├── mail-type.ts                     # Type definitions for mail-related entities
│   └── index.ts                         # Barrel file for exporting interfaces
├── enums/
│   └── mail-configuration-type.enum.ts # Enum for email configuration types
```
