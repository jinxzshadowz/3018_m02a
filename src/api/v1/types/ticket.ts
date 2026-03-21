export interface Ticket {
    id: number;
    title: string;
    description: string;
    priority: "low" | "medium" | "high" | "critical";
    status: "open" | "resolved";
    createdAt: string;
}