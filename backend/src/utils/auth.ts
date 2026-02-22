/*
The generateToken function in auth.ts is a utility function that creates a JSON Web Token (JWT) for user authentication.

Purpose:
1. Generates a secure token that can be used to authenticate and authorize users in your application
2. The token contains user identity information and has an expiration time

Parameters:
- Takes a user object with an id property as input
- Token Contents:
    sub (subject): Contains the user's ID
    at (issued at): Timestamp when the token was created (in seconds since epoch)
    exp (expiration): Automatically added by JWT, set to 1 day from creation
    iss (issuer): Set to "careerconnect" to identify your application

Usage:
Call this function after successful user login/authentication
The returned token should be sent to the client and included in subsequent API requests in the Authorization header
 */

import jwt from 'jsonwebtoken';

export function generateToken(user: { id: string; role?: string | null }) {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('Missing JWT_SECRET environment variable');

  return jwt.sign(
    {
      sub: user.id,
      at: Date.now() / 1000,
      role: user.role
    },
    secret,
    {
      expiresIn: '1d',
      issuer: 'careerconnect',
    }
  );
}

export function verifyToken(token: string) {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('Missing JWT_SECRET environment variable');
  return jwt.verify(token, secret);
}
