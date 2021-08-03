/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { FinishTaskService } from '../services/FinishTaskService';

export class FinishTaskController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const finishTaskService = new FinishTaskService();

    const task = await finishTaskService.execute(Number(id));

    res.json(task);
  }
}
