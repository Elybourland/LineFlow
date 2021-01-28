export interface SummaryAction { 
    id: number;
    name: string;
    route: string;
}

export interface Summary { 
    id: number;
    icon: string;
    title: string;
    body: string;
    actions?: SummaryAction[];
}