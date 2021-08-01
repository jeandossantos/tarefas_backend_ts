/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, initiais, email, password, confirmPassword } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      initiais,
      email,
      password,
      confirmPassword,
    });

    return res.json(user);
  }
}

export { CreateUserController };
