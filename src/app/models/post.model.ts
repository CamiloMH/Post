import { User } from "../interfaces/user.interface"


export class Post {
    constructor(
        private content: string,
        private important?: string,
        private User: User,
        private id: string,
    ) { }
}