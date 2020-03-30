<template>
  <section id="lineUpPay">
    <section class="main">
      <div class="goods-ticket">
        <img src="../../assets/img/default-goods-des-icon.jpg" alt="">
        <div>
          <h5>造型，节假日通用</h5>
          <div>
            <span>
              <i class="iconfont" style="color:#0067FE;">&#xe701;</i>
              <i class="iconfont" style="color:#0067FE;">&#xe701;</i>
              <i class="iconfont" style="color:#0067FE;">&#xe701;</i>
              <i class="iconfont">&#xe701;</i>
              <i class="iconfont">&#xe701;</i>
              <i class="iconfont">&#xe701;</i>
              <i class="iconfont">&#xe701;</i>
              <i class="iconfont">&#xe701;</i>
              <i class="iconfont">&#xe701;</i>
              <i class="iconfont">&#xe701;</i>
            </span>
            <span>32人</span>
          </div>
        </div>
      </div>
      <div class="item" @click="hairerListShow=true">
        <div>
          <span>发型师</span>
          <i class="iconfont">&#xd0083;</i>
        </div>
        <p>{{CurrentHairObj.name}}</p>
        <i class="iconfont">&#xd0109;</i>
      </div>
      <div class="item phone">
        <div>
          <span>预留电话</span>
          <i class="iconfont">&#xd0037;</i>
        </div>
        <p>13886984646</p>
      </div>
      <div class="item count">
        <div>
          <span>到店人数</span>
          <i class="iconfont">&#xd0083;</i>
        </div>
        <p class="count-edit">
          <i class="iconfont" @click="userCounts++">&#xe6a9;</i>
          <span>{{userCounts}}</span>
          <i class="iconfont" @click="userCounts--">&#xe6a8;</i>
        </p>
      </div>
      <div class="item time" @click="showOrderTime">
        <div>
          <span>服务时间</span>
          <i class="iconfont">&#xd0041;</i>
        </div>
        <p>{{orderTime}}</p>
        <i class="iconfont">&#xd0109;</i>
      </div>
      <div class="remark">
        <h5>排队说明：</h5>
        <p>1、到店时间超过预约时间段结束时间需支付10%的违约。</p>  
        <p>2、店铺提供服务超过时间段，服务费用8折优惠。</p>  
      </div>
      <div class="pay-btn">
        支付预约金2.00元，排队
      </div>
    </section>
    <div v-transfer-dom>
      <popup v-model="hairerListShow" height="100%">
      <popup-header
      left-text="取消" 
      right-text="确定"
      title="请选择发型师"
      :show-bottom-border="false"
      @on-click-left="hairerListShow = false"
      @on-click-right="hairerListShow = false"></popup-header>
        <div class="hairer-list-popup">
          <div :class="(item.selected)?'item active':'item'" @click="handleSelected(item)" v-for="(item,index) in hairerList" :key="index">
            <img src="../../assets/img/default-goods-des-icon.jpg" alt="">
            <div>
              <h5>{{item.name}}</h5>
              <p>{{"今日已排队"+item.count+"人"}}</p>
            </div>
            <i class="iconfont">&#xd0090;</i>
          </div>
        </div>
      </popup>
    </div>
  </section>
</template>
<script>
import { PopupHeader,Popup,TransferDom   } from 'vux'
  export default {
    name: 'lineUpPay',
    directives: {
      TransferDom
    },
    components: {
      PopupHeader,Popup 
    },
    data(){
      return{
        hairerListShow:false,
        userCounts:1,
        CurrentHairObj:{
          name:'到店安排',
          count:'23',
          selected:true
        },
        orderTime:'请选择服务时间',
        hairerList:[
          {
            name:'到店安排',
            count:'23',
            selected:true
          },
          {
            name:'Nice  |  资生设计师',
            count:'23',
            selected:false
          },
          {
            name:'Nice  |  资生设计师',
            count:'23',
            selected:false
          },
          {
            name:'Nice  |  资生设计师',
            count:'23',
            selected:false
          },
        ]
      }
    },
    methods:{
      handleSelected(item){
        this.hairerList.forEach(function(el){
          el.selected=false;
        })
        item.selected=true;
        this.CurrentHairObj=item;
      },
      showOrderTime () {
        var that =this;
        this.$vux.datetime.show({
          cancelText: '取消',
          confirmText: '确定',
          format: 'HH:mm',
          onConfirm (val) {
            console.log('plugin confirm', val);
            that.orderTime=val;
          },
          onShow () {
            console.log('plugin show')
          },
          onHide () {
            console.log('plugin hide')
          }
        })
      },
    }
  };
</script>

<style lang="less">
  #lineUpPay{
    .main{
      height: 100vh;
      width: 100vw;
      box-sizing: border-box;
      overflow: auto;
      padding: 20px 30px;
      box-sizing: border-box;
      &>.goods-ticket{
        padding: 30px 22px;
        box-sizing: border-box;
        background-color: #fff; 
        display: flex;
        margin-bottom: 20px;
        &>img{
          width: 140px;
          height: 140px;
          margin-right: 20px;
        }
        &>div{
          &>h5{
            height:48px;
            font-size:34px;
            font-weight:400;
            color:rgba(41,41,41,1);
            line-height:48px;
            margin-bottom: 4px;
          }
          &>div{
            margin-bottom: 12px;
            &>i{
              font-size: 26px;
              color: #999999;
            }
            &>span{
              &:nth-of-type(1){
                font-size: 0;
              }
              font-size: 24px;
              color: #999999;
            }
          }
        }
      }
      &>.item{
        height:88px;
        line-height: 88px;
        background:rgba(255,255,255,1);
        border-radius:8px;
        display: flex;
        justify-content: space-between;
        position: relative;
        margin-bottom: 20px;
        &>div{
          padding-left: 88px;
          position: relative;
          &>span{
            color: #292929;
            font-size: 30px;
          }
          &>i{
            position:absolute;
            width: 88px;
            height: 88px;
            line-height: 88px;
            left: 0;
            top: 0;
            text-align: center;
            color: #BBBBBB;
            font-size: 30px;
          }
        }
        &>p{
          flex: 1;
          text-align: right;
          color: #999999;
          font-size: 30px;
          padding-left: 30px;
          padding-right: 58px;
        }
        &>i{
          position:absolute;
          width: 88px;
          height: 88px;
          line-height: 88px;
          right: 0;
          top: 0;
          text-align: center;
          color: #BBBBBB;
          font-size: 30px;
        }
        &.phone{
          p{
            padding: 0 30px;
            text-align: left;
            color: #292929;
          }
        }
        &.count{
          & .count-edit{
              display: flex;
              flex-direction: row-reverse;
              width: 180px;
              padding-right: 12px;
              &>i{
                width: 68px;
                height: 88px;
                line-height: 88px;
                font-size: 32px;
                text-align: center;
              }
              &>span{
                font-size: 30px;
                color: #D45050;
                width: 60px;
                text-align: center;
              }
          }
        }
      }
      &>.remark{
        margin-bottom: 260px;
        h5{
          font-size: 26px;
          color: #999999;
          line-height: 40px;
          font-weight: normal;
          margin-bottom: 10px;
        }
        p{
          font-size: 24px;
          color: #999999;
          line-height: 40px;
        }
      }
      &>.pay-btn{
        height:88px;
        line-height: 88px;
        background:rgba(212,80,80,1);
        box-shadow:0px 2px 4px 0px rgba(212,80,80,0.38);
        border-radius:8px;
        color: #fff;
        text-align: center;
      }
    }
  }
</style>
<style lang="less">
  .hairer-list-popup{
    padding: 20px 30px;
    &>.item{
      display: flex;
      height: 140px;
      background-color: #fff;
      align-items: center;
      padding: 0 30px;
      margin-bottom: 20px;
      position: relative;
      &>img{
        width: 88px;
        height: 88px;
        border-radius: 50%;
        margin-right: 20px;
      }
      &>div{
        h5{
          height:34px;
          font-size:34px;
          font-weight:600;
          color:rgba(41,41,41,1);
          line-height:34px;
          margin-bottom: 18px;
        }
        p{
          height:24px;
          font-size:24px;
          font-weight:400;
          color:rgba(153,153,153,1);
          line-height:24px;
        }
      }
      &>i{
        display: none;
        position: absolute;
        width: 88px;
        height: 140px;
        line-height: 140px;
        text-align: center;
        right: 0;
        top: 0;
        color: #0067FE;
        font-size: 34px;
      }
      &.active>i{
        display: block;
      }
    }
  }
</style>
