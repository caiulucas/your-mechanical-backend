import request from 'supertest';
import connection from '../../src/database/connection';
import app from '../../src/app';

describe('Users', () => {
  beforeAll(async () => {
    await connection.create();
  });

  afterAll(async () => {
    await connection.close();
  });

  beforeEach(async () => {
    await connection.clear();
  });

  it('creates a user', async () => {
    const dataPayload = {
      name: 'Caio Lucas',
      username: 'caiulucas',
      email: 'caiolucasps2015@gmail.com',
      password: '123456',
    };

    const response = await request(app).post('/users').send(dataPayload);

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(dataPayload);
  });
});
