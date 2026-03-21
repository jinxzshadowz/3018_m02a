import { Ticket } from "../api/v1/types/ticket";
import rawTickets from "./tickets.json";

export const ticketData: Ticket[] = rawTickets as Ticket[];
