/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import { UpdateUserService } from '../services/UpdateUserService';

export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { id, name, initiais, email } = req.body;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.execute({
      name,
      initiais,
      email,
      id,
    });

    return res.json(user);
  }
}
