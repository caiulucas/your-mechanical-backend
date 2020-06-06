import factory from 'factory-girl';
import faker from 'faker';
import User from '../../src/database/entities/User';

factory.define('User', User, {
  name: faker.name.findName(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export default factory;
