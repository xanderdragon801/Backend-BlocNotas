import { Router } from "express";
import Note from "../models/Note.js";

const router = Router();

// Listar
router.get("/", async (_req, res) => {
  try {
    const notes = await Note.find({}).sort({ updatedAt: -1 });
    res.json(notes);
  } catch (e) {
    res.status(500).json({ message: "Error al listar notas", error: e.message });
  }
});

// Obtener por id
router.get("/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "No encontrada" });
    res.json(note);
  } catch (e) {
    res.status(400).json({ message: "ID inválido", error: e.message });
  }
});

// Crear
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;
    const created = await Note.create({ title, content });
    res.status(201).json(created);
  } catch (e) {
    res.status(400).json({ message: "No se pudo crear", error: e.message });
  }
});

// Actualizar
router.put("/:id", async (req, res) => {
  try {
    const { title, content } = req.body;
    const updated = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: "No encontrada" });
    res.json(updated);
  } catch (e) {
    res.status(400).json({ message: "No se pudo actualizar", error: e.message });
  }
});

// Eliminar
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Note.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "No encontrada" });
    res.json({ ok: true });
  } catch (e) {
    res.status(400).json({ message: "No se pudo eliminar", error: e.message });
  }
});

export default router;
