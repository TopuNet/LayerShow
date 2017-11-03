# LayerShow 插件 v2.4.1
### 弹层显示图片（支持多张）或图文内容
### 安装：npm install TopuNet-LayerShow

文件结构：
-------------
		
		1. /widget/lib/LayerShow.js 放入项目文件夹jq（原生规范）或widget/lib（AMD规范）中
		2. 如需要jroll，则将/widget/lib/jroll.js 放入项目文件夹inc（原生规范）或widget/lib（AMD规范）中


页面引用：
-------------

原生引用

		1. 页面底部引用最新版 /inc/Jquery.min.js#1.x.x 或 zepto.min.js
		2. 后引用 /inc/jroll.js
		3. 后引用 /jq/LayerShow.js

requireJS引用

        1. 依赖LayerShow.js和(jquery.min.js#1.x 或 zepto.js)，成功后返回对象依赖LayerShow。
        2. 如需要jroll，则在页面中依赖jroll

调用方法：
--------------

			// 创建新LayerShow实例。注意：不要反复的创建实例，每个实例会在show()之后创建一组dom
			var layershow = new LayerShow();

			// 显示
			var opt = {
				z_index: 弹层的z-index。图片/图文内容层为z_index+1。默认400
				bg_color: 背景层16进制颜色。默认#000000
				bg_opacity: 背景层透明度，0～1。默认0.8
				showKind: 1-图片 | 2-HTML。默认1
				Pics: showKind=1时有效。图片路径列表，数组。如 ["/images/001.jpg","/images/002.png"]。无默认值
				Pics_show_index: 默认显示图片的序号，值大于等于图片数组的length时无效。默认0
				Pics_scroll_speed: showKind=1时有效。图片切换时的速度。毫秒。默认500。移动端建议设置为100-200，过慢会有卡顿的现象
				Pics_arrow_left: showKind=1时有效。图片切换 左箭头图片路径。默认/inc/LayerShow_arrow_left.png。
				Pics_arrow_right: showKind=1时有效。图片切换 右箭头图片路径。默认/inc/LayerShow_arrow_left.png。
                Pics_scale_fit: showKind=1且非ie678时有效。图片自动缩小到适配尺寸。true(默认)-无论图片多大，都可以全屏显示完整，不监听拖拽事件；false-图片原尺寸显示，拖拽时可改变显示位置(类似图片放大镜的效果)
				callback_image_click: showKind=1时有效。图片点击回调：1-关闭弹层 | 2-下一张图片 | function(li_obj)-自定义方法。默认"1"
				info_content: showKind=2时有效，装载内容。无默认
				info_box_width_per: showKind=2时有效，内容盒宽度百分比。默认80
				info_box_height_per: showKind=2时有效，内容盒高度百分比。默认90
				info_box_radius: showKind=2时有效，内容盒是否圆角。默认true
				info_box_bg: showKind=2时有效，内容盒背景。默认"#ffffff"
				info_box_padding_px: showKind=2时有效，内容盒padding。默认20
				info_box_fontSize: showKind=2时有效，内容盒字体大小。默认"14px"
				info_box_fontColor: showKind=2时有效，内容盒字体颜色。默认"#333"
				info_box_lineHeight: showKind=2时有效，内容盒行间距。默认"30px"
				info_box_use_JRoll: showKind=2时有效，内容盒使用JRoll滚动（建议移动端使用，web端不用。IE7、8不兼容）如使用，则需要依赖或引用jroll.js。默认true
				JRoll_obj: JRoll对象。不使用JRoll做内容盒滚动，可不传。
				info_bottom_fixed_content: showKind=2时有效，底部固定层内容。无默认。
				info_bottom_fixed_height: showKind=2 && info_bottom_fixed_content!="" 时有效，高度，单位px。默认40
				Pics_close_show: true/false。显示关闭按钮。默认true
				Pics_close_path: 关闭按钮图片路径。默认/inc/LayerShow_close.png。
				callback_before: 弹层前回调。如显示loading层。无默认
				callback_success: 弹层成功(showKind=1时只加载了第一张图片)。回调function(_obj)。 showKind=1时_obj为加载的第一且是唯一一张图片的li盒；showKind=2时_obj为实例化的jroll对象；如info_box_use_JRoll为false，则_obj=undefined。无默认
                callback_close(info_wrapper_html): 关闭弹层后的回调。info_wrapper_html为showKind=2时，$("#info_wrapper").html()。无默认
			};
            layershow.show(opt);

            // 关闭
            layershow.close();

更新历史：
-------------
v2.4.1

		增加参数Pics_scale_fit：showKind=1且不为ie678时，可以不自动缩小图片到可视范围内，而是原图尺寸显示，划屏或拖拽时可以移动图片，类似放大镜效果

v2.3.2

		showKind=2时，增加callback_close的参数info_wrapper_html，存放$("info_wrapper").html()。

v2.3.1

		showKind=2时，增加底部固定盒的功能。可以插入固定在底部的按钮或之类。

v2.2.5

		忘记兼容非jroll下的滚动了。已恢复

v2.2.4

		解决了一个小bug

v2.2.3

		找到了2.2.2提到的问题的原因：【demo的index.html中，在ls1弹层成功后，执行ls2弹层，在ls2弹层成功后执行_obj.scrollTo，不好使，原因没太搞明白。如果是直接执行ls2，是可行的。】
		是因为初始化jroll时，用的是$("#wrapper_info")，但页面中其实初始化了两个LayerShow，so有两个#wrapper_info。
		已解决。

v2.2.2

		1. 修改callback_success: 弹层成功(showKind=1时只加载了第一张图片)。回调function(_obj)。 showKind=1时_obj为加载的第一且是唯一一张图片的li盒；showKind=2时_obj为实例化的jroll对象；如info_box_use_JRoll为false，则_obj=undefined。无默认
		2. demo的index.html中，在ls1弹层成功后，执行ls2弹层，在ls2弹层成功后执行_obj.scrollTo，不好使，原因没太搞明白。如果是直接执行ls2，是可行的。

v2.2.1

		show()之前，不再需要init()。具体见调用方法说明。

v2.1.1

		重构。支持单页面装载多套LayerShow

v1.2.2

		优化代码和流程逻辑，提高性能和效率，并修改bug
		1. 弹层前预加载第一张图片，加载完成后弹层，并显示关闭按钮
		2. 弹层后预加载除第一张图片外的所有图片，全部加载完成后，显示左右切换箭头
		3. 弹层成功的回调方法传入参数li————加载的第一且是唯一一张图片的li盒（仅showKind=1时有效）

v1.2.1

		1. 增加参数 Pics_show_index

v1.1.2

		1. 如使用JRoll做内容盒滚动，则需传入JRoll对象
		2. 修改AMD规范下的调用方法（见上文“调用方法”）

v1.1.1

		1. LayerShow.js中不再强制依赖jroll，如需用jroll做内容盒滚动，则需在页面中引用或依赖jroll.js

v1.0.6

		1. 修改弹层成功回调的执行位置（fadeIn完成后触发），解决内容盒执行过早导致在回调中调用内容盒内的元素时，可能出现的bug（如宽高不对）

v1.0.5

		1. 解决弹层后，$(window).unbind("resize")影响原先页面的resize监听的bug

v1.0.4

		1. 将弹层的遮罩背景尺寸改为100%宽和高，解决移动端键盘影响弹层的bug

v1.0.3

		1. 解决安卓端隐藏状态下resize窗口后，页面被遮罩层覆盖的bug。

v1.0.2

		1. 解决关闭按钮未隐藏的bug

v1.0.1

		1. 创建项目、完成开发、发布到npm、commit到github
		2. 配套的jroll做过处理，有关于IE7/8的判断，避免IE7/8使用时报错
