<template>
  <div id="surveySystem">
    <div class="tip">补充必要信息后开始日志记录</div>
    <div class="link">
      <!-- <div>健康数据中心</div> -->
    </div>
    <div class="title">
			<span>
				<i></i>
				<i></i>
				<i></i>
			</span>
      <div>个人健康日志</div>
      <span>
				<i></i>
				<i></i>
				<i></i>
			</span>
    </div>
    <div class="con">
        <div class="item">
          <popup-picker title="城市:" :data="cityList" v-model="cityName" ></popup-picker>
        </div>
        <div class="item">
          <x-input :show-clear="false" title="社区:" :disabled="true" @click.native="communityFocus" v-model="community_name" placeholder="请输入社区名称…">
            <!-- <img slot="right" src="../assets/img/chaxunicon.png" alt=""> -->
          </x-input>
        </div>
      <div class="item">
        <x-input type="number" :show-clear="false" title="楼栋:" v-model="building" :min="1" :max="2">
          <div class="unit" slot="right">栋</div>
        </x-input>
        <x-input type="number" title="" :show-clear="false" v-model="unit" :min="1" :max="2">
          <div class="unit" slot="right" :min="1" :max="2">单元</div>
        </x-input>
      </div>
      <div class="item">
        <x-input type="number" title="房屋:" :show-clear="false" v-model="floor" :min="1" :max="2">
          <div class="unit" slot="right">楼</div>
        </x-input>
        <x-input type="number" title="" :show-clear="false" v-model="room_number" :min="1" :max="2">
          <div class="unit" slot="right">室</div>
        </x-input>
      </div>
      <div class="item">
        <x-input type="tel" is-type="china-mobile" title="电话:" placeholder="请输入电话…" v-model="personnel_phone">
        </x-input>
      </div>
      <!-- <div class="item">
        <x-input title="地址:" placeholder="请输入地址信息…" v-model="address">
          <img slot="right" src="../assets/img/position.png" alt="">
        </x-input>
      </div> -->
      <x-button class="cicle" :gradients="['#009566', '#009566']" @click.native="submit()">开始记录</x-button>
    </div>
    
    <div v-transfer-dom>
      <popup v-model="showPopup" position="bottom">
        <div class="popupMask">
          <div class="search-box">
            <div class="search">
              <input ref="inputs" type="text" v-model="searchValue" placeholder="请输入社区名称">
            </div>
            <div class="btn" @click="searchSure">确定</div>
          </div>
          <ul class="list">
            <li v-for="(item,index) in communityList" :key="index" @click="handleLiSure(item)">
              {{item.city+','+item.community_name}}
            </li>
          </ul>
          <div style="padding:0 20px;color:#292929;font-size:14px;opacity: 0.7;" v-show="communityList.length==0">暂无对应社区，可添加</div>
        </div>
        <!-- <group>
          <cell v-for="i in 20" :key="i" :title="i"></cell>
        </group> -->
      </popup>
    </div>
  </div>
</template>

<script>
  import {XInput, Group ,XButton,Cell,PopupPicker,Popup,TransferDom} from 'vux';
  export default {
    components: {
      Group,
      XInput,
      XButton,
      Cell,
      Popup,
      PopupPicker,
    },
    directives: {
      TransferDom
    },
    data () {
      return {
        searchValue:'',
        cityList: [['武汉市','黄石市','襄阳市','荆州市','宜昌市','十堰市','孝感市','荆门市','鄂州市','黄冈市','咸宁市','随州市','大冶市','丹江口市','洪湖市','石首市','松滋市','宜都市','当阳市','枝江市','老河口市','枣阳市','宜城市','钟祥市','应城市','安陆市','汉川市','麻城市','武穴市','赤壁市','广水市','仙桃市','天门市','潜江市','恩施市','利川市']],
        cityName: ['武汉市'],
        communityList:[
          
        ],
        showPopup:false,
        community_id:'',
        community_name:'',
        city:'',
        building:'',
        unit:'',
        floor:'',
        room_number:'',
        personnel_name:'',
        personnel_phone:'',
        address:''
      }
    },
    created(){
      
    },
    watch: {
      searchValue(){
        this.searchData();
      }
    },
    methods:{
      communityFocus(){
        this.showPopup=true;
        this.$nextTick(()=>{   
          // this.$refs.inputs.focus();
        })
      },
      searchData(){
        const params={
          city:this.cityName[0],
          community_name : this.searchValue,
        }
        this.request(this.api.queryCommunityAPI, JSON.stringify(params),'post','application/json').then(res => {
          if(res.code==200){
            // 请求社区模糊查询接口
            // {
            //   code：200，
            //   data：{
            //     communityList:[
            //       {
            //         community_id：'xxxx',
            //         community_name:'当代国际花园1'，
            //         city:'武汉市'
            //       }，
            //       {
            //         community_id：'yyyy',
            //         community_name:'当代国际花园2'，
            //         city:'武汉市'
            //       }，
            //       {
            //         community_id：'zzz',
            //         community_name:'当代国际花园3'，
            //         city:'武汉市'
            //       }，
            //     ]
            //   }
            //   msg：'请求成功！'
            // }
            this.communityList=[];
            this.communityList=res.data.communityList;
            

          }else{
            this.$vux.toast.text(res.msg, 'bottom')
          }
        });
      },
      handleLiSure(item){
        this.community_name=item.community_name;
        this.community_id=item.community_id;
        this.showPopup=false;
      },
      searchSure(){
        this.community_name=this.searchValue;
        this.showPopup=false;
      },
      submit(){
        if(!this.community_name ||!this.building||!this.unit||!this.floor||!this.room_number){
            this.$vux.toast.text('请将数据填写完整', 'bottom');
            return;
        }
        if(Number(this.building)==0 ||Number(this.unit)==0||Number(this.floor)==0||Number(this.room_number)==0){
            this.$vux.toast.text('楼栋相关信息填写非0数据', 'bottom');
            return;
        }
        // if(!/^0?1[3|4|5|6|7|8][0-9]\d{8}$/.test(this.personnel_phone)){
        //   this.$vux.toast.text('请填写正确的手机号', 'bottom');
        //   return;
        // }
        const params={
          community_id : this.community_id,
          community_name : this.community_name,
          city:this.cityName[0],
          building : Number(this.building),
          unit : Number(this.unit),
          floor : Number(this.floor),
          room_number : Number(this.room_number), // 不允许超过2位
          personnel_name :this.personnel_name,
          personnel_phone :this.personnel_phone,
        }
        this.request(this.api.communityRegisteredAPI, JSON.stringify(params),'post','application/json').then(res => {
          if(res.code==200){
            window.localStorage.setItem('rooms',JSON.stringify(res.data.rooms));
            window.localStorage.setItem('counts',JSON.stringify(res.data.counts));
             this.$go('/surveyForm');
          }else{
            this.$vux.toast.text(res.msg, 'bottom')
          }
        });
      },
    }

  };
</script>

<style lang="less">
  #surveySystem{
    width: 100vw;
    min-height: 100vh;
    padding: 32px 25px;
    box-sizing: border-box;
    // background: url('../assets/img/bg.png') top center no-repeat #009566;

    background-size: contain;
    & .tip{
      color: #C9FFEE;
      font-size: 36px;
      text-align: right;
      margin-bottom: 20px;
    }
    & .link{
      display: flex;
      flex-direction: row-reverse;
      height:58px;
      &>div{
        width:276px;
        height:58px;
        background:rgba(255,255,255,0.2);
        border-radius:8px;
        border:1px solid rgba(201,255,238,1);
        color: #C9FFEE;
        font-size: 30px;
        padding: 0 60px 0 26px;
        box-sizing: border-box;
        position: relative;
				line-height:58px;
        &::after{
          content: '';
          position: absolute;
          width: 28px;
          height: 29px;
          // background: url('../assets/img/next-arrow.png');
          top: 10px;
          right: 18px;
          background-size: contain;
        }
      }
    }
    & .title{
      color: #009566;
      font-size: 36px;
      height: 56px;
      line-height: 56px;
      margin-top: 120px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      &>div{
        font-weight: 700;
        width: 420px;
        text-align: center;
      }
      &>span{
        flex: 1;
        display: flex;
        align-items: center;
        &:nth-of-type(1){
          flex-direction: row-reverse;
        }
        &>i{
          width: 32px;
          height: 32px;
          // background: url('../assets/img/star.png') center center no-repeat;
        }
      }

    }
    & .con{
      background-color: #fff;
      height: 69vh;
      padding: 20px 42px;
      overflow: hidden;
      box-sizing: border-box;
      // margin-top: 180px;
      .vux-cell-placeholder, .vux-cell-value {
          color: #292929;
      }
      .item {
        border-bottom:1px solid #E5E5E5 ;
        display: flex;
        height: 100px;
        box-sizing: border-box;
        .unit {
          font-size:30px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(51,51,51,1);
          line-height:42px;
        }
        .vux-x-input {
          width: 100%;
        }
        .vux-cell-box{
          width: 100%;
          & .vux-popup-picker-select{
            text-align: left!important;
            padding-left:40px; 
            box-sizing: border-box;
          }
        }
      }
      img {
        width:38px;
        height:39px;
      }
      .cicle {
        margin-top: 160px;
        border-radius:50px;
        height: 93px;
        box-sizing: border-box;
        font-size:30px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:42px;
      }
    }
  }
</style>
<style lang="less">
  .popupMask{
    height: auto;
    min-height: 100vh;
    & .search-box{
      display: flex;
      padding: 10px 30px;
      background: #E5E5E5;
      &> .search{
        flex: 1;
        height: 68px;
        overflow: hidden;
        margin-right: 20px;
        border-radius: 5px;
        &> input{
          width: 100%;
          height: 100%;
          border: none;
          vertical-align: top;
          padding-left: 18px;
          &:focus{
            outline:none;
            }
        }
      }
      & > .btn{
        height: 68px;
        line-height: 68px;
        font-size: 28px;
        width: 100px;
        text-align: center;
        color: #fff;
        background: #009566;
        border-radius: 5px;        
      }
    }
    & .list{
      &>li{
        height: 68px;
        line-height: 68px;
        font-size: 26px;
        border-bottom: 1px solid #ccc;
        padding: 0 20px;
        box-sizing: border-box;
      }
    }
  }
</style>

