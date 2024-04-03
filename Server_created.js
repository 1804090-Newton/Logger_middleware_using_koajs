
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello, Koa!';
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080/');
});
