# Auth Module

**HedHog Auth** is a library designed to handle authentication tasks within the HedHog framework. It provides functionalities for user login, token management, multi-factor authentication (MFA), and password reset, ensuring secure and reliable user authentication processes.

### Features

- **Token Verification**: Verify authentication tokens for users.
- **Login**: Authenticate users with email and password, and handle multi-factor authentication if required.
- **OTP Management**: Manage one-time passwords (OTP) for multi-factor authentication.
- **Password Reset**: Facilitate password reset requests through email.

#### Controller

The `AuthController` defines the following endpoints:

- `GET /auth/verify`: Verify the authentication status of the user.
- `POST /auth/login`: Authenticate a user using email and password.
- `POST /auth/otp`: Verify an OTP code for multi-factor authentication.
- `POST /auth/forget`: Request a password reset link via email.

#### AuthService

The `AuthService` provides methods for:

- `verifyToken(token: string)`: Verify the provided JWT token.
- `generateRandomString(length: number)`: Generate a random string of specified length.
- `generateRandomNumber()`: Generate a random 6-digit number.
- `loginWithEmailAndPassword(email: string, password: string)`: Authenticate users with email and password and handle multi-factor authentication if required.
- `getToken(user)`: Generate a JWT token for the authenticated user.
- `forget({ email }: ForgetDTO)`: Initiate a password reset process for the specified email.
- `otp({ token, code }: OtpDTO)`: Verify the OTP code provided by the user.

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
