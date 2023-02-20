# Clean Architecture
介绍
这是一个基于 Clean Architecture 架构模式的 TypeScript 项目模板，旨在为新项目提供一个良好的开发基础。该项目采用了 Monorepo 结构，使用 Rush.js 进行管理。在 server 文件夹中包含了三个子项目，分别为 core、koa 和 nestjs-app，其中 core 为核心业务逻辑，koa是使用koa+prisma的为底层框架web项目，nestjs-app是使用nestjs + typeorm为底层框架的项目。目的是演示相同的业务逻辑如何桥接不同的框架。

## Clean Architecture 简介
Clean Architecture 是由 Robert C. Martin 提出的一种软件架构模式，目的是将应用程序分离为内部和外部两个部分，使得系统更加容易理解、维护和扩展。该架构将系统分为四个层次，从最底层到最高层分别为：实体层、仓储层、用例层和表示层。

在该架构中，实体层包含了实体对象以及与之相关的业务规则和逻辑。仓储层负责持久化和检索数据，用例层包含了系统的用例或操作，表示层则负责与用户界面的交互。

### 项目结构
```
├── server
│   ├── core // 核心业务逻辑
│   │   └── src
│   │       ├── domain
│   │       ├── repository
│   │       └── useCase
│   ├── koa
│   │   └── src
│   │       ├── post
│   │       └── user
│   └── nestjs-app
│       ├── src
│           ├── post
│           │   ├── dto
│           │   └── entities
│           └── user
│               └── entities
└── web
```




### 功能：
> 使用整洁架构实现一个帖子发布，浏览功能
1. 用户登录，注册
2. 帖子的发布，编辑，查询，删除


### 如何开始
1. 安装 Rush.js
```bash
npm install -g @microsoft/rush
```
2. 下载依赖
```bash
rush update
```
3. 下载依赖
```bash
rush update
```
4. 构建core
```bash
cd server/core
npm build

rush update
```
5. 启动 Koa 应用
```bash
cd server/koa
npm start
```
6. 启动 Nest.js 应用
```bash
cd server/nestjs-app
npm start
```


#### 如何贡献
如果你想为该项目贡献代码，请遵循以下步骤：

1. fork 该项目并将代码下载到本地

2. 创建新分支并进行修改

3. 提交修改并创建 pull request

4. 我们会尽快审阅你的修改并进行合并。
