import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import notesRouter from "./routes/notes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Salud
app.get("/api", (_req, res) => res.json({ ok: true, service: "Bloc de Notas API" }));

// Rutas
app.use("/api/notes", notesRouter);

export default app;