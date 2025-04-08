import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); //read env

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors()); // prevent CORS error
app.use(express.json()); // parse JSON request body

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" }); // Health check
});

app.listen(PORT, () => {
  // run server(Express, PORT 4000)
  console.log(`Backend running at http://localhost:${PORT}`);
});
