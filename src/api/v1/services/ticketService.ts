import { ticketData } from "../../../data/ticketData";
import { Ticket } from "../types/ticket";

export const getAllTickets = (): Ticket[] => {
    return ticketData;
};

export const getTicketById = (id: number) => {
    return ticketData.find((ticket) => ticket.id === id);
};