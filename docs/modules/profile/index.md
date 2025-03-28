# 🦔 @hedhog/profile

The **Profile Module** is responsible for managing user profiles, including the creation, update, retrieval, and closure of user accounts. It integrates with authentication systems to ensure secure management of personal data, user roles, and account operations. This module allows users to sign up, update their information, and delete their accounts securely.

### Features

- **Sign Up**: Create a new user profile with validation for email and CPF.
- **Update Profile**: Update user details, including personal information, contact information, and addresses.
- **Close Account**: Close the user account by validating the password and removing associated data.
- **Profile Retrieval**: Retrieve user profile data, including personal information, documents, and contacts.
- **Token Generation**: Generate a token for the user, which includes profile data for authentication.
- **Email Notifications**: Send confirmation emails upon profile updates and account closure.

### Controller Endpoints

- `POST /profile/signup`: Create a new user profile.
- `POST /profile/update`: Update the user profile with new data.
- `POST /profile/close-account`: Close the user account after password validation.
- `GET /profile`: Retrieve the profile of the authenticated user.

### Service Methods

- `signup(userData: SignupDTO)`: Handles the user sign-up process, including validation and profile creation.
- `updateUserData(id: number, userData: UpdateUserDataDTO)`: Updates the profile information (email, name, phone, address) for the specified user.
- `closeAccount(id: number, { password }: CloseAccountDTO)`: Closes the user account, deletes associated personal data, and sends a confirmation email.
- `getToken(user: User)`: Retrieves a token for the user, including profile data such as CPF, phone number, and address.
- `validateCPF(cpf: string)`: Validates CPF format and checks if it already exists in the database.

### Installation

To install the `@hedhog/profile` module, use the following command:

```bash
npm i @hedhog/profile
```

### Usage

Once installed, you can integrate the Profile module into your project to manage user profiles seamlessly.

```typescript
import { ProfileModule } from "@hedhog/profile";

@Module({
  imports: [ProfileModule],
})
export class AppModule {}
```

By importing the `ProfileModule`, you gain access to all the functionality provided by the module, including creating user profiles, updating user information, retrieving profile data, and securely closing accounts. This simplifies the management of user profiles and ensures secure handling of personal data in your application.

### Folder Structure

```plaintext
├── profile.controller.ts       # Defines routes for profile management
├── profile.service.ts          # Contains business logic for profile management
├── profile.module.ts           # Profile module setup
├── dto
│   ├── close-account.dto.ts    # DTO for closing user account
│   ├── login.dto.ts            # DTO for user login
│   ├── signup.dto.ts           # DTO for user sign-up
│   └── update.dto.ts           # DTO for updating user data
├── emails
│   ├── index.ts                # Entry file
│   ├── lib.ts                  # For managing email templates and sending emails
│   └── templates.ts            # Predefined email templates for account updates and closures
├── validations
│   └── cpf.ts                 # CPF validation logic
```

---

This module provides a comprehensive solution for managing user profiles securely, supporting account creation, updates, and closure operations while integrating with email notifications and authentication systems.
