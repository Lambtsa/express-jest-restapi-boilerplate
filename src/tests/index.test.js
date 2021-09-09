const request = require('supertest')
const app = require('../../app');

describe('Sanity test', () => {
  test('1 should equal 1', () => {
    expect(1).toBe(1)
  })
})

describe('Photos endpoint', () => {
  test('should return Hello World', async () => {
    const res = await request(app)
      .get('/api/photos')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
      message: "hello world"
    })
  })
})
