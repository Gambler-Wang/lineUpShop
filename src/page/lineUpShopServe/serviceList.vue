<template>
  <div class="serviceList">
    <!-- <div class="nav">
      <span class="iconfont iconleft left"></span>
      <span>服务队列</span>
    </div> -->
    <div class="section">
      <div class="card" v-for="i of 4" :key="i">
        <div class="img"><img src="" alt=""></div>
        <div class="msg">
          <h3>造型，节假日通用</h3>
          <div class="lable"><span>美发蒸汽机</span> <span>排队开启</span></div>
          <div class="bottom">
            <div class="money">
              <span class="red">￥330.00</span>
              <span class="grey">680.00</span>
            </div>
            <div class="more">
              <popover class="dd" placement="left" >
                <div slot="content" class="popOver">
                  <div class="popoverLfet">
                    <div>
                      <span class="iconfont iconxingxing"></span>
                      <p>编辑</p>
                    </div>
                    <div>
                      <span class="iconfont iconxingxing"></span>
                      <p>下架</p>
                    </div>
                    <div>
                      <span class="iconfont iconxingxing"></span>
                      <p>删除</p>
                    </div>
                  </div>
                </div>
                <button class="btn btn-default">···</button>
              </popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Popover} from 'vux';

  export default {
    name: "service-list",
    components: {
      Popover
    },
    data() {
      return {
        popShow: false
      }
    }
  }
</script>
<style  lang="less">
  body .vux-popover {
    left: 641px !important;
  }
  .popOver {
    position: absolute;
    left: -411px;
    top: -60px;
    width: 411px;
    height: 120px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
  }
  .popoverLfet {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    div {
      flex: 1;
      width: 33.33%;
      font-size: 24px;
    }
  }
  .vux-popover {
    left: 80.333vw!important;
  }
  .serviceList {
    font-size: 34px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
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
      /*padding: 20px 30px;*/
      .card {
        padding: 20px 30px;
        background: rgba(255, 255, 255, 1);
        border-radius: 8px;
        margin-bottom: 1px;
        display: flex;
        .img {
          width: 180px;
          height: 180px;
          background-color: #9a6e3a;
          border-radius: 8px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .msg {
          padding-left: 20px;
          flex: 1;
          color: #999999;
          h3 {
            font-size: 34px;
            font-weight: 600;
            color: rgba(41, 41, 41, 1);
            line-height: 42px;
          }
          .lable {
            display: flex;
            padding: 18px 0;
            span {
              padding: 8px 15px;
              font-size: 22px;
              color: rgba(41, 41, 41, 1);
              border-radius: 4px;
              margin-right: 23px;
              border: 1px solid rgba(229, 229, 229, 1);
            }
          }
          .bottom {
            display: flex;
            justify-content: space-between;
            /*margin-top: 20px;*/
            .money {
              .red {
                font-size: 34px;
                font-weight: 400;
                color: rgba(212, 80, 80, 1);
                line-height: 34px;
              }
              .grey {
                text-decoration: line-through;
                font-size: 24px;
                color: rgba(153, 153, 153, 1);
                line-height: 24px;
              }
            }
            .more {
              position: relative;
              .btn-default {
                padding: 10px 21px;
                outline: none;
                border: none;
                background: rgba(242, 242, 242, 1);
                border-radius: 19px;
                font-size: 20px;
                line-height: 20px;
              }
            }
          }
        }
      }
    }
  }
</style>
