const test = require('tape');
const supertest = require('supertest');
const router = require('../src/router');

test('test', (t) => {
  t.equal(1, 1, 'test is pass');
  t.end();
});

test('test home page', (t) => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('content-type', /html/)
    .end((err) => {
      t.error(err);
      t.end();
    });
});

test('test food page', (t) => {
  supertest(router)
    .post('/food')
    .send('cheese')
    .expect(200)
    .expect('content-type', /application/)
    .end((err) => {
      t.error(err);
      t.end();
    });
});
