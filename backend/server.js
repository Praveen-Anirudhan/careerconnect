import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});
