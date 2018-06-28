// 读取
function readfile(path,callback) {
	fs.readfile(path,'utf8',(error,data)=>{
		if(error){
			// 错误处理优先
			callback(error);
			return;
		}

		callback(null,data)

	})
};


// 写入
function writeFile(path,data,callback){
	fs.writeFile(path,data,(error)=>{
		if(error) {
		return callback(error);
		}
		callback(null);
	})
	
};



// 复制文件
function copy(srcPath,destPath,callback) {

	// 读
	readfile(srcPath,(error,data)=>{
		if(error) {
			return callback(error)
		}

		writeFile(destPath,data,(error)=>{
			if(error) {
				return callback(error);
			}



		});

	});
}




copy('./a.json','../pageage.json',(error)=>{
	if(error){
		return console.log(error);
	}
	console.log('成功')
})