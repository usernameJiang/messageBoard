// const fs = require('fs');

// // fs.readfile('../pageage.json','utf8',function(error,data){

// // });


// function readfile(path,callback) {
// 	fs.readfile(path,'utf8',(error,data)=>{
// 		if(error){
// 			// 错误处理优先
// 			callback(error);
// 			return;
// 		}

// 		callback(null,data)

// 	})
// }


// readfile('../pageage.json',(error,data)=>{
// 	if(error){
// 		return console.log(error);
// 	}

// 	console.log(data);

// })

const fs = require('fs');

function readFile(path,callback){
	fs.readFile(path,'utf8',(error,data)=>{
		if(error){
			callback(error);
			return ;
		}
		callback(null,data);
	})	
};


readFile('./a.json',(error,data)=>{
	if(error){
		return console.log(error);
	}
	console.log(data);
})

