# 将 node 项目发布到 heroku

## create-react-app 环境变量配置

build 到其他目录

```
BUILD_PATH=../server/public
```

使用 fetch 请求数据，使用绝对地址（本地和发布环境要区分）：

```
REACT_APP_API_URL=http://localhost:3000
```

环境变量配置详见文档：[https://create-react-app.dev/docs/adding-custom-environment-variables/](https://create-react-app.dev/docs/adding-custom-environment-variables/)

## 发布到 heroku

1. 登陆

```bash
heroku login -i
# 加-i可以使用账号密码登陆，网页授权可能会因为网络问题失败
```

2. 添加 Procfile 文件

```bash
web:npm run start
# 就是启动node项目的script命令
```

3. 在 heroku 网站上新建一个项目

4. 添加远程分支

```
heroku git:remote -a cyh-trello-clone
```
