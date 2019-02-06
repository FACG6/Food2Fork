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
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, 'should equal 200');
      t.end();
    });
});

test('test food page', (t) => {
  supertest(router)
    .post('/food')
    .send('cheese')
    .expect(200)
    .expect('content-type', /application/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, 'should equal 200');
      t.end();
    });
});
test('test home page', (t) => {
  supertest(router)
    .get('/public/css/style.css')
    .expect(200)
    .expect('content-type', /css/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, 'should equal 200');
      t.end();
    });
});
