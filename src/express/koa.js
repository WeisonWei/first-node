//npm install koa --save
//npm i koa -S
//koa@2.11.0
/*

app.use('/test', function *() {
    yield doReadFile1();
    var data = yield doReadFile2();
    this.body = data;
});

app.listen(3000);

*/

// 导入koa模块
const Koa = require('koa');
// 创建koa的实例app
const app = new Koa();

app.use(async ctx => {
    ctx.body = "Hello World"
})

app.use(async (ctx, next) => {
    if (ctx.request.path === '/') {
        ctx.response.body = 'index page';
    } else {
        await next();
    }
});

app.use(async (ctx, next) => {
    if (ctx.request.path === '/test') {
        ctx.response.body = 'TEST page';
    } else {
        await next();
    }
});

app.use(async (ctx, next) => {
    if (ctx.request.path === '/error') {
        ctx.response.body = 'ERROR page';
    } else {
        await next();
    }
});

// 监听端口
app.listen(3000, () => {
    console.log("服务器已启动，http://localhost:3000");
})