<template>
  <div class="myQueue">
    <!-- <div class="nav">
      <span class="iconfont iconleft left"></span>
      <span>排队码</span>
    </div> -->
    <Header title="排队码" />
    <div class="section">
      <div class="card">
        <div class="title">
          <div class="left">椰岛造型 <span class="iconfont iconright"></span></div>
          <div class="red">已到号</div>
        </div>
        <div class="box red">
          <div class="img"><img src="" alt=""></div>
          <div class="msg">
            <p>造型，节假日通用</p>
            <p>当前等待:0人&nbsp;&nbsp;&nbsp;&nbsp;排队码:B0045</p>
            <p>预约时间:2020-03-21 17:23</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="title">
          <div class="left">椰岛造型 <span class="iconfont iconright"></span></div>
          <div class="grey">已取号</div>
        </div>
        <div class="box grey">
          <div class="img"><img src="" alt=""></div>
          <div class="msg">
            <p>造型，节假日通用</p>
            <p>当前等待:0人&nbsp;&nbsp;&nbsp;&nbsp;排队码:B0045</p>
            <p>预约时间:2020-03-21 17:23</p>
          </div>
        </div>
        <div class="bottom"> <span class="grey cancel">取消排队</span></div>
      </div>
      <div class="card">
        <div class="title">
          <div class="left">椰岛造型 <span class="iconfont iconright"></span></div>
          <div class="tibImg"><img src="../../assets/img/guoqi.png" alt=""></div>
        </div>
        <div class="box overdue">
          <div class="img"><img src="" alt=""></div>
          <div class="msg">
            <p>造型，节假日通用</p>
            <p>当前等待:0人&nbsp;&nbsp;&nbsp;&nbsp;排队码:B0045</p>
            <p>预约时间:2020-03-21 17:23</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/header';
  export default {
    name: "myQueue",
    components: {
      Header
    },
    data() {
      return {}
    }
  }
</script>

<style scoped lang="less">
  .myQueue {
    font-family:PingFangSC-Regular,PingFang SC;
    font-size:26px;
    padding-top: 96px;
    .red {
      color:rgba(212,80,80,1);
    }
    .grey {
      color:rgba(102,102,102,1);
    }
    .overdue {
      color:rgba(187,187,187,1);
    }
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
             width:129px;
             height:129px;
           }
          }
        }
        .box {
          display: flex;
          padding-top: 15px;
          .img {
            width:140px;
           height:140px;
            background-color: #9a6e3a;
            border-radius: 8px;
            img {
              width:100%;
              height: 100%;
            }
          }
          .msg {
            padding-left: 19px;
            line-height: 48px;
          }
        }
        .bottom {
          display: flex;
          justify-content: flex-end;
          padding: 17px 0;
          span {
            width:144px;
            height:48px;
            border-radius:24px;
            text-align: center;
            border:1px solid rgba(229,229,229,1);
          }
        }
      }
    }
  }

</style>
