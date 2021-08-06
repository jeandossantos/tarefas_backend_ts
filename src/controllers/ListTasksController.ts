/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import { ListTasksService } from '../services/ListTasksSerivce';

export class ListTasksController {
  async handle(req: Request, res: Response) {
    const user_id = req.user.id;
    const search = req.query.search || '';
    const page = req.query.page || 1;

    const listTasksService = new ListTasksService();

    const tasks = await listTasksService.execute(
      user_id,
      String(search),
      Number(page),
    );

    return res.json(tasks);
  }
}
