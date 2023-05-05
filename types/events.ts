export type EventType = {
    id: string;
    title?: string | null;
    caption: string;
    price: number;
    date: any;
    time: any;
    photo?: string | null;
    video?: string | null;
    timestamp: any;
    tags?: string;
    address?: string;
    isComplete: boolean;
};
