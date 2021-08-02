/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { DeleteTaskService } from '../services/DeleteTaskService';

export class DeleteTaskController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteTaskService = new DeleteTaskService();

    await deleteTaskService.execute(Number(id));

    return res.send();
  }
}
