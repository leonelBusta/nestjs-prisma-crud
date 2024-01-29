import { TaskService } from './task.service';
import { Taks } from '@prisma/client';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    getAllTasks(): Promise<{
        id: number;
        title: string;
        description: string;
    }[]>;
    createTask(data: Taks): Promise<{
        id: number;
        title: string;
        description: string;
    }>;
    getTaskById(id: string): Promise<{
        id: number;
        title: string;
        description: string;
    }>;
    deleteTasks(id: string): Promise<{
        id: number;
        title: string;
        description: string;
    }>;
    updateTask(id: string, data: Taks): Promise<{
        id: number;
        title: string;
        description: string;
    }>;
}
