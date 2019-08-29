<template>
  <div class="warp">
    <div class="warp-inner">
      <div class="touxiang-top">
        <router-link :to="`${$publicUrl}/home/geren`">
          <i class="iconfont icon-fangxiangzuo"></i>
        </router-link>
      </div>
      <div class="touxiang-main-top">
        <div @click="zhanshi">
          <span>头像</span>
          <div>
            <img src="../assets/touxiang.png" alt />
            <i class="iconfont icon-fangxiang-xia"></i>
          </div>
        </div>
        <div>
          <span>背景</span>
          <div>
            <span>更换</span>
            <i class="iconfont icon-fangxiang-xia"></i>
          </div>
        </div>
        <div>
          <span>名字</span>
          <div>
            <span>阴雨天</span>
            <i class="iconfont icon-fangxiang-xia"></i>
          </div>
        </div>
      </div>
      <div class="touxiang-main-min">
        <div>
          <span>我的二维码</span>
          <div>
            <img src="../assets/2weima.png" alt />
            <i class="iconfont icon-fangxiang-xia"></i>
          </div>
        </div>
        <div>
          <span>我的地址</span>
          <div>
            <span>北京市&nbsp;海淀区</span>
            <i class="iconfont icon-fangxiang-xia"></i>
          </div>
        </div>
        <div class="yinsi">
          <span>隐私</span>
          <div>
            <i class="iconfont icon-tanhao"></i>
            <i class="iconfont icon-fangxiang-xia"></i>
          </div>
        </div>
      </div>
      <div class="touxiang-bottom">
        <div class="touxiang-bottom-top">
          <span>为保护用户隐私，请尽量选择默认隐私设置</span>
        </div>
      </div>
    </div>
    <div v-show="show" class="mengceng">
      <div class="quxiao">
        <span>进入相册选择</span>
        <span>拍一张</span>
        <div>
          <span @click="zhanshi">取消</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "touxiang",
  data() {
    return {
      show: false
    };
  },
  methods: {
    zhanshi() {
      console.log("1111");
      this.show = !this.show;
    }
  }
};
</script>

<style>
.touxiang-top {
  width: 100vw;
  height: 1.3rem;
  background-image: url("../assets/u151.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  padding-left: 0.2rem;
  box-sizing: border-box;
}
.touxiang-top i {
  display: block;
  font-size: 0.6rem;
  float: right;
  margin-top: 0.6rem;
  margin-right: 0.2rem;
  line-height: 0.5rem;
  color: #ccc;
}
.touxiang-main-top {
  margin-top: 0.3rem;
  background-color: #f1f1f1;
  padding: 0 0.1rem 0 0.2rem;
  box-sizing: border-box;
  /* margin-bottom: 0.2rem; */
}
.touxiang-main-top > div {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  align-items: center;
}
.touxiang-main-top > div:last-child {
  border-bottom: 2px solid #ccc;
}
.touxiang-main-top > div > div span {
  color: #8c8c8c;
  font-size: 0.26rem;
  line-height: 0.4rem;
  align-items: center;
  margin-left: 0.2rem;
}
.touxiang-main-top > div > div img {
  margin: 0.2rem 0;
  display: block;
  width: 1rem;
}
.touxiang-main-top > div > div .icon-tanhao {
  font-size: 0.4rem;
  color: red;
}
.touxiang-main-top > div > div i {
  font-size: 0.6rem;
  margin-left: 0.2rem;
  color: #ccc;
}
.touxiang-main-top > div > div {
  display: flex;
  align-items: center;
  margin-right: 0.2rem;
}
.touxiang-main-top > div > div .open {
  color: #d83226;
}
.touxiang-main-top > div > span {
  display: block;
  font-size: 0.26rem;
  line-height: 0.4rem;
  padding: 0.3rem 0.3rem;
  color: #8c8c8c;
}
.touxiang-main-min {
  margin-top: 0.3rem;
  background-color: #f1f1f1;
  padding: 0 0.1rem 0 0.2rem;
  box-sizing: border-box;
  /* margin-bottom: 0.2rem; */
}
.touxiang-main-min > div {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  align-items: center;
}
.touxiang-main-min > div > div span {
  color: #8c8c8c;
  font-size: 0.26rem;
  line-height: 0.4rem;
  align-items: center;
  margin-left: 0.2rem;
}
.touxiang-main-min > div > div img {
  margin: 0.2rem 0;
  display: block;
  width: 1rem;
}
.touxiang-main-min > div > div .icon-tanhao {
  font-size: 0.4rem;
  color: red;
}
.touxiang-main-min > div > div i {
  font-size: 0.6rem;
  margin-left: 0.2rem;
  color: #ccc;
}
.touxiang-main-min > div > div {
  display: flex;
  align-items: center;
  margin-right: 0.2rem;
}
.touxiang-main-min > div > div .open {
  color: #d83226;
}
.touxiang-main-min > div > span {
  display: block;
  font-size: 0.26rem;
  line-height: 0.4rem;
  padding: 0.3rem 0.3rem;
  color: #8c8c8c;
}
.touxiang-bottom {
  background-image: url("../assets/User-info-bg_02.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 3.8rem;
}
.touxiang-bottom .touxiang-bottom-top {
  background-color: #bfc8cf;
}
.touxiang-bottom .touxiang-bottom-top span {
  display: block;
  font-size: 0.2rem;
  color: #b0b9c0;
  line-height: 0.5rem;
  margin-left: 0.4rem;
}
.mengceng {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
}
.mengceng .quxiao {
  width: 100%;
  background-color: #e3e4e4;
  border-radius: 0.2rem 0.2rem 0 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
}
.mengceng .quxiao > span {
  display: block;
  text-align: center;
  font-size: 0.3rem;
  margin: 0.3rem 0;
}
.mengceng .quxiao > div {
  border-top: 1px solid red;
  margin: 0 0.2rem 0 0.4rem;
}
.mengceng .quxiao > div span {
  display: block;
  text-align: center;
  font-size: 0.4rem;
  margin: 0.2rem 0.2rem 0.2rem 0;
}
</style>