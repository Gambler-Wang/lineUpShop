export default [
  {
    path: '/',
    name: '导航',
    component: () => import('@/page/nav')
  },
  {
    path: '/surveySystem',
    name: '社区信息录入',
    meta:{
      title:'社区信息录入'
    },
    component: () => import('@/page/surveySystem')
  },
  // 买家
  {
    path: '/lineUpShop/home',
    name: '来排队',
    meta:{
      title:'来排队'
    },
    component: () => import('@/page/lineUpShop/home')
  },
  {
    path: '/lineUpShop/searchPage',
    name: '搜索',
    meta:{
      title:'搜索'
    },
    component: () => import('@/page/lineUpShop/searchPage')
  },
  {
    path: '/lineUpShop/searchFindList',
    name: '筛选页',
    meta:{
      title:'来排队'
    },
    component: () => import('@/page/lineUpShop/searchFindList')
  },
  {
    path: '/lineUpShop/goodsDetail',
    name: '服务详情',
    meta:{
      title:'服务详情'
    },
    component: () => import('@/page/lineUpShop/goodsDetail')
  },
  {
    path: '/lineUpShop/lineUpPay',
    name: '支付页',
    meta:{
      title:'排队'
    },
    component: () => import('@/page/lineUpShop/lineUpPay')
  },
  //卖家服务
  {
    path: '/lineUpShopServe/businessEntry',
    name: '商家入驻申请',
    meta:{
      title:'商家入驻申请'
    },
    component: () => import('@/page/lineUpShopServe/businessEntry')
  },
];
