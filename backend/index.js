import express from "express";
import cors from "cors";
import menu from "./data/menu.js";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

app.get("/api/restaurants", async (req, res) => {
  try {
    console.log("Route hit");

    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3165&lng=78.0322&page_type=DESKTOP_WEB_LISTING"
    );

    console.log("Response status:", response.status);

    const text = await response.text();
    console.log("Raw response:", text.substring(0, 200));

    res.send(text);
  } catch (error) {
    console.error("Backend error:", error);
    res.status(500).json({ error: error.message });
  }
});


app.get("/api/menu/:id", (req, res) => {
  res.json(menu); // 🔥 mock swiggy menu
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
