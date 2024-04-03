const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();

app.use(bodyParser());

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const millisecond = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${millisecond}ms`);
});


app.use(async ctx => {
    ctx.status = 200;
  ctx.body = ' this is a middleware logger. ';
  console.log(ctx.response.status);
  console.log(ctx.request.body);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});