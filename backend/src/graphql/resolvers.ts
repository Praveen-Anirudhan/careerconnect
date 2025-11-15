/*
This file contains GraphQL resolvers.
Resolvers are functions that tell GraphQL HOW to fetch or write data.
    Query resolver → get data
    Mutation resolver → change data
    They always return whatever the schema says
 */

// src/graphql/resolvers.ts

import { hashPassword, comparePassword } from "../utils/hash";
import { generateToken } from "../auth/auth";
import { findUserByEmail, createUser, safeUser, DBUser } from "../utils/user";
import { sql } from "../db";

export const resolvers = {
    users: async () => {
        const rows = await sql`
            SELECT id, email, role FROM users`;
        return rows as { id: string; email: string; role: string }[];
    },

    register: async ({email, password, role}: { email: string; password: string; role: string; }) => {
        const hashed = await hashPassword(password);
        const user = await createUser(email, hashed, role);
        const token = generateToken({ id: user.id });
        return { token, user };
    },

    login: async ({email, password}: { email: string; password: string; }) => {
        const user = await findUserByEmail(email);
        if (!user) throw new Error("User not found");
        const valid = await comparePassword(password, user.password);
        if (!valid) throw new Error("Invalid password");
        const token = generateToken({ id: user.id });
        return {
            token,
            user: safeUser(user as DBUser)
        };
    }
};
