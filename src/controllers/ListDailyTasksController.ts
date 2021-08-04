/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { ListDailyTasksService } from '../services/ListDailyTasksService';

export class ListDailyTasksController {
  async handle(req: Request, res: Response) {
    const { user_id } = req.body;
    const search = req.query.search || '';
    const page = req.query.page || 1;

    const listDailyTasksService = new ListDailyTasksService();
    const tasks = await listDailyTasksService.execute(
      user_id,
      String(search),
      Number(page),
    );

    return res.json(tasks);
  }
}
