/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { CreateTaskService } from '../services/CreateTaskService';

export class CreateTaskController {
  async handle(req: Request, res: Response) {
    const { user_id, name, description, priority, deadline } = req.body;

    const createTaskService = new CreateTaskService();

    const task = await createTaskService.execute({
      user_id,
      name,
      description,
      priority,
      deadline,
    });

    return res.json(task);
  }
}
