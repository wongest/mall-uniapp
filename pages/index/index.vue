<template>
  <view class="container">
    <view class="tabsSwiper">
      <li v-for="(item, index) in list" :key="index" :class="['tab-bar-item', {'tab-bar-item': index === current}]">{{item.name}}</li>
    </view>
    <view></view>
  </view>
  
</template>

<script>

export default {
  data() {
    return {
      list: [{
        name: '待收货'
      }, {
        name: '待付款'
      }, {
        name: '待评价',
      }],
      current: 0
    }
  },
  onLoad() {

  },
  mounted(){
 
  },
  created() {


  },

  methods: {
    tabsChange(index) {
      this.current = index
    }
  }
}
</script>

<style lang="scss" scoped>
.tabsSwiper {
  display: flex;
}
  
</style>
