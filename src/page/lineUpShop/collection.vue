<template>
  <div class="remainEvaluate">
    <!-- <div class="nav">
      <span class="iconfont iconleft left"></span>
      <span>收藏</span>
    </div> -->
    <div class="section">
      <div class="card" v-for="i of 4" :key="i" @click="$go('/lineUpShop/goodsDetail')">
        <div class="img"><img src="" alt=""></div>
        <div class="msg">
          <h3>造型，节假日通用(椰岛造型)</h3>
          <div class="peopleBox">
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
            <span class="number">32人</span>
            <span class="load">
              <i class="iconfont">&#xd0084;</i>
            </span>
            <span class="km">200km</span>
          </div>
          <div class="address"><span>金地格林东郡</span> <span>光谷天地商圈</span></div>
        </div>
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
        padding:20px 24px;
        background:rgba(255,255,255,1);
        border-radius:8px;
        margin-bottom: 20px;
          display: flex;
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
            padding-left: 20px;
            color: #999999;
            h3 {
              font-size:34px;
              font-weight:400;
              color:rgba(41,41,41,1);
              line-height:42px;
            }
            .peopleBox {
              margin-top: 9px;
              margin-bottom: 3px;
              display: flex;
              &>div {
                font-size: 0;
                margin-right: 10px;
                i{
                  font-size: 26px;
                  color: #999999;
                }
              }
              .load {
                margin-left: 40px;
                i {
                  width:20px;
                }
              }
              .km {
                margin-left: 6px;
              }
            }
            .address {
              display: flex;
              span {
                width:156px;
                height:38px;
                text-align: center;
                font-size:22px;
                color:rgba(41,41,41,1);
                line-height:38px;
                border-radius:4px;
                margin-right: 14px;
                border:1px solid rgba(229,229,229,1);
              }
            }
          }
      }
    }
  }

</style>
