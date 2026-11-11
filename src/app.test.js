const request = require('supertest');
const app = require('./app');

describe('GET /api/health', () => {
  it('harus mengembalikan status 200 dan status ok', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'ok');
  });
});

describe('POST /api/math/add', () => {
  it('harus mengembalikan hasil penjumlahan yang benar', async () => {
    const res = await request(app)
      .post('/api/math/add')
      .send({ a: 5, b: 10 });
    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toBe(15);
  });

  it('harus mengembalikan error 400 jika input bukan angka', async () => {
    const res = await request(app)
      .post('/api/math/add')
      .send({ a: '5', b: 10 });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });
});