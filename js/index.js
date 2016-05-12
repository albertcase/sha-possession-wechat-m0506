
var loader = new WxMoment.Loader();

//声明资源文件列表
var fileList = [
	'img/bg.jpg', 
	'img/light.png', 
	'img/ring.png', 
	'img/arr_l.png', 
	'img/arr_r.png', 
	'img/btn.png', 
	'img/logo.png', 
	'img/tips.png', 
	'img/videobg.jpg', 
	'img/poster-1.jpg',
	'img/poster-2.jpg'
];

for (var i = 0; i < fileList.length; i++) {
    loader.addImage(basePath + fileList[i]);
}

//进度监听
loader.addProgressListener(function (e) {
    var percent = Math.round((e.completedCount / e.totalCount) * 100);
    console.log("当前加载了", percent, "%");
    //在这里做 Loading 页面中百分比的显示
});

//加载完成
loader.addCompletionListener(function () {
    //可以在这里隐藏 Loading 页面开始进入主内容页面
    //$(".index").css({"opacity": 1});
    $(".light").addClass("startAnimate");

    //swipe example
	touch.on('.index', 'swiperight', function(ev){
	    $(".bg").addClass("startAnimate");  
	    $(".light").hide();
	    $(".activeTips").hide();
	});

});

//启动加载
loader.start();



var ringAnimate = document.getElementById("ringAnimate");
ringAnimate.addEventListener("webkitAnimationEnd", animationListener_ringAnimate, false);
function animationListener_ringAnimate(){
	window.location.href = "video.html";
}



