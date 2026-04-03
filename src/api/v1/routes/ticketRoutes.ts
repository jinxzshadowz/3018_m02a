import { Router } from "express";
import { 
    getTickets,
    getTicket,
    getTicketsStatus,
    getTicketsPriority,
    getTicketsAssignee,
    createNewTicket
} from "../controllers/ticketController";

const router = Router();

router.get("/", getTickets);
router.get("/status/:status", getTicketsStatus);
router.get("/priority/:priority", getTicketsPriority);
router.get("/assigned/:assignee", getTicketsAssignee);
router.post("/", createNewTicket);
router.get("/:id", getTicket);

export default router;