// 1 安装express
// 2 express.Router() 
// 3 router.get()
// 4 导出router
// 5 在app.js导入 并且 挂载路由 app.use(router)
var express = require('express')
var user = require('./controllers/user')
var topic = require('./controllers/topic')
var index = require('./controllers/index')

var router = express.Router()

// 首页路由 渲染首页
router.get('/', index.showIndex)

// 用户路由
router
    // 渲染登录页面
    .get('/signin', user.showSignin)
    // 处理登录页面
    .post('/signin', user.handleSignin)
    // 渲染注册页面
    .get('/signup', user.showSignup)
    // 处理注册请求
    .post('/signup', user.handleSignup)
    // 处理退出请求
    .post('/signout', user.handleSignout)


// 话题路由
router
    // 渲染发布话题页面
    .get('/topic/create', topic.showTopic)
    // 处理发布请求请求
    .post('/topic/create', topic.handleTopic)
    // 渲染话题详情页面
    .get('/topic/:topicID', topic.showTopicID)
    // 渲染编辑话题页面
    .get('/topic/:topicID/edit', topic.showEdit)
    // 处理编辑话题请求
    .post('/topic/:topicID/edit', topic.handleTopicID)
    // 处理删除话题请求
    .post('/topic/:topicID/delete', topic.hanleDelete)


module.exports = router