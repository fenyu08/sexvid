<template>
    <div class="video-list">
        <ul>
            <li v-for="index in videoData" :key="index" @click="toPlay">
                <img src="../assets/images/10.jpg" alt="" srcset="" style="width:100%">
                <div class="video-info">
                    <p>A curvy woman in lingerie gets a dick inside her wet pussy lips</p>
                    <div class="tools-holder">
                        <span style="color:#fff">7 years ago</span>
                        <span style="color:#a89aff;margin-left: auto;"> <i class="el-icon-view"></i> 322.5M</span>
                        <span style="color:#ff99fb;margin-left: 16px;"><i class="el-icon-time"></i> 8:10</span>
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
    videoData: Number
  },
  methods:{
      toPlay(){
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