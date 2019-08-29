<template>
  <div class="warp">
    <div class="recommend-top">
      <i class="iconfont icon-fangdajing"></i>
    </div>
    <section>
      <div class="main">
        <div class="tab">
          <ul class="box">
            <li
              :class="recommendActive===index?'box-active':'box1-active'"
              v-for="(recommend,index) in recommends"
              @click="recommendActive=index"
              :key="recommend.id"
            >{{recommend.title}}</li>
          </ul>
          <div
            v-for="(recommend,index) in recommends"
            v-show="recommendActive===index"
            :key="recommend.id"
            class="box2"
          >
            <img v-for="pic in recommend.pics" :key="pic.id" :src="pic.src" alt />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "recommend",
  data() {
    return {
      recommendActive: 0
    };
  },
  computed: {
    recommends() {
      return this.$store.state.recommends.reCommends;
    }
  }
};
</script>

<style>
.wrap {
  width: 100v;
  height: 100vh;
}
.recommend-top {
  width: 100vw;
  height: 1.3rem;
  background-image: url("../assets/u151.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.recommend-top i {
  display: block;
  font-size: 0.5rem;
  float: right;
  margin-top: 0.6rem;
  margin-right: 0.2rem;
}
section {
  margin-top: 1.3rem;
}
</style>