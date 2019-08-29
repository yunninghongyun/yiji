<template>
  <div class="wrap">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/yindaoye1.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/yindaoye2.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/yindaoye3.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/yindaoye4.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/yindaoye5.jpg" alt />
          <div class="text">
            <span class="date">- 2016 / 09 /09 -</span>
            <router-link class="jinri" :to="`${$publicUrl}/denglu`">今日推送 >></router-link>
          </div>
        </div>
        <div class="swiper-slide dl">
          <Denglu />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import Denglu from "./Denglu";
export default {
  name: "yindaoye",
  components: {
    Denglu
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: false // 循环模式选项
    });
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
/* .swiper-container {
  width: 100vw;
  height: 100vh;
}
.swiper-slide {
  width: 100vw;
  height: 100vh;
} */
.swiper-slide > img {
  width: 100%;
  display: block;
}
.swiper-slide {
  position: relative;
}
.swiper-slide > .text {
  position: absolute;
  left: 50%;
  bottom: 15%;
  margin-left: -1.6rem;
  box-sizing: border-box;
}
.swiper-slide > .text > span {
  display: block;
  font-size: 0.3rem;
  margin-left: 0.2rem;
}
.swiper-slide > .text > .date {
  margin-bottom: 0.4rem;
}
.swiper-slide > .text > .jinri {
  display: block;
  padding-top: 0.2rem;
  margin-left: 0.6rem;
  font-size: 0.3rem;
  text-decoration: none;
  color: #000;
}
</style>