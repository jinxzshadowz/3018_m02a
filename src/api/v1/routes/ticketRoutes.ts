import { Router } from "express";
import { 
    getTickets,
    getTicket,
    getTicketsStatus
} from "../controllers/ticketController";

const router = Router();

router.get("/", getTickets);
router.get("/:id", getTicket);
router.get("/status/:status", getTicketsStatus);

export default router;