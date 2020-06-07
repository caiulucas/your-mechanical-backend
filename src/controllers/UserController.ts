import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import UserSchema, { User } from '../database/entities/UserSchema';

export default {
  async create(req: Request, res: Response) {
    const repository = getRepository(UserSchema);

    const savedUser = await repository.save(req.body as User);

    return res.status(404).json(savedUser);
  },
};
