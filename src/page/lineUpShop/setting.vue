<template>
  <div class="setting">
    <!-- <div class="nav">
      <span class="iconfont iconleft left"></span>
      <span>设置</span>
    </div> -->
    <div class="section">
      <group gutter="0">
        <cell  title="头像" is-link >
          <div class="user"  slot="value"><img src="../../assets/img/touxiangcopy.png" alt=""></div>
        </cell>
        <cell  title="昵称" is-link >
          Lunck
        </cell>
        <cell  title="性别" is-link >
          女
        </cell>
      </group>
      <group gutter="15px">
        <cell class="phone"  title="手机号码" is-link >
          18776564321
        </cell>
      </group>
    </div>
  </div>
</template>

<script>
  import {Cell, Group} from 'vux';
  export default {
    name: "setting",
    components: {
      Group,
      Cell
    },
    data() {
      return {}
    }
  }
</script>

<style scoped lang="less">
  .setting {
    font-family:PingFangSC-Regular,PingFang SC;
    font-size:26px;
    overflow: hidden;
    
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
      margin-top: 20px;
      .weui-cell {
        padding: 30px;
      }
      .user {
        width:88px;
        height:88px;
        border-radius: 88px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 100%;
        }
      }
    }
  }

</style>
