/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import { UpdateUserService } from '../services/UpdateUSerService';

export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { name, initiais, email } = req.body;
    const { id } = req.params;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.execute({
      id: Number(id),
      name,
      initiais,
      email,
    });

    return res.json(user);
  }
}
