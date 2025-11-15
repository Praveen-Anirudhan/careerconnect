/*
This file contains GraphQL resolvers.
Resolvers are functions that tell GraphQL HOW to fetch or write data.
    Query resolver → get data
    Mutation resolver → change data
    They always return whatever the schema says
 */

import { hashPassword, comparePassword } from "../utils/hash.js";
import { generateToken } from "../auth/auth.js";
import {findUserByEmail, createUser, safeUser, DBUser} from "../utils/user.js";
import { pool } from "../db";

export const resolvers = {
    users: async () => {
        const { rows } = await pool.query("SELECT id, email, role FROM users");
        return rows;
    },

    register: async ({email, password, role}: { email: string; password: string; role: string; }) => {
        const hashed = await hashPassword(password);
        const user = await createUser(email, hashed, role);
        const token = generateToken(user);
        return { token, user };
    },

    login: async ({email, password}: { email: string; password: string; }) => {
        const user = await findUserByEmail(email);
        if (!user) throw new Error("User not found");
        const valid = await comparePassword(password, user.password);
        if (!valid) throw new Error("Invalid password");
        const token = generateToken(user);
        return {token, user: safeUser(user as DBUser)
        };
    }
};
