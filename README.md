# io-ui

[![Build Status](https://travis-ci.com/io-ui/io-ui.svg?branch=main)](https://travis-ci.com/io-ui/io-ui)
[![Coverage Status](https://coveralls.io/repos/github/io-ui/io-ui/badge.svg?branch=main)](https://coveralls.io/github/io-ui/io-ui?branch=master)
![GitHub](https://img.shields.io/github/license/io-ui/io-ui)
![npm](https://img.shields.io/npm/v/io-ui)

## 来源

> io 来源于dota2中小精灵
>
> 精灵守卫不仅仅是物质内部的吸引力和排斥力的结合，它是将物质粒子连接在一起的电荷的直观体现

## 做什么

适用于vue的个人开发的ui组件

## 为什么

**保证平台一致性**

1. 统一的风格
2. 统一的操作规范

**提升开发效率**

组件化对页面中元素的拆解、归纳和重组,设计出可被复用的、规范化的组件，在通过组合来构建整个系统，提高开发效率

**提升产品细节体验**

在能用的基础上设计出良好使用体验与美观的ui组件

## 好处

各种商业化组件对于个性化需求无法满足，引用其他包时导致的风格不一致问题

## 如何做

对新需求进行评估后，经过常规的设计流程，设计并归入组件库后，提高产品的迭代效率

### 原则

能用（功能） 易用（效率） 美观（用户体验）

## 规范

## 样式

1. Color 颜色
2. Font 字体
3. Icon 图标
4. Shadow 投影
5. Voicce 文案
6. Space 间距

## 模板

1. 布局
2. 图表
3. 列表页
4. 表单页
5. 详情页
6. 空状态
7. 其他

## 组件

1. Button 按钮
2. Link 链接
3. Radio 单选框
4. Checkbox 复选框
5. Input 输入框
6. Select 选择
7. Switch 开关
8. DateTime 日期时间
9. Upload 上传
10. Transfer 穿梭框
11. Form 表单
12. Table 表格
13. Tag 标签
14. Pagination 分页
15. Message 轻提示
16. Notification 警告通知
17. Modal 弹窗
18. Dropdown 下拉菜单
19. Tabs 标签页
20. Steps 步骤
21. Tooltip 文字提示
22. *骨架*
23. *日历*



## 目录结构

```
├── build
│   ├── webpack.conf.dev.js              // 用作本地开发的配置文件
│   ├── webpack.conf.build.js            // 用作打包web服务的配置文件,输出dist文件
├── dist                                 // 打包的web包
├── dev                                  // 开发
├── lib                                  // 打包的npm包
├── node_modules
├── .babelrc
├── .gitignore
├── .index.html
├── LICENSE
├── package.json
├── README.md
```

## 代码规范

### 提交规范

#### 分支

| 分支     | 命名       | 说明                                                     |
| :------- | :--------- | :------------------------------------------------------- |
| 主分支   | main       | 主分支,所有提供给用户使用的正式版本,都在这个主分支上发布 |
| 开发分支 | dev        | 开发分支                                                 |
| 功能分支 | feature-\* | 新功能分支,某个功能点正在开发阶段                        |
| 发布分支 | release    | 发布定期上线的功能                                       |
| 修复分支 | fix-\*     | 修复线上代码的 bug                                       |

#### tag

采用三段式,v版本.里程碑.序号,如`v1.2.1`
- 架构升级或者重大调整,修改第2位
- 新功能上线或者模块的大调整,修改第2位
- bug修复上线,修改第3位


#### changelog

- 版本正式发布后,需要生产changelog文档,便于后续问题

#### commit message

本项目采用git emoji方式提交git commit,参见[git emoji](git-emoji.md#git-emoji)

```
:emoji1: :emoji2: 不超过 50 个字的摘要

提交信息主体
1. xxx
2. xxx

引用相关 issue 或 PR 编号 <#110>
```

