<template>
  <div class="evaluate">
    <!-- <div class="nav">
      <span class="iconfont iconleft left"></span>
      <span>意见反馈</span>
    </div> -->
    <div class="section">
      <div class="title">反馈内容</div>
      <div class="text">
        <x-textarea class="textarea" placeholder="填写您所遇到的问题，或您对我们的建议！" name=""  id="" cols="30" rows="10"></x-textarea>
      </div>
      <group title="" gutter="0">
        <x-input title="称呼(必填)" placeholder="便于我们于您联系!" novalidate :icon-type="iconType" :show-clear="false" @on-blur="onBlur" placeholder-align="left"></x-input>
      </group>
      <group title="" gutter="0">
        <x-input title="电话(必填)" placeholder="便于我们于您联系!" novalidate :icon-type="iconType" :show-clear="false" @on-blur="onBlur" placeholder-align="left"></x-input>
      </group>
      <div class="isuu">问题截图(必填)</div>
      <div class="uploadBox">
        <span class="upload">
          <input  type="file">
          <img src="../../assets/img/9.png" alt="">
        </span>
      </div>
      <div class="release">提交</div>
    </div>
  </div>
</template>

<script>
  import { XTextarea, XInput, Group} from 'vux'
  export default {
    name: "feedback",
    components: {
      XTextarea,
      XInput,
      Group,
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
    font-size:30px;
    background:rgba(255,255,255,1);
    min-height: 100vh;
    box-sizing: border-box;
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
      padding: 24px 30px;
      .title {
        font-size:34px;
        color:#292929;
        line-height:42px;
      }
      .text {
        margin-top: 26px;
        .textarea {
          height: 395px;
          padding: 0;
          width: 100%;
          box-sizing: border-box;
        }
      }
      .vux-x-input {
       padding: 25px 0 21px 0 ;
      }
      .isuu {
        padding: 22px 0;
      }
      .uploadBox {
        display: flex;
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
        margin-top: 171px;
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
