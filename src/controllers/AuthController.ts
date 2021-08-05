/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';

export class AuthController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authService = new AuthService();

    const payload = await authService.execute({ email, password });

    return res.json(payload);
  }
}
