<template>
  <div class="warp">
    <div class="denglu">
      <div class="top">
        <input type="text" class="email" placeholder="点击输入手机号/Email登录" />
        <input type="password" class="mima" placeholder="输入密码" />
      </div>
      <div class="dl">
        <router-link :to="`${$publicUrl}/home/zhanxun`">登录</router-link>
        <span>注册</span>
      </div>
      <div class="bottom">
        <div class="dui">√</div>
        <span>
          登录或注册即同意艺集
          <i>用户服务协议</i>
        </span>
      </div>
      <div class="pic">
        <div>
          <img src="../assets/user-login_09.png" alt />
          <span>微博</span>
        </div>
        <div>
          <img src="../assets/user-login_06.png" alt />
          <span>微信</span>
        </div>
        <div>
          <img src="../assets/user-login_03.png" alt />
          <span>QQ</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "denglu"
};
</script>

<style>
.warp {
  width: 100vw;
  height: 100vh;
}
/* /* .swiper-container .swiper-slide .dl {
  width: 100vw;
  height: 100vh;
} *小新写的不能删/ */
.denglu {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/u13.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}
.denglu .top {
  width: 80%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 32%;
  left: 10%;
}
.denglu .top input {
  text-align: center;
  border: 0;
  border-bottom: 1px solid #333333;
  outline: none;
  margin-bottom: 0.2rem;
  padding: 0.2rem 0;
  line-height: 0.4rem;
  background-color: transparent;
}
.denglu .dl {
  width: 80%;
  position: absolute;
  top: 48%;
  left: 10%;
  display: flex;
  justify-content: space-around;
  margin-top: 0.8rem;
}
.denglu .dl > span {
  font-size: 0.4rem;
  color: #333333;
}
.denglu .dl a {
  font-size: 0.4rem;
  color: #333333;
  text-decoration: none;
}
.denglu .bottom {
  width: 100%;
  position: absolute;
  bottom: 17%;
  display: flex;
  justify-content: center;
}
.denglu .bottom > .dui {
  width: 0.3rem;
  background-color: #fff;
  border-radius: 50%;
  font-size: 0.24rem;
  text-align: center;
  margin-right: 0.2rem;
}
.denglu .bottom > span {
  color: #333333;
  font-size: 0.24rem;
  text-align: center;
}
.denglu .bottom > span i {
  color: #fff;
}
.denglu .pic {
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #fff;
  padding: 0.4rem 0;
}
.denglu .pic > div img {
  width: 0.6rem;
  height: 0.6rem;
  margin-right: 0.2rem;
  margin-top: 0.2rem;
  display: block;
}
.denglu .pic > div span {
  display: block;
  line-height: 0.9rem;
}
.denglu .pic > div {
  font-size: 0.4rem;
  line-height: 0.2rem;
  border-right: 1px solid #fff;
  padding-right: 0.4rem;
  display: flex;
  justify-content: left;
}
.denglu .pic > div:last-child {
  border: 0;
}
</style>