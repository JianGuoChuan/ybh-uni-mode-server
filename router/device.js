const express = require('express');
const Router = express.Router(); 
Router.get('/checkVersion', async( request, response ) => {
	const data = { code:200, data: { maxVersion: '2.0.1', minVersion: '1.0.5', updateContent: '修复已知bug，修复样式异常', downloadUrl: 'http://test.com' }}
	// 服务器数据发送给请求
	response.send(data)
});

module.exports = Router;