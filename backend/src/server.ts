import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import jwt from "jsonwebtoken";
import { JwtPayload } from 'jsonwebtoken';

dotenv.config();

const app = express();
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Authorization']
}))
app.use(express.json());

app.use(
    "/graphql",
    graphqlHTTP((req) => {
        const token = req.headers.authorization || "";
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error('JWT_SECRET is not defined in environment variables');
        }

        let user = null;
        if (token) {
            try {
                const tokenValue = token.replace('Bearer ', '').trim();
                user = jwt.verify(tokenValue, secret, {
                    algorithms: ['HS256'],
                    issuer: 'careerconnect'
                }) as JwtPayload & { id: string | number };
            } catch (err) {
                console.log("Invalid token", err);
            }
        }

        return {
            schema,
            rootValue: resolvers,
            graphiql: {
                headerEditorEnabled: true
            },
            context: { user, token: token.replace('Bearer ', '').trim() },
        };
    })
);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
