<template>
  <div class="warp">
    <div class="fabu-top">
      <div class="top1">
        <span></span>
        <span class="text">上传照片</span>
        <span class="iconfont icon-fabu"></span>
      </div>
    </div>

    <div class="main-inner">
      <input type="text" placeholder="说点什么..." />
      <img src="../assets/publish_03.png" alt />
      <img src="../assets/publish_05.png" alt />
      <span class="iconfont icon-xiangji"></span>
    </div>
    <div class="main-bottom">
      <span>
        <i class="iconfont icon-location"></i>&nbsp;点击获取位置
      </span>
      <span>
        <i class="iconfont icon-biaoqian"></i>&nbsp;添加标签
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "fabu"
};
</script>

<style>
.fabu-top {
  margin: 0 0.4rem;
  border-bottom: 1px solid #000;
}
.fabu-top .top1 {
  display: flex;
  justify-content: space-between;
}
.fabu-top .top1 span {
  color: #ed9f99;
  font-size: 0.34rem;
  line-height: 0.8rem;
  margin-top: 0.2rem;
}
.fabu-top .top1 .text {
  margin-left: 0.4rem;
}
.fabu-top .top1 .iconfont {
  color: red;
  font-size: 0.5rem;
}
.main-inner {
  margin: 0.4rem 0.4rem 0;
  border-bottom: 1px solid #000;
  padding-bottom: 0.2rem;
}
.main-inner input {
  display: block;
  border: 0;
  outline: none;
}
.main-inner img {
  width: 100%;
  display: block;
}
.main-inner span {
  display: block;
  color: red;
  font-size: 0.5rem;
  margin-top: 0.2rem;
}
.main-bottom {
  margin: 0 0.4rem;
  display: flex;
  line-height: 0.8rem;
}
.main-bottom span {
  display: block;
  font-size: 0.2rem;
  color: #ccc;
  margin-right: 1.8rem;
}
.main-bottom span i {
  color: red;
}
.main-bottom span:last-child {
  margin-right: 0;
}
</style>