import endpoints from 'express-list-endpoints';
import chalk from 'chalk';
import Table from 'tty-table';
import R from 'ramda';

const concat = R.curry(function(...args) {
  return Array.prototype.concat.call([], ...args);
});

const rows = R.pipe(
  endpoints,
  R.map(R.liftN(2, concat)(
    R.prop('methods'),
    R.prop('path')
  )),
);

const headers = [{
  value: 'Method',
  width: 20,
  align: 'left',
  paddingLeft: 1,
  formatter(method) {
    switch (method) {
      case 'GET':
        return chalk.yellow(method);
      case 'POST':
        return chalk.green(method);
      case 'DELETE':
        return chalk.red(method);
      case 'PUT':
        return chalk.cyan(method);
      default:
        return method;
    }
  }
}, {
  value: 'Route',
  width: 60,
  align: 'left',
  paddingLeft: 1
}];

/**
 * Express web framework.
 * @external express
 * @see {@link https://github.com/expressjs/express}
 */

/**
 *
 * Display table of your express routes.
 *
 * @description
 * Simple print of your express routes.
 * While nothing remarkable it helps during development.
 *
 * Also @see express-routemap {@link https://github.com/izelnakri/express-routemap}
 *
 * @example
 *
 * import express from 'express';
 * const app = express();
 *
 * // routes here..
 *
 * const table = routetable(app);
 * console.log(table);
 *
 * // since you probably only want to run it when in development
 *
 * if (process.env.NODE_ENV !== 'production') {
 *   // execute code here
 * }
 *
 * @param {external:express} app - Express instance
 * @returns {String}
 */
export default function routetable(app) {
  return Table(headers, rows(app)).render();
}

