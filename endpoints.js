const express= require('express');
const services = require('./services');

exports.routes= (app) => {

	app.get('/', (request,response)=> {
		response.send('hola');
	});

app.get('/usuario', (request,response) => {
	const usuario = {
		name: 'Alfredo',
		edad: 28
	}
		response.send(usuario);
});

app.get ('/usuarios', (request, response) => { 
		const name= request.query.name;
		const age = request.query.age;
		const ageName = age + ' ' + name;
		response.send(ageName);
	});

app.delete('/borrar', (request, response) => {
	const id = request.query.id;
});

app.post ('/datos',(request, response)=> {
	const postData=request.body;
	services.addID(postData);
	response.json(postData);
});


app.get('/year', (request,response) => {
    const y = request.query.year;
	const currentYear = 2019;
	const result = currentYear-y;
	response.send('edad:' + result);
});

app.get('/html', (request, response) => { 
response.render('form');
});

app.post('/form', (request, response) => { 
	const data =request.body;
response.send(data);
});

}
