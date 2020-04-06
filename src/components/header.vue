<template>
  <header id="Header">
    <div class="left" @click.stop="leftClick()">
      <div v-show="isBack" >
        <i class="iconfont">&#xd0110;</i>
      </div>
      <p>{{leftText}}</p>
    </div>
    <p class="title">{{title}}</p>
    <div class="right"  @click.stop="rightClick()">
      <slot name="right"></slot>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
  components: {},
  props:{
    title:{
      type:String,
      default:'标题'
    },
    leftText:{
      type:String,
      default:''
    },
    rightText:{
      type:String,
      default:'操作'
    },
    isBack:{
      type:Boolean,
      default:true
    },

  },
  data () {
    return {


    }
  },
  created () {

  },
  mounted: function () {

  },
  methods:{
    rightClick(){
      this.$emit("rightClick");
    },
    leftClick(){
      if(this.isBack){
        this.$back();
      }else{
        this.$emit("leftClick");
      }
    }
  }
}
</script>
<style lang="less">
  #Header{
    height: 96px;
    width: 100vw;
    background-color: #fff;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    &>div{
      width: 150px;
      &.left{
        display: flex;
        &>div{
          width: 70px;
          height:100%;
          text-align: center;
          &>i{
            font-size: 44px;
          }
        }
        &>p{
          flex: 1;
          font-size: 24px;
          text-align: left;
        }

      }
      &.right{
        font-size: 30px;
      }
    }
    &>.title{
      flex: 1;
      font-size: 36px;
      color: #292929;
      font-weight: 600;
    }
  }

</style>
