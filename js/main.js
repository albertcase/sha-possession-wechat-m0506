/*! main.js */

document.addEventListener('touchmove' , function (ev){
  ev.preventDefault();
  return false;
} , false)



;(function($){
    $(function(){

        var basePath='http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/';
		var wa = new WxMoment.Analytics({
		    //projectName 请与微信商务团队确认
		    projectName: "20150527PIAGET"
		}); 
		new WxMoment.Share({
		    //分享到朋友圈
		    'moment': {
		        'title': "女人，要有转动世界的姿态"
		    },
		    //分享给好友
		    'friend': {
		        'title': "女人，要有转动世界的姿态",
		        'desc': "姚晨：给你一次旋转，一次探寻内心的旅程，和我一起转动世界。"
		    },
		    'global': {
		        'img_url': basePath + "/imgs/share.jpg",
		        'link': window.location.href.split("?")[0].replace(/([&|\?]{1})ticket=[\w\-]+(&?)/, '$1').replace(/\?$/, '')
		    }
		});


		function _handTrace(opacity){
			if(opacity == 1){
				$("#mask,.active_trace").fadeIn()
			}else{
				$("#mask,.active_trace").fadeOut();
			}
		}

		


        var vidArr = ["n01549ttjri","e0154ucxeqm","i0153yonvs6"];
        var vPic = ["http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/poster1.jpg","http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/poster2.jpg","http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/poster3.jpg"]
        var vText = ["POSSESSION 艺术短片","独家花絮 抢先观看","POSSESSION 转动世界的姿态"]
        var ringTips = ["上转：观赏短片花絮","上转：开启全球广告大片","下转：回顾艺术短片及花絮"]

		var player;
		var videoWidth = document.body.clientWidth;
		var videoHeight = videoWidth * (1080 / 1920);

		$(".video").css({"height":videoHeight});

		var videoFun = function(n){
			var video = new tvp.VideoInfo(); 
			video.setVid(vidArr[n]);
			player = new tvp.Player(); 
			player.create({
				width: videoWidth + 'px',
				height: videoHeight + 'px',
				video: video,
				pic: vPic[n],
				modId:"mod_player" //mod_player是刚刚在页面添加的div容器 autoplay:true
			});

			$(".videoText p").html(vText[n]);
			$(".active_tips").html(ringTips[n]);
		}


		/* 戒指动画 */
		var v = 0;
		
		var animationListener = function(){
			$(".routeAni").removeClass('up');
			$(".routeAni").removeClass('down');
			//console.log('do something');
		}

		var anim = document.getElementById("ring");
		anim.addEventListener("webkitAnimationEnd", animationListener, false);

		var l = $(".routeAni"),k = $(".response-home,#mask");

		touch.on(l, 'swipeup', function(event){

			$(".routeAni").addClass('up');
			if(v==2)return;
			if(v==0){
			  $(".routeAni span").attr("class","handArr2");
			  videoFun("1");
			  v=1;
			  $(".footer").show();
			}else if(v==1){
				videoFun("2");
				v=2;
				$(".footer").show();
				$(".routeAni span").attr("class","handArr3");
			}
		    event.preventDefault();
		});

		touch.on(l, 'swipedown', function(event){
			$(".routeAni").addClass('down');

			if(v==0)return;
			if(v==0){
			  $(".routeAni span").attr("class","handArr2");
			  videoFun("1");
			  v=1;
			}else if(v==1){
				$(".routeAni span").attr("class","");
				videoFun("0");
				v=0;
			}else{
				$(".routeAni span").attr("class","handArr2");
				videoFun("1");
				v=1;
				$(".footer").show();
			}
			$(".footer").show();
		    event.preventDefault();
		});


		var isJump = 0;
		/* home-ring */
		var animationListener_home = function(){
			$(".p_animate").removeClass('up');
			$("#mask,.active_trace").fadeOut();
			if(isJump == 0)return false;
			videoFun(0);
		    $(".container").hide().css({"opacity":0});
		    $("#dreambox").removeClass("homebg");
		    $("#video").show().animate({"opacity":1},1200);
		}

		var anim_home = document.getElementById("ring_home");
		anim_home.addEventListener("webkitAnimationEnd", animationListener_home, false);

		touch.on(k, 'swipeup', function(event){
			isJump = 1;
			_handTrace(0);
			$(".p_animate").addClass('up');  
		});

		touch.on($("#mask"), 'touchstart', function(event){
			_handTrace(0);
		});





		function _loading(){
			var loader = new WxMoment.Loader();
			
			    //添加一个资源
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/active_trace.png');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/bg.jpg');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/hand.png');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/handTips.png');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/holder_bg.jpg');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/join_btn.png');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/poster1.jpg');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/poster2.jpg');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/poster3.jpg');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/logo.png');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/pro.png');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/pro-home.png');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/slogan_cn.png');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/slogan_en.png');
			    loader.addImage('http://wximg.gtimg.com/tmt/_events/20150527-promo-piaget/dist/imgs/share.jpg');

			    //监听资源加载完成事件
			    loader.addCompletionListener(function () {
			    	$("#mask").fadeIn();
			    	$("#touch").animate({"opacity":1},1000,function(){
			    		$(".hand").addClass('handhdAni');  
			    		setTimeout(function(){
			    			$(".p_animate").addClass('up');  
			    		
				    		$(".possession").animate({"opacity":1,"margin-top":"2px"},900,function(){
				    			$(".scText").animate({"opacity":1},300);
				    		});
			    		},300);
			    		
			    	});

			    	setTimeout(function(){
						_handTrace(1);
					},300);

			        console.log('加载完成');
			    });

				loader.addProgressListener(function(e) {
						var percent = Math.round( e.completedCount / e.totalCount * 100 );
						//$(".loading").css({"width":percent+"%"});
						$(".process").css({"width": percent+"%"});
				});
				
			    //启动资源加载管理器
			    loader.start();
		}

		_loading();

 	})

})(jQuery)













