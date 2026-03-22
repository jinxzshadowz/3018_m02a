import healthRoutes from "./api/v1/routes/healthRoutes";
import ticketRoutes from "./api/v1/routes/ticketRoutes";
import express from "express";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

// Health Route
app.use("/api/v1/health", healthRoutes);

// Ticket Routes
app.use("/api/v1/tickets", ticketRoutes);

export default app;