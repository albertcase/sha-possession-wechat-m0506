

new WxMoment.OrientationTip();
var share = new WxMoment.Share();

document.addEventListener('touchmove', function (e) {
    e.preventDefault();
}, false);

var basePath= "/";//'http://wximg.qq.com/wxp/moment/Vy5RRaaAl/';

var wa = new WxMoment.Analytics({
    //projectName 请与微信商务团队确认
    projectName: "20160520Piaget"
}); 
new WxMoment.Share({
    //分享到朋友圈
    'moment': {
        'title': "与高圆圆一起转动Possession"
    },
    //分享给好友
    'friend': {
        'title': "与高圆圆一起转动Possession",
        'desc': "转动，世界由你掌握"
    },
    'global': {
        'img_url': "http://wximg.qq.com/wxp/moment/Vy5RRaaAl/img/share.jpg",
        'link': "http://wximg.qq.com/wxp/moment/Vy5RRaaAl/html/index.html" //window.location.href.split("?")[0].replace(/([&|\?]{1})ticket=[\w\-]+(&?)/, '$1').replace(/\?$/, '')
    }
});
