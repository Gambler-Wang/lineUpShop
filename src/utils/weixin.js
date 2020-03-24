const wxApi = {
    appid:"wxa29cffff0f803eec",
    urlencode: function(url){
        url = (url + '').toString();
        return encodeURIComponent(url).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').  
        replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');  
    },
    author: function(redirect_uri){
        redirect_uri = this.urlencode(redirect_uri)
        var url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + this.appid + "&redirect_uri=" + redirect_uri + "&response_type=code"  + "&scope=snsapi_userinfo" + "&state=STATE#wechat_redirect";
        window.location.href = url;
    },
    getUrlParams: function(){
        var url = location.search; //获取url携带的参数
        var urlParams = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            var strs = str.split("&");
            for(var i = 0; i < strs.length; i ++) {
                urlParams[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
            }
        }
        return urlParams;
    }
}
module.exports = {
    wxApi
}