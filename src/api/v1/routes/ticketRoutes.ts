import { Router } from "express";
import { 
    getTickets,
    getTicket,
    getTicketsStatus,
    getTicketsPriority
} from "../controllers/ticketController";

const router = Router();

router.get("/", getTickets);
router.get("/status/:status", getTicketsStatus);
router.get("/priority/:priority", getTicketsPriority);
router.get("/:id", getTicket);

export default router;