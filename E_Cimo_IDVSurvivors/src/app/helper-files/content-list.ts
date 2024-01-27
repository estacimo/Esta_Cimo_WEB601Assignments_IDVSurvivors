import { Content } from './content-interface'

export class ContentList {
    private _content: Content[];

    constructor() {
        this._content = [];
    }

    get content(): Content[] {
        return this._content;
    }

    addContentItem(contentItem: Content): void {
        this._content.push(contentItem);
    }

    itemCount<T>(_content: Content[]): number {
        return this._content.length;
    }

    getContentHTML(i:number): string {
        let contentItem:Content = this._content[i];
        return '<p>' + contentItem.description + '</p>' + contentItem.id + '<img url="' + contentItem.imgURL + '"></img>';
    }
}