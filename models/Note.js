import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: { type: String, trim: true, default: "" },
    content: { type: String, trim: true, default: "" }
  },
  { timestamps: true }
);

export default mongoose.model("Note", noteSchema);
