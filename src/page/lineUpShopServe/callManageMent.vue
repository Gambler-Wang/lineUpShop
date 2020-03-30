<template>
  <div class="callManageMent">
    <!-- <div class="nav">
      <span class="iconfont iconleft left"></span>
      <span>叫号管理</span>
    </div> -->
    <div class="section">
      <div class="card">
        <div class="row top" @click="$router.push({path:'/lineUpShopServe/callDetail'})">
          <div class="title">造型，节假日通用</div>
          <div><span> > </span></div>
        </div>
        <div class="row">
          <div>叫号时段：全天</div>
          <div>已取号：88个</div>
        </div>
        <div class="row">
          <div>待叫号数：64个</div>
          <div>当前号：0023</div>
        </div>
        <div class="row detail">*每5分钟自动叫号1个</div>
        <div class="row bottom">
          <div class="pause red"><span class="iconfont iconxingxing"></span>暂停叫号</div>
          <div><span class="iconfont iconxingxing"></span>重复叫号</div>
          <div><span class="iconfont iconxingxing"></span>呼叫下一号</div>
        </div>
      </div>
      <div class="card">
        <div class="row top" @click="$router.push({path:'/lineUpShopServe/callDetail'})">
          <div class="title">造型，节假日通用</div>
          <div><span> > </span></div>
        </div>
        <div class="row">
          <div>叫号时段：全天</div>
          <div>已取号：88个</div>
        </div>
        <div class="row">
          <div>待叫号数：64个</div>
          <div>当前号：0023</div>
        </div>
        <div class="row bottom">
          <div class="pause red"><span class="iconfont iconxingxing"></span>暂停叫号</div>
          <div class="red"><span class="iconfont iconxingxing"></span>重复叫号</div>
          <div class="red"><span class="iconfont iconxingxing"></span>呼叫下一号</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Cell, Group} from 'vux';

  export default {
    name: "callManagement",
    components: {
      Group,
      Cell
    },
    data() {
      return {
        popShow: false
      }
    }
  }
</script>
<style scoped lang="less">
  .callManageMent {
    font-size: 34px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color:rgba(51,51,51,1);
    .nav {
      height: 88px;
      font-size: 34px;
      font-weight: 400;
      color: rgba(41, 41, 41, 1);
      text-align: center;
      line-height: 88px;
      box-sizing: border-box;
      padding: 0 30px;
      .left {
        float: left;
      }
    }
    .section {
      padding: 20px 30px;
      .card {
        padding: 26px 30px;
        margin-bottom: 20px;
        background-color: #fff;
        .row {
          display: flex;
          justify-content: space-between;
          line-height: 37px;
          padding-bottom: 20px;
          font-size:26px;
          .title {
            font-size:30px;
            font-weight:600;
            color:rgba(41,41,41,1);
          }
          span {
            font-size:36px;
            font-weight:400;
            color:rgba(187,187,187,1);
          }
          &.detail {
            color:rgba(212,80,80,1);
          }
          &.bottom {
            padding-top: 29px;
            padding-bottom: 15px;
            color: #BBBBBB;
            border-top: 1px solid #E5E5E5;
            span{
              vertical-align: text-bottom;
              margin-right: 4px;
              color: #BBBBBB;
              font-size: 26px;
            }
            .red {
              color: #D45050;
              span{
                color: #D45050;
                font-size: 26px;
              }
            }
          }
        }
      }

    }
  }
</style>
