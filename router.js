

const router = (request, response)=> {
	if (request.url ==="/pag2") { 
		response.end ("pag2");}
		else {
			response.end("page default");
		}
};


module.exports = router