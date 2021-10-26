

export class User {
    constructor(
        private name: string,
        private lastName: string,
        private mail: string,
        private password: string,
        private id?: string,
    ) { }
}