import {FieldPacket} from "mysql2";

export interface ChildEntity {
    update(): Promise<void>
    id?: string;
    name: string;
    giftId: string;
}

export interface GiftEntity {
    id?: string;
    name: string;
    count: number;


    countGivenGifts(): Promise<number>;
}

export type ChildRecordResults = [ChildEntity[], FieldPacket[]];
export type GiftRecordResults = [GiftEntity[], FieldPacket[]];