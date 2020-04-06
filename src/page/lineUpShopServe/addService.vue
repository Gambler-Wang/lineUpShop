<template>
  <div class="addService">
    <!-- <div class="nav">
      <span class="iconfont iconleft left"></span>
      <span>服务信息编辑</span>
    </div> -->
    <div class="section">
      <!--<div class="title">反馈内容</div>-->
      <div class="text">
        <x-textarea class="textarea" placeholder="" name=""  id="" :cols="30" :rows="3"></x-textarea>
      </div>
      <div class="uploadBox">
        <span class="upload">
          <input  type="file">
          <img src="../../assets/img/9.png" alt="">
        </span>
      </div>
      <group title="" gutter="10px">
        <x-input title="原价" placeholder="服务划线价" novalidate :show-clear="false" @on-blur="onBlur" placeholder-align="right"></x-input>
      </group>
      <group title="" gutter="0">
        <x-input title="活动价" placeholder="服务实际销售价格" novalidate :show-clear="false" @on-blur="onBlur" placeholder-align="right"></x-input>
      </group>
      <div class="materials">
        <div class="title">材料/工具(非必填)</div>
        <div class="toolBox">
          <div class="add">＋</div>
          <div>
            <span>×</span>
            美发蒸汽机
          </div>
        </div>
      </div>
      <group gutter="10px">
        <cell  title="图文详情" is-link >
          <div slot="value">暂未设置</div>
        </cell>
      </group>
      <div class="btnBox">
        <button class="release">保存，下一步</button>
        <button class="cancel">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { XTextarea, XInput, Group, Cell} from 'vux'
  export default {
    name: "addService",
    components: {
      XTextarea,
      XInput,
      Group,
      Cell
    },
    data() {
      return {}
    },
    methods:{
      onBlur(){
        
      }
    }
  }
</script>

<style  lang="less">
  .addService {
    font-size:34px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(41,41,41,1);
    line-height:48px;
    .nav {
      height:88px;
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
      /*padding: 24px 30px;*/
      .text {
        .textarea {
          height: 207px;
          padding: 30px;
          width: 100%;
          background-color: #fff;
          box-sizing: border-box;
          .weui-textarea {
            font-size:34px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(41,41,41,1);
          }
        }
      }
      .uploadBox {
        display: flex;
        background-color: #fff;
        padding: 30px;
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
      .vux-x-input {
        padding: 23px 30px ;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        font-size: 30px;
      }
      .materials {
        margin-top: 20px;
        padding: 30px 27px;
        font-size: 30px;
        background-color: #fff;
        .toolBox{
          display: flex;
          margin-top: 26px;
          div {
            padding: 0 30px;
            border-radius:4px;
            border:1px solid rgba(229,229,229,1);
            margin-right: 28px;
            position: relative;
            font-size:24px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(41,41,41,1);
            span {
              position: absolute;
              width:20px;
              height:20px;
              right: -12px;
              top: -12px;
              text-align: center;
              background:rgba(212,80,80,1);
              border:1px solid rgba(255,255,255,1);
              color: #fff;
              line-height: 15px;
              border-radius: 20px;
            }
          }
          .add {
            padding: 0px 38px;
            background:rgba(255,255,255,1);
            border-radius:4px;
            font-weight: 600;
            text-align: center;
            font-size: 40px;
            line-height: 58px;
            border:1px solid rgba(229,229,229,1);
          }
        }
      }
      .btnBox {
        padding:0 30px;
        margin-top: 100px;
        box-sizing: border-box;
        button {
          height:88px;
          width: 100%;
          text-align: center;
          border-radius:8px;
          border: none;
          outline: none;
          font-size:30px;
        }
        .release {
          background:rgba(212,80,80,1);
          box-shadow:0px 2px 4px 0px rgba(212,80,80,0.38);
          color:rgba(255,255,255,1);
          line-height:88px;
        }
        .cancel {
          height:88px;
          width: 100%;
          text-align: center;
          background-color: #F2F2F2;
          font-size:30px;
          line-height:88px;
        }
      }
    }
  }

</style>
