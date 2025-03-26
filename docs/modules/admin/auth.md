# Auth Module

**HedHog Auth** is a library designed to handle authentication tasks within the HedHog framework. It provides functionalities for user login, token management, multi-factor authentication (MFA), and password reset, ensuring secure and reliable user authentication processes.

### Features

- **Token Verification**: Verify authentication tokens for users.
- **Login**: Authenticate users with email and password, and handle multi-factor authentication if required.
- **OTP Management**: Manage one-time passwords (OTP) for multi-factor authentication.
- **Password Reset**: Facilitate password reset requests through email.
- **User Creation**: Validate and create new users with provided data.
- **Email Management**: Change user email addresses securely.
- **Password Management**: Change and reset passwords with validation.
- **Role-Based Verification**: Verify user authentication status based on roles.
- **Custom Decorators**: Simplify route handling with reusable decorators.
- **Route Protection**: Secure routes using authentication guards.
- **Multi-Factor Authentication**: Support for various MFA types via enumerations.
- **User Data Handling**: Manage user-related data with type definitions.

#### Controller

The `AuthController` defines the following endpoints:

- `GET /auth/create-user`: Check if a user can be created using a code.
- `POST /auth/create-user`: Create a new user with the provided data.
- `GET /auth/verify`: Verify the authentication status of the user (requires a role).
- `POST /auth/login`: Authenticate a user using email and password.
- `POST /auth/otp`: Verify an OTP code for multi-factor authentication.
- `POST /auth/forget`: Request a password reset link via email.
- `POST /auth/reset`: Reset the user's password using a code.
- `POST /auth/change-password`: Change the user's password.
- `POST /auth/change-email`: Change the user's email address.

#### AuthService

The `AuthService` provides methods for:

- `createUserCheck(code: string)`: Validate if a user can be created using a provided code.
- `createUser(data: CreateUserDTO)`: Create a new user and set up their address.
- `verifyToken(token: string)`: Verify the provided JWT token.
- `generateRandomString(length: number)`: Generate a random alphanumeric string of specified length.
- `generateRandomNumber()`: Generate a random 6-digit number.
- `loginWithEmailAndPassword(email: string, password: string)`: Authenticate users with email and password, handling multi-factor authentication if required.
- `getToken(user)`: Generate a JWT token for the authenticated user.
- `forget(data: ForgetDTO)`: Initiate a password reset process for the specified email.
- `changePassword(data: ChangeDTO)`: Change the user's password after validating the current password.
- `changeEmail(data: EmailDTO)`: Change the user's email address after validating the current email and password.
- `resetPassword(data: ResetDTO)`: Reset the user's password using a provided code.
- `otp(data: OtpDTO)`: Verify the OTP code for multi-factor authentication.
- `login(data: LoginDTO)`: Authenticate a user using email and password.
- `verify(id: number)`: Verify the user's existence by their ID.

### Folder Structure

```plaintext
├── auth.controller.ts         # Defines routes for authentication
├── auth.service.ts            # Contains authentication logic
├── auth.service.spec.ts       # Testing file for auth service
├── auth.module.ts             # Authentication module
├── dto/
│   ├── forget.dto.ts          # Data Transfer Object for password reset
│   ├── login.dto.ts           # Data Transfer Object for login
│   └── otp.dto.ts             # Data Transfer Object for OTP verification
├── decorators/
│   ├── public.decorator.ts    # Custom decorator to mark public routes
│   └── user.decorator.ts      # Custom decorator to get user from request
├── types/
│   └── user.type.ts           # Type definitions for user-related data
├── enums/
│   └── multifactor-type.enum.ts # Enumeration for multi-factor authentication types
├── guards/
│   └── auth.guard.ts          # Guard for protecting routes
```
