<template>
  <div class="setUpInLine">
    <!-- <div class="nav">
      <span class="iconfont iconleft left"></span>
      <span>排队设置</span>
    </div> -->
    <div class="section">
      <group gutter="0">
        <cell title="开启排队" is-link>
          <div class="black" slot="value">开启</div>
        </cell>
      </group>

      <group gutter="10px">
        <cell title="设置放号时间段" is-link @click.native="show=true">
          <div v-if="timeBucket.length>0" slot="value" class="black">添加号段</div>
          <div v-else slot="value">暂未设置</div>
        </cell>
        <div class="time" v-if="timeBucket.length>0">
          <div class="row" v-for="(item,index) of timeBucket" :key="index">
            <div><span class="name">时间段{{index+1}}:</span> <span>{{item.time}}</span></div>
            <div><span class="name">数量:</span> <span>{{item.number}}</span></div>
          </div>
        </div>
        <x-input title="服务预计时长" v-model="time" placeholder="" text-align="right" novalidate
                 :show-clear="false" @on-blur="onBlur" placeholder-align="right">
          <div slot="right" class="black">&nbsp;&nbsp;分钟</div>
        </x-input>
        <x-input title="排队天数设置" v-model="day" placeholder="" text-align="right" novalidate
                 :show-clear="false" @on-blur="onBlur" placeholder-align="right">
          <div slot="right" class="black">&nbsp;&nbsp;天</div>
        </x-input>
      </group>
      <group gutter="10px">
        <x-input title="预约费用" v-model="fee" placeholder="" text-align="right" novalidate
                 :show-clear="false" @on-blur="onBlur" placeholder-align="right">
          <div slot="right" class="black">&nbsp;&nbsp;元</div>
        </x-input>
      </group>
      <group gutter="10px">
        <cell title="违约设置时限" is-link>
          <div slot="value">过预约时间段结束时间10分钟</div>
        </cell>
        <x-input label-width="200px" title="会员违约金比例设置" v-model="percentage" placeholder="" text-align="right" novalidate
                 :show-clear="false" @on-blur="onBlur" placeholder-align="right">
          <div slot="right" class="black">&nbsp;&nbsp;%</div>
        </x-input>
        <cell title="店家违约说明" is-link>
          <div slot="value">暂未设置</div>
        </cell>
      </group>
    </div>
    <div class="btnBox">
      <button class="release">发布服务</button>
      <button class="cancel">取消</button>
    </div>
    <div v-transfer-dom>
      <popup v-model="show" class="setUpInLinePop" position="bottom">
        <div class="popBtn">
          <button class="cancel" @click="show = false"> 取消</button>
          <button class="confirm" @click="popConfirm"> 确认</button>
        </div>
        <div class="input">
          <x-input label-width="200px" title="放号数量" v-model="popNumber" placeholder="" text-align="right" novalidate
                   :show-clear="false" @on-blur="onBlur" placeholder-align="right">
            <div slot="right" class="black">&nbsp;&nbsp;个</div>
          </x-input>
        </div>
        <div class="colorLogo">
          <div><span class="grey"></span> 不可选</div>
          <div><span class="blue"></span> 可选</div>
          <div><span class="red"></span> 已选择</div>
        </div>
        <div class="timeBox">
          <span @click="timeSelect(item,index)" :class="item.color" v-for="(item,index) of  timeData" :key="index">{{item.value}}</span>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
  import {XTextarea, XInput, Group, Cell, Popup, Toast, TransferDom} from 'vux'

  export default {
    name: "setUpInLine",
    directives: {
      TransferDom
    },
    components: {
      XTextarea,
      XInput,
      Group,
      Cell,
      Popup,
      Toast
    },
    data() {
      return {
        time: 30,
        day: 1,
        fee: 0,
        percentage: 0,
        timeBucket: [],
        timeData: [
          {value: '00:00', color: 'grey'},
          {value: '00:30', color: 'grey'},
          {value: '01:00', color: 'grey'},
          {value: '01:30', color: 'grey'},
          {value: '02:00', color: 'grey'},
          {value: '02:30', color: 'grey'},
          {value: '03:00', color: 'grey'},
          {value: '03:30', color: 'blue'},
          {value: '04:00', color: 'blue'},
          {value: '04:30', color: 'blue'},
          {value: '05:00', color: 'blue'},
          {value: '05:30', color: 'blue'},
          {value: '06:00', color: 'blue'},
          {value: '06:30', color: 'blue'},
          {value: '07:00', color: 'blue'},
          {value: '07:30', color: 'blue'},
          {value: '08:00', color: 'blue'},
          {value: '08:30', color: 'blue'},
        ],
        oldIndex: '',
        popNumber: '',
        show: true
      }
    },
    create() {

    },
    methods: {
      timeSelect(item, index) {
        if (item.color != 'grey') {
          for (let g = 0; g < this.timeData.length; g++) {
            this.timeData[g].color === 'grey' ? '' : this.timeData[g].color = 'blue';
          }
          item.color = 'red';
          var i = index;
          if (this.oldIndex) {
            for (let t = 0; t <= Math.abs(index - this.oldIndex); t++) {
              this.timeData[i].color = 'red';
              i > this.oldIndex ? i-- : i++;
            }
          }
          this.oldIndex = index;
        }
      },
      popConfirm() {
        var startTime, endTime;
        for (let g = 0; g < this.timeData.length; g++) {
          if (this.timeData[g].color === 'red') {
            if (this.timeData[g - 1].color != 'red') {
              startTime = this.timeData[g].value;
            }
            if (this.timeData[g + 1].color != 'red') {
              endTime = this.timeData[g].value;
            }
          }
        }
        if(!startTime){
          this.$vux.toast.show({
            type: 'text',
            text: '请选择时间段'
          })
          return;
        }
        if(!this.popNumber){
          this.$vux.toast.show({
            type: 'text',
            text: '请输入放号数量'
          })
          return;
        }
        this.timeBucket.push({time: startTime + '~' + endTime, number: this.popNumber});
        this.show = false;
      },
      onBlur() {

      }
    }
  }
</script>

<style lang="less">
  .setUpInLine {
    font-size: 34px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(41, 41, 41, 1);
    line-height: 48px;
    min-height: 100vh;
    box-sizing: border-box;
    padding-bottom: 200px;
    .nav {
      height: 88px;
      font-size: 34px;
      font-weight: 400;
      color: rgba(41, 41, 41, 1);
      text-align: center;
      line-height: 88px;
      box-sizing: border-box;
      padding: 0 30px;
      .left {
        float: left;
      }
    }
    .section {
      .vux-x-input {
        padding: 23px 30px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        font-size: 30px;
        line-height: 30px;
      }
      .weui-cell {
        padding: 23px 30px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        font-size: 30px;

      }
      .black {
        color: #292929;
      }
      .time {
        font-size: 30px;
        .row {
          padding: 23px 30px;
          display: flex;
          div {
            flex: 1;
            .name {
              color: #999;
            }
          }
        }
      }
    }
    .btnBox {
      padding: 0 30px;
      width: 100%;
      position: absolute;
      bottom: 10px;
      box-sizing: border-box;
      button {
        height: 88px;
        width: 100%;
        text-align: center;
        border-radius: 8px;
        border: none;
        outline: none;
        font-size: 30px;
      }
      .release {
        background: rgba(212, 80, 80, 1);
        box-shadow: 0px 2px 4px 0px rgba(212, 80, 80, 0.38);
        color: rgba(255, 255, 255, 1);
        line-height: 88px;
      }
      .cancel {
        height: 88px;
        width: 100%;
        text-align: center;
        background-color: #F2F2F2;
        font-size: 30px;
        line-height: 88px;
      }
    }
  }

  .setUpInLinePop.vux-popup-dialog {
    min-height: 877px;
    background: rgba(255, 255, 255, 1);
    padding: 16px 30px;
    box-sizing: border-box;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    .black {
      color: #292929;
    }
    .grey {
      background: rgba(242, 242, 242, 1);
      color: rgba(221, 221, 221, 1);
    }
    .blue {
      background: rgba(0, 103, 254, 1);
      color: #FFFFFF;
    }
    .red {
      background: rgba(212, 80, 80, 1);
      color: #FFFFFF;
    }
    .popBtn {
      border-bottom: 1px solid #E5E5E5;
      padding: 22px 0;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      font-size: 30px;
      button {
        border: none;
        outline: none;
        background-color: transparent;
      }
      .confirm {
        color: #D45050;
      }
    }
    .input {
      height: 78px;
      margin-top: 30px;
      background: rgba(242, 242, 242, 1);
      border-radius: 8px;
    }
    .colorLogo {
      display: flex;
      justify-content: space-between;
      padding: 32px 0;
      align-items: center;
      span {
        display: inline-block;
        width: 34px;
        height: 34px;
        border-radius: 4px;
        margin-left: 15px;
        vertical-align: text-bottom;
      }
    }
    .timeBox {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      span {
        width: 105px;
        height: 68px;
        text-align: center;
        line-height: 68px;
        border-radius: 8px;
        margin-bottom: 23px;
      }
    }
  }
</style>
