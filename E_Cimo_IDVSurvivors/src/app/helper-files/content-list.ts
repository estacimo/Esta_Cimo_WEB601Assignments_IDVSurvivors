import { Content } from './content-interface'

export class ContentList {
    private contentArray: Content[];

    constructor() {
        this.contentArray = [];
    }

    get contentArrayGet(): Content[] {
        return this.contentArray;
    }

    addContentItem(contentItem: Content): void {
        this.contentArray.push(contentItem);
    }

    itemCount(): number {
        return this.contentArray.length;
    }

    getInnerHTML(i:number): string {
        let contentItem:Content = this.contentArray[i];
        return `<div>
                <h2>${contentItem.title}</h2>
                <img src="${contentItem.imgURL}" alt=${contentItem.title}>
                <h3>${contentItem.fName} ${contentItem.lName}</h3>
                <p>Description: ${contentItem.description}</p>
                <p>Type: ${contentItem.type}</p>
                <p>Item: ${contentItem.item}</p>
                <p>Creator: ${contentItem.creator}</p>`;
    }
}