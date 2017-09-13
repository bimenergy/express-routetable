/* eslint no-console: 0 */
import express from 'express';
/* globals test, expect */

import routetable from './';

const router = express.Router();
const noop = () => null;

router.get('/test', noop);
router.post('/test2', noop);

test('should make table', function(done) {
  const table = routetable(router);
  expect(table).toEqual(expect.any(String));
  return done();
});

