<template>
  <div class="warp">
    <router-view></router-view>
    <footer>
      <div class="home-bottom">
        <router-link active-class="nav-active" exact :to="`${$publicUrl}/home/zhanxun`">
          <i class="iconfont icon-aiyinle"></i>
          <span>展讯</span>
        </router-link>
        <router-link active-class="nav-active" :to="`${$publicUrl}/home/recommend`">
          <i class="iconfont icon-changjingguanli"></i>
          <span>推荐</span>
        </router-link>
        <router-link active-class="nav-active" :to="`${$publicUrl}/home/fabu`">
          <i class="iconfont icon-fabu"></i>
          <span>发布</span>
        </router-link>
        <router-link active-class="nav-active" :to="`${$publicUrl}/home/geren`">
          <i class="iconfont icon-personal"></i>
          <span>个人</span>
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style>
.warp {
  width: 100vw;
  height: 100vh;
}
.home-bottom {
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #000;
  position: fixed;
  bottom: 0;
  padding: 0.1rem 0;
}
.home-bottom a {
  color: #fff;
  text-decoration: none;
}
.home-bottom i {
  display: block;
  font-size: 0.5rem;
  margin-bottom: 0.1rem;
}
.home-bottom span {
  display: block;
  font-size: 0.2rem;
  text-align: center;
}
.nav-active {
  color: red;
}
.nav-active i {
  color: red;
}
.nav-active span {
  color: red;
}
</style>