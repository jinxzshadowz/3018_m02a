import { Request, Response } from "express";
import { getAllTickets } from "../services/ticketService";

export const getTickets = (req: Request, res: Response) => {
    const tickets = getAllTickets();
    res.status(200).json(tickets);
};