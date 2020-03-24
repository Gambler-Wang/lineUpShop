<template>
  <section id="bottomNav">
    <tabbar>
    <tabbar-item>
        <img slot="icon" src="../assets/img/home-icon.png">
        <img slot="icon-active" src="../assets/img/home-active-icon.png">
        <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item>
        <img slot="icon" src="../assets/img/map-icon.png">
        <img slot="icon-active" src="../assets/img/map-icon.png">
        <span slot="label">地图</span>
    </tabbar-item>
    <tabbar-item selected>
        <img slot="icon" src="../assets/img/mine-icon.png">
        <img slot="icon-active" src="../assets/img/mine-active-icon.png">
        <span slot="label">我的</span>
    </tabbar-item>
    </tabbar>
  </section>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux';
export default {
  name: 'bottomNav',
  components: {
    Tabbar, TabbarItem 
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
  #bottomNav{
    
  }

</style>
