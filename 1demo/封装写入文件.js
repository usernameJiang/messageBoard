// const fs = require('fs')

// // fs.writeFile(path,data,(error)=>{

// // });

// function writeFile(path,data,callback){
// 	fs.writeFile(path,data,(error)=>{
// 		if(error) {
// 		return callback(error);
// 		}
// 		callback(null);
// 	})
	
// }


// const sb= {
// 	name:'鼠标',
// 	age:'12'
// }

// writeFile('./a.json',JSON.stringify(sb),(error)=>{
// 	if(error) {
// 		return console.log(error);
// 	}

// 	console.log('write success');
// });

const fs = require('fs');

function writeFile(path,data,callback){
	fs.writeFile(path,data,(error)=>{
		if(error) {
			return callback(error)
		}
		callback(data)
	});
};


const haha = {
	name:'zs',
	age:16,
	gender:'男'
};

writeFile('a.json',JSON.stringify(haha),(error)=>{
	if(error) {
		return console.log(error);
	}
	console.log("haha");
});