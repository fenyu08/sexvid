<template>
  <div class="home">
    <h2>Most Viewed Videos This Month</h2>
    <videoList />
    <h2>TODAY'S FEATURED XXX MOVIES</h2>
    <videoList />
  </div>
</template>

<script>
// @ is an alias to /src
import videoList from '@/components/videoList.vue'

export default {
  name: 'Home',
  components: {
    videoList
  }
}
</script>
<style lang="less">
  .home{
    h2{
    font-size: 24px;
   font-weight: 400;
   text-transform: uppercase;
   color: #fff;
   margin: 25px 0;
   text-align: left;
    }
  }
</style>
