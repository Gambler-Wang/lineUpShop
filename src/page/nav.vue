<template>
<div>
  <group title="用户菜单">
    <cell is-link link="/lineUpShop/shopHome">
      来排队首页
    </cell>
    <cell is-link link="/lineUpShop/searchPage">
      搜索
    </cell>
    <cell is-link link="/lineUpShop/searchFindList">
      搜索结果
    </cell>
    <cell is-link link="/lineUpShop/goodsDetail">
      服务详情
    </cell>
    <cell is-link link="/lineUpShop/lineUpPay">
      排队支付页
    </cell>
    <cell is-link link="/lineUpShop/lineUpSuccess">
      排队成功
    </cell>
    <cell is-link link="/lineUpShop/mineHome">
      我的主页
    </cell>
    <cell is-link  link="/lineUpShop/myQueue">
      我的排队
    </cell>
    <cell is-link  link="/lineUpShop/remainEvaluate">
      待评价
    </cell>
    <cell is-link  link="/lineUpShop/evaluate">
      评价
    </cell>
    <cell is-link  link="/lineUpShop/collection">
      收藏
    </cell>
    <cell is-link  link="/lineUpShop/feedback">
      意见与反馈
    </cell>
    <cell is-link  link="/lineUpShop/setting">
      设置
    </cell>
  </group>
  <group title="商户菜单">
    <cell is-link link="/lineUpShopServe/businessEntry">
      商家入驻申请
    </cell>
    <cell is-link link="/lineUpShopServe/hairdresserEntry">
      发型师
    </cell>
    <cell is-link  link="/lineUpShopServe/serviceList">
      服务列表
    </cell>
    <cell is-link  link="/lineUpShopServe/addService">
      新增服务
    </cell>
    <cell is-link  link="/lineUpShopServe/setUpInLine">
      排队设置
    </cell>
    <cell is-link  link="/lineUpShopServe/callManagement">
      叫号管理
    </cell>
    <cell is-link  link="/lineUpShopServe/callDetail">
      叫号详情
    </cell>
  </group>

</div>
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
