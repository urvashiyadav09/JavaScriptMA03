var authorJson = {
"video": [{
 "id": 12312412312,
 "name": "Ecuaciones Diferenciales",
 "url": "/video/math/edo/12312412312",
 "author": {
	 "data": [{
		 "name_author": "Alejandro Morales",
		 "url": "/author/alejandro-morales",
		 "type": "master"
	 }]
 }
}]
}
("hi");
console.log((authorJson.video)[0].id);
console.log((authorJson.video)[0].name);
console.log((authorJson.video)[0].url);
console.log((authorJson.video)[0].author.data[0].name_author);
console.log((authorJson.video)[0].author.data[0].url);
console.log((authorJson.video)[0].author.data[0].type);
