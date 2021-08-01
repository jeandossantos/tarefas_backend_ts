/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import { DeleteUseerService } from '../services/DeleteUSerService';

export class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteUserService = new DeleteUseerService();

    await deleteUserService.execute(Number(id));

    res.send();
  }
}
