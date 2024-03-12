export interface Card {
    img: string;
    description: string;
}

export interface TimelineEntryData {
    id: number;
    date: string;
    cards: Card[];
    company: string;
    companyLogo: string;
    location: string;
    joinedDate: string;
    role: string;
    jobStatus: string;
}