import { sql } from "../db";

export type DBUser = {
    id: string;
    email: string;
    password: string;
    role: string;
}

export interface SafeUser {
    id: string;
    email: string;
    role: string;
}

export async function findUserByEmail(email: string): Promise<DBUser | null> {
    const result = await sql`
        SELECT * FROM users WHERE email = ${email}
    `;
    return (result[0] as unknown) as DBUser || null;
}

export async function createUser(
    email: string,
    password: string,
    role: string
): Promise<SafeUser> {
    const rows = await sql`
        INSERT INTO users (email, password, role)
        VALUES (${email}, ${password}, ${role})
            RETURNING id, email, role
    `;
    return rows[0] as SafeUser;
}

export function safeUser(user: DBUser): SafeUser {
    const { ...rest } = user;
    return rest as SafeUser;
}