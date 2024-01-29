/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param, BadRequestException, NotFoundException } from "@nestjs/common";
import { TaskService } from './task.service';
import { Taks } from '@prisma/client';
@Controller('tasks')
export class TaskController{

    constructor(private readonly taskService: TaskService){}

    @Get()
    async getAllTasks(){
       return this.taskService.getAllTasks()
    }

    @Post()
    async createTask(@Body() data: Taks){
        return this.taskService.createTask(data)
    }

    @Get(':id')
    async getTaskById(@Param('id') id: string){
        const taskFound= await this.taskService.getTaskById(Number(id))
        if (!taskFound) throw new BadRequestException('tarea no existente')
        return taskFound
    }
    @Delete(':id')
    async deleteTasks(@Param('id') id: string){
        try {
            return await this.taskService.deleteTasks(Number(id))
        }catch(error){
            throw new NotFoundException("no existe tarea")
        }
    }

    @Put(':id')
    async updateTask(@Param('id') id: string, @Body() data: Taks){
        try {
            return await this.taskService.updateTasks(Number(id), data)
        }catch(error){
            throw new NotFoundException("no existe tarea")
        }
    }

}