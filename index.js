const express = require ('express');
const config = require('./config');
const endpoints=require ('./endpoints');

const app = express();
const port = 3000;

config.setup(app);
endpoints.routes(app);

app.listen(port, () => console.log ('el servidor esta corriendo'));			

/*
app.post ('/datos',(request, response)=> {
	const posData=request.body;
	response.json(posData);
});


app.get('/year', (request,response) => {
    const y = request.query.year;
	const currentYear = 2019;
	const result = currentYear-y;
	response.send('edad:' + result);
});
	

app.get('/edad', (request,response) => {
	const cumple =request.query.año;
	const fecha = request.query.actual;
	const obj = {
	  actual: fecha - (año : cumple)
	}
	response.edad(obj);
//});

app.get('/json', (request,response) => {
	const tel =request.query.telefono;
	const brand = request.query.marca;
	const obj = {
		telefono : tel,
		marca: brand
	}
	//response.json(obj);
});

//http://localhost:3000/json?telefono=iphone&marca=apple tiene que ser la liga para que coincida con los parámetros arriba descritos


app.get('/', (request, response) => {
//	response.send('hola');
});








function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}


//alert(reverse("hello"));




app.get('/usuario', (request,response) => {
	const usuario = {
		name: 'Alfredo',
		edad: 28
	}
		//response.send(usuario);
});

app.get ('/usuarios', (request, response) => { 
		const name= request.query.name;
		const age = request.query.age;
		const ageName = age + ' ' + name;
		response.send(ageName);
	});

app.delete('/borrar', (request, response) => {
	const id = request.query.id;
	//aqui es donde se borra el recurso
	//response.send('se borro' +id);

*/


