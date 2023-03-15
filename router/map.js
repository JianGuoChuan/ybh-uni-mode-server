const express = require('express');
const Router = express.Router(); 
Router.get('/search/place', async( request, response ) => {
	console.log(request.query);
	if( !request.headers.authorization || request.headers.authorization != 'ybhZxcvbnMYbhWoghkLoveqwertYouoplsdfx' ){
		response.send({code:401, msg:'权限不足，请检查登录状态'});
		return
	}
	if( !request.query.placeName ){
		response.send({code:400,msg:'参数错误'})
		return
	}
	const data = { code:200, data: { 
		latitude: 28.238272,
		longitude: 112.937888,
		title: request.query.placeName
	}}
	// 服务器数据发送给请求
	response.send(data)
});

module.exports = Router;