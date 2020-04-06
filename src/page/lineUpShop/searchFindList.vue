<template>
  <section id="searchFindList">
    <Header title="排队买" />
    <section class="main">
        <section class="search-box">
            <div class="search-input">
                <input type="text" placeholder="搜服务、商圈、小区、园区" @focus="$go('/lineUpShop/searchPage')">
								<i class="iconfont">&#xd0044;</i>
            </div>
            <!-- <div class="search-btn">搜索</div> -->
        </section>
				<FilerBox />
				<section class="goods-list">
          <div @click="$go('/lineUpShop/goodsDetail')">
            <img src="../../assets/img/default-goods-icon.jpg" alt="">
            <div>
              <h5>造型，节假日通用(椰岛造型)</h5>
              <div class="shop-info">
                <div>
                  <i class="iconfont" style="color:#D45050;">&#xe701;</i>
                  <i class="iconfont" style="color:#D45050;">&#xe701;</i>
                  <i class="iconfont" style="color:#D45050;">&#xe701;</i>
                  <i class="iconfont" style="color:#D45050;">&#xe701;</i>
                  <i class="iconfont" style="color:#D45050;">&#xe701;</i>
                  <i class="iconfont" style="color:#D45050;">&#xe701;</i>
                  <i class="iconfont">&#xe701;</i>
                  <i class="iconfont">&#xe701;</i>
                  <i class="iconfont">&#xe701;</i>
                  <i class="iconfont">&#xe701;</i>
                </div>
                <span>62人</span>
                <p>
                  <i class="iconfont">&#xd0084;</i>
                  <span>200km</span>
                </p>
              </div>
              <div class="shop-address">
                <p>金地格林东郡</p>
                <p>光谷天地商圈</p>
              </div>
            </div>
          </div>
          <div @click="$go('/lineUpShop/goodsDetail')">
            <img src="../../assets/img/default-goods-icon.jpg" alt="">
            <div>
              <h5>造型，节假日通用(椰岛造型)</h5>
              <div class="shop-info">
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
                <span>32人</span>
                <p>
                  <i class="iconfont">&#xd0084;</i>
                  <span>200km</span>
                </p>
              </div>
              <div class="shop-address">
                <p>金地格林东郡</p>
                <p>光谷天地商圈</p>
              </div>
            </div>
          </div>
				</section>
    </section>
  </section>
</template>

<script>
  import FilerBox from '../../components/filter';
  import Header from '../../components/header';
  export default {
    name: 'searchFindList',
    components: {
      FilerBox,
      Header
    },
    data(){
      return{
        showSearchContent:false
      }
    },
    methods:{
      
    }
  };
</script>

<style lang="less">
  #searchFindList{
    .main{
      height: 100vh;
      width: 100vw;
      box-sizing: border-box;
      overflow: auto;
      background-color: #fff;
			// padding-top: 166px;
			padding-top: 262px;
      & .search-box{
        position: absolute;
				// top: 0;
				top: 96px;
        left: 0;
        width: 100vw;
        height: 88px;
        box-sizing: border-box;
        padding: 5px 30px 5px 30px;
				display: flex;
				align-items: center;
				z-index: 1;
				background-color: #fff;
        & .search-input{
					// width: 591px;
					flex:1;
					height: 78px;
					background:rgba(242,242,242,1);
					border-radius:8px;
					padding-left: 67px;
					padding-right: 17px;
					box-sizing: border-box;
					position: relative;
					&>i{
						position:absolute;
						width: 67px;
						height: 78px;
						line-height: 78px;
						text-align: center;
						top: 0;
						left: 0;
					}
					& input{
						height: 78px;
						width: 100%;
						border: none;
						background: rgba(242,242,242,1);
						font-size: 26px;
						&:focus{
							border:none;
							-webkit-tap-highlight-color: rgba(255, 255, 255, 0); 
							-webkit-user-select: none;
							-moz-user-focus: none;
							-moz-user-select: none;
							-webkit-appearance:none;
							outline: none;
						}
					}
        }
        & .search-btn{
						flex: 1;
						text-align: center;
						font-size: 30px;
        }
			}
			& .goods-list{
				box-sizing: border-box;
				&>div{
					display: flex;
					padding: 20px 30px;
					border-bottom: 1px solid #E5E5E5;
					img{
						width: 140px;
						height: 140px;
						margin-right: 20px;
					}
					&>div{
						h5{
							font-size: 34px;
							height: 50px;
							line-height: 50px;
							color: #292929;
							font-weight: 400;
						}
						&>.shop-info{
							display: flex;
							height: 40px;
							align-items: center;
							&>div{
								font-size: 0;
								margin-right: 10px;
								i{
									font-size: 26px;
									color: #999999;
								}
							}
							&>span{
								color: #999999;
								font-size: 26px;
								margin-right: 40px;
							}
							&>p{
								font-size: 26px;
								color: #999999;
								i{
									font-size: 26px;
									color: #D45050;
								}
							}
						}
						&>.shop-address{
							display: flex;
							&>p{
								padding: 4px 12px;
								border-radius:4px;
								border:1px solid rgba(229,229,229,1);
								text-align: center;
								margin-right: 14px;
								font-size: 22px;
								color: #292929;
							}
						}
					}
				}
			}
    }
  }
</style>
