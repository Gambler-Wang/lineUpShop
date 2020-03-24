<template>
  <div id="app">
    <keep-alive >
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
 import '../static/fonticon/iconfont.css';
 import '../static/fonticon/iconfont.js';
export default {
  name: 'app'
};
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
  #app {
    color: rgb(16, 16, 16);
    font-style: normal;
    letter-spacing: 0px;
    background-color: #F2F2F2;
    min-height: 100vh;
  }

body {
   -webkit-user-select: none;   

  -moz-user-select: none;    

  -ms-user-select: none;    

  user-select: none;
  /*popover样式修改*/
  .vux-popover {
    left: 400px !important;
    background-color: rgba(0, 0, 0, 0.75) !important;
    
  }
  .popover {
    .li {
      width: 300px;
      padding: 30px 0 29px 24px;
      font-size: 30px;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 30px;
    }
  }

  .vux-popover-arrow-up {
    left: 300px !important;
    border-bottom-color: rgba(0, 0, 0, 0.75) !important;
  }
  /*头部样式*/
  header {
    text-align: center;
    height:88px;
    background:rgba(255,255,255,1);
    line-height: 88px;
    padding: 0px 30px;
    box-sizing: border-box;
    font-size: 36px;
    font-weight: 500;
    .left {
      float: left;
    }
    .fa-icon-return {
      font-size:44px;
      font-family:iconfont;
      font-weight:400;
      color:rgba(41,41,41,1);
    }
    .right {
      float: right;
    }
    .confirm {
      display: inline-block;
      width: 120px;
      height: 68px;
      margin-top: 16px;
      background: rgba(0, 103, 254, 1);
      text-align: center;
      line-height: 68px;
      border-radius: 8px;
      font-size: 30px;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
    .fa-moreline {
      font-size:44px;
      font-family:iconfont;
      font-weight:400;
      color:rgba(41,41,41,1);
      line-height:30px;
    }
    .fa-unie644 {
      font-size:44px;
      font-family:iconfont;
      font-weight:400;
      color:rgba(41,41,41,1);
      line-height:30px;
    }
  }
  /*popscreen*/
  .pop {
    .vux-popup-dialog {
      background: rgba(255,255,255,0.8);
      .popContent {
        padding: 47px;
        .title {
          margin-top: 254px;
          font-size:40px;
          font-family:PingFang SC;
          font-weight:800;
          color:rgba(0,0,0,1);
          line-height:30px;
        }
        .info {
          margin-top: 24px;
          font-size:30px;
          font-family:PingFang SC;
          font-weight:400;
          color:rgba(153,153,153,1);
          line-height:48px;
        }
        .box {
          display: flex;
          margin-top: 476px;
          .li {
            flex: 1;
            text-align: center;
            .iconfont {
              display: inline-block;
              width: 100px;
              height: 100px;
              border-radius: 100px;
              font-size:44px;
              font-family:iconfont;
              font-weight:400;
              color:rgba(255,255,255,1);
              line-height:100px;
              &.fa-home{
                background-color: #0067FE;
              }
              &.fa-car{
                background-color: #00C870;
              }
              &.fa-truck{
                background-color: #FF9600;
              }
            }
          }
        }
        .colsecirc {
          text-align: center;
          margin-top: 128px;
          .iconfont {
            font-size:72px;
            font-family:iconfont;
            font-weight:400;
            color:rgba(187,187,187,1);
            line-height:30px;
          }
        }
      }
    }
  }
  // 时间控件样式修改
  // .dp-header .dp-item.dp-right{
    // color: #0067fe;
  // }
  //图片预览全局样式修改
  .pswp__scroll-wrap{
    .pswp__top-bar{
      height: 8.5vw;
    }
    .pswp__button{
      display: none;
      width: 8.5vw;
      height: 8.5vw;
      background-size: 40vw 13vw;
      &.pswp__button--close{
        display: block;
      }
    }
  }
}
input{
  -webkit-user-select:text !important;
}
</style>
