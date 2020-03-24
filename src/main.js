// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import App from './App';
import router from './router';
import { Flexbox, FlexboxItem, AjaxPlugin, ToastPlugin, LoadingPlugin } from 'vux';
import {API_BASE_URL} from '@/config/app';
import zrender from 'zrender';
import '@/extends';

// import VueVideoPlayer from 'vue-video-player';

// Vue.use(VueVideoPlayer);

Vue.prototype.zrender = zrender;
Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
FastClick.attach(document.body);

Vue.config.productionTip = false;

Vue.component('flexbox', Flexbox);
Vue.component('flexbox-item', FlexboxItem);
Vue.use(AjaxPlugin);
var res = {
  'token': 'oHKlXwD9EmYYyc4imcvT5-66i2PE'
};
if (window.android) {
  res = JSON.parse(window.android.postParamsToWeb());
}
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
// 定义一个全局混合对象
Vue.mixin({
  data () {
    return {
      api: require('./config/api.js'),
      API_BASE_URL: API_BASE_URL
    };
  },
  created () {
    if (window.android) {
      this.setCookie('token', res.tokenType + ' ' + res.accessToken, 30);
    }
  },
  methods: {
    request (url, data = {}, method = 'post', header = 'application/x-www-form-urlencoded') {
      let vux = this;
      let config = {
        baseURL: API_BASE_URL,
        method: method,
        transformRequest: [function (data) {
          if (header === 'application/x-www-form-urlencoded' && method === 'post') {
            let ret = '';
            for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            return ret;
          } else return data;
        }],
        url: url,
        data: data,
        params: Object.assign({}, data),
        dataType: 'json',
        headers: {
          'Content-Type': header,
          'token': this.getCookie('token')
        }
      };
      if (config.method === 'get' || config.method === 'GET') {
        config.data = '';
      } else if (config.method === 'post' || config.method === 'POST') {
        config.params = '';
      }
      return new Promise(function (resolve, reject) {
        vux.$http(config)
          .then(res => {
            if (res.status === 200) {
              if (res.data.code === 10017) {
                // if(res.config.url.indexOf('communitygrid')>0){
                //   vux.$go('/gridCommunityLogin')
                // }else if(res.config.url.indexOf('company')>0){
                //   vux.$go('/companyLogin')
                // }else if(res.config.url.indexOf('community')>0){
                //   vux.$go('/login')
                // }
                vux.$vux.toast.text(res.data.msg,'bottom');
              } else {
                resolve(res.data);
              }
            } else {
              reject(res.errMsg);
            }
          })
          .catch(e => {
            // vux.$vux.toast.text(e);
          });
      });
    }
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app-box',
  router,
  components: {App},
  template: '<App/>'
});
