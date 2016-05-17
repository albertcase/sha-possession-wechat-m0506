
var rimg = $("#ringImg"), a=1, sitime;

function ani(n){
	rimg.attr("src", "/img/ring/RING 2_000"+n+".png");
}


var loader = new WxMoment.Loader();

//声明资源文件列表
var fileList = [
	'img/bg.jpg', 
	'img/light.png', 
	'img/arr_l.png', 
	'img/arr_r.png', 
	'img/btn.png', 
	'img/logo.png', 
	'img/tips.png', 
	'img/videobg.jpg', 
	'img/poster-1.jpg',
	'img/poster-2.jpg',

	'img/ring/RING 2_00000.png', 
	'img/ring/RING 2_00001.png', 
	'img/ring/RING 2_00002.png', 
	'img/ring/RING 2_00003.png', 
	'img/ring/RING 2_00004.png', 
	'img/ring/RING 2_00005.png', 
	'img/ring/RING 2_00006.png', 
	'img/ring/RING 2_00007.png', 
	'img/ring/RING 2_00008.png', 
	'img/ring/RING 2_00009.png', 
	'img/ring/RING 2_00010.png', 
	'img/ring/RING 2_00011.png', 
	'img/ring/RING 2_00012.png', 
	'img/ring/RING 2_00013.png', 
	'img/ring/RING 2_00014.png', 
	'img/ring/RING 2_00015.png', 
	'img/ring/RING 2_00016.png', 
	'img/ring/RING 2_00017.png', 
	'img/ring/RING 2_00018.png', 
	'img/ring/RING 2_00019.png', 
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
    $("img").each(function(){ 
        $(this).attr("src",$(this).attr("sourcesrc"));
    })

    $(".index").css({"opacity": 1});

    $(".light").addClass("startAnimate");

    $(".testcon").css("width", parseInt($("#ringAnimate").css("width"), 10)/18);

    //swipe example
	touch.on('.index', 'swiperight', function(ev){
		if($(".bg").hasClass("startAnimate")) return false;
	    $(".bg").addClass("startAnimate");  
	    $(".light").hide();
	    $(".activeTips").hide();

	    sitime = setInterval(function(){
			if(a>=18){
				clearTimeout(sitime);

				setTimeout(function(){
					window.location.href = "video.html";
				}, 900)
				
			}else{
				a<10?a="0"+a:a;
				//console.log(a);
				ani(a);
				a++;
			}
		}, 67);

	});

});

//启动加载
loader.start();



// var ringAnimate = document.getElementById("ringAnimate");
// ringAnimate.addEventListener("webkitAnimationEnd", animationListener_ringAnimate, false);
// function animationListener_ringAnimate(){
	
// }





