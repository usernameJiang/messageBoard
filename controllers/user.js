
// 1. 加载mysql包
var mysql = require('mysql')

//2. 创建数据库连接
// 配置数据库信息
var connection = mysql.createConnection({
    host: 'localhost',   // 主机
    user: 'root',        // 数据库的用户名
    password: 'root',  // 数据库密码
    database: 'ithub'   // 数据库的名字
});

// 3. 开启连接
connection.connect();

// 4. sql query(增删改查sql)

// 渲染登录页面
exports.showSignin = (req, res) => {
    // res.send("showSignin")
    res.render('signin.html')
}

// 处理登录页面
exports.handleSignin = (req, res) => {
    // res.send("handleSignin")
    var body = req.body;
    // console.log(body);
    var sqlStr = 'select email from `users`'
    connection.query(sqlStr,(error,results)=>{
            if(error) {
                throw error
            }

            for(var i = 0; i < results.length; i++) {
        if(body.email == results[i].email){
            console.log("chengss");
        }
    }
        })

    res.render('index.html')
}

// 渲染注册页面
exports.showSignup = (req, res) => {
    // res.send("showSignup")
    res.render('signup.html')
}

// 处理注册请求
exports.handleSignup = (req, res) => {

    // 获取post 数据 配置 body-parser 





    var body = req.body;
    console.log(body);
    // res.send("handleSignup")
    // sql 有运算能力 
    var sqlStr = 'insert into `users` set ?'
    connection.query(sqlStr,body,
        function(error,results,fields) {
            if(error) {
                throw error;
                
            }
            console.log(results);
        })
     res.render('signup.html')
}

// 处理退出请求
exports.handleSignout = (req, res) => {
    res.send("handleSignout")
}


// 5. 关闭掉数据库
// connection.end();

// ctrl + d
// ctrl + shift + ← →
// ctrl+alt + 上下