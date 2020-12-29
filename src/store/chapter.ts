import { action, makeObservable, observable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
console.log(uuidv4());
export class Chapter {
    public title: string = '';
    public author: string = '';
    public content: string = '';
    public sub: {
        id: string;
        title: string;
        author: string;
    }[] = [];
    public subMap: { [key: string]: Chapter } = {};
    public id: string = '';

    public initialized = false;


    constructor(source?: any) {

        if (source) {
            this.initialize(source);
        }

        makeObservable(this, {
            initialized: observable,
            id: observable,
            title: observable,
            author: observable,
            content: observable,
            sub: observable,
            subMap: observable,
            addSub: action,
            addSubMap: action,
            initialize: action,
        });
    }

    initialize(source: any) {
        this.id = source.id || uuidv4();
        this.title = source.title;
        this.author = source.author;
        this.content = source.content;
        this.sub = (source.sub || []);

        this.initialized = true;
    }

    addSub(source: {
        title: string;
        author: string;
        content: string;
        id: string;
    }) {
        this.sub.push({
            id: source.id,
            title: source.title,
            author: source.author,
        });
        this.addSubMap(new Chapter(source));
    }

    addSubMap(chapter: Chapter) {
        this.subMap[chapter.id] = chapter;
    }
}