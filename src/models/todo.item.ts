export class TodoItem {

    id: number;
    title: string;
    notes: string;
    done: boolean = false;
    created: Date = new Date();

    constructor (id: number, title: string, notes: string) {
        this.id = id;
        this.title = title;
        this.notes = notes;
    }
}
