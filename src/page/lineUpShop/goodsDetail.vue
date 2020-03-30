<template>
  <section id="goodsDetail">
    <section class="main">
        <div class="goods-view">
          <div class="img-box">
            <img src="../../assets/img/default-goods-icon.jpg" alt="">
          </div>
          <!-- <div class="current-img-index">
            1/5
          </div> -->
          <div class="price-box">
            <div class="info">
              <p>
                <span>200.<i>00</i></span>
                <span>
                  <b>价格</b>
                  <b>￥400</b>
                </span>
              </p>
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
              <h5>造型，节假日通用</h5>
            </div>
            <div class="line-up-btn-box">
              <div class="btn">去排队</div>
              <p>预约金2.00元</p>
            </div>
          </div>
        </div>
        <div class="shop-info">
          <h5>椰岛造型</h5>
          <div class="tag">
            <div class="open-time">
              <i class="iconfont">&#xd0041;</i>
              <span>营业至22:00</span>
            </div>
            <div class="park-car">
              <i class="iconfont">&#xd0025;</i>
              <span>可停车</span>
            </div>
            <div class="wifi">
              <i class="iconfont">&#xe604;</i>
              <span>Wi-Fi</span>
            </div>
            <i class="iconfont">&#xd0109;</i>
          </div>
          <div class="address">
            <div>
              <i class="iconfont">&#xd0084;</i>
              <span>乐乡大道新口镇府对面</span>
              <b>距您3.2km</b>
            </div>
            <i class="iconfont">&#xd0037;</i>
          </div>
        </div>
        <div class="explain-box">
          <h5>预约说明</h5>
          <p>1、服务预约费用2.00元。</p>
          <p>2、到店最晚时间，为服务时间结束10分钟后。</p>
          <p>3、到店时间超预约时间段，需支付10%的违约金。</p>
          <p>4、店铺提供服务超过时间段，服务费用8折优惠。</p>
        </div>
        <div class="service-detail">
          <h5>服务详情</h5>
          <div>
            <img src="../../assets/img/default-goods-des-icon.jpg" alt="">
          </div>
        </div>
        <div class="comment-box">
          <div class="item" v-for="item in 5" :key="item">
            <div class="user-icon-box">
              <img src="../../assets/img/default-goods-des-icon.jpg" alt="">
            </div>
            <div class="comment-content">
              <h5>小妖</h5>
              <p class="time">1月5号</p>
              <div class="rate">
                <span>打分</span>
                <p>
                  <img src="../../assets/img/default-rater.png" alt="">
                  <img src="../../assets/img/default-rater.png" alt="">
                  <img src="../../assets/img/default-rater.png" alt="">
                  <img src="../../assets/img/default-rater.png" alt="">
                  <img src="../../assets/img/default-rater.png" alt="">
                </p>
              </div>
              <p>
                能找到这家店，真是太好了，没次过去都觉得很温暖……之前帮我弄过一次头发的发型师，居然记得我，厉害了，说我还瘦了……哈哈哈哈……
              </p>
              <div class="comment-img-box">
                <img src="../../assets/img/default-goods-des-icon.jpg" alt="">
                <img src="../../assets/img/default-goods-des-icon.jpg" alt="">
                <img src="../../assets/img/default-goods-des-icon.jpg" alt="">
                <img src="../../assets/img/default-goods-des-icon.jpg" alt="">
              </div>
              <div class="comment-count">浏览8290 赞1 评论2</div>
            </div>
          </div>
        </div>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'goodsDetail',
    components: {
      
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
  #goodsDetail{
    .main{
      height: 100vh;
      width: 100vw;
      box-sizing: border-box;
      overflow: auto;
      & .goods-view{
        width: 100vw;
        padding: 20px 30px; 
        box-sizing: border-box;
        position: relative; 
        margin-bottom: 20px;
        background-color: #fff;
        &>.img-box{
          width: 100%;
          height:518px;  
          margin-bottom: 20px;
          &>img{
            width:690px;
            height:518px;
          }
        }
        &>.current-img-index{
          position:absolute;
          bottom: 16px;
          right: 16px;
          width:136px;
          height:48px;
          background:rgba(0,0,0,0.2);
          border-radius:25px;
          text-align: center;
          line-height: 48px;
          color: #fff;
          font-size: 24px;
        }
        &>.price-box{
          position: relative;
          &>.info{
            padding-right: 203px;
            box-sizing: border-box;
            &>p{
              height:58px;
              line-height: 58px;
              margin-bottom: 12px;
              &>span{
                color:#D45050;
                line-height:58px;
                font-size:58px;
                margin-right: 18px;
                &>i{
                  font-size: 24px;
                  color: #D45050;
                  line-height: 33px;
                  font-style:normal;
                }
                &>b{
                  font-size: 24px;
                  color: #999999;
                  line-height: 33px;
                  &:nth-last-of-type(1){
                    text-decoration:line-through;
                  }
                }
              }
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
            &>h5{
              height:45px;
              font-size:32px;
              font-weight:600;
              color:rgba(41,41,41,1);
              line-height:45px;
            }
          }
          &>.line-up-btn-box{
            position:absolute;
            right: 20px;
            top: 24px;
            width: 220px;
            height: 150px;
            &>.btn{
              width:173px;
              height:68px;
              line-height: 68px;
              background:rgba(212,80,80,1);
              box-shadow:0px 2px 4px 0px rgba(212,80,80,0.38);
              border-radius:34px;
              color: #fff;
              text-align: center;
              font-size: 30px;
              margin: 0 auto 20px;
            }
            &>p{
              font-size: 24px;
              color: #999999;
              line-height: 33px;
              text-align: center;
            }
          }
        }
      }
      & .shop-info{
        width: 100vw;
        padding: 20px 30px; 
        padding-bottom:0;
        box-sizing: border-box;
        position: relative; 
        margin-bottom: 20px;
        background-color: #fff;
        &>h5{
          height:48px;
          font-size:34px;
          font-weight:600;
          color:rgba(41,41,41,1);
          line-height:48px;
        }
        &>.tag{
          height: 77px;
          line-height: 77px;
          border-bottom: 1px solid #E5E5E5;
          display: flex;
          position: relative;
          &>div{
            margin-right: 40px;
            &:nth-last-of-type(1){
              margin-right: 0;
            }
            i{
              font-size: 28px;
              color:#BBBBBB;
            }
            span{
              font-size: 28px;
              color: #292929;
            }
          }
          &>i{
            position: absolute;
            width: 56px;
            height: 78px;
            line-height: 78px;
            text-align: center;
            top: 0;
            right: 0;
            color: #BBBBBB;
          }
        }
        &>.address{
          height: 78px;
          line-height: 78px;
          display: flex;
          position: relative;
          &>div{
            margin-right: 56px;
            &>i{
              font-size: 28px;
              color: #BBBBBB;
            }
            &>span{
              font-size: 28px;
              color: #292929;
            }
            &>b{
              font-size: 26px;
              color: #666666;
              font-weight: 400;
            }
          }
          &>i{
            position: absolute;
            width: 56px;
            height: 78px;
            line-height: 78px;
            text-align: center;
            top: 0;
            right: 0;
            color: #D45050;
          }
        }
      }
      & .explain-box{
        width: 100vw;
        padding: 20px 30px; 
        box-sizing: border-box;
        position: relative; 
        margin-bottom: 20px;
        background-color: #fff;
        &>h5{
          height:48px;
          font-size:34px;
          font-weight:600;
          color:rgba(41,41,41,1);
          line-height:48px;
          margin-bottom: 20px;
        }
        &>p{
          font-size: 28px;
          color: #666666;
          line-height: 54px;
        }
      }
      & .service-detail{
        width: 100vw;
        padding: 20px 30px; 
        box-sizing: border-box;
        position: relative; 
        margin-bottom: 20px;
        background-color: #fff;
        &>h5{
          height:48px;
          font-size:34px;
          font-weight:600;
          color:rgba(41,41,41,1);
          line-height:48px;
          margin-bottom: 20px;
        }
        &>div{
          width: 690px;
          height: 690px;
          &>img{
            width: 100%;
            height: 100%;
          }
        }
      }
      & .comment-box{
        width: 100vw;
        padding: 20px 30px; 
        box-sizing: border-box;
        position: relative; 
        background-color: #fff;
        &>.item{
          margin-left: 128px;
          box-sizing: border-box;
          position: relative;
          min-height: 100px;
          border-bottom: 1px solid #E5E5E5;
          &>div.user-icon-box{
            position: absolute;
            left: -128px;
            top: 0;
            &>img{
              border-radius: 50%;
              width: 88px;
              height: 88px;
            }
          }
          &>div.comment-content{
            &>h5{
              font-size: 30px;
              color: #D45050;
              font-weight: normal;
              margin-bottom: 8px;
            }
            &>p.time{
              font-size: 24px;
              color: #999999;
              margin-bottom: 8px;
            }
            &>.rate{
              display: flex;
              margin-bottom: 8px;
              &>span{
                font-size: 24px;
                color: #292929;
                margin-right: 10px;
              }
              p{
                font-size: 0;
                img{
                  width: 41px;
                  height: 41px;
                  margin-right: 6px;
                }  
              }
            }
            &>p{
              font-size: 30px;
              color: #292929;
              line-height: 42px;
              margin-bottom: 18px;
            }
            &>div.comment-img-box{
              display: flex;
              justify-content: row;
              flex-wrap: wrap;
              &>img{
                width: 140px;
                height: 140px;
                margin-right: 20px;
                margin-bottom: 18px;
              }
            }
            &>div.comment-count{
              color: #999999;
              font-size: 24px;
              margin-bottom: 18px;
            }
          }
        }
      }
    }
  }
</style>
