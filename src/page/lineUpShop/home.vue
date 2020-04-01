<template>
  <section id="Home">
    <section class="main ignore">
      <router-view></router-view>
    </section>
    <BottomNav />
  </section>
</template>

<script>
  import BottomNav from '../../components/bottomNav';

  export default {
    name: 'Home',
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
    created(){
      
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
  #Home{
    .main{
      height: 100vh;
      width: 100vw;
      box-sizing: border-box;
      overflow: auto;
      background-color: #fff;
      &.ignore{
        padding-bottom: 53px;
      }
    }
  }
</style>
