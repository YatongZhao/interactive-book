import { action, computed, makeObservable, observable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
console.log(uuidv4());
export class Chapter {
    public title: string = '';
    public author: string = '';
    public content: string[] = [];
    public sub: {
        id: string;
        title: string;
        author: string;
    }[] = [];
    public subMap: { [key: string]: Chapter } = {};
    public id: string = '';
    public likeNum = 0;
    public liked = false;

    public selectedSubId = '';

    public initialized = false;

    public get selectedSubIdIndex(): number {
        return this.sub.findIndex(sub => this.selectedSubId === sub.id);
    }

    public get hasPreSubId(): boolean {
        return this.selectedSubIdIndex > 0;
    }

    public get hasNextSubId(): boolean {
        return this.selectedSubIdIndex < this.sub.length - 1;
    }

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
            selectedSubId: observable,
            likeNum: observable,
            liked: observable,
            selectedSubIdIndex: computed,
            hasPreSubId: computed,
            hasNextSubId: computed,
            addSub: action,
            addSubMap: action,
            setSelectedSubId: action,
            setNextSelectedSubId: action,
            setPreSelectedSubId: action,
            initialize: action,
            setLikeNum: action,
            setLiked: action,
        });
    }

    initialize(source: any) {
        this.id = source.id || uuidv4();
        this.title = source.title;
        this.author = source.author;
        this.content = source.content;
        this.sub = (source.sub || []);
        this.likeNum = source.likeNum;
        this.liked = source.liked;

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

    setSelectedSubId(id: string) {
        this.selectedSubId = id;
    }

    setNextSelectedSubId() {
        this.selectedSubId = this.sub[this.selectedSubIdIndex + 1].id;
    }

    setPreSelectedSubId() {
        this.selectedSubId = this.sub[this.selectedSubIdIndex - 1].id;
    }

    setLikeNum(num: number) {
        this.likeNum = num;
    }

    setLiked(bool: boolean) {
        this.liked = bool;
    }
}