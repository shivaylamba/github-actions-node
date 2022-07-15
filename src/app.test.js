const app = require('./app');
const supertest = require('supertest');
const request = supertest(app);

describe('/testNod endpoint', () => {
  it('should return a response', async () => {
    const response = await request.get('/testNode');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Yes the testNode endpoint worked');
  });
});
