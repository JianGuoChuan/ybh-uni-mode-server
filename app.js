// 引入 express
const express = require('express')
// const path = require('path');
// 获取post请求数据
const bodyParser = require('body-parser');
// 跨域中间件
const cors = require("cors");
// 引入路由
const loginRouter = require('./router/login.js');
const deviceRouter = require('./router/device.js');
const testRouter = require('./router/test.js');
// https://blog.csdn.net/weixin_41184962/article/details/124930137

// 创建一个服务器对象
const app = express()

// 调用跨域中间件
app.use(cors());
// 调用body
app.use(bodyParser.urlencoded({extended:false}));
 
app.use((request, response, next) => {
	console.log('有人请求了服务器')
	console.log('请求来自于', request.get('Host'));
	console.log('请求的地址', request.url);
	next()
})

app.use(loginRouter);
app.use(deviceRouter);
app.use(testRouter);
 
// 开启服务器, 5001 是端口号
app.listen(9245, (err) => {
	if (!err) {
		console.log('服务器启动成功，请求信息地址：http://localhost:9245')
	}
})









// -----------------


// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const loginRouter = require('./router/login.js');
// const app = express();

// app.use( express.static(path.join(__dirname,'public')));
// app.use(( request, response, next )=>{
// 	console.log('有人请求服务器');
// 	console.log('请求来自于', request.get('Host'));
// 	console.log('请求的地址', request.url);
// 	next()
// })

// app.get('/login', async( request, response ) => {
// 	response.send([
// 		{id:'001',name:'tom',age:18},
// 		{id:'002',name:'jerry',age:19},
// 		{id:'003',name:'tony',age:120},
// 	]);
// });
//post三方
// app.use(bodyParser.urlencoded({extended:false}));
// console.log(loginRouter);
// app.use(loginRouter);

// app.listen( 9245, (err) => {
// 	if(!err) console.log('服务开启成功，服务地址为：http://localhost:9245');;
// })
