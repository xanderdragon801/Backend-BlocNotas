import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 4000;

async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado ✅");

    app.listen(PORT, () => {
      console.log("######################");
      console.log("###### API REST ######");
      console.log("######################");
      console.log(`Servidor corriendo en puerto ${PORT}/api`);
    });
  } catch (err) {
    console.error("Error al conectar a MongoDB ❌", err.message);
    process.exit(1);
}
}

start();
