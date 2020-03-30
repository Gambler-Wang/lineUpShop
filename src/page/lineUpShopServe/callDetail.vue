<template>
  <div class="callDetail">
    <!-- <div class="nav">
      <span class="iconfont iconleft left"></span>
      <span>造型，节假日通用</span>
    </div> -->
    <div class="date">
      <div> 上一天</div>
      <div>03-22</div>
      <div>下一天 ></div>
    </div>
    <div class="section">
      <div class="card">
        <div class="row top">
          <div class="title"> <span><img src="../../assets/img/1.png" alt=""></span>【叫号1次】陈长白 |  189****2156</div>
        </div>
        <div class="row">
          <div>排队号：D0023、D0024</div>
          <div>预约发型师:到店安排</div>
        </div>
        <div class="row cancelTime">
          <div>预约发型师:到店安排</div>
          <div><span>取消排队</span> <span>已到店</span></div>
        </div>
      </div>
      <div class="card">
        <div class="row top">
          <div class="title"><span><img src="../../assets/img/2.png" alt=""></span>【已取号】陈长白 |  189****2156</div>
        </div>
        <div class="row">
          <div>排队号：D0023、D0024</div>
          <div>预约发型师:到店安排</div>
        </div>
        <div class="row cancelTime">
          <div>预约发型师:到店安排</div>
          <div><span>取消排队</span> <span>已到店</span></div>
        </div>
      </div>
      <div class="card canceled">
        <div class="row top">
          <div class="title"><span><img src="../../assets/img/34.png" alt=""></span>【已取消】陈长白 |  189****2156</div>
        </div>
        <div class="row">
          <div>排队号：D0023、D0024</div>
          <div>预约发型师:到店安排</div>
        </div>
        <div class="row cancelTime">
          <div>预约发型师:到店安排</div>
          <div><span>取消排队</span> <span>已到店</span></div>
        </div>
      </div>
      <div class="bottom">
        <div class="callNumber">待叫号数：24个</div>
        <div class="boxCard">
          <div class="box">
            <div class="imgBox"><img src="../../assets/img/5.png" alt=""></div>
            <div>
              <div class="text">重复叫号</div>
              <div class="carNumber">A-0023</div>
            </div>
          </div>
          <div class="box">
            <div class="imgBox"><img src="../../assets/img/5.png" alt=""></div>
            <div>
              <div class="text">呼叫下一位</div>
              <div class="carNumber">A-0024</div>
            </div>
          </div>
        </div>
        <button class="pauseCall">暂停叫号</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {Cell, Group} from 'vux';

  export default {
    name: "callDetail",
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
  .callDetail {
    font-size: 34px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
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
    .date {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30px;
    }
    .section {
      padding: 20px 30px;
      .card {
        padding: 26px 30px;
        margin-bottom: 20px;
        background-color: #fff;
        &.canceled {
          .row {
            color:rgba(187,187,187,1);
            .title {
              color:rgba(187,187,187,1);
            }
          }
        }
        .row {
          display: flex;
          justify-content: space-between;
          line-height: 37px;
          padding-bottom: 20px;
          font-size: 26px;
          .title {
            font-size: 30px;
            font-weight: 600;
            color: rgba(41, 41, 41, 1);
            span {
              img{
                width:44px;
                height:44px;
                vertical-align: middle;
              }
            }
          }
          &.cancelTime {
            padding-bottom: 5px;
            line-height: 68px;
            span{
              display: inline-block;
              border-radius:34px;
              border:1px solid rgba(229,229,229,1);
              font-size: 24px;
              padding: 17px 23px;
              line-height: 33px;
            }
          }
        }
      }
      .bottom {
        margin-top: 47px;
        .callNumber {
          font-size: 26px;
          padding-bottom: 30px;
        }
        .boxCard {
          display: flex;
          font-size: 30px;
          color:rgba(255,255,255,1);
          justify-content: space-between;
          .box {
            display: flex;
            align-items: center;
            width:330px;
            height:120px;
            background:linear-gradient(193deg,rgba(200,200,200,1) 0%,rgba(161,161,161,1) 100%);
            box-shadow:0px 2px 4px 0px rgba(190,190,190,0.43);
            border-radius:8px;
            .imgBox {
              padding-left: 29px;
              padding-right: 26px;
              img {
                width:71px;
                height:71px;
                background:rgba(161,160,160,1);
                border-radius: 71px;
              }
            }
            .text {
              font-size: 30px;
              line-height: 42px;
            }
          .carNumber {
            font-size: 26px;
            line-height: 37px;
          }

          }
        }
        .pauseCall {
          margin-top: 26px;
          width:100%;
          height:78px;
          border: none;
          outline: none;
          font-size: 26px;
          text-align: center;
          line-height: 78px;
          color: #fff;
          background:linear-gradient(39deg,rgba(253,177,110,1) 0%,rgba(254,184,122,1) 100%);
          box-shadow:0px 3px 4px 0px rgba(255,168,89,0.45);
          border-radius:8px;
        }
      }
    }
  }
</style>
