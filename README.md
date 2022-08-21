# 魔法诗README.md

## 1、项目简介
魔法诗是一套基于前端开发框架 Vue3 开发的仅包含前端页面的响应式网站，此网页主要是通过静态的页面展示给用户一些炫酷的界面。无论是用在平时学校的小型练手项目，毕业设计还是在工作中的实际项目开发都可以有很好的参考作用。

## 2、项目环境
魔法诗仅仅是本地环境开发，不具备上线部署的功能，用户如果想要参考此项目的源代码，只需要拉取整个项目到本地即可快速进行二次开发。
-  拉取整个项目到本地
```shell
git clone https://github.com/Aubuary/magic-poetry.git
```
- 运行项目所需要的依赖资源

![Image](https://user-images.githubusercontent.com/85296730/185778605-ca0667a6-fa42-4a33-9597-6ea927998823.png)
![Image1](https://user-images.githubusercontent.com/85296730/185778616-d204cca9-ecbc-4b1d-b72a-55042153a56c.png)


## 3、项目技术

1. vue3
2. vue cli
2. vue-router

## 4、网页界面

### 4.1 主界面
#### 4.1.1 页面预览
![Image2](https://user-images.githubusercontent.com/85296730/185778622-d85d0fd4-119c-4e21-ab3b-d2290d652419.png)
#### 4.1.2 界面说明
主界面所在的vue文件为App.vue，其中由动态背景视频和主界面构成。主界面又由头部组件（HeaderComponent.vue）和左侧组件（LeftComponent.vue）组成。


### 4.2 百宝箱
#### 4.2.1 页面预览
![Image3](https://user-images.githubusercontent.com/85296730/185778626-b1604755-4115-44a3-8e2f-01836af36749.png)
![Image4](https://user-images.githubusercontent.com/85296730/185778631-82251c88-d8d9-40bf-9092-5e799dcb32bd.png)
#### 4.2.2 界面说明
百宝箱所在的vue文件为TreasureView.vue，从上到下由组件ContentWrapper.vue、LineCard.vue、Block.vue组成。


#### 4.2.2 颜色剪切板
##### 4.2.2.1 页面预览
![Image5](https://user-images.githubusercontent.com/85296730/185778635-74f8269f-c4c7-49a7-b45c-3f9879b832b1.png)
![Image6](https://user-images.githubusercontent.com/85296730/185778640-5cee7c4f-9d8e-4c14-9a7a-2f82e7e5fb5c.png)
##### 4.2.2.2 界面说明
颜色剪切板所在的vue文件为ColorClipboardView.vue，进入到此页面，用户可以通过输入颜色、年份、季节或者十六进制代码来查询需要的颜色，点击颜色快就可以复制颜色的十六进制代码，如上图所示。

#### 4.2.3 画廊
##### 4.2.3.1 页面预览
![Image7](https://user-images.githubusercontent.com/85296730/185778643-13ef47b0-0a46-4aff-91d7-3654e7bdb265.png)

##### 4.2.3.2 界面说明
画廊所在的vue文件为GalleryView.vue，用户可以通过左右按钮来选择图片或者通过底部的图片列表来选择图片。

#### 4.2.4 数字时钟
##### 4.2.4.1 页面预览
![Image8](https://user-images.githubusercontent.com/85296730/185778654-97ace089-c219-4d1f-aa26-0103ed57a421.png)
##### 4.2.4.2 界面说明
数字时钟所在的vue文件为DigitalClockView.vue，页面时间将动态更新。


### 4.3 记录线
#### 4.3.1 页面预览
![Image9](https://user-images.githubusercontent.com/85296730/185778658-4139ba2e-102e-49b0-842f-2789719c9678.png)
#### 4.3.2 界面说明
记录线所在页面的vue文件为RecordView.vue，页面使用flex布局实现横向的三栏布局，每个div通过nth-child选择是否显示右侧的border（即界面中的每个板块的白色分界线）



### 4.4 喜捷径
#### 4.4.1 页面预览
![Image10](https://user-images.githubusercontent.com/85296730/185778663-193909c1-e8de-4f4d-88c3-b6c27cd1e1e8.png)

#### 4.4.2 界面说明
喜捷径所在页面的vue文件为ShortcutView.vue，页面中的各个板块使用ul、li标签，通过栅格布局实现。


### 4.5 炫酷卡片

#### 4.5.1 用户卡片
##### 4.5.1.1 页面预览
![Image11](https://user-images.githubusercontent.com/85296730/185778684-b9b3101f-2302-4530-bb0e-d4b065f8c4c7.png)
![Image12](https://user-images.githubusercontent.com/85296730/185778670-9bdf3520-f633-4c50-8a3b-5fd5af96195e.png)

##### 4.5.1.2 界面说明
用户卡片所在的vue文件为UserCardView.vue，卡片有两种不同的状态，默认状态与鼠标划过状态分别如上图所示。


#### 4.5.2 肖像卡片
##### 4.5.2.1 页面预览
![Image13](https://user-images.githubusercontent.com/85296730/185778689-4fe14b97-5b56-40ce-b0bb-a3e5d732112c.png)
![Image14](https://user-images.githubusercontent.com/85296730/185778693-d6ddbc52-ece7-4657-9d5e-82b0806d9c7b.png)
![Image15](https://user-images.githubusercontent.com/85296730/185778696-73e43636-709d-4a52-888b-0d92f461d00c.png)

##### 4.5.2.2 界面说明
肖像卡片所在的vue文件为ProfileCardView.vue，肖像卡片有三种不同的样式，用户选择底部的按钮可以切换不同的状态进而可以展示不同的信息。具体实现细节参加项目源代码。

#### 4.5.3 新闻卡片
##### 4.5.3.1 页面预览
![Image16](https://user-images.githubusercontent.com/85296730/185778703-f5724482-b69e-4414-9df9-87ed0e9d5b0b.png)

#### 4.5.3.2 界面说明
新闻卡片所在的vue文件为NewsCardView.vue，其中包含了两种不同样式的新闻卡片，用户鼠标滑动到卡片上即会动态展示除了标题外的更多信息（如卡片二所示）。


### 4.6 优美画面
#### 4.6.1 猫吻蝴蝶
##### 4.6.1.1 页面预览
![Image17](https://user-images.githubusercontent.com/85296730/185778709-030861df-31b4-409b-a716-8a3c887208db.png)

##### 4.6.1.2 界面说明
猫吻蝴蝶所在的vue文件为CatButterflyView.vue，其中图片上方的两个按钮皆为同一种类型的边框流动按钮，光标移动到按钮上的样式如图中的第二个按钮。

#### 4.6.2 狗与玫瑰
##### 4.6.2.1 页面预览
![Image18](https://user-images.githubusercontent.com/85296730/185778713-4326ff6c-45eb-4d54-832d-7220f17db8d6.png)

##### 4.6.2.2 界面说明
狗与玫瑰所在的vue文件为DogRoseView.vue，此页面纯属娱乐！

#### 4.6.3 绿眼猫咪
##### 4.6.3.1 页面预览
![Image19](https://user-images.githubusercontent.com/85296730/185778715-92ff2c91-09a3-4342-8b6b-dd7fb8836963.png)

##### 4.6.3.2 界面说明
绿眼喵咪所在的vue文件为GreenEyesCatView.vue，此页面为一个动态加载的页面，主要为了从一开始的朦胧状态，到最后的清晰状态的展示。


### 4.7 小玩意儿

#### 4.7.1 流光按钮
##### 4.7.1.1 页面预览
![Image20](https://user-images.githubusercontent.com/85296730/185778719-0b52c92f-693b-4bb6-b8e0-c32278ca77ec.png)

##### 4.7.1.2 界面说明
流光按钮所在的vue文件为TimeButtonView.vue，其中三个按钮均为同一种风格的按钮，他们拥有流动的边框，故我将其称作流光按钮，按钮选中后的样式如图第二个按钮所示。流光按钮并不是通过一对普通的button标签完成的，而是通过一对嵌套四对span标签的a标签实现的。具体实现细节参见源代码。


#### 4.7.2 动画按钮
##### 4.7.2.1 页面预览
![Image21](https://user-images.githubusercontent.com/85296730/185778723-32f82f6e-ce8a-4cd3-a9e3-46a5536a632c.png)

##### 4.7.2.2 界面说明
动画按钮所在的vue文件为AnimationButtonView.vue，其中每个按钮都是一种具有动画效果的按钮，各具风格。

#### 4.7.3 文章详情页
##### 4.7.3.1 页面预览
![Image22](https://user-images.githubusercontent.com/85296730/185778727-49c46fab-58d9-41c2-9312-1d3705be4969.png)
![Image23](https://user-images.githubusercontent.com/85296730/185778735-52cf7f36-6f46-4178-b8d6-a5b1243fa518.png)
![Image24](https://user-images.githubusercontent.com/85296730/185778737-64331dd7-33dc-4d27-8edf-c1cd09cc6e72.png)

##### 4.7.3.2 界面说明
文章详情页所在的vue文件为ArticleDetailsView.vue，其中主要包含了封面介绍页，文章信息展示以及文章中的引用等。具体实现细节参见项目源代码。


#### 4.7.4 个人信息页
##### 4.7.4.1 页面预览
![Image25](https://user-images.githubusercontent.com/85296730/185778740-69715fcf-1729-414d-944d-da6d4b478e0d.png)
![Image26](https://user-images.githubusercontent.com/85296730/185778745-705bb437-f44b-4db1-bebe-268d01acc955.png)
![Image27](https://user-images.githubusercontent.com/85296730/185778748-88f55825-4fc1-4b8b-b680-51f97b7ef13c.png)
![Image28](https://user-images.githubusercontent.com/85296730/185778753-872898b9-cba9-4d2b-9904-1591b5278912.png)

##### 4.7.4.2 界面说明
个人信息页所在的vue文件为PersonalInfoView.vue，其中主要包含了个人主界面（头像，身份，城市……），个人介绍部分，个人作品集和联系我们四部分，界面中均使用flex布局。

#### 4.7.5 按钮悬停样式
##### 4.7.5.1 页面预览
![Image29](https://user-images.githubusercontent.com/85296730/185778757-5ea195c2-c165-4d86-8dd9-c549b848b4f1.png)

##### 4.7.5.2 界面说明
按钮悬停样式所在的vue文件为HoverButtonView.vue，此按钮与动画按钮相比较更加的朴素，低调，但是每个按钮也都具备了自己的特点，详细参见项目源代码。

#### Gitee下载地址
https://gitee.com/a-jingchao/magic-poetry

#### 完

