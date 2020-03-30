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
    name: '首页',
    meta:{
      title:'来排队'
    },
    component: () => import('@/page/lineUpShop/home'),
    redirect:'/lineUpShop/shopHome',
    children:[
      {
        path:'/lineUpShop/shopHome',
        name:'shopHome',
        meta:{
          title:'来排队'
        },
        component: () => import('@/page/lineUpShop/shopHome')
      },
      {
        path: '/lineUpShop/mineHome',
        name: '我的主页',
        meta:{
          title:'我的'
        },
        component: () => import('@/page/lineUpShop/mineHome')
      },
    ]
  },
  // {
  //   path: '/lineUpShop/shopHome',
  //   name: '来排队',
  //   meta:{
  //     title:'来排队'
  //   },
  //   component: () => import('@/page/lineUpShop/shopHome')
  // },
  // {
  //   path: '/lineUpShop/mineHome',
  //   name: '我的主页',
  //   meta:{
  //     title:'我的'
  //   },
  //   component: () => import('@/page/lineUpShop/mineHome')
  // },
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
  {
    path: '/lineUpShop/lineUpSuccess',
    name: '排队成功',
    meta:{
      title:'排队成功'
    },
    component: () => import('@/page/lineUpShop/lineUpSuccess')
  },
  {
    path: '/lineUpShop/myQueue',
    name: '我的排队',
    meta:{
      title:'排队码'
    },
    component: () => import('@/page/lineUpShop/myQueue')
  },
  {
    path: '/lineUpShop/remainEvaluate',
    name: '待评价',
    meta:{
      title:'评价'
    },
    component: () => import('@/page/lineUpShop/remainEvaluate')
  },
  {
    path: '/lineUpShop/evaluate',
    name: '评价',
    meta:{
      title:'评价'
    },
    component: () => import('@/page/lineUpShop/evaluate')
  },
  {
    path: '/lineUpShop/collection',
    name: '收藏',
    meta:{
      title:'收藏'
    },
    component: () => import('@/page/lineUpShop/collection')
  },
  {
    path: '/lineUpShop/feedback',
    name: '意见反馈',
    meta:{
      title:'意见反馈'
    },
    component: () => import('@/page/lineUpShop/feedback')
  },
  {
    path: '/lineUpShop/setting',
    name: '设置',
    meta:{
      title:'设置'
    },
    component: () => import('@/page/lineUpShop/setting')
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
  {
    path: '/lineUpShopServe/hairdresserEntry',
    name: '发型师',
    meta:{
      title:'发型师'
    },
    component: () => import('@/page/lineUpShopServe/hairdresserEntry')
  },
  {
    path: '/lineUpShopServe/serviceList',
    name: '服务列表',
    meta:{
      title:'服务列表'
    },
    component: () => import('@/page/lineUpShopServe/serviceList')
  },
  {
    path: '/lineUpShopServe/addService',
    name: '新增服务',
    meta:{
      title:'1/2 服务信息编辑'
    },
    component: () => import('@/page/lineUpShopServe/addService')
  },
  {
    path: '/lineUpShopServe/setUpInLine',
    name: '排队设置',
    meta:{
      title:'2/2 排队设置'
    },
    component: () => import('@/page/lineUpShopServe/setUpInLine')
  },
  {
    path: '/lineUpShopServe/callManageMent',
    name: '叫号管理',
    meta:{
      title:'叫号管理'
    },
    component: () => import('@/page/lineUpShopServe/callManageMent')
  },
  {
    path: '/lineUpShopServe/callDetail',
    name: '叫号详情',
    meta:{
      title:'叫号详情'
    },
    component: () => import('@/page/lineUpShopServe/callDetail')
  }
];
