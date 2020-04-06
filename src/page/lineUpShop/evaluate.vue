<template>
  <div class="evaluate">
    <!-- <div class="nav">
      <span class="iconfont iconleft left"></span>
      <span>评价</span>
    </div> -->
    <Header title="评价" />
    <div class="section">
      <div class="title">造型，节假日通用【椰岛造型】</div>
      <div class="xingxing">总体&nbsp;&nbsp;
        <div class="xingBox"><span class="iconfont iconxingxing"></span></div>
        <div class="xingBox"><span class="iconfont iconxingxing"></span></div>
        <div class="xingBox"><span class="iconfont iconxingxing"></span></div>
        <div class="xingBox grey"><span class="iconfont iconxingxing"></span></div>
        <div class="xingBox grey"><span class="iconfont iconxingxing"></span></div>
      </div>
      <div class="text">
        <x-textarea class="textarea" placeholder="服务是否周到，店铺环境怎样，性价比如何，欢迎
评价！" name=""  id="" cols="30" rows="10"></x-textarea>
      </div>
      <div class="tibs">加油还差15个字！</div>
      <div class="uploadBox">
        <span class="upload">
          <input  type="file">
          <img src="../../assets/img/9.png" alt="">
        </span>
      </div>
      <div class="release">发布</div>
    </div>
  </div>
</template>

<script>
  import { XTextarea } from 'vux';
  import Header from '../../components/header';
  export default {
    name: "evaluate",
    components: {
      XTextarea,Header
    },
    data() {
      return {}
    }
  }
</script>

<style scoped lang="less">
  .evaluate {
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    font-size:26px;
    background:rgba(255,255,255,1);
    min-height: 100vh;
    box-sizing: border-box;
    padding-top: 96px;
    .nav {
      height:88px;
      background:rgba(255,255,255,1);
      font-size:34px;
      font-weight:400;
      color:rgba(41,41,41,1);
      text-align: center;
      line-height: 88px;
      box-sizing: border-box;
      padding: 0 30px;
      .left {
        float: left;
      }
    }
    .section {
      padding: 26px 30px;
      .title {
        font-size:34px;
        color:rgba(41,41,41,1);
        line-height:48px;
      }
      .xingxing {
        display: flex;
        padding: 30px 0;
        font-size: 30px;
        border-bottom: 1px solid #E5E5E5;
        .xingBox {
          width:48px;
          height:48px;
          background:rgba(212,80,80,1);
          box-shadow:0px 2px 4px 0px rgba(212,80,80,0.38);
          border-radius:4px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 13px;
          &.grey {
            background:rgba(255,223,223,1);
            box-shadow:0px 2px 4px 0px rgba(212,80,80,0.17);
            border-radius:4px;
          }
          span {
            color: white;
            font-size: 22px;
          }
        }
      }
      .text {
        /*padding: 37px 0;*/
        .textarea {
          height: 542px;
          width: 100%;
          box-sizing: border-box;
        }
      }
      .tibs {
        text-align: right;
        font-size:30px;
        color:rgba(153,153,153,1);
        line-height:50px;
      }
      .uploadBox {
        display: flex;
        margin-top: 49px;
        .upload {
          width:180px;
          height:180px;
          background:rgba(242,242,242,1);
          border-radius:4px;
          border:2px solid rgba(221,221,221,1);
          position: relative;
          input {
            width: 100%;
            height: 100%;
            opacity: 0;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 2;
          }
          img {
            position: absolute;
            width:92px;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
          }
        }
      }
      .release {
        height:88px;
        width: 100%;
        margin-top: 71px;
        text-align: center;
        background:rgba(212,80,80,1);
        box-shadow:0px 2px 4px 0px rgba(212,80,80,0.38);
        border-radius:8px;
        font-size:30px;
        color:rgba(255,255,255,1);
        line-height:88px;
      }
    }
  }

</style>
