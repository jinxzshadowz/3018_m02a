import { Request, Response } from "express";
import { 
    getAllTickets,
    getTicketById,
    getTicketsByStatus,
    getTicketsByPriority,
    getTicketsByAssignee
} from "../services/ticketService";
import { createTicket } from "../services/ticketService";
import { Ticket } from "../types/ticket";

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

export const getTicketsPriority = (req: Request, res: Response) => {
  const priority = req.params.priority;

  const validPriorities = ["low", "medium", "high", "critical"];
  if (!validPriorities.includes(priority)) {
    return res.status(400).json({ message: "Invalid priority" });
  }

  const tickets = getTicketsByPriority(priority);
  res.status(200).json(tickets);
};

export const getTicketsAssignee = (req: Request, res: Response) => {
    const assignee = req.params.assignee;

    if (!assignee) {
        return res.status(400).json({ message: "Assignee is required" });
    }

    const tickets = getTicketsByAssignee(assignee);
    res.status(200).json(tickets);
};

export const createNewTicket = (req: Request, res: Response) => {
    const { id,title, description, status, priority, assignee } = req.body;

    if (!id || !title || !description || !status || !priority || !assignee) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const newTicket: Ticket = {
        id,
        title,
        description,
        status,
        priority,
        assignee,
        createdAt: new Date().toISOString(),
    };

    const created = createTicket(newTicket);
    res.status(201).json(created);
};