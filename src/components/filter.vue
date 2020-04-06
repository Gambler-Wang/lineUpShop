<template>
  <section id="filterBox">
    <div>
      <span>全部社区</span>
      <i class="iconfont">&#xd0062;</i>
    </div>
    <div>
      <span>全部商圈</span>
      <i class="iconfont">&#xd0062;</i>
    </div>
    <div>
      <span>智能排序</span>
      <i class="iconfont">&#xd0062;</i>
    </div>
    <div>
      <span>筛选</span>
      <i class="iconfont">&#xd0062;</i>
    </div>
  </section>
</template>
<script>
export default {
  name: 'filterBox',
  components: {
    
  },
  props:{
    

  },
  data () {
    return {


    }
  },
  created () {

  },
  mounted: function () {

  },
  methods:{
   
  }
}
</script>
<style lang="less">
  #filterBox{
    position: absolute;
    // top: 88px;
    top: 184px;
    left: 0;
    width: 100vw;
    height: 78px;
    padding: 0 30px;
    box-sizing: border-box;
    line-height: 78px;
    display: flex;
    border-bottom: 1px solid #E5E5E5;
    background-color: #fff;
    &>div{
      width: 28.5%;
      text-align: left;
      font-size: 26px;
      color: #292929;
      box-sizing: border-box;
      &:nth-last-of-type(1){
        width: 14.5%;
        text-align: right;
      }
      i{
        color: #BBBBBB;
      }
    }
  }

</style>
