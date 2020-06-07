import { EntitySchema } from 'typeorm';

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  password: string,
}

const UserEntity = new EntitySchema<User>({
  name: 'users',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
      nullable: false,
    },
    username: {
      type: String,
      nullable: false,
    },
    email: {
      type: String,
      nullable: false,
    },
    password: {
      type: String,
      nullable: false,
    },
  },
});

export default UserEntity;
