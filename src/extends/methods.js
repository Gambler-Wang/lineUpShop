import Vue from 'vue'

Vue.prototype.$go = function (path, cache = true) {
  if (cache) {
    this.$router.push(path)
  } else {
    this.$router.replace(path)
  }
}
Vue.prototype.$back = function () {
  this.$router.go(-1)
}
Vue.prototype.$backAndriod = function () {
  if (window.android) {
    window.android.backToBefore();
  } else {
    this.$router.go(-1);
  }
}
Vue.prototype.$randomColor = function (a) {
  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
}
Vue.prototype.setCookie = function (name, value, day) {
  if(day !== 0){     //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
    var expires = day * 24 * 60 * 60 * 1000;
    var date = new Date(+new Date()+expires);
    document.cookie = name + "=" + escape(value) + ";expires=" + date.toUTCString();
  }else{
    document.cookie = name + "=" + escape(value);
  }
}
Vue.prototype.getCookie = function(c_name) {
  if (document.cookie.length>0)
  {
    var c_start=document.cookie.indexOf(c_name + "=")
    if (c_start!=-1)
    {
      c_start=c_start + c_name.length+1
      var c_end=document.cookie.indexOf(";",c_start)
      if (c_end==-1) c_end=document.cookie.length
      return unescape(document.cookie.substring(c_start,c_end))
    }
  }
  return ""
}
Vue.prototype.delCookie = function($name){
  var myDate=new Date();
  myDate.setTime(-1000);//设置时间
  document.cookie=$name+"=''; expires="+myDate.toGMTString();
}

Vue.prototype.getNewDate = function (_dateObject, x) {
  if (_dateObject == null || undefined == _dateObject || _dateObject == '') {
    _dateObject = new Date();
  }
  _dateObject.setMonth(_dateObject.getMonth() + x);
  //返回日期的毫秒表示
  var nd = _dateObject.valueOf();
  nd = new Date(nd);

  var y = nd.getFullYear();
  var m = nd.getMonth() + 1;
  var d = nd.getDate();

  if (m <= 9) m = '0' + m;
  if (d <= 9) d = '0' + d;
  var cdate = y + '-' + m;

  return cdate;
}
Vue.prototype.$dateFormat = function(timestamp,type) {
  if(typeof Number(timestamp) !='number'){
    return ''
  }
  if(!type) {type='YYYY-MM-dd HH:mm:ss';}
  var date = new Date(Number(timestamp));//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var  Y = date.getFullYear();
  var  M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
  var  D = date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
  var  h = date.getHours() < 10 ? '0'+date.getHours() : date.getHours();
  var  m = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes();
  var  s = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds();
  switch(type)
  {
  case 'YYYY-MM-dd HH:mm:ss':
    return Y + '-' +M + '-' +D + ' ' + h+ ':' + m + ':' + s;
    break;
  case 'YYYY-MM-dd':
    return Y + '-' +M + '-' +D;
    break;
  case 'YYYY-MM':
    return Y + '-' +M;
    break;
  case 'MM-dd':
    return M + '-' +D;
    break;
  case 'HH:mm':
    return h+ ':' + m;
    break;
  case 'HH:mm:ss':
    return h+ ':' + m + ':' + s;
    break;
  default:
    return '格式输入错误'
    break;
  }
}
Vue.prototype.a_open=function(val){
  const a = document.createElement('a');
  a.style.display = 'none';
  a.target='_self';
  a.href = val;
  a.click();
  document.body.removeChild(a);
}
