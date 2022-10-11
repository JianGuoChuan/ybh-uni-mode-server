const express = require('express');
const Router = express.Router(); 
// const userModel = require('../model/user-schema.js');
// const dbHandel = require('../db/handel.js');
Router.post('/login', async( request, response ) => {
	if( !request.body ){
		response.send({code:400,msg:'参数错误'})
		return;
	}
	let relPhone = '19992454529', relVerifiCode = '924452';
	let phone = request.body.phone;
	let verifiCode = request.body.verifiCode;
	// 正则验证
	let telRge = /^1[3-9]\d{9}$/g;
	if(!telRge.test(phone)){
		response.send({code:400,msg:'请输入合法手机号'});
		return;
	}
	let verifiCodeReg = /^[0-9]{6}$/g;
	if(!verifiCodeReg.test(verifiCode)){
		response.send({code:10004,msg:'验证码不合法'});
		return;
	}
	if(phone !== relPhone || verifiCode !== relVerifiCode){
		response.send({code:400,msg:'手机号或验证码不正确'});
		return;
	}
	
	const data = { code:200, msg:'登录成功', token: 'ybhZxcvbnMYbhWoghkLoveqwertYouoplsdfx', username: '离谱', phone: '19992454529'}
	// 服务器数据发送给请求
	response.send(data)
});

module.exports = Router;