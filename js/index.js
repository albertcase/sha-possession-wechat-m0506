
var loader = new WxMoment.Loader();

//声明资源文件列表
var fileList = [
	'/img/place.jpg',
	'/img/bg.jpg', 
	'/img/light.png', 
	'/img/ring.png', 
	'/img/arr_l.png', 
	'/img/arr_r.png', 
	'/img/btn.png', 
	'/img/logo.png', 
	'/img/tips.png', 
	'/img/videobg.jpg', 
	'/img/poster-1.jpg',
	'/img/poster-2.jpg',
];

for (var i = 0; i < fileList.length; i++) {
    loader.addImage(basePath + fileList[i]);
}

//进度监听
loader.addProgressListener(function (e) {
    var percent = Math.round((e.completedCount / e.totalCount) * 100);
        $(".loading").css({"width": percent+"%"});
    //console.log("当前加载了", percent, "%");
    //在这里做 Loading 页面中百分比的显示
});

//加载完成
loader.addCompletionListener(function () {
    //可以在这里隐藏 Loading 页面开始进入主内容页面
    $(".loading").css({"opacity": 0});
    $(".index").css({"opacity": 1});
});

$(document).swipeRight(function (event) {
    $(".bg").addClass("startAnimate");
}, {
    x: 60,/*update the minimum swiping distance*/
    y: 60
});

//启动加载
loader.start();



var lightAnimate = document.getElementById("lightAnimate");
lightAnimate.addEventListener("webkitAnimationEnd", animationListener_lightAnimate, false);
function animationListener_lightAnimate(){
	$(".activeTips").hide();
	$(".light").hide();
	window.location.href = "video.html";
}

