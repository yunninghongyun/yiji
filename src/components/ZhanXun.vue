<template>
  <div class="wrap">
    <div class="warp-inner">
      <div class="zhanxun-top">
        <i @click="change" class="iconfont icon-fangdajing"></i>
      </div>
      <div class="swiper-container banner1">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../assets/u62.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="../assets/u65.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="../assets/u68.jpg" alt />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="banner">
        <div class="swiper-container banner2">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../assets/u97_03.jpg" alt />
            </div>
            <div class="swiper-slide">
              <img src="../assets/u98_03.jpg" alt />
            </div>
            <div class="swiper-slide">
              <img src="../assets/u99_03.jpg" alt />
            </div>
            <div class="swiper-slide">
              <img src="../assets/u100_03.jpg" alt />
            </div>
            <div class="swiper-slide">
              <img src="../assets/u101_03.jpg" alt />
            </div>
            <div class="swiper-slide">
              <img src="../assets/u102_03.jpg" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="tab">
          <ul class="box">
            <li
              :class="tapActive===index?'box-active':'box1-active'"
              v-for="(topic,index) in topics"
              @click="tapActive=index"
              :key="topic.id"
            >{{topic.text}}</li>
          </ul>
          <div
            v-for="(topic,index) in topics"
            v-show="tapActive===index"
            :key="topic.id"
            class="box2"
          >
            <router-link to="/zxWenzhang">
              <img v-for="pic in topic.pics" :key="pic.id" :src="pic.src" alt />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div :style="{left:showFang? 0:'100%'}" class="sousuo">
      <div class="sousuo-top">
        <i class="iconfont icon-fangdajing"></i>
        <input type="text" />
        <span @click="change">X</span>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "zhanxun",
  data() {
    return {
      tapActive: 0,
      showFang: false
    };
  },
  methods: {
    change() {
      console.log("qqqq");
      this.showFang = !this.showFang;
      console.log(this.showFang);
    }
  },
  computed: {
    topics() {
      return this.$store.state.pics.topics;
    }
  },
  mounted() {
    new Swiper(".banner1", {
      loop: true, // 循环模式选项
      autoplay: { delay: 3000 },
      pagination: {
        el: ".swiper-pagination"
      }
    });
    new Swiper(".banner2", {
      loop: true,
      slidesPerView: 2.5,
      spaceBetween: 2
    });
  }
};
</script>

<style>
.wrap {
  width: 100v;
  height: 100vh;
}
.wrap-inner {
  width: 100vw;
  height: 100vh;
}
.zhanxun-top {
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
.zhanxun-top i {
  display: block;
  font-size: 0.5rem;
  float: right;
  margin-top: 0.6rem;
  margin-right: 0.2rem;
}
.wrap .swiper-pagination-bullet-active {
  opacity: 1;
  background: red;
}
.swiper-pagination-bullet {
  bottom: 1px;
  width: 6px;
  height: 6px;
  background-color: #fff;
  opacity: 1;
}
.swiper-container-horizontal > .swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: -5px;
}
.banner1 {
  margin-top: 1.3rem;
  margin-bottom: 0.2rem;
}
.banner {
  margin-bottom: 0.2rem;
}
.box {
  display: flex;
  background-color: #ccc;
  margin: 0;
  padding: 0;
}

.box > li {
  width: 50%;
  padding: 0.18rem;
  font-size: 0.3rem;
  list-style-type: none;
}
.box > li:first-child {
  text-align: right;
  padding-right: 0.3rem;
  border-radius: 0 1rem 1rem 0;
}
.box > li:last-child {
  border-radius: 1rem 0 0 1rem;
}
.box2 img {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
.tab {
  padding-bottom: 1.57rem;
}
.box-active {
  background: linear-gradient(to right, #cf8c86, #d52518);
  color: white;
  transform: all 2s;
}
.box1-active {
  color: black;
}
.sousuo {
  width: 100vw;
  height: 100%;
  background-image: url("../assets/search_one.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 100%;
  z-index: 100000;
  transition: 0.5s;
}

.sousuo .sousuo-top {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #000;
  margin: 0.6rem 0.4rem 0;
  padding-bottom: 0.2rem;
}
.sousuo .sousuo-top i {
  font-size: 0.4rem;
}
.sousuo .sousuo-top input {
  display: block;
  height: 0.4rem;
  width: 4rem;
}
.sousuo .sousuo-top span {
  font-size: 0.4rem;
  display: block;
}
</style>