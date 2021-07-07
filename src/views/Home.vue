
<template>
    <div class="imageUploaderPage">
     


    </div>
</template>
<script>
export default {
  data () {
    return {
     
    }
  },
  mounted () {
  },
 
}
</script>
<style lang="less">
  .imageUploaderPage{
    background: #f0f0f3;
    color: #a8a8a8;
    overflow: hidden;
    p{
        text-align: center;
        color: #a7a7a7;
        height: 4.07vw;
        line-height: 4.07vw;
        font-size: var(--mText);
        margin-bottom: var(--nText);
    }
    .imgList{


      position: relative;
      .imgCoverItem{
        position: relative;
        width: 80px;
        height: 60px;
        border-radius: 1.11vw;
        font-size: ;
        vertical-align: top;
        overflow: hidden;
        margin-left: 1.4vw;
        color: #fff;
        line-height: 50px;
        font-size: 18px;

      }
      .upLoadImageWrapper{
        position: relative;
        background: #e0e0e0;
        #upLoadImage{
          position: absolute;
          outline: none;
          z-index: 1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }
      }
    }
  }
</style>
