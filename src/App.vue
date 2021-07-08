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
      <li><span>Log in</span></li>
      <li><span>Sign up</span> </li>
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
    
 
  </div>
</template>

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

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
