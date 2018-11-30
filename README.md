# webHookTest
a webhook test

# mywxmp


## 书写规范

``` bash
# vuex
1.action函数名统一以action结尾h
2.state名称统一以s开头，驼峰式结构，如:sState
3.types key值名称统一为大写字母，以下划线分隔
4.store目录下分模块，使用命名空间，一级目录下为公共使用

# js
1.js行尾不加;
2.标准变量使用驼峰命名法
3.常量全部大写
4.判断类型使用typeof
5.比较使用===全等于
6.数组遍历尽量不使用for-in循环，for循环比for-in性能高很多（原因是因为for通过number遍历，for-in 则是穷举所有索引），如果遍历js对象，需要用for-in
7.对象属性名不加引号
8.变量声明避免使用var
9.使用字面值创建对象 如 'const obj = {}'，数组同理
10.字符串使用单引号
11.使用函数声明代替函数表达式

# scss
1.var.scss为全局变量
2.mixins.scss为mixin函数，可以扩展，禁止删除
3.common.scss为公共样式定义，可以扩展，禁止删除
4.尽可能使用短的十六进制数值，例如使用 '#fff' 替代 '#ffffff'
5.不要为 0 指明单位，比如使用 'margin: 0;' 而不是 'margin: 0px;'
6.scss避免不必要的嵌套。
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
