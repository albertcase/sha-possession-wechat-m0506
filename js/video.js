// var pageSlider = new WxMoment.PageSlider({
//     pages: $('.screen'),
//     rememberLastVisited: true,
//     oninit: function(){
//         //返回时，需告诉我们此时为返回动作而不是刷新，可以通过 hash 告诉我们
//         //PageSlider 所有回调接口 this 指向 PageSlider，方便进行操作
//         if(this.rememberLastVisited){
//             //如果返回是true，就执行下面跳转代码
//             this.moveTo(this.lastVisitedIndex, true);
//         }
//     }
// });

//可用接口
// pageSlider.prev() //上一屏
// pageSlider.next() //下一屏
// pageSlider.moveTo(n) //跳转到第 n 屏，有缓动效果
// pageSlider.moveTo(n, true) //直接跳到第 n 屏，没有缓动效果

$(document).ready(function(){
    var wa = new WxMoment.Analytics({
        projectName: "20160520Piaget"
    });
    
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
		    },
		    onpause: function () {
		        //播放器触发暂停时，目前只针对HTML5播放器有效
		    },
		    onresume: function () {
		        //暂停后继续播放时触发
		    },
		    onallended: function () {
		        //播放器播放完毕时
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



