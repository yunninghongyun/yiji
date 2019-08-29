<template>
  <div class="warp">
    <div class="geren-top">
      <div class="shezhi">
        <span></span>
        <router-link :to="`${$publicUrl}/tcdl`">
          <span class="iconfont icon-config--shixin"></span>
        </router-link>
      </div>
      <div class="touxiang">
        <router-link :to="`${$publicUrl}/touxiang`">
          <img src="../assets/geren1.png" alt />
        </router-link>
      </div>
      <div class="rain">
        <span>阴雨天</span>
      </div>
      <div class="guanzhu">
        <div>
          <span>关注</span>
          <span>11</span>
        </div>
        <div>
          <span>发布</span>
          <span>9</span>
        </div>
        <div>
          <span>访客</span>
          <span>49</span>
        </div>
      </div>
    </div>
    <div class="geren-main">
      <div class="geren-main-top">
        <span class="yx">亿像云集</span>
        <span class="all">ALL&nbsp; &nbsp;></span>
      </div>
      <div class="geren-main-banner">
        <div>
          <img src="../assets/geren-banner01.png" alt />
          <span>订阅/11</span>
        </div>
        <div>
          <img src="../assets/geren-banner02.png" alt />
          <span>订阅/9</span>
        </div>
        <div>
          <img src="../assets/geren-banner03.png" alt />
          <span>订阅/49</span>
        </div>
      </div>
      <div class="geren-main-min">
        <div class="geren-main-min">
          <div class="tab">
            <ul class="box">
              <li
                :class="tapActive===index?'box-active':'box1-active'"
                v-for="(user,index) in users"
                @click="tapActive=index"
                :key="user.id"
              >{{user.text}}</li>
            </ul>
            <div
              v-for="(user,index) in users"
              v-show="tapActive===index"
              :key="user.id"
              class="box2"
            >
              <img v-for="pic in user.pics" :key="pic.id" :src="pic.src" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "geren",
  data() {
    return {
      tapActive: 0
    };
  },
  created() {
    console.log(this.$store.state.users.userPics);
  },
  computed: {
    users() {
      return this.$store.state.users.userPics;
    }
  }
};
</script>

<style>
.geren-top {
  height: 5rem;
  background-image: url("../assets/grren-beijing.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0 0.2rem 0.5rem;
}
.geren-top .shezhi {
  display: flex;
  justify-content: space-between;
  padding: 0.4rem;
}
.geren-top .shezhi span {
  display: block;
  color: #fff;
  font-size: 0.4rem;
}
.geren-top a {
  text-decoration: none;
}
.geren-top .touxiang {
  display: flex;
  justify-content: center;
  margin-top: 0.1rem;
}
.geren-top .touxiang img {
  display: block;
  width: 1.6rem;
  height: 1.6rem;
}
.geren-top .rain {
  margin-top: 0.3rem;
  display: flex;
  justify-content: center;
}
.geren-top .rain span {
  font-size: 0.4rem;
  color: #fff;
  font-weight: lighter;
}
.geren-top .guanzhu {
  display: flex;
  justify-content: center;
  margin-top: 0.4rem;
}
.geren-top .guanzhu > div > span {
  display: block;
  font-size: 0.2rem;
  color: #fff;
  text-align: center;
  margin-right: 0.4rem;
  margin-left: 0.2rem;
  margin-top: 0.1rem;
}
.geren-main .geren-main-top {
  display: flex;
  justify-content: space-between;
  margin: 0.25rem 0;
}
.geren-main .geren-main-top .yx {
  font-size: 0.3rem;
  margin-left: 0.3rem;
}
.geren-main .geren-main-top .all {
  background-color: #dd4f43;
  color: #fff;
  font-size: 0.12rem;
  border-radius: 1rem 0 0 1rem;
  line-height: 0.5rem;
  padding: 0 0.4rem;
  text-align: center;
}
.geren-main .geren-main-banner {
  display: flex;
  justify-content: space-between;
  padding: 0 0.1rem;
}
.geren-main .geren-main-banner > div img {
  display: block;
  width: 100%;
  padding-right: 0.1rem;
}
.geren-main .geren-main-banner > div span {
  display: block;
  font-size: 0.2rem;
}
.geren-main-min {
  width: 100%;
  margin-top: 0.2rem;
}
.geren-main-min .tab .box2 {
  margin-top: 0.1rem;
  display: flex;
  width: 100%;
}
.geren-main-min .tab .box2 > img {
  width: 50%;
  height: 50%;
  display: block;
}
</style>