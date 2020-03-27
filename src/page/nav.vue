<template>
  <group title="菜单">
    <cell is-link link="/lineUpShop/home">
      来排队首页
    </cell>
    <cell is-link link="/lineUpShop/searchPage">
      搜索
    </cell>
    <cell is-link link="/lineUpShop/goodsDetail">
      服务详情
    </cell>
    <cell is-link link="/lineUpShopServe/businessEntry">
      商家入驻申请
    </cell>
  </group>
</template>

<script>
  import {Cell, Group} from 'vux';

  export default {
    name: 'navList',
    components: {
      Group,
      Cell,
    },
  };
</script>

<style scoped>

</style>
