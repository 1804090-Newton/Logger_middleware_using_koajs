const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const millisecond = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${millisecond}ms`);
});


app.use(async ctx => {
  ctx.body = 'Hi , I am Newton. I have developed this app using Koa.js!. this is a middleware logger. It will log the time taken to process the request. ';
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
