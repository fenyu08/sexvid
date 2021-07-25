<template>
    <div class="video-list">
        <ul>
            <li v-for="(item,index) in videoData" :key="index" @click="toPlay(item)">
                <img :src="item.cover" alt="" srcset="" style="width:100%">
                <div class="video-info">
                    <p>{{item.title}}</p>
                    <div class="tools-holder">
                        <span style="color:#fff">{{item.shelftime|formatDate2}}</span>
                        <span style="color:#a89aff;margin-left: auto;"> <i class="el-icon-view"></i> {{item.reads}}</span>
                        <span style="color:#ff99fb;margin-left: 16px;"><i class="el-icon-time"></i> {{item.play_time|toHourMinute}}</span>
                    </div>
                </div>
                <div class="play-btn">
                    <i class="el-icon-video-play"></i>
                </div>
            </li>
        
        </ul>
    </div>
</template>
<script>
export default {
    name:'videoList',
    data(){
        return{
            // videoData:10
        }
    },
    props: {
    videoData: Array
  },
  filters:{
     
  },
  methods:{
      toPlay(i){
          localStorage.setItem('movieInfo',JSON.stringify(i));
          this.$router.push('/videoPlay')
      }
  }
}
</script>
<style lang="less">
    .video-list{
        ul{
            display:flex;
            flex-wrap: wrap;
           li{
                width: 20%;
                border-right: 1px solid transparent;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
               .video-info{
                    padding: 15px 18px;
                    background: #291e3b;
                      p{
                    font-size: 15px;
                    font-weight: 300;
                    display: block;
                    overflow: hidden;
                    max-height: 36px;
                    color: #b2a2cb;
                    min-height: 36px;
                    text-align: left;
                    
                   
                }
                .tools-holder{
                    display: flex;
                    font-size: 14px;
                    margin-top: 8px;
                    i{font-size: 16px;}
                }
                
                }
                .play-btn{
                    position: absolute;
                    top: 60px;
                    left: 120px;
                    i{color: rgb(168, 154, 255);font-size: 52px;}
                    opacity: 0;
                    transition: all .5s;
                }
                &:hover{
                    .play-btn{
                        opacity: 1;
                    }
                }
           }
            
        }
    }
</style>