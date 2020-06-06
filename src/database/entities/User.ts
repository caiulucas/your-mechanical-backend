import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  username!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;
}

export default User;
