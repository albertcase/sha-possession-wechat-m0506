
$(document).ready(function(){

	var rimg = $("#ringImg"), a=0, b=0, sitime, lightImg = $("#lightImg"), litime;

	function ani(n){
		rimg.attr("src", "../img/ring/ring_000"+n+".png");
	}

	function lightAni(n){
		lightImg.attr("src", "../img/light/light_000"+n+".png");
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
		'img/share.jpg',
		'img/wifi.png',

		'img/ring/ring_00000.png', 
		'img/ring/ring_00001.png', 
		'img/ring/ring_00002.png', 
		'img/ring/ring_00003.png', 
		'img/ring/ring_00004.png', 
		'img/ring/ring_00005.png', 
		'img/ring/ring_00006.png', 
		'img/ring/ring_00007.png', 
		'img/ring/ring_00008.png', 
		'img/ring/ring_00009.png', 
		'img/ring/ring_00010.png', 
		'img/ring/ring_00011.png', 
		'img/ring/ring_00012.png', 
		'img/ring/ring_00013.png', 
		'img/ring/ring_00014.png', 
		'img/ring/ring_00015.png', 
		'img/ring/ring_00016.png', 
		'img/ring/ring_00017.png', 
		'img/ring/ring_00018.png', 
		'img/ring/ring_00019.png', 
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

	    litime = setInterval(function(){
			if(b>=16){
				clearTimeout(litime);	
			}else{
				b<10?b="0"+b:b;
				//console.log(a);
				lightAni(b);
				b++;
			}
		}, 67);

	    //swipe example
		touch.on('.index', 'swiperight', function(ev){
			if($(".bg").hasClass("startAnimate")) return false;
		    $(".bg").addClass("startAnimate");  
		    $(".light").hide();
		    $(".activeTips").hide();

		    sitime = setInterval(function(){
				if(a>=24){
					clearTimeout(sitime);

					setTimeout(function(){
						window.location.href = "video.html";
					}, 600)
					
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




})



