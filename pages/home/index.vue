<template>
  <view class="content">
    <button @click="log()">{{ count }}</button>
    <waterfallsFlow :list="recommendList" @wapper-lick="wapperClick()">
      <view v-for="(item, index) of recommendList" :key="index" slot="slot{{index}}">
        <view class="cnt">
          <view class="title">{{ item.name }}</view>
          <view class="text">{{ item.desc }}</view>
        </view>
      </view>
    </waterfallsFlow>
  </view>
</template>

<script>
import waterfallsFlow from "@/components/maramlee-waterfalls-flow/maramlee-waterfalls-flow.vue";
import { mapState } from "vuex";
export default {
  components: { waterfallsFlow },
  computed: {
    ...mapState({
      count: (state) => state.home.count,
      recommendList: (state) => state.home.recommendList,
      page: (state) => state.home.page,
    }),
  },
  data() {
    return {};
  },
  created() {
    this.getRecommend();
  },

  onReachBottom() {
    const { currentPage, pageCount } = this.page;
    if (currentPage < pageCount) {
      this.getRecommend({ pageNum: currentPage + 1 });
    }
  },
  methods: {
    log() {
      this.$store.dispatch("home/setCount", { count: 6 });
    },
    getRecommend(param = {}) {
      this.$store.dispatch("home/getRecommend", param);
    },
    wapperClick(item) {
      console.log(item, "============");
    },
  },
};
</script>

<style>
page {
  background-color: #eee;
}
</style>
<style lang="scss" scoped>
.content {
  padding: 10px;
  .cnt {
    padding: 10px;
    .title {
      font-size: 16px;
    }
    .text {
      font-size: 14px;
      margin-top: 5px;
    }
  }
}
</style>
