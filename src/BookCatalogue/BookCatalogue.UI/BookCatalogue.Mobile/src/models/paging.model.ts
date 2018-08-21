const PAGE_SIZE: number = 20;

export class PagingModel {
    constructor(public offset: number = 0, public take: number = PAGE_SIZE) {
    }

    update() {
        this.offset += PAGE_SIZE;
    }

    reset() {
        this.offset = 0;
    }
}