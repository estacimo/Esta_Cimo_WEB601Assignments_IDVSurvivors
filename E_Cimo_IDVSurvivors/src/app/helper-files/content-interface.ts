export interface Content {
    id: number;
    title: string;
    fName: string;
    lName: string;
    creator: string;
    description: string;
    item: string;
    imgURL?: string;
    type?: string;
    tags?: string[];
}