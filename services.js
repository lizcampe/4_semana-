exports.addID=(obj) => {
	var i=0;
	obj.forEach(element => {
    element.id = ++i; 
	});

    return obj;
}
