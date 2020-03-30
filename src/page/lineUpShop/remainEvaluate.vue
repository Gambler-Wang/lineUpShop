<template>
  <div class="remainEvaluate">
    <!-- <div class="nav">
      <span class="iconfont iconleft left"></span>
      <span>评价</span>
    </div> -->
    <div class="section">
      <div class="card">
        <div class="title">
          <div class="left">椰岛造型 <span class="iconfont iconright"></span></div>
        </div>
        <div class="box grey">
          <div class="img"><img src="" alt=""></div>
          <div class="msg">
            <h3>造型，节假日通用</h3>
            <p>使用时间：2020-03-21 12:23:24</p>
          </div>
        </div>
        <div class="bottom"> <span class="grey cancel">评价</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "remainEvaluate",
    data() {
      return {}
    }
  }
</script>

<style scoped lang="less">
  .remainEvaluate {
    font-family:PingFangSC-Regular,PingFang SC;
    font-size:26px;
    .nav {
      height:88px;
      background:rgba(255,255,255,1);
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
      padding: 20px 30px;
      .card {
        padding:17px 27px;
        background:rgba(255,255,255,1);
        border-radius:8px;
        margin-bottom: 20px;
        .title {
          display: flex;
          justify-content: space-between;
          .left {
            font-size:34px;
            font-weight:600;
            color:rgba(41,41,41,1);
            text-align: left;
          }
          .iconright {
            font-size: 24px;
            padding-left: 7px;
          }
          .tibImg {
            position: relative;
            width: 10px;
            height: 10px;
            img  {
              position: absolute;
              left: -102px;
              top: 0;
            }
          }
        }
        .box {
          display: flex;
          padding-top: 15px;
          .img {
            width:100px;
            height:100px;
            background-color: #9a6e3a;
            border-radius: 8px;
            img {
              width:100%;
              height: 100%;
            }
          }
          .msg {
            padding-left: 19px;
            line-height: 60px;
            color:rgba(153,153,153,1);
            h3 {
              font-size:30px;
              font-weight:400;
              color:rgba(41,41,41,1);
              line-height:42px;
            }
          }
        }
        .bottom {
          display: flex;
          justify-content: flex-end;
          span {
            width:113px;
            height:48px;
            line-height: 48px;
            border-radius:24px;
            text-align: center;
            font-size:24px;
            font-weight:400;
            color:rgba(212,80,80,1);
            border:1px solid rgba(212,80,80,1);
          }
        }
      }
    }
  }

</style>
