import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import menu from "./data/menu.js";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server running new commit 🚀");
});



app.get("/api/restaurants", (req, res) => {
  try {
    const dataPath = path.join(process.cwd(), "data", "restaurant.json");
    const data = fs.readFileSync(dataPath, "utf-8");
    res.json(JSON.parse(data));
  } catch (err) {
    console.error("Error reading restaurants.json:", err);
    res.status(500).json({ error: "Failed to load restaurants" });
  }
});


app.get("/api/menu/:id", (req, res) => {
  res.json(menu); // 🔥 mock swiggy menu
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
