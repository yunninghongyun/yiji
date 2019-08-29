<template>
  <div class="warp">
    <div class="warp-inner">
      <div class="tcdl-top">
        <router-link :to="`${$publicUrl}/home/geren`">
          <i class="iconfont icon-fangxiangzuo"></i>
        </router-link>
      </div>
      <div class="tcdl-main-top">
        <div>
          <span>自动离线缓存</span>
          <div>
            <span :class="ind===0?'open':''" @click="open">开&nbsp;</span>
            <span>/</span>
            <span :class="ind===1?'open':''" @click="close">关</span>
          </div>
        </div>
        <div>
          <span>Wi-Fi状态下自动缓存高清作品</span>
          <i class="iconfont icon-fangxiang-xia"></i>
        </div>
        <div>
          <span>使用流量状态下提醒</span>
          <div>
            <span :class="val===0?'open':''" @click="open1">开&nbsp;</span>
            <span>/</span>
            <span :class="val===1?'open':''" @click="close2">关</span>
          </div>
        </div>
      </div>
      <div class="tcdl-main-min">
        <span>消息推送</span>
        <span>意见反馈</span>
        <span>当前版本</span>
        <span>关于艺集</span>
      </div>
      <div class="tcdl-bottom">
        <div>
          <span>退出登录</span>
          <p>当前版本 1 . 0 . 42</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tcdl",
  data() {
    return {
      ind: 0,
      val: 1
    };
  },
  methods: {
    open() {
      this.ind = 0;
    },
    close() {
      this.ind = 1;
    },
    open1() {
      this.val = 0;
    },
    close2() {
      this.val = 1;
    }
  }
};
</script>

<style>
.warp-inner {
  width: 100vw;
  height: 100vh;
  background-color: #e0eaec;
}
.tcdl-top {
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
.tcdl-top i {
  display: block;
  font-size: 0.6rem;
  float: right;
  margin-top: 0.6rem;
  margin-right: 0.2rem;
  line-height: 0.5rem;
  color: #ccc;
}
.tcdl-main-top {
  margin-top: 0.3rem;
  background-color: #f1f1f1;
  padding: 0 0.1rem 0 0.2rem;
  box-sizing: border-box;
  margin-bottom: 0.2rem;
}
.tcdl-main-top > div {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  align-items: center;
}
.tcdl-main-top > div:last-child {
  border-bottom: 2px solid #ccc;
}
.tcdl-main-top > div > div span {
  color: #8c8c8c;
  font-size: 0.26rem;
  line-height: 0.4rem;
  align-items: center;
}
.tcdl-main-top > div > div {
  display: flex;
  align-items: center;
  margin-right: 0.2rem;
}
.tcdl-main-top > div > div .open {
  color: red;
}
.tcdl-main-top > div i {
  font-size: 0.6rem;
  color: #ccc;
}
.tcdl-main-top > div > span {
  display: block;
  font-size: 0.26rem;
  line-height: 0.4rem;
  padding: 0.3rem 0.3rem;
  color: #8c8c8c;
}
.tcdl-main-min {
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  padding: 0 0.1rem 0 0.2rem;
}
.tcdl-main-min span {
  font-size: 0.26rem;
  line-height: 0.4rem;
  padding: 0.3rem 0.3rem;
  color: #8c8c8c;
  border-bottom: 1px solid #ccc;
  /* padding: 0.3rem 0.3rem; */
}

.tcdl-bottom {
  background-image: url("../assets/User-info-bg_02.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 3.8rem;
}
.tcdl-bottom {
  display: flex;
  justify-content: center;
}
.tcdl-bottom div {
  margin-top: 0.8rem;
}
.tcdl-bottom div span {
  text-align: center;
  color: #fff;
  background-color: #cf3227ed;
  font-size: 0.24rem;

  padding: 0.1rem 0.8rem;
  border-radius: 1rem;
}
.tcdl-bottom div p {
  display: block;
  font-size: 0.12rem;
  text-align: center;
}
</style>