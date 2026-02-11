import express from "express";
import cors from "cors";
import menu from "./data/menu.js";
const app = express();
const PORT = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

app.get("/api/menu/:id", (req, res) => {
  res.json(menu); // 🔥 mock swiggy menu
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
