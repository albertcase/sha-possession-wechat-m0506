

var basePath='http://wximg.qq.com/wxp/moment/Vy5RRaaAl/';
var wa = new WxMoment.Analytics({
    //projectName 请与微信商务团队确认
    projectName: "20160520Piaget"
}); 
new WxMoment.Share({
    //分享到朋友圈
    'moment': {
        'title': "Piaget Possession 转动,世界由你掌握"
    },
    //分享给好友
    'friend': {
        'title': "Piaget Possession 转动,世界由你掌握",
        'desc': "姚晨：给你一次旋转，一次探寻内心的旅程，和我一起转动世界。"
    },
    'global': {
        'img_url': basePath + "/imgs/share.jpg",
        'link': window.location.href.split("?")[0].replace(/([&|\?]{1})ticket=[\w\-]+(&?)/, '$1').replace(/\?$/, '')
    }
});


//new WxMoment.OrientationTip();

