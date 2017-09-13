## Functions

<dl>
<dt><a href="#routetable">routetable(app)</a> ⇒ <code>String</code></dt>
<dd><p>Simple print of your express routes.
While nothing remarkable it helps during development.</p>
<p>Also @see express-routemap <a href="https://github.com/izelnakri/express-routemap">https://github.com/izelnakri/express-routemap</a></p>
</dd>
</dl>

## External

<dl>
<dt><a href="#external_express">express</a></dt>
<dd><p>Express web framework.</p>
</dd>
</dl>

<a name="routetable"></a>

## routetable(app) ⇒ <code>String</code>
Simple print of your express routes.
While nothing remarkable it helps during development.

Also @see express-routemap [https://github.com/izelnakri/express-routemap](https://github.com/izelnakri/express-routemap)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| app | [<code>express</code>](#external_express) | Express instance |

**Example**  
```js
import express from 'express';
const app = express();

// routes here..

const table = routetable(app);
console.log(table);

// since you probably only want to run it when in development

if (process.env.NODE_ENV !== 'production') {
  // execute code here
}
```
<a name="external_express"></a>

## express
Express web framework.

**Kind**: global external  
**See**: [https://github.com/expressjs/express](https://github.com/expressjs/express)  
