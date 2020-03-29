<template>
  <section id="hairdresserEntry">
    <section class="main">
      <div class="top-column">
        <div>
          <h5>平台商家入驻</h5>
          <p>独立店铺管理系统</p>
        </div>
        <img src="../../assets/img/business-icon.png" alt="">
      </div>
      <div class="form-content">
        <h5>资料填写</h5>
        <div class="item">
          <x-input placeholder="请输入您店铺的名称" v-model="businessName" :show-clear="false">
            <div slot="label" class="label">
              <span>店铺名称:</span>
            </div>
          </x-input>
        </div>
        <div class="item">
          <x-input placeholder="请输入负责人的名称" v-model="name" :show-clear="false">
            <div slot="label" class="label">
              <span>负责任姓名:</span>
            </div>
          </x-input>
        </div>
        <div class="item">
          <x-input placeholder="请输入负责人使用的电话号码" v-model="phone" :show-clear="false">
            <div slot="label" class="label">
              <span>负责任电话:</span>
            </div>
          </x-input>
        </div>
        <div class="item">
          <cell is-link value="请选择">
            <div slot="title" class="label">
              <span>店铺地址:</span>
            </div>
          </cell>
        </div>
        <div class="item">
          <x-input placeholder="如道路,门牌号,小区,楼栋号" v-model="address" :show-clear="false">
            <div slot="label" class="label">
              <span>详细地址:</span>
            </div>
          </x-input>
        </div>
        <div class="item">
          <cell is-link value="请选择">
            <div slot="title" class="label">
              <span>商圈:</span>
            </div>
          </cell>
        </div>
        <div class="item">
          <cell is-link value="请选择">
            <div slot="title" class="label">
              <span>社区:</span>
            </div>
          </cell>
        </div>
        <div class="upload-box">
          <div>
            <p>上传营业执照</p>
            <div>
              <div>
                <div>
                  <img src="../../assets/img/img-upload-icon.png" alt="">
                  <p>上传照片</p>
                </div>
                <input type="file" name="" id="">
              </div>
            </div>
          </div>
          <div>
            <p>上传营业执照</p>
            <div>
              <div>
                <div>
                  <img src="../../assets/img/img-upload-icon.png" alt="">
                  <p>上传照片</p>
                </div>
                <input type="file" name="" id="">
              </div>
            </div>
          </div>
          <div>
            <p>
              <b>上传房产证明文件</b>
              <i>查看示例</i>
            </p>
            <div>
              <div>
                <div>
                  <img src="../../assets/img/img-upload-icon.png" alt="">
                  <p>上传照片</p>
                </div>
                <input type="file" name="" id="">
              </div>
            </div>
          </div>
          <div>
            <p>上传店铺LOGO</p>
            <div>
              <div>
                <div>
                  <img src="../../assets/img/img-upload-icon.png" alt="">
                  <p>上传照片</p>
                </div>
                <input type="file" name="" id="">
              </div>
            </div>
          </div>
          <div>
            <p>上传店铺主图 <span>店铺环境、店招、员工、服务相关宣传图</span></p>
            <div>
              <div>
                <div>
                  <img src="../../assets/img/img-upload-icon.png" alt="">
                  <p>上传照片</p>
                </div>
                <input type="file" name="" id="">
              </div>
            </div>
          </div>
        </div>
        <div class="business-time">
          <p>营业时间</p>
          <span>9:00 - 19:30</span>
        </div>
        <div class="other-serve">
          <p>其他服务</p>
          <div v-for="(item,index) in otherServeList" :key="index" @click="item.isActive=!item.isActive">
            <i v-if="item.isActive" class="iconfont">&#xd0088;</i>
            <i v-if="!item.isActive" class="iconfont">&#xd0072;</i>
            <span>{{item.title}}</span>
          </div>
        </div>
        <div class="business-entry-btn">
          申请入驻
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { XInput, Group,Cell,Calendar,XTextarea} from 'vux'
  export default {
    name: 'hairdresserEntry',
    components: {
      XInput, Group,Cell,Calendar,XTextarea
    },
    data(){
      return{
        businessName:'',
        name:'',
        phone:'',
        address:'',
        otherServeList:[
          {
            title:'免费停车',
            isActive:false
          },
          {
            title:'5折优惠',
            isActive:false
          },
          {
            title:'免预约金',
            isActive:false
          },
        ]

      }
    },
    methods:{
     
    }
  };
</script>

<style lang="less">
  #hairdresserEntry{
    .main{
      height: 100vh;
      width: 100vw;
      box-sizing: border-box;
      overflow: auto;
      background-color: #D45050;
      position: relative;
      &>.top-column{
        height: 150px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 40px;
        box-sizing: border-box;
        &>div{
          &>h5{
            height:56px;
            font-size:40px;
            font-weight:600;
            color:rgba(255,255,255,1);
            line-height:56px;
            margin-bottom: 6px;
          }
          &>p{
            height:42px;
            font-size:30px;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:42px;
          }
        }
        &>img{
          width: 91px;
          height: 81px;
        }
      }
      &>.form-content{
        position:absolute;
        top: 150px;
        left: 0;
        width: 100%;
        height: auto;
        background:rgba(255,255,255,1);
        border-radius:52px 52px 0px 0px;
        padding: 40px 30px;
        box-sizing: border-box;
        &>h5{
          height:48px;
          font-size:34px;
          font-weight:600;
          color:rgba(41,41,41,1);
          line-height:48px;
          margin-bottom: 20px;
        }
        &>.item{
          height: 88px;
          line-height: 88px;
          padding: 0 20px;
          box-sizing: border-box;
          background-color: #fff;
          margin-bottom: 1px;
          position: relative;
          // &::before{
          //   content: '*';
          //   position: absolute;
          //   left: 20px;
          //   top: 0;
          //   color: #E05C5C;
          // }
          &::after{
            content: '';
            position: absolute;
            height: 1px;
            width: 100%;
            background-color: #f2f2f2;
            left: 0;
            bottom: 0;
          }
          & .weui-cell{
            padding: 0;
            box-sizing: border-box;
            & .sign{
              font-style: normal;
              color: #E05C5C;
              // font-size: 28px;
            }
            & .label{
              margin-right: 20px;
              // font-size: 30px;
            }
            & .weui-input{
              // font-size: 30px;
            }
          }
        }
        &>.upload-box{
          margin-top: 20px;
          &>div{
            margin-bottom: 20px;
            &>p{
              height:30px;
              font-size:34x;
              font-weight:400;
              color:rgba(41,41,41,1);
              line-height:30px;
              margin-bottom: 20px;
              padding-left: 18px;
              display: flex;
              justify-content: space-between;
              &>span{
                color: #999999;
                font-size: 24px;
                line-height:30px;
              }
              &>b{
                font-size:34x;
                font-weight: normal;
              }
              &>i{
                color: #D45050;
                font-size: 32px;
                font-style: normal;
              }
            }
            &>div{
              height: 250px;
              &>div{
                width: 240px;
                height: 240px;
                width:240px;
                background-color:rgb(242,242,242);
                border-radius:8px;
                border:2px solid rgba(221,221,221,1);
                overflow: hidden;
                position: relative;
                &>div{
                  position: absolute;
                  width: 100%;
                  height: 100px;
                  text-align: center;
                  top: 0;
                  left: 0;
                  bottom: 0;
                  right: 0;
                  margin: auto;
                  &>img{
                    width: 46px;
                    height: 44px;
                    text-align: center;
                  }
                  &>p{
                    font-size: 22px;
                    color: #999999;
                    text-align: center;
                  }
                }
                &>input{
                  width: 750px;
                  height: 750px;
                  opacity: 0
                }
              }

            }
          }
        }
        &>.business-time{
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
          &>p{
            height:30px;
            font-size:30px;
            font-weight:400;
            color:rgba(41,41,41,1);
            line-height:30px;
          }
          &>span{
            height:30px;
            font-size:24px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(153,153,153,1);
            line-height:30px;
          }
        }
        &>.other-serve{
          margin-bottom: 80px;
          &>p{
            height:30px;
            font-size:30px;
            font-weight:400;
            color:rgba(41,41,41,1);
            line-height:30px;
            margin-bottom: 30px;
          }
          &>div{
            margin-bottom: 20px;
            height:78px;
            background:rgba(242,242,242,1);
            border-radius:8px;
            border:1px solid rgba(229,229,229,1);
            display: flex;
            align-items: center;
            padding: 0 30px;
            &>span{
              font-size: 30px;
              color: #333;
            }
            &>i{
             margin-right: 30px;
             color: #d45050;
            }
          }
        }
        &>.business-entry-btn{
          width:690px;
          height:88px;
          line-height: 88px;
          color: #fff;
          background:rgba(212,80,80,1);
          box-shadow:0px 2px 4px 0px rgba(212,80,80,0.38);
          border-radius:8px;
          text-align: center;
        }
      }
    }
  }
</style>
