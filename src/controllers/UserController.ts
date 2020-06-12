import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../database/entities/User';

export default {
  async create(req: Request, res: Response) {
    const repository = getRepository(User);
    const user = await repository.save(req.body as User);

    if (!user) return res.status(400).json({ err: 'Unable to register user' });

    return res.status(201).json(user);
  },
};
