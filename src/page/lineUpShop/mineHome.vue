<template>
  <section id="mineHome">
    <section class="main">
      <div class="user-info">
        <img src="../../assets/img/default-goods-des-icon.jpg" alt="">
        <div>
          <h5>Luck</h5>
          <p>武汉  女</p>
        </div>
        <i class="iconfont" @click="$go('/lineUpShop/setting')">&#xd0128;</i>
      </div>
      <div class="card">
        <div  @click="$go('/lineUpShop/myQueue')">
          <img src="../../assets/img/line-up-num-icon.png" alt="">
          <div>
            <h5>排队码</h5>
            <p>1个排队码可使用</p>
          </div>
        </div>
        <div @click="$go('/lineUpShop/remainEvaluate')">
          <img src="../../assets/img/line-up-comment-icon.png" alt="">
          <div>
            <h5>去评价</h5>
            <p>12个服务可评价</p>
          </div>
        </div>
      </div>
      <ul>
        <li @click="$go('/lineUpShop/collection')">
          <h5>我的收藏</h5>
          <i class="iconfont">&#xd0109; </i>
        </li>
        <li @click="$go('/lineUpShop/feedback')">
          <h5>我要投诉</h5>
          <i class="iconfont">&#xd0109; </i>
        </li>
        <li @click="$go('/lineUpShop/feedback')">
          <h5>意见反馈</h5>
          <i class="iconfont">&#xd0109; </i>
        </li>
        <li>
          <h5>关于我们</h5>
          <i class="iconfont">&#xd0109; </i>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
  import BottomNav from '../../components/bottomNav';

  export default {
    name: 'mineHome',
    components: {
      BottomNav
    },
    data(){
      return{
        
      }
    },
    methods:{
      
    }
  };
</script>

<style lang="less">
  #mineHome{
    height: 100%;
    .main{
      height: 100%;
      width: 100vw;
      box-sizing: border-box;
      overflow: auto;
      background-color: #fff;
      & .user-info{
        display: flex;
        padding: 30px;
        box-sizing: border-box;
        position:relative;
        margin-bottom: 30px;
        &>img{
          width: 124px;
          height: 124px;
          border-radius: 50%;
          margin-right: 30px;
        }
        &>div{
          display: flex;
          flex-direction: column;
          justify-content: center;
          &>h5{
            font-size: 34px;
            color: #292929;
            height: 48px;
            line-height: 48px;
            margin-bottom: 16px;
          }
          &>p{
            font-size: 24px;
            color: #999;
            height: 33px;
            line-height: 33px;
          }
        }
        &>i{
          position: absolute;
          right: 30px;
          bottom: 30px;
          width: 88px;
          height: 88px;
          line-height: 88px;
          font-size: 34px;
          text-align: center;
        }
      }
      & .card{
        display: flex;
        justify-content: space-between;
        padding: 0 30px;
        box-sizing: border-box;
        margin-bottom: 30px;
        &>div{
          display: flex;
          width:330px;
          height:120px;
          background:rgba(255,255,255,1);
          box-shadow:0px 0px 14px 0px rgba(0,0,0,0.1);
          border-radius:8px;
          padding: 30px 20px;
          padding-right: 0;
          box-sizing: border-box;
          &>img{
            width: 62px;
            height: 66px;
            margin-right: 20px;
          }
          &>div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            &>h5{
              font-size: 30px;
              color: #292929;
              height: 30px;
              line-height: 30px;
              margin-bottom: 10px;
              font-weight: normal;
            }
            &>p{
              font-size: 20px;
              color: #999;
              height: 22px;
              line-height: 22px;
            }
          }

        }
      }
      &>ul{
        padding: 0 30px;
        box-sizing: border-box;
        &>li{
          display: flex;
          justify-content: space-between;
          height: 95px;
          box-sizing: border-box;
          line-height: 94px;
          border-bottom: 1px solid #E5E5E5;
          &>h5{
            font-size:30px;
            font-weight:400;
            color:rgba(41,41,41,1);
          }
          &>i{
            font-size: 28px;
            color: #BBBBBB;
          }
        }
      }
    }
  }
</style>
