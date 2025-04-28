import dotenv from "dotenv";
dotenv.config();

import express from "express";
const PORT = process.env.PORT || 5000;
const app = express();

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
