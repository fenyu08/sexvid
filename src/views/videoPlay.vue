<template>
    <div class="video-play">
       <div class="video-box">
       <div class="player-box">
        <video-player class="video-player vjs-custom-skin" style="width: 1140px;height: 640px;"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions">
        </video-player>
        <div class="tool-bar">
            <div class="col-bar">
                <p>Exclusive SexVid Offer - Join Brazzers - Only 1$</p>
            </div>
            <div class="rate-bar">
                <span>70%</span>
                <i>529731 Likes</i>
            </div>
            <div class="like">
              <i class="fa fa-thumbs-o-up"></i>
            </div>
            <div class="like">
                <i class="fa fa-thumbs-o-down"></i>
            </div>
        </div>
        <div class="video-info">
            <p>Added: <span>4 years ago</span> </p>
            <p>Duration: <span>6:14</span></p>
            <p>Viewed: <span>442741444</span></p>
        </div>
        <div class="video-tabs">
            <div><span>info</span></div>
            <div><span>comments</span></div>
            <div><span>share</span></div>
        </div>
        <div class="tabs-content">
            <div class="info" v-if="tagIndex==0">
                <div  style="padding-right: 72px;">
                <p class="title">A CURVY WOMAN IN LINGERIE GETS A DICK INSIDE HER WET PUSSY LIPS</p>
                <p style="margin: 0 0 10px;color: #a09ba8;">A woman with large tits spreads her pussy lips wide open and moves her hot lingerie upwards to make way free for a hard penetration. her young stud is getting hard from her work and he sticks his dick inside her tight cunt.</p>
                <p style="margin: 0 0 20px 0;"> Categories: <i>Anal</i> <i>Hardcore</i> <i>HD Videos</i> </p>
                <p style="margin: 0 0 20px 0;">Channel: <i>Anal Angels</i> </p>
                <p style="margin-bottom:0">Tags: <span>chick</span> <span>ravishing</span> <span>young</span><span>chick</span> <span>ravishing</span></p>
                </div>
                <div>
                    <img src="../assets/images/2.jpg" alt="">
                    <div class="info-btn">Anal Angels</div>
                </div>
            </div>
            <div class="comments">
                <p class="title">LEAVE YOUR COMMENT</p>
                <div class="inner-attention">
                    <input type="text" readonly='false'>
                </div>
            </div>
        </div>
       </div>
       <div class="video-right">
            <img src="../assets//images//996283_video.gif" alt="" srcset="">
            <img src="../assets//images//996283_video.gif" alt="" srcset="">
            
       </div>
       </div>
    </div>
</template>
<script>
export default {
    name:'videoPlay',
    data() {
        return {
           tagIndex:1, 
            playerOptions: {
                    //播放速度
                    playbackRates: [0.5, 1.0, 1.5, 2.0], 
                    //如果true,浏览器准备好时开始回放。
                    autoplay: false, 
                    // 默认情况下将会消除任何音频。
                    muted: false, 
                    // 导致视频一结束就重新开始。
                    loop: false, 
                    // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    preload: 'auto', 
                    language: 'zh-CN',
                     // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    aspectRatio: '16:9',
                     // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    fluid: true,
                    sources: [{
                        //类型
                        type: "video/mp4",
                        //url地址
                        src: 'https://www.sexvid.xxx/get_file/8/8e2fc646acbc001460da507562ac3867dd666a39ec/19000/19604/19604_480p.mp4/?br=844&rnd=1625834750384' 
                    }],
                    //你的封面地址
                    poster: '', 
                     //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    notSupportedMessage: '此视频暂无法播放，请稍后再试',
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        //全屏按钮
                        fullscreenToggle: true  
                    }
                }
        }
    },

}
</script>
<style lang="less">
    .video-play{
        .video-box{
            display: flex;
            padding-bottom: 36px;
            .video-right{
                img{margin-top: 10px;cursor: pointer;}
            }
            .player-box{
                .tool-bar{
                    display: flex;
                    
                    >div{
                        height: 52px;
                        line-height: 52px;
                    }
                    .col-bar{
                        width: 65%;
                        background: #ffd001;
                        color: #000;
                        font-size: 16px;
                        
                        text-transform: uppercase;
                        p{font-weight: bold;}
                    }
                    .rate-bar{
                        width: 20%;
                        span{
                            font-size: 24px;line-height: 52px;color: #e840cc;margin-right: 16px;
                        }
                        i{
                            font-size: 16px;
                            line-height: 52px;
                            color: #4f465e;
                        }
                    }
                    .like{
                        width: 7.5%;
                        background: #291e3b;
                        margin-right: 1px;
                        cursor: pointer;
                        i{
                            color: #6a6276;
                            font-size: 20px;    
                        }
                        &:hover{
                            background: #e840cc;
                            i{color: #fff;}
                        }
                    }
                }
                .video-info{
                    display: flex;
                    font-size: 16px;
                    padding: 20px 26px;
                    p{
                        color: #a8a4af;
                        span{
                            color: #fff;
                        }
                        margin-right: 22px;
                    }
                }
                .video-tabs{
                    display: flex;
                    >div{
                        height: 52px;
                        padding: 0 26px;
                        background: rgba(255, 255, 255, .25);
                        line-height: 52px;
                        color: #948f9d;
                        font-size: 16px;
                        text-transform: uppercase;
                        border-right: 1px solid #110525;
                        border-bottom: 1px solid #110525;
                        cursor: pointer;
                    }
                }
                .tabs-content{
                    padding: 26px;
                    background: rgb(41, 30, 59);
                    text-align: left;
                    color: #fff;
                    font-size: 16px;
                    .title{
                            font-size: 20px;
                            text-transform: uppercase;
                            margin-bottom: 17px;
                            line-height: 22px;
                        }
                    .info{
                        display: flex;
                        align-items: center;
                        img{width: 250px;display: block;}
                        
                        .info-btn{
                            cursor: pointer;
                            width: 250px;
                            height: 52px;
                            font-size: 16px;
                            color: #fff;
                            line-height: 52px;
                           background: #7229cd;
                           &:hover{
                               background: #9d58f3;
                           }
                        }
                        p{margin: 10px 0;
                        i{
                            border: 1px solid #5e566b;
                            border-radius: 4px;
                            color: #a09ba8;
                            padding: 6px 8px;
                            margin: 0 0 5px;
                            cursor: pointer;
                        }
                        span{
                            color: #9440ff;
                            margin: 0 4px;
                            &:hover{
                                text-decoration: underline;
                                cursor: pointer;
                            }
                        }
                        }
                    }
                }
                .comments{
                    .inner-attention{
                        color: #9f9ba8;
                        float: none;
                        overflow: hidden;
                        width: 100%;
                        font-size: 16px;
                        line-height: 22px;
                        height: 120px;
                        padding: 20px;
                        background: #494058;
                        background: rgba(255, 255, 255, .1);
                        font-weight: 300;
                        font-size: 16px;
                        line-height: 18px;
                        box-sizing: border-box;
                    }
                }
            }
    }
    }
</style>