import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../database/entities/User';

export default {
  async create(req: Request, res: Response) {
    const repository = getRepository(User);

    const {
      name, username, email, password,
    } = req.body as User;

    const user = new User();
    user.name = name;
    user.username = username;
    user.email = email;
    user.password = password;

    const savedUser = await repository.save(user);

    return res.status(201).json(savedUser);
  },
};
