# VoiceyBill Authentication

## Overview

VoiceyBill uses JWT-based authentication for API access.

## Registration

Agents can register users via the signup endpoint or authenticate via Google OAuth.

### Endpoints

- **POST** `https://voiceybill-server.vercel.app/api/auth/signup` — Create a new account
- **POST** `https://voiceybill-server.vercel.app/api/auth/login` — Authenticate and receive JWT
- **POST** `https://voiceybill-server.vercel.app/api/auth/google` — Authenticate via Google OAuth

### Request Format (Login)

```json
{
  "email": "user@example.com",
  "password": "your-password"
}
```

### Response Format

```json
{
  "token": "eyJhbGciOi...",
  "user": {
    "id": "...",
    "email": "user@example.com",
    "name": "User Name"
  }
}
```

## Using the Token

Include the JWT in the `Authorization` header for all authenticated requests:

```
Authorization: Bearer <token>
```

## Token Lifetime

Tokens are valid for 7 days after issuance.

## Supported Identity Types

- Email/password
- Google OAuth 2.0

## Rate Limits

- Login: 5 attempts per minute per IP
- Signup: 3 attempts per minute per IP
