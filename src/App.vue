<template>
  <div id="app">
    
  <div class="header">
   <div class="header-list">
      <ul>
      <li><span>PornID</span></li>
      <li><span>ZBporn</span></li>
      <li><span>HDTube.Porn</span></li>
    </ul>
    <ul class="right">
      <li class="language">
        <span>English</span>
      </li>
      <li @click="showForm=true,isLogin=true"><span>Log in</span></li>
      <li @click="showForm=true,isLogin=false"><span>Sign up</span> </li>
    </ul>
   </div>
   <div class="nav">
     <img src="./assets/images/logo.svg" alt="" srcset="" style="width:220px">
     <ul>
       <li @click="$router.push('/')"><span>Home</span></li>
       <li><span>Videos</span></li>
       <li><span>Photos</span></li>
       <li><span>Categories</span></li>       
       <li><span>Channels</span></li>
       <li><span>Community</span></li>
        <li><span>Live Sex</span></li>
     </ul>
   </div>
  </div>
  <div class="main">
    <div class="search-box">
      <input type="text" placeholder="Type search keyword here..."  >
      <div class="search-btn">
        <i class="el-icon-search"></i>
      </div>
    </div>
    <router-view/>
  </div>
 <div class="login-box" v-if="showForm">
   <div class="form" v-if="isLogin">
     <div class="close-btn" @click="showForm=false">
       <i class="el-icon-close"></i>
     </div>
      <h2>LOGIN TO YOUR ACCOUNT</h2>
      <div>
          <input type="text" placeholder="Username">
      </div>
       <div>
          <input type="password" placeholder="Password">
      </div>
      <div class="form-btn">
        <span>Log in</span>
      </div>
      <div class="form-ft">
        <span>Forgot password?</span>
        <p>Not a member yet? </p>
        <span @click="isLogin=false"> Sign up! </span>
      </div>
   </div>
   <div class="form" v-else>
     <div class="close-btn" @click="showForm=false">
       <i class="el-icon-close"></i>
     </div>
      <h2>SIGN UP</h2>
        <div>
          <input type="text" placeholder="Username">
      </div>
      <div>
        <input type="email" class="input_field" name="email" id="email" value="" placeholder="E-mail">
      </div>
      <div>
          <input type="password" placeholder="Password">
      </div>
      <div>
          <input type="password" placeholder="Re-type Password">
      </div>
      <div class="checkbox-box">
        <input type="checkbox" id="old" value="1" required="" >
        <label for="old" class="label_section">Yes, I’m over 18 years old.</label>
      </div>
      <div class="form-btn" style="float: left;margin-top: 0px">
        <span>Sign Up</span>
      </div>
        <div class="form-ft">
        <p style="margin-left: 0;">If you forgot your password </p>
        <span> Click Here!</span>
      </div>
   </div>
 </div>
 
  </div>
</template>
<script>
export default {
  name:"app",
  data() {
    return {
      showForm:false,
      isLogin:true,
    }
  },
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #110525;
 
}
.main{
   width: 1440px;
  margin: 0 auto;
}
.header{
  background: linear-gradient(to bottom, #000 0%, #240c44 100%);
  border-top: 4px solid #7229cd;;
  .header-list{
      width: 1440px;
  margin: 0 auto;
    background: #1a1a1b;
    display: flex;
  ul{
    display: flex;
    
    li{
      height: 52px;
      line-height: 52px;
      font-size:16px ;
      font-weight: bold;
      color: #484849;
      cursor: pointer;
      padding: 0 14px;
      &:hover{
        color: #e640cc;
      }
      &.language{
        color: #fff;
        background: none;
      }
    }
  }
  .right{
    margin-left: auto;
    li{
      color: #838385;
    background: #313131;
       &:hover{
        color: #fff;
      }
    }
  }
  }
  .nav{
       width: 1440px;
  margin: 0 auto;
    display: flex;
    align-items: center;
    ul{
      display: flex;
      margin-left: auto;
      li{
        font-size: 16px;
        color: #5e556c;
        cursor: pointer;
        height: 124px;
        line-height: 124px;
        padding: 0 18px;
        &:hover{
          color: #fff;
        
        }
      }
    }
  }
  
}
.main{
  .search-box{
    background: #291e3b;
    display: flex;
    margin-bottom: 20px;
    input{
      border: none;
      outline:none;
      height: 52px;
      font-size: 16px;
      padding: 10px 0 10px 20px;
      color: #fff;
      box-sizing: border-box;
      width: 100%;
      background: none;
      
    }
    .search-btn{
      width: 52px;
      cursor: pointer;
    text-align: center;
    line-height: 52px;
    i{font-size: 22px;color: #b0a0c9;transition: all 0.5s;}
    &:hover{
      i{
        transform: rotate(90deg);
      }
    }
    }
  }
}
.login-box{
  position: fixed;
    z-index: 1050;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(32, 20, 51, 0.9);
    .form{
      width: 520px;
      background: #412966;
      position: absolute;
      padding: 54px 45px;
      box-sizing: border-box;
      top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .checkbox-box{
      display: flex;
      align-items: center;
      margin: 20px 0;
      color: #685f77;
      font-size: 16px;
    input{
        width: 20px;
    height: 20px;
    background: #342a45;
    margin: 0;
    margin-right: 10px;
    }
    }
      h2{
       color: #fff;
       font-size: 24px;
       font-weight: 400;
       text-transform: uppercase;
       padding-bottom: 28px;
    text-align: left;
      }
      .close-btn{
        width: 42px;
        height: 42px;
        background: #2e2241;
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
        line-height: 46px;
        i{
          color: #fff;
        font-size: 20px;
        }
        &:hover{
          background: #ff3477;
        }
      }
      input{
        font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    width: 100%;
    padding: 17px 20px;
    transition: background .3s;
    color: #9e99a6;
    border: none;
    background: #4e435f;
    background: rgba(255, 255, 255, .1);
    outline:none;
    margin-top: 2px;
    box-sizing: border-box;
    &:focus{
      color: #000;
    background: #fff;
    }
      }
      .form-btn{
        font-size: 15px;
        color: #fff;
        float: right;
        padding: 17px 26px 16px;
        cursor: pointer;
        background: #7229cd;
        transition: background .6s;
        text-transform: uppercase;
        margin-top: 20px;
        &:hover{
          background: #9d58f3;
        }
      }
      .form-ft{
        display: flex;
        clear: both;
        margin-top: 94px;
        font-size: 16px;
        color: #9440ff;
        p{
          color: #aca7b3;
          margin-left: auto;
          margin-right: 2px;
        }
        span{
          cursor: pointer;
          &:hover{
            text-decoration: underline;
          }
        }
      }
    }
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
