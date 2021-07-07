
<template>
  <div id="app">
    <video ref="video" id="video" width="320" height="240"  controls></video>
    <div>
      <button id="capture" @click="capture">拍照</button>
    </div>
    <canvas id="canvas" width="480" height="320"></canvas>
    <div ref="text1" style="color:#000">{{text1}}</div>
  </div>
</template>

<script>
 
export default {
  name: 'app',
  data() {
    return {
      video: {},
      localstream: undefined,
      text1:''
    }
  },
  mounted() {
var video = document.getElementById("video")
  navigator.getUserMedia({
       video: true
   },function(stream){
      
       this.text1=stream
       video.src = CompatibleURL.createObjectURL(stream);
    
    video.play();
   },function(err){
    //    alert(err+'11')
   })
  },
  methods: {
      capture(){var video = document.getElementById("video")
video.play();},
    camera (face) {
      this.stop();
      this.gum(face);
    },
    stop () {
      return this.video.srcObject && this.video.srcObject.getTracks().map(t => t.stop());
    },
    gum (face) {
      const fa = face === 'user' ? { facingMode: 'user' } : { facingMode: { exact: 'environment' } };
      return navigator.mediaDevices.getUserMedia({ audio: false, video: true })
        .then(stream => {
          console.log(stream)
 
          let video = document.getElementById("video"),
            canvas = document.getElementById("canvas"),
            context = canvas.getContext("2d"),
            vHeight = video.offsetHeight,
            vWidth = video.offsetWidth;
            canvas.width = vWidth; // 改变画布的宽高
            canvas.height = vHeight;
            context.drawImage(video, 0, 0, vWidth, vHeight);
            // 获取图片src  base64格式
            photoSrc = document.getElementById("canvas").toDataURL("image/jpeg", 0.8);
            console.log(photoSrc)
            this.$refs.video.srcObject = stream;
            this.$refs.video.play();
            }).catch(() => {
              navigator.mediaDevices.getUserMedia({ audio: false, video: true })
                .then(stream => {
                  this.$refs.video.srcObject = stream;
                  this.$refs.video.play();
                });
            });
    }
  }
}
</script>