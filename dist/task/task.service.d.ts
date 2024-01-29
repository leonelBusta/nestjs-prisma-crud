import { Taks } from '@prisma/client';
import { PrismaService } from "src/prisma/prisma.service";
export declare class TaskService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllTasks(): Promise<Taks[]>;
    getTaskById(id: number): Promise<Taks>;
    createTask(data: Taks): Promise<Taks>;
    updateTasks(id: number, data: Taks): Promise<Taks>;
    deleteTasks(id: number): Promise<Taks>;
}
