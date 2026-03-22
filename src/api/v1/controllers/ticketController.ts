import { Request, Response } from "express";
import { getAllTickets, getTicketById } from "../services/ticketService";

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