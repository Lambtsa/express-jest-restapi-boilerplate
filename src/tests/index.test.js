const request = require('supertest')
const app = require('../../app');

describe('Sanity test', () => {
  it('should test that 1 === 1', () => {
    expect(1).toBe(1)
  })
})

describe('Photos endpoint', () => {
  it('should return object', async () => {
    const res = await request(app)
      .get('/api/photos')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
      message: "hello world"
    })
  })
})
