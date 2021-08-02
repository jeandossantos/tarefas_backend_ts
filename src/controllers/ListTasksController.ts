/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import { ListTasksService } from '../services/ListTasksSerivce';

export class ListTasksController {
  async handle(req: Request, res: Response) {
    const { user_id } = req.body;

    const listTasksService = new ListTasksService();

    const tasks = await listTasksService.execute(user_id);

    return res.json(tasks);
  }
}
