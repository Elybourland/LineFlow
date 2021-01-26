import { Equipment } from './equipment.model';
import { User } from './user.model';

export enum JobType {

}

export interface Job {
    id: string,
    name: string,
    description: string,
    affectedEquipment: Equipment[],
    reported: Date,
    reportedBy: User,
    start: Date,
    end: Date,
    operator: User,
    comments: Comment[]
}