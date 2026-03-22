import { Request, Response } from "express";
import { 
    getAllTickets,
    getTicketById,
    getTicketsByStatus
} from "../services/ticketService";

export const getTickets = (req: Request, res: Response) => {
    const tickets = getAllTickets();
    res.status(200).json(tickets);
};

export const getTicket = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const ticket = getTicketById(id);

    if (!ticket) {
        return res.status(404).json({ message: "Ticket not found" });
    }

    res.status(200).json(ticket);
};

export const getTicketsStatus = (req: Request, res: Response) => {
    const status = req.params.status;

    const validStatuses = ["open", "resolved"];
    if (!validStatuses.includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
    }

    const tickets = getTicketsByStatus(status);
    res.status(200).json(tickets);
};
