define(["lib/jquery.min", "lib/jroll", "lib/LayerShow"], function(nil, $JRoll, $LayerShow) {

    $("input[type=button]").on("touchstart mousedown", function(e) {
        e.preventDefault();

        var opt = {
            z_index: 800,
            bg_color: "#000",
            bg_opacity: 0.8,
            showKind: 1,
            Pics: ["/images/002.jpg", "/images/003.jpg", "/images/004.jpg", "/images/001.jpg" /*, "/images/002.jpg", "/images/003.jpg", "/images/004.jpg", "/images/002.jpg", "/images/003.jpg", "/images/004.jpg"*/ ],
            Pics_scroll_speed: 200,
            Pics_arrow_left: "/inc/LayerShow_arrow_left.png",
            Pics_arrow_right: "/inc/LayerShow_arrow_right.png",
            callback_image_click: 1,
            info_content: "Hey Jude, don't make it bad.<br />Take a sad song and make it better.<br />Remember to let her into your heart,<br />Then you can start to make it better.<br />Hey Jude, don't be afraid.<br />You were made to go out and get her.<br />The minute you let her under your skin,<br />Then you begin to make it better.<br />And anytime you feel the pain, hey Jude, refrain,<br />Don't carry the world upon your shoulders.<br />For well you know that it's a fool who plays it cool<br />By making his world a little colder.<br />Hey Jude, don't let me down.<br />You have found her, now go and get her.<br />Remember to let her into your heart,<br />Then you can start to make it better.<br />So let it out and let it in, hey Jude, begin,<br />You're waiting for someone to perform with.<br />And don't you know that it's just you, hey Jude, you'll do,<br />The movement you need is on your shoulder.<br />Hey Jude, don't make it bad.<br />Take a sad song and make it better.<br />Remember to let her under your skin,<br />Then you'll begin to make it<br />Better better better better better better, oh.<br />Na na na, na na na na, na na na, hey Jude<br />Na na na, na na na na, na na na, hey Jude<br />Na na na, na na na na, na na na, hey Jude...",
            info_box_width_per: 80,
            info_box_height_per: 85,
            info_box_radius: true,
            info_box_bg: "#ffffff",
            info_box_padding_px: 10,
            info_box_fontSize: "4vw",
            info_box_fontColor: "#666",
            info_box_lineHeight: "4vh",
            info_box_use_JRoll: true,
            JRoll_obj: JRoll,
            Pics_close_show: true,
            Pics_close_path: "/inc/LayerShow_close.png",
            callback_before: function() {},
            callback_success: function() {
                opt.z_index = 1000;
                opt.bg_color = "#ff0000";
                opt.bg_opacity = 1;
                opt.showKind = 2;
                opt.callback_success = null;
                ls2.show(opt);
            },
            callback_close: function() {}
        };

        var ls2 = new $LayerShow();
        ls2.init();

        var ls1 = new $LayerShow();
        ls1.init();
        ls1.show(opt);
    });
});
