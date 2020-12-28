import { action, makeObservable, observable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

export class Chapter {
    public title: string = '';
    public author: string = '';
    public content: string = '';
    public sub: Chapter[] = [];
    public id: string = '';

    constructor(source: any) {
        this.id = source.id || uuidv4();
        this.title = source.title;
        this.author = source.author;
        this.content = source.content;
        this.sub = (source.sub || []).map((source: any) => new Chapter(source));

        makeObservable(this, {
            title: observable,
            author: observable,
            content: observable,
            sub: observable,
            addSub: action,
        });
    }

    addSub(source: {
        title: string;
        author: string;
        content: string;
    }) {
        this.sub.push(new Chapter(source));
    }
}