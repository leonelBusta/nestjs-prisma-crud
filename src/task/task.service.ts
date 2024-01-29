/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Taks } from '@prisma/client';
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class TaskService{


    constructor(private prisma: PrismaService){}

    async getAllTasks(): Promise<Taks[]>{
        return this.prisma.taks.findMany();
    }

    async getTaskById(id: number): Promise<Taks>{
        return this.prisma.taks.findUnique({
            where:{
                id
            }
        });
    }

    async createTask(data: Taks): Promise<Taks>{
        return this.prisma.taks.create({
            data
        });
    }

    async updateTasks(id: number, data: Taks): Promise<Taks>{
        return this.prisma.taks.update({
            where:{
                id
            },
            data
        });
    }

    async deleteTasks(id: number): Promise<Taks>{
        return this.prisma.taks.delete({
            where: {
                id
            }
        });
    }
}//fin