<template>
  <section id="searchPage">
    <section class="main">
        <section class="search-box">
            <div class="search-input">
                <input type="text" placeholder="搜服务、商圈、小区、园区" @focus="showSearchContent=true">
								<i class="iconfont">&#xd0044;</i>
            </div>
            <div class="search-btn">搜索</div>
        </section>
				<section class="default-content" v-show="!showSearchContent">
					<div class="search-find">
						<p>搜索发现</p>
						<div>
							<p>洗车</p>
							<p>KTV</p>
							<p>白菜</p>
							<p>洗车</p>
							<p>日韩料理</p>
							<p>美甲</p>
							<p>美发</p>
							<p>蛋糕</p>
							<p>温泉</p>
						</div>
					</div>
					<div class="search-recent">
						<p>最近搜索</p>
						<i class="iconfont">&#xd0071;</i>
						<div>
							<p>10元快剪</p>
						</div>
					</div>
				</section>
				<section class="search-content" v-show="showSearchContent">
					<div @click="$go('/lineUpShop/searchPage')">
						<i class="iconfont">&#xd0084;</i>
						<h5>
							<span>10元快剪</span>
							<span>当代国际花园</span>
						</h5>
						<p>
							<i class="iconfont">&#xe701;</i>
							<span>23人</span>
						</p>
						<p>
							<span>美发</span>
							<span> | </span>
							<span>光谷大道87号</span>
						</p>
					</div>
				</section>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'searchPage',
    components: {
      
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
  #searchPage{
    .main{
      height: 100vh;
      width: 100vw;
      box-sizing: border-box;
      overflow: auto;
      background-color: #fff;
      padding-top: 88px;
      & .search-box{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 88px;
        box-sizing: border-box;
        padding: 5px 0px 5px 30px;
				display: flex;
				align-items: center;
				z-index: 1;
				background-color: #fff;
        & .search-input{
					width: 591px;
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
			& .default-content{
				padding-left:30px;
				padding-top: 20px;
				width: 100%;
				box-sizing: border-box;
				& .search-find,
				& .search-recent{
					position: relative;
					&>i{
						position: absolute;
						height: 60px;
						width: 80px;
						text-align: center;
						line-height: 60px;
						right: 0;
						top: 0;
					}
					&>p{
						color: #999999;
						font-size: 26px;
						margin-bottom: 20px;
					}
					&>div{
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
						&>p{
							padding: 10px 20px;
							background:rgba(242,242,242,1);
							border-radius:26px;
							font-size: 26px;
							margin-right: 20px;
							margin-bottom: 20px;
							color: #333333;
						}
					}
				}
			}
			& .search-content{
				padding:0 30px;
				width: 100%;
				box-sizing: border-box;
				&>div{
					padding: 20px 0 20px 50px;
					box-sizing: border-box;
					position: relative;
					border-bottom: 1px solid #E5E5E5;
					&>i{
						position: absolute;
						width: 50px;
						height: 50px;
						line-height: 50px;
						top: 20px;
						left: 0;
						text-align: center;
						color: #999999;
						font-size: 30px;
					}
					&>h5{
						display: flex;
						justify-content: space-between;
						margin-bottom: 16px;
						&>span{
							color: #333333;
							font-size: 30px;
							&:nth-last-of-type(1){
								color: #666666;
								font-size: 26px;
								font-weight: normal;
							}
						}
					}
					&>p{
						font-size: 26px;
						color: #666666;
						margin-bottom: 16px;
						&:nth-last-of-type(1){
							margin-bottom: 0;
						}
						i{
							color: #D45050;
							font-size: 26px;
						}
					}
				}
			}
    }
  }
</style>
