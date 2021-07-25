<template>
  <div class="home"  v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
    <h2>Most Viewed Videos This Month</h2>
    <videoList :videoData="movieData" />
   <p style="font-size:26px;color:#ccc" v-if="movieData.length<1">暂无数据</p>
   
  </div>
</template>

<script>
// @ is an alias to /src
import videoList from '@/components/videoList.vue'
import {mapState } from "vuex";

export default {
  name: 'Home',
  components: {
    videoList
  },
  computed: {
    ...mapState(["menuItem",])  
  },
  data(){
    return{
      movieData:[],
      loading:true
    }
  },
  watch:{
    menuItem:function(){
      this.loading=true
      this.getVideoList()
    }
  },
  created(){
    this.getVideoList()
  },
  methods:{
     getVideoList(){
      this.$http.post('api/api/v1/movie/get_movie_list/',{cid:this.menuItem, page:1,limit:12}).then(res=>{
        console.log(res)
      if(res.data.code==1){
        this.movieData=res.data.data
      }
       this.loading=false
    })
    }
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
