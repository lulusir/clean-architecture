# Clean Architecture

## Clean Architecture 简介
[Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) 是由 Robert C. Martin 提出的一种软件架构模式，目的是将应用程序分离为内部和外部两个部分，使得系统更加容易理解、维护和扩展。该架构将系统分为四个层次，从最底层到最高层分别为：实体层、仓储层、用例层和表示层。

在该架构中，实体层包含了实体对象以及与之相关的业务规则和逻辑。仓储层负责持久化和检索数据，用例层包含了系统的用例或操作，表示层则负责与用户界面的交互。

![image](https://lulusir.github.io/clean-js/CleanArchitecture.jpg)

## 项目介绍
这是一个基于 Clean Architecture架构模式的 TypeScript 项目例子。该项目采用了 Monorepo 结构，使用 Rush.js 进行管理。在 server 文件夹中包含了三个子项目，分别为 core、koa 和 nestjs-app，其中 core 为核心业务逻辑，koa是使用koa+prisma的为底层框架web项目，nestjs-app是使用nestjs + typeorm为底层框架的项目。目的是演示相同的业务逻辑如何桥接不同的框架。

整个项目是基于 Clean Architecture 架构设计而来。其中的基本思想是将应用程序分成四个层级，每个层级都有它自己的职责和规则，以实现更好的可维护性和可测试性：  

core：
- core为核心业务逻辑的代码
- Domain: 存放实体相关的代码，如业务具体的 model 等
- Use Cases: 存放业务逻辑相关的代码，如处理业务逻辑、数据验证、调用 Repository 等
- Repository: 存放和外部存储系统的相关接口

koa/nestjs-app:
- core的实际消费者
- 根据core的接口实现具体的Router，Repository


### 项目特点
- 使用 DDD 和 Clean Architecture 的思想，将业务逻辑与技术实现分离。
- 使用 monorepo 项目结构，方便管理多个相关的项目。
- 提供了多个示例应用程序，方便快速上手。
- 基于 TypeScript，提高代码可读性和可维护性。
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
> 实现一个帖子发布，浏览功能
1. 用户创建，查询
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
