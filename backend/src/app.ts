import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import propertyRoutes from "./routes/propertyRoutes";
import inquiryRoutes from "./routes/inquiryRoutes";
import maintenanceRoutes from "./routes/maintenanceRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "London Estate Agency API" });
});

app.use("/api/properties", propertyRoutes);
app.use("/api", inquiryRoutes);
app.use("/api", maintenanceRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
