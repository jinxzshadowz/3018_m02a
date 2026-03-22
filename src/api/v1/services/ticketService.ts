import { ticketData } from "../../../data/ticketData";
import { Ticket } from "../types/ticket";

export const getAllTickets = (): Ticket[] => {
    return ticketData;
};