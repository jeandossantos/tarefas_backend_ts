/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import { ValidationTokenService } from '../services/ValidationTokenService';

export class ValidationTokenController {
  async handle(req: Request, res: Response) {
    const { token } = req.body;

    const validationTokenService = new ValidationTokenService();

    const isValid = await validationTokenService.execute(token);

    return res.send(isValid);
  }
}
