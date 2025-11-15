import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { graphqlHTTP } from 'express-graphql';
import { schema } from "./graphql/schema.ts";
import { resolvers } from "./graphql/resolvers.ts";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        rootValue: resolvers,
        graphiql: true,
    })
);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
