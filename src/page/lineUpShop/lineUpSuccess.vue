<template>
  <section id="lineUpSuccess">
    <Header title="排队成功" />
    <section class="main">
      <p>
        <i class="iconfont">&#xd0089;</i>
        <span>排队成功</span>
      </p>
      <h1>A0023</h1>
      <div class="order-list">
        <div class="item">
          <h5>椰岛造型(广谷广场店)</h5>
          <p>珞瑜路光谷世界城1期3楼3324室</p>
        </div>
        <div class="item">
          <h5>周三(03-17) 19:00</h5>
          <p>Nice</p>
        </div>
        <div class="item">
          <h5>造型，节假日通用</h5>
          <p>到店1人</p>
        </div>
      </div>
      <div class="remark">
        <p>到店后出示二维码或排队号享受服务，</p>
        <p>疫情防控期间请有序排队，进店佩戴口罩！</p>
      </div>
      <div class="cancel-btn" @click="cancelOrder">
        取消排队
      </div>
    </section>
  </section>
</template>

<script>
  import Header from '../../components/header';
  export default {
    name: 'lineUpSuccess',
    components: {
      Header
      
    },
    data(){
      return{
        
      }
    },
    methods:{
      cancelOrder(){
        this.$back();
      }
    }
  };
</script>

<style lang="less">
  #lineUpSuccess{
    padding-top: 96px;
    .main{
      height: 100vh;
      width: 100vw;
      box-sizing: border-box;
      overflow: auto;
      background-color: #fff;
      &>p{
        margin-bottom: 30px;
        margin-top: 88px;
        text-align: center;
        &>i{
          color: #19D555;
        }
      }
      &>h1{
        font-size: 100px;
        color: #2E2E2E;
        text-align: center;
        line-height: 100px;
        margin-bottom: 134px;
      }
      &>.order-list{
        padding: 0 30px;
        margin-bottom: 120px;
        &>.item{
          border-top: 1px solid #E5E5E5;
          padding: 22px 0;
          &>h5{
            color: #292929;
            font-size: 34px;
            height: 48px;
            line-height: 48px;
            margin-bottom: 12px;
          }
          &>p{
            color: #666666;
            font-size: 26px;
            height: 37px;
            line-height: 37px;
          }
        }
      }
      &>.remark{
        width:690px;
        height:134px;
        background:rgba(255,244,244,1);
        border-radius:8px;
        margin: 0 auto;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        margin-bottom: 68px;
        &>p{
          text-align: center;
          font-size: 26px;
          color: #666666;
        }
      }
      &>.cancel-btn{
        width:163px;
        height:68px;
        border-radius:8px;
        border:1px solid rgba(229,229,229,1);
        box-sizing: border-box;
        line-height: 66px;
        font-size: 24px;
        color: #666666;
        text-align: center;
        margin: 0 auto;
        margin-bottom: 100px;
      }
    }
  }
</style>  
