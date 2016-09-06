var express = require('express')
var port =process.env.PORT || 5000
var app=express()

app.set('views','./views')
app.set('view engine', 'jade')
app.listen(port)

console.log('终于成功了操你妈逼vi'+port)


app.get('/',function(req,res){
	res.render('index',{
		title:'你好吗'
	})
})
app.get('/list',function(req,res){
	res.render('index',{
		title:'我很好'
	})
})