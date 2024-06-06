const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 3001;

const SHOPIFY_API_KEY = "ce5ef30c1e4768394af59456800262b3";
const SHOPIFY_ACCESS_TOKEN = "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";
const SHOP_URL =
  "https://messold101.myshopify.com/admin/api/2023-01/products.json";
app.get("/", (req, res) => {
  res.json({ helo: "hello" });
});
app.get("/api/products", async (req, res) => {
  try {
    const response = await axios.get(SHOP_URL, {
      headers: {
        "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
