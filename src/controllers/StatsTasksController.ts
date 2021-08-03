/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { StatsTasksService } from '../services/StatsTasksService';

export class StatsTasksController {
  async handle(req: Request, res: Response) {
    const { user_id } = req.body;

    const statsTasksService = new StatsTasksService();

    const stats = await statsTasksService.execute(Number(user_id));

    return res.json(stats);
  }
}
