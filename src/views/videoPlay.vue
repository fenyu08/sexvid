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
            <div @click="tagIndex=0" :class="{active:tagIndex==0}"><span>info</span></div>
            <div @click="tagIndex=1" :class="{active:tagIndex==1}"><span>comments</span></div>
            <div @click="tagIndex=2" :class="{active:tagIndex==2}"><span>share</span></div>
            <div class="right-tab" style="margin-left:auto;background: #ff3477;">
                <span> <i class="fa fa-heart-o"></i> Favorite</span>
            </div>
            <div class="right-tab" style="background: #34baff;">
                <span> <i class="fa fa-clock-o"></i> Watch Later</span>
            </div>
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
            <div class="comments" v-if="tagIndex==1">
                <p class="title">LEAVE YOUR COMMENT</p>
                <div class="inner-attention">
                    <p>You need to <span style="font-weight: 700;color: #9440ff;cursor: pointer;" >Login</span> or <span style="font-weight: 700;color: #9440ff;cursor: pointer;" > Register </span>  to post comments</p>
                    <!-- <input type="text" readonly='false'> -->
                </div>
                <div class="block-comments">
                    <img src="../assets/images/not_avatar_com.jpg" alt="" srcset="">
                    <div class="post-wrapper">
                        <div style="display: flex;">
                            <span class="comments-name">Vaasu.</span>
                            <i>4 weeks ago</i>
                        </div>
                        <p style="margin-top:10px">So sexy babe man!!!!!!</p>
                        
                    </div>
                </div>
            </div>
            <div class="share" v-if="tagIndex==2">
                <ul>
                    <li style="background: rgb(85, 172, 238);">
                        <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M28 8.557a9.913 9.913 0 0 1-2.828.775 4.93 4.93 0 0 0 2.166-2.725 9.738 9.738 0 0 1-3.13 1.194 4.92 4.92 0 0 0-3.593-1.55 4.924 4.924 0 0 0-4.794 6.049c-4.09-.21-7.72-2.17-10.15-5.15a4.942 4.942 0 0 0-.665 2.477c0 1.71.87 3.214 2.19 4.1a4.968 4.968 0 0 1-2.23-.616v.06c0 2.39 1.7 4.38 3.952 4.83-.414.115-.85.174-1.297.174-.318 0-.626-.03-.928-.086a4.935 4.935 0 0 0 4.6 3.42 9.893 9.893 0 0 1-6.114 2.107c-.398 0-.79-.023-1.175-.068a13.953 13.953 0 0 0 7.55 2.213c9.056 0 14.01-7.507 14.01-14.013 0-.213-.005-.426-.015-.637.96-.695 1.795-1.56 2.455-2.55z"></path></svg>
                    </li>
                     <li style="background: rgb(44, 165, 224);">
                       <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M25.515 6.896L6.027 14.41c-1.33.534-1.322 1.276-.243 1.606l5 1.56 1.72 5.66c.226.625.115.873.77.873.506 0 .73-.235 1.012-.51l2.43-2.363 5.056 3.734c.93.514 1.602.25 1.834-.863l3.32-15.638c.338-1.363-.52-1.98-1.41-1.577z"></path></svg>
                    </li>
                     <li style="background: rgb(124, 82, 158);">
                        <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M22.57 27.22a7.39 7.39 0 0 1-1.14-.32 29 29 0 0 1-16-16.12c-1-2.55 0-4.7 2.66-5.58a2 2 0 0 1 1.39 0c1.12.41 3.94 4.3 4 5.46a2 2 0 0 1-1.16 1.78 2 2 0 0 0-.66 2.84A10.3 10.3 0 0 0 17 20.55a1.67 1.67 0 0 0 2.35-.55c1.07-1.62 2.38-1.54 3.82-.54.72.51 1.45 1 2.14 1.55.93.75 2.1 1.37 1.55 2.94a5.21 5.21 0 0 1-4.29 3.27zM17.06 4.79A10.42 10.42 0 0 1 26.79 15c0 .51.18 1.27-.58 1.25s-.54-.78-.6-1.29c-.7-5.52-3.23-8.13-8.71-9-.45-.07-1.15 0-1.11-.57.05-.87.87-.54 1.27-.6z" fill="#fff" fill-rule="evenodd"></path><path d="M24.09 14.06c-.05.38.17 1-.45 1.13-.83.13-.67-.64-.75-1.13-.56-3.36-1.74-4.59-5.12-5.35-.5-.11-1.27 0-1.15-.8s.82-.48 1.35-.42a6.9 6.9 0 0 1 6.12 6.57z" fill="#fff" fill-rule="evenodd"></path><path d="M21.52 13.45c0 .43 0 .87-.53.93s-.6-.26-.64-.64a2.47 2.47 0 0 0-2.26-2.43c-.42-.07-.82-.2-.63-.76.13-.38.47-.41.83-.42a3.66 3.66 0 0 1 3.23 3.32z" fill="#fff" fill-rule="evenodd"></path></svg>
                    </li>
                     <li style="background: rgb(255, 69, 0);">
                        <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28.543 15.774a2.953 2.953 0 0 0-2.951-2.949 2.882 2.882 0 0 0-1.9.713 14.075 14.075 0 0 0-6.85-2.044l1.38-4.349 3.768.884a2.452 2.452 0 1 0 .24-1.176l-4.274-1a.6.6 0 0 0-.709.4l-1.659 5.224a14.314 14.314 0 0 0-7.316 2.029 2.908 2.908 0 0 0-1.872-.681 2.942 2.942 0 0 0-1.618 5.4 5.109 5.109 0 0 0-.062.765c0 4.158 5.037 7.541 11.229 7.541s11.22-3.383 11.22-7.541a5.2 5.2 0 0 0-.053-.706 2.963 2.963 0 0 0 1.427-2.51zm-18.008 1.88a1.753 1.753 0 0 1 1.73-1.74 1.73 1.73 0 0 1 1.709 1.74 1.709 1.709 0 0 1-1.709 1.711 1.733 1.733 0 0 1-1.73-1.711zm9.565 4.968a5.573 5.573 0 0 1-4.081 1.272h-.032a5.576 5.576 0 0 1-4.087-1.272.6.6 0 0 1 .844-.854 4.5 4.5 0 0 0 3.238.927h.032a4.5 4.5 0 0 0 3.237-.927.6.6 0 1 1 .844.854zm-.331-3.256a1.726 1.726 0 1 1 1.709-1.712 1.717 1.717 0 0 1-1.712 1.712z" fill="#fff"></path></svg>
                    </li>
                     <li style="background: rgb(53, 70, 92);">
                       <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M20.775 21.962c-.37.177-1.08.33-1.61.345-1.598.043-1.907-1.122-1.92-1.968v-6.217h4.007V11.1H17.26V6.02h-2.925s-.132.044-.144.15c-.17 1.556-.895 4.287-3.923 5.378v2.578h2.02v6.522c0 2.232 1.647 5.404 5.994 5.33 1.467-.025 3.096-.64 3.456-1.17l-.96-2.846z"></path></svg>
                    </li>
                </ul>
            </div>
        </div>
       </div>
       <div class="video-right">
            <img src="../assets//images//996283_video.gif" alt="" srcset="">
            <img src="../assets//images//996283_video.gif" alt="" srcset="">
            
       </div>
       </div>
       <div class="recommend-box">
           <div class="title">
            <span :class="{active:tagIndex2==0}" @click="tagIndex2=0">Related Videos</span>
            <span :class="{active:tagIndex2==1}" @click="tagIndex2=1">21 Naturals</span>
           </div>
           <videoList :videoData="10" />
           <div class="custom-pagination">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
                </el-pagination>
           </div>
       </div>
    </div>
</template>
<script>
import videoList from '@/components/videoList.vue'
export default {
    name:'videoPlay',
    data() {
        return {
           tagIndex:0,
           tagIndex2:0,
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
components: {
    videoList
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
                        i{color: #fff;font-size: 18px;}
                    }
                   .right-tab{
                       color: #fff;
                       span{
                           font-weight: bold;
                       }
                       &:hover{opacity: 0.8;}
                   }
                   .active{
                        background: rgb(41, 30, 59);
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
                        border-radius: 4px;
                    }
                    .block-comments{
                        margin: 14px 0;
                        display: flex;
                        img{width: 60px;height: 60px;border-radius: 50%;}
                        .post-wrapper{
                            padding: 12px;
                            background: #3f354f;
                            width: 100%;
                            margin-left: 20px;
                            border-radius: 8px;
                            position: relative;
                            &:after{
                                content: "";
                                width: 0;
                                height: 0;
                                border-style: solid;
                                border-width: 8px 10px 8px 0;
                                border-color: transparent #3f354f transparent transparent;
                                position: absolute;
                                right: 100%;
                                top: 16px;
                            }
                            span{
                                margin: 0 2px 0 0;
                                display: inline-block;
                                color: #a89aff;
                            }
                            i{
                                color: #8e8898;
                                margin-left: auto;
                            }

                        }
                    }
                    
                }
                .share{
                        ul{display: flex;
                        li{
                        width: 50px;
                        height: 50px;
                        border-radius: 6px;
                        
                        cursor: pointer;
                        margin-right: 4px;
                        &:hover{
                            opacity: .7;
                        }
                        }
                        }
                    }
            }
    }
    .recommend-box{
        background: #201433;
        padding: 25px 0;
        .title{
            color: #635b71;
            font-size: 24px;
            text-transform: uppercase;
            text-align: left;
            margin-bottom: 2px;
            span{
                display: inline-block;
                padding: 0 24px 30px 24px;
                cursor: pointer;
            }
            .active{
                color: #fff;
                border-bottom: 4px solid #fff;
            }
        }
    }
    }
</style>