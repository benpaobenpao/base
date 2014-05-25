#bootstrap之css使用

##栅格系统
###栅格选项
![images](http://benpaobenpao.github.io/demo/bootstrap/images/col.png)
```html
    <div class="container">
		<div class="row">
			<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">第一项</div>
			<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">第二项</div>
			<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">第三项</div>
			<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">第四项</div>
			<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">第五项</div>
			<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">第六项</div>
		</div>
	</div>
```

###列偏移
使用.col-md-offset-*可以将列偏移到右侧。
```html
    <div class="container">
		<div class="row">
			<div class="col-md-4 success">.col-md-4</div>
			<div class="col-md-4 col-md-offset-4 warning">col-md-4 col-md-offset-4</div>
		</div>
	</div>
```

###列排序
通过使用.col-md-push-* 和 .col-md-pull-*就可以很容易的改变列的顺序。

```html
    <div class="container">
		<div class="row">
			<div class="col-md-9 success">left</div>
			<div class="col-md-3 warning">right</div>
		</div>
		<div class="row">
			<div class="col-md-9 col-md-push-3 success">left</div>
			<div class="col-md-3 col-md-pull-9 warning">right</div>
		</div>
	</div>
```

###显隐
根据屏幕和不同的媒体查询显示或隐藏页面内容
![images](http://benpaobenpao.github.io/demo/bootstrap/images/visi.png)
```html
    <div class="container">
		<div class="row">
			<div class="col-sm-12 text-right">
				<div class="btn-group">
					<button class="btn btn-info visible-xs visible-sm"><span class="glyphicon glyphicon-th"></span></button>
				</div>
			</div>
			<div class="col-md-4 col-md-offset-8">
				<ul class="nav nav-pills nav-justified visible-md visible-lg">
					<li><a href="#">导航1</a></li>
					<li><a href="#">导航2</a></li>
					<li><a href="#">导航3</a></li>
				</ul>
			</div>
		</div>
	</div>
```

###文字对齐
通过文本对齐class，可以简单方便的将文字重新对齐。
```html
    <div class="container">
		<div class="row text-left success">
			<div>文字</div>
		</div>
		<div class="row text-center warning">
			<div>文字</div>
		</div>
		<div class="row text-right success">
			<div>文字</div>
		</div>
	</div>
```

[demo](http://benpaobenpao.github.io/demo/bootstrap/css.html) 