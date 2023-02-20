> 使用整洁架构实现一个帖子发布，浏览功能

需求：
1. 用户登录，注册
2. 帖子的发布，编辑，查询，删除

domain：
- user
  - name
  - email
  - id
  - updateName 
- post
  - author -- user
  - content
  - updateAt
  - title
  - id
Repository 存储库，可以是db，orm，也可以是内存...
- userRepository
- postRepository
useCase（service）：
- userService
  - find
- postService
  - find
  - create
  - edit
  - delete
controller:
- /user/:id
- /post/:id
- /post/create
- ...