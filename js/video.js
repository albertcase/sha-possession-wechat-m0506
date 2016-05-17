$(document).ready(function(){


    var video, vidArr = ["z0191hxugeu", "z0191hxugeu"], modIdArr = ["v1", "v2"], picArr = ["/img/poster-1.jpg", "/img/poster-2.jpg"];

    var videoWidth = document.body.clientWidth;
	var videoHeight = videoWidth * (1080 / 1920);
	$(".video").css({"height":videoHeight});

	function videoFun(n){
		$(".video").html("");

		video = new tvp.VideoInfo(); 
		video.setVid(vidArr[n]);
		player = new tvp.Player(); 
		player.create({
			width: videoWidth + 'px',
			height: videoHeight + 'px',
			video: video,
			pic: picArr[n],
			modId: modIdArr[n], //mod_player是刚刚在页面添加的div容器 autoplay:true
			oninited: function () {
		        //播放器在视频载入完毕触发
		    },
		    onplaying: function () {
		        //播放器真正开始播放视频第一帧画面时
		        $(".swiperArr").hide();
		        $(".swiper-slide-active").addClass("stop-swiping");
		    },
		    onpause: function () {
		        //播放器触发暂停时，目前只针对HTML5播放器有效
		        $(".swiperArr").show();
		        $(".swiper-slide").removeClass("stop-swiping");
		    },
		    onresume: function () {
		        //暂停后继续播放时触发
		    },
		    onallended: function () {
		        //播放器播放完毕时
		        $(".swiperArr").show();
		        $(".swiper-slide").removeClass("stop-swiping");
		    },
		    onfullscreen: function (isfull) {
		        //onfullscreen(isfull) 播放器触发全屏/非全屏时，参数isfull表示当前是否是全屏
		    }
		});

		
	}


	//可以通过以下方式控制播放/暂停
	//video.getPlayer().play();
	//video.getPlayer().pause();

	//以下可以拉起iOS全屏播放
	//video.getPlayer().enterFullScreen();


	var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        noSwiping : true,
		noSwipingClass : 'stop-swiping',
        onInit: function(swiper){
		    //Swiper初始化了
		    //alert(swiper.activeIndex);提示Swiper的当前索引
		    $(".videoCon").css({"opacity": 1});
		    videoFun(swiper.activeIndex);
	    },
        onSlideChangeEnd: function(swiper){
	      	videoFun(swiper.activeIndex);
	    }
    });


})

