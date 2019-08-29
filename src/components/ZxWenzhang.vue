<template>
  <div class="warp">
    <div class="top">
      <i></i>
      <img src alt />
    </div>
    <div>
      <span>展现内容</span>
      <p v-for="comment in comments" :key="comment.id">{{comment.title}}</p>
    </div>
    <div>
      <img src alt />
      <p>{{comments.text}}</p>
      <img src alt />
      <img src alt />
      <img src alt />
    </div>
    <footer>
      <div class="footer-main">
        <span>展示评论</span>
      </div>
      <div class="footer-bottom">
        <div>
          <i></i>
          <span>关注</span>
        </div>
        <div>
          <i></i>
          <span>到这</span>
        </div>
        <div>
          <i></i>
          <span>分享</span>
        </div>
        <div>
          <i></i>
          <span>评论</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "zxwenzhang",
  created() {
    console.log(this.$store.state.zxWenzhang);
  },
  computed: {
    comments() {
      return this.$store.state.zxWenzhang.comments;
    }
  }
};
</script>

<style>
</style>