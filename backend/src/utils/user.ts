//Helper function

import { pool } from "../db";

export interface DBUser {
    id: string;
    email: string;
    password: string;
    role: string;
}

export const findUserByEmail = async (email: string): Promise<DBUser | null> => {
    const { rows } = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
    );
    return rows[0] ?? null;
};

export const createUser = async (
    email: string,
    hashedPassword: string,
    role: string
): Promise<Pick<DBUser, "id" | "email" | "role">> => {
    const { rows } = await pool.query(
        `INSERT INTO users (email, password, role)
         VALUES ($1, $2, $3)
             RETURNING id, email, role`,
        [email, hashedPassword, role]
    );
    return rows[0];
};

export const safeUser = (user: DBUser) => ({
    id: user.id,
    email: user.email,
    role: user.role
});
