import { Equipment } from "./equipment.model";
import { Job } from "./job.model";
import { User } from "./user.model";

export interface Department { 
    id: number;
    name: string;
    description: string;
    users: User[];
    equipment: Equipment[];
    jobs: Job[];
}