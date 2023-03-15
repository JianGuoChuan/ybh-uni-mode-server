const express = require('express');
const Router = express.Router(); 
Router.get('/test', async( request, response ) => {
	if( !request.headers.authorization || request.headers.authorization != 'ybhZxcvbnMYbhWoghkLoveqwertYouoplsdfx' ){
		response.send({code:401, msg:'权限不足，请检查登录状态'});
		return
	}
	const data = { code:200, msg:'服务连接成功'}
	// 服务器数据发送给请求
	response.send(data)
});

module.exports = Router;