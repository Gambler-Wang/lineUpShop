<template>
  <section id="hairdresserEntry">
    <section class="main">
      <h3>椰岛造型(广谷广场店)</h3>
      <div class="item header-icon-box">
        <cell>
          <div slot="title" class="label">
            <span>头像</span>
          </div>
          <div slot class="upload-box">
            <img src="../../assets/img/img-upload-icon.png" alt="">
          </div>
        </cell>
      </div>
      <div class="item">
         <x-input placeholder="请输入您名片上的名称" v-model="name" :show-clear="false">
          <div slot="label" class="label">
            <span>名称</span>
          </div>
         </x-input>
      </div>
      <div class="item">
         <x-input placeholder="请填写名片上的头衔" v-model="rank" :show-clear="false">
          <div slot="label" class="label">
            <span>头衔</span>
          </div>
         </x-input>
      </div>
      <div class="item">
         <x-input placeholder="请填写手机号码" v-model="phone" :show-clear="false" is-type="china-mobile">
          <div slot="label" class="label">
            <span>手机号</span>
          </div>
         </x-input>
      </div>
      <div class="item">
        <calendar :readonly="false" title="入行时间" v-model="time" placeholder="请选择入行时间">
          <div slot="label" class="label">
            <span>手机号</span>
          </div>
        </calendar>
      </div>
      <div class="item personal-desc">
        <p>个人说明</p>
        <x-textarea placeholder="请从从业经历、获得得奖项、技术能力登方面介绍自己" v-model="personalDesc">

        </x-textarea>
      </div>
      <p @click="isAgress=!isAgress">
        <i v-if="isAgress" class="iconfont">&#xd0088;</i>
      <i  v-if="!isAgress" class="iconfont">&#xd0072;</i>
        <span>接受个人信息真实性承诺</span>
      </p>
      <div class="examine-btn">提交审核</div>
    </section>
  </section>
</template>

<script>
import { XInput, Group,Cell,Calendar,XTextarea} from 'vux'
  export default {
    name: 'hairdresserEntry',
    components: {
      XInput, Group,Cell,Calendar,XTextarea
    },
    data(){
      return{
        name:'',
        rank:'',
        phone:'',
        time:'',
        personalDesc:'',
        isAgress:false

      }
    },
    methods:{
     
    }
  };
</script>

<style lang="less">
  #hairdresserEntry{
    .main{
      height: 100vh;
      width: 100vw;
      box-sizing: border-box;
      overflow: auto;
      background-color: #fff;
      &>h3{
        height:88px;
        line-height: 88px;
        background:rgba(255,255,255,1);
        font-size:34px;
        font-weight:600;
        color:rgba(41,41,41,1);
        padding-left: 30px;
        margin-bottom: 1px;
      }
      &>.item{
        height: 88px;
        line-height: 88px;
        padding: 0 30px;
        box-sizing: border-box;
        background-color: #fff;
        margin-bottom: 1px;
        position: relative;
        &::before{
          content: '*';
          position: absolute;
          left: 20px;
          top: 0;
          color: #E05C5C;
        }
        &::after{
          content: '';
          position: absolute;
          height: 1px;
          width: 100%;
          background-color: #f2f2f2;
          left: 0;
          top: 0;
        }
        & .weui-cell{
          padding: 0;
          box-sizing: border-box;
          & .sign{
            font-style: normal;
            color: #E05C5C;
            // font-size: 28px;
          }
          & .label{
            margin-right: 20px;
            padding-left: 20px;
            // font-size: 30px;
          }
        }
        & .vux-calendar{
          &::before{
            display: none;
          }
          & .vux-cell-bd{
            margin-right: 20px;
            & .vux-label{
              padding-left: 20px;
            }
          }
          & .weui-cell__ft{
            text-align: left;
          }
        }
        &.header-icon-box{
          height: 120px;
          line-height: 120px;
          // display: flex;
          // justify-content: space-between;
          // align-items: center;
          & .upload-box{
            width:88px;
            height:88px;
            background:rgba(242,242,242,1);
            border-radius:8px;
            border:1px solid rgba(229,229,229,1);
            text-align: center;
            line-height: 88px;
            &>img{
              vertical-align: middle;
              width: 46px;
              height: 44px;
            }
          }
        }
        &.personal-desc{
          height: auto;
          margin-bottom: 30px;
          &>p{
            padding-left: 20px;
          }
          & .vux-x-textarea{
            height:287px;
            background:rgba(242,242,242,1);
            border-radius:8px;
            border:1px solid rgba(229,229,229,1);
            &::before{
              display: none;
            }
            & textarea{
              padding: 30px;
              box-sizing: border-box;
              font-size:28px;
              font-weight:400;
              color:rgba(41,41,41,1);
              line-height:40px;
              background:rgba(242,242,242,1);
            }
          }
        }
      }
      &>p{
        font-size: 28px;
        color: #999;
        padding: 0 30px;
        margin-bottom: 88px;
        color: #E05C5C;
      }
      &>.examine-btn{
        width:690px;
        margin: 0 auto;
        height:88px;
        line-height: 88px;
        background:rgba(212,80,80,1);
        box-shadow:0px 2px 4px 0px rgba(212,80,80,0.38);
        border-radius:8px;
        font-size: 28px;
        color: #fff;
        text-align: center;
      }
    }
  }
</style>
