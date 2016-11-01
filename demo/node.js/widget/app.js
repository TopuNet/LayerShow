define(["lib/LayerShow", "lib/jquery.min"], function($LayerShow) {

    $("input").on("touchstart mousedown", function(e) {
        e.preventDefault();
        var opt = {
            Pics: ["/images/002.jpg", "/images/003.jpg", "/images/004.jpg", "/images/001.jpg", "/images/002.jpg", "/images/003.jpg", "/images/004.jpg", "/images/002.jpg", "/images/003.jpg", "/images/004.jpg"],
                info_content:"Hey Jude, don't make it bad.<br />Take a sad song and make it better.<br />Remember to let her into your heart,<br />Then you can start to make it better.<br />Hey Jude, don't be afraid.<br />You were made to go out and get her.<br />The minute you let her under your skin,<br />Then you begin to make it better.<br />And anytime you feel the pain, hey Jude, refrain,<br />Don't carry the world upon your shoulders.<br />For well you know that it's a fool who plays it cool<br />By making his world a little colder.<br />Hey Jude, don't let me down.<br />You have found her, now go and get her.<br />Remember to let her into your heart,<br />Then you can start to make it better.<br />So let it out and let it in, hey Jude, begin,<br />You're waiting for someone to perform with.<br />And don't you know that it's just you, hey Jude, you'll do,<br />The movement you need is on your shoulder.<br />Hey Jude, don't make it bad.<br />Take a sad song and make it better.<br />Remember to let her under your skin,<br />Then you'll begin to make it<br />Better better better better better better, oh.<br />Na na na, na na na na, na na na, hey Jude<br />Na na na, na na na na, na na na, hey Jude<br />Na na na, na na na na, na na na, hey Jude...",
            callback_close: function() {
                console.log("关闭成功");
            }
        };
        $LayerShow.show(opt);
    });
});
