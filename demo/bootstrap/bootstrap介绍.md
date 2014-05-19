#bootstrap介绍
英文官网：[http://getbootstrap.com]
中文官网：[http://www.bootcss.com]

##目录结构
```
bootstrap/
├── css/
│   ├── bootstrap.css
│   ├── bootstrap.min.css
│   ├── bootstrap-theme.css
│   └── bootstrap-theme.min.css
├── js/
│   ├── bootstrap.js
│   └── bootstrap.min.js
└── fonts/
    ├── glyphicons-halflings-regular.eot
    ├── glyphicons-halflings-regular.svg
    ├── glyphicons-halflings-regular.ttf
    └── glyphicons-halflings-regular.woff
```
css文件夹存放scss合并编译后的css文件
js文件夹存放js合并的文件
fonts文件夹存放的字体图标，可以改变图片的大小、颜色


##meta介绍
第一个meta name="viewport"标签表示：强制让文档的宽度与设备的宽度保持1:1，并且文档最大的宽度比例是1.0，且不允许用户点击屏幕放大浏览；
width - viewport的宽度 height - viewport的高度   
initial-scale - 初始的缩放比例  
minimum-scale - 允许用户缩放到的最小比例   
maximum-scale - 允许用户缩放到的最大比例  
user-scalable - 用户是否可以手动缩放

第二个meta 为了让IE浏览器运行最新的渲染模式

```css
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

##transition介绍
transition允许css的属性值在一定的时间区间内平滑地过渡。这种效果可以在鼠标单击、获得焦点、被点击或对元素任何改变中触发，并圆滑地以动画效果改变CSS的属性值。
语法： transition: property duration timing-function delay;
transition-property	规定设置过渡效果的 CSS 属性的名称。
transition-duration	规定完成过渡效果需要多少秒或毫秒。
transition-timing-function	规定速度效果的速度曲线。
transition-delay	定义过渡效果何时开始。
demo[http://benpaobenpao.github.io/demo/css3/transition.html]

##box-sizing介绍
盒模型是分为两种，第一种是W3C的标准模型，另一种是IE的传统模型，他们相同之处都是对元素计算尺寸的模型，具体说就是对元素的width,height,padding,border以及元素实际尺寸的计算关系；
1、content-box:此值为其默认值，其让元素维持W3C的标准Box Model，也就是说元素的宽度/高度（width/height）等于元素边框宽度（border）加上元素内边距（padding）加上元素内容宽度/高度（content width/height）即：Element Width/Height = border+padding+content width/height。
2、border-box:此值让元素维持IE传统的Box Model（IE6以下版本），也就是说元素的宽度/高度等于元素内容的宽度/高度。（从上面Box Model介绍可知，我们这里的content width/height包含了元素的border,padding,内容的width/height【此处的内容宽度/高度=width/height-border-padding】）。
语法：box-sizing: content-box|border-box|inherit;
demo[http://benpaobenpao.github.io/demo/css3/box-sizing.html]
