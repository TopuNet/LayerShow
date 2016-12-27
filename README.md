# LayerShow 插件 v1.0.3
###弹层显示图片（支持多张）或图文内容
###安装：npm install TopuNet-LayerShow

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

        依赖LayerShow.js和(jquery.min.js#1.x 或 zepto.js)，成功后返回对象依赖LayerShow。

调用方法：
--------------

            var opt = {
				z_index: 弹层的z-index。图片/图文内容层为z_index+1。默认400
				bg_color: 背景层16进制颜色。默认#000000
				bg_opacity: 背景层透明度，0～1。默认0.8
				showKind: 1-图片 | 2-HTML。默认1
				Pics: showKind=1时有效。图片路径列表，数组。如 ["/images/001.jpg","/images/002.png"]。无默认值
				Pics_scroll_speed: showKind=1时有效。图片切换时的速度。毫秒。默认500。移动端建议设置为100-200，过慢会有卡顿的现象
				Pics_arrow_left: showKind=1时有效。图片切换 左箭头图片路径。默认/inc/LayerShow_arrow_left.png。
				Pics_arrow_right: showKind=1时有效。图片切换 右箭头图片路径。默认/inc/LayerShow_arrow_left.png。
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
	            info_box_use_JRoll: showKind=2时有效，内容盒使用JRoll滚动（建议移动端使用，web端不用。IE7、8不兼容）。默认true
				Pics_close_show: true/false。显示关闭按钮。默认true
				Pics_close_path: 关闭按钮图片路径。默认/inc/LayerShow_close.png。
				callback_before: 弹层前回调。如显示loading层。无默认
				callback_success: 弹层成功回调。如关闭loading层。无默认
				callback_close: 关闭弹层后的回调。没想好如什么。无默认
			};

			// 显示
            LayerShow.show(opt);

            // 关闭
            LayerShow.close();

更新历史：
-------------
v1.0.3

		1. 解决安卓端隐藏状态下resize窗口后，页面被遮罩层覆盖的bug。

v1.0.2

		1. 解决关闭按钮未隐藏的bug

v1.0.1

		1. 创建项目、完成开发、发布到npm、commit到github
		2. 配套的jroll做过处理，有关于IE7/8的判断，避免IE7/8使用时报错
