<template>
  <section id="shopHome">
    <section class="main ignore">
      <section class="search-container">
        <div class="address-box">
          <span>
            武汉市
          </span>
          <i class="iconfont">&#xe6b2;</i>
        </div>
        <div class="search-box" @click="$go('/lineUpShop/searchPage')">
          <div>
            <i class="iconfont">&#xd0044;</i>
            搜服务、商圈、小区、园区，立即取号
          </div>
        </div>
      </section>
      <section class="nav">
        <div class="item">
          <img src="../../assets/img/hair-icon.png" alt="">
          <p>美容美发</p>
        </div>
        <div class="item">
          <img src="../../assets/img/pet-icon.png" alt="">
          <p>宠物医院</p>
        </div>
        <div class="item">
          <img src="../../assets/img/repair-car-icon.png" alt="">
          <p>汽车维修</p>
        </div>
        <div class="item">
          <img src="../../assets/img/wash-car-icon.png" alt="">
          <p>洗车</p>
        </div>
      </section>
      <section class="business-join-box">
        <div>
          <div class="bus-info">
            <p>已有
              <span>123</span>
            </p>
            <p>商家赚取利益</p>
          </div>
          <div class="busjoin-btn">
            我要入驻
          </div>
        </div>
      </section>
      <section class="goods-container">
        <section class="tab-box">
          <div v-for="(item,index) in tabList" :key="index" :class="(item.active?'active':'')" @click="changeTab(item)">
            {{item.name}}
          </div>
        </section>
        <section class="tab-container">
          <div>
            <img src="../../assets/img/default-goods-icon .jpg" alt="">
            <div>
              <h5>造型，节假日通用(椰岛造型)</h5>
              <div class="shop-info">
                <div>
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
                </div>
                <span>32人</span>
                <p>
                  <i class="iconfont">&#xd0084;</i>
                  <span>200km</span>
                </p>
              </div>
              <div class="shop-address">
                <p>金地格林东郡</p>
                <p>光谷天地商圈</p>
              </div>
            </div>
          </div>
          <div>
            <img src="../../assets/img/default-goods-icon .jpg" alt="">
            <div>
              <h5>造型，节假日通用(椰岛造型)</h5>
              <div class="shop-info">
                <div>
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
                </div>
                <span>32人</span>
                <p>
                  <i class="iconfont">&#xd0084;</i>
                  <span>200km</span>
                </p>
              </div>
              <div class="shop-address">
                <p>金地格林东郡</p>
                <p>光谷天地商圈</p>
              </div>
            </div>
          </div>
          <div>
            <img src="../../assets/img/default-goods-icon .jpg" alt="">
            <div>
              <h5>造型，节假日通用(椰岛造型)</h5>
              <div class="shop-info">
                <div>
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
                </div>
                <span>32人</span>
                <p>
                  <i class="iconfont">&#xd0084;</i>
                  <span>200km</span>
                </p>
              </div>
              <div class="shop-address">
                <p>金地格林东郡</p>
                <p>光谷天地商圈</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
    <BottomNav />
  </section>
</template>

<script>
  import BottomNav from '../../components/bottomNav';

  export default {
    name: 'shopHome',
    components: {
      BottomNav
    },
    data(){
      return{
        tabList:[
          {
            name:'附近服务',
            active:true
          },
          {
            name:'特惠服务',
            active:false
          },
        ]
      }
    },
    methods:{
      changeTab(item){
        this.tabList.forEach(element => {
          element.active=false;
        });
        item.active=true;
      }
    }
  };
</script>

<style lang="less">
  #shopHome{
    .main{
      height: 100vh;
      width: 100vw;
      box-sizing: border-box;
      overflow: auto;
      background-color: #fff;
      padding-top: 88px;
      &.ignore{
        padding-bottom: 53px;
      }
      & .search-container{
        position: absolute;
        top: 0;
        width: 100%;
        height: 88px;
        line-height: 88px;
        display: flex;
        background: #D45050;
        color: #fff;
        padding: 0 20px;
        box-sizing: border-box;
        z-index: 1;
        & .address-box{
          width: 145px;
          font-size: 28px;
          box-sizing: border-box;
          padding-right: 32px;
          text-align: center;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          position: relative;
          margin-right: 20px;
          & i{
            position: absolute;
            width: 32px;
            height: 88px;
            line-height: 88px;
            right: 0;
            top: 0;
            font-size: 18px;
          }
        }
        & .search-box{
          flex: 1;
          padding: 10px 0;
          &>div{
            width: 100%;
            height: 68px;
            line-height: 68px;
            background: #E96363;
            border-radius: 34px;
            text-align: center;
            font-size: 24px;
            color: rgba(255, 255, 255, 0.64);
          }
        }      
      }
      & .nav{
        display: flex;
        justify-content: space-around;
        padding: 30px 0;
        box-sizing: border-box;
        &> .item{
          flex: 1;
          text-align: center;
          font-size: 26px;
          color: #333333;
          img{
            width: 88px;
            height: 88px;
          }
        }
      }
      & .business-join-box{
        height: 140px;
        padding: 0 40px;
        box-sizing: border-box;
        margin-bottom: 30px;
        &>div{
          height: 140px;
          background: url('../../assets/img/business-join-banner.png');
          background-size: 100% 100%;
          display: flex;
          align-items: center;
          & .bus-info{
            color: #fff;
            font-size: 28px;
            margin-left: 260px; 
            line-height: 40px;
            span{
              font-size: 40px;
              margin-left: 10px;
            }
          }
          & .busjoin-btn{
            width:168px;
            height:68px;
            line-height: 68px;
            border-radius:34px;
            background-color: #fff;
            color:#E2604F;
            font-size: 28px;
            text-align: center;
            margin-left: 45px;
            font-weight: 700;
          }
        }
      }
      & .goods-container{
        & .tab-box{
          display: flex;
          position: relative;
          font-size: 34px;
          margin-bottom: 30px;
          height: 60px;
          &::after{
            content: "";
            position: absolute;
            height: 34px;
            width: 2px;
            background-color: #979797;
            opacity: 0.27;
            top: 13px;
            left: 50%;
            border: none;
          }
          &>div{
            color: #292929;
            flex: 1;
            text-align: center;
            &.active{
              color: #D45050;
            }
          }
        }
        & .tab-container{
          padding: 0 30px;
          box-sizing: border-box;
          &>div{
            display: flex;
            margin-bottom: 50px;
            img{
              width: 140px;
              height: 140px;
              margin-right: 20px;
            }
            &>div{
              h5{
                font-size: 34px;
                height: 50px;
                line-height: 50px;
                color: #292929;
                font-weight: 400;
              }
              &>.shop-info{
                display: flex;
                height: 40px;
                align-items: center;
                &>div{
                  font-size: 0;
                  margin-right: 10px;
                  i{
                    font-size: 26px;
                    color: #999999;
                  }
                }
                &>span{
                  color: #999999;
                  font-size: 26px;
                  margin-right: 40px;
                }
                &>p{
                  font-size: 26px;
                  color: #999999;
                  i{
                    font-size: 26px;
                    color: #D45050;
                  }
                }
              }
              &>.shop-address{
                display: flex;
                &>p{
                  padding: 4px 12px;
                  border-radius:4px;
                  border:1px solid rgba(229,229,229,1);
                  text-align: center;
                  margin-right: 14px;
                  font-size: 22px;
                  color: #292929;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
