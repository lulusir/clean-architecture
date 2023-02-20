# Clean Architecture
## Introduction to Clean Architecture
Clean Architecture is a software architecture pattern proposed by Robert C. Martin. Its purpose is to separate an application into two parts - the internal and external - to make the system easier to understand, maintain, and expand. The architecture is divided into four layers, starting from the lowest to the highest level: Entity, Repository, Use Case, and Presentation.

In this architecture, the Entity layer contains entity objects and related business rules and logic. The Repository layer is responsible for data persistence and retrieval. The Use Case layer contains the system's use cases or operations, while the Presentation layer is responsible for interacting with the user interface.


![image](https://lulusir.github.io/clean-js/CleanArchitecture.jpg)
## Project Overview
This is a TypeScript project example based on the Clean Architecture pattern. The project uses a Monorepo structure and is managed using Rush.js. The server folder contains three sub-projects - core, koa, and nestjs-app. Core is the core business logic, koa is a web project using Koa and Prisma as the underlying framework, and nestjs-app is a project using Nest.js and TypeORM as the underlying framework. The goal is to demonstrate how the same business logic can be bridged to different frameworks.

The entire project is designed based on the Clean Architecture pattern, which separates an application into four hierarchical layers, each with its own responsibilities and rules to achieve better maintainability and testability:


Core:
- Contains the core business logic code
- Domain: Stores entity-related code, such as specific business models
- Use Cases: Stores business logic-related code, such as handling business logic, data validation, and calling the Repository
- Repository: Stores interfaces related to external storage systems

Koa/nestjs-app:
- The actual consumer of Core
- Implements specific Routers and Repositories based on Core's interfaces

## Project Features
- Uses Domain-Driven Design (DDD) and Clean Architecture to separate business logic from technical implementation.
- Uses Monorepo project structure for managing multiple related projects.
- Provides multiple sample applications for quick getting started.
- Based on TypeScript for improved code readability and maintainability.

### Project Structure
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


### Functionality:
> Implements post creation and browsing functionality
1. User creation and query
2. Post publishing, editing, querying, and deleting


### Getting Started
1. Install Rush.js
```bash
npm install -g @microsoft/rush
```
2. Download dependencies
```bash
rush update
```
3. Build Core
```bash
cd server/core
npm build

rush update
```
4. Start Koa Application
```bash
cd server/koa
npm start
```
5. Start Nest.js Application
```bash
cd server/nestjs-app
npm start
```

