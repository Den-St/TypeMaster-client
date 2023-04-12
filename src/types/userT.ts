import { RecordT } from "./recordT";

export type UserT = {
    name:string;
    email:string;
    bestRecord?:RecordT;
    avatarUrl?:string;
    id:number;
    createdAt:string;
}