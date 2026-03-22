import { Router } from "express";
import { getTickets, getTicket } from "../controllers/ticketController";

const router = Router();

router.get("/", getTickets);
router.get("/:id", getTicket);

export default router;