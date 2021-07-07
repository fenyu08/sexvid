import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
import axios from '../node_modules/axios'
import 'fetch-detector'
import 'fetch-ie8'
import 'element-ui/lib/theme-chalk/index.css';
import VideoPlayer from 'vue-video-player';
import  'videojs-flash';
import VueKonva from 'vue-konva'
import CryptoJS from 'crypto-js'
import 'videojs-contrib-hls'
window.videojs = require('video.js');
require('video.js/dist/lang/zh-CN');
require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
Vue.use(VueKonva)
Vue.use(VideoPlayer);


//公共样式
import './assets/css/common.css';
import filters from './filters/fliters.js'

//充值组件
import Recharge from './components/recharge.vue'
Vue.component('Recharge', Recharge);

//兑换组件
import Excharge from './components/excharge.vue'
Vue.component('Excharge', Excharge);


import clipboard from 'clipboard';
//注册到vue原型上
Vue.prototype.clipboard = clipboard;

//规则算法
for(let k in filters){
    Vue.filter(k,filters[k]);
}




import {
  // Pagination,
  Dialog,
  // Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  // Radio,
  // RadioGroup,
  // RadioButton,
  Checkbox,
  // CheckboxButton,
  CheckboxGroup,
  Switch,
  // Select,
  // Option,
  // OptionGroup,
  // Button,
  // ButtonGroup,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  // Tooltip,
  // Breadcrumb,
  // BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  // Tree,
  Alert,
  // Slider,
  // Icon,
  Row,
  Col,
  Upload,
  Progress,
  // Badge,
  // Card,
  // Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  // Collapse,
  // CollapseItem,
  Cascader,
  // ColorPicker,
  // Transfer,
  Container,
  // Header,
  Aside,
  Main,
  // Footer,
  Loading,
  MessageBox,
  Message,
  // Notification,
  Scrollbar, //滚动条
  Backtop,
  infiniteScroll
} from 'element-ui'

Vue.use(Scrollbar)//滚动条
// Vue.use(Pagination)
Vue.use(Dialog)
// Vue.use(Autocomplete)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Pagination)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Input)
Vue.use(InputNumber)
// Vue.use(Radio)
// Vue.use(RadioGroup)
// Vue.use(RadioButton)
Vue.use(Checkbox)
// Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Switch)
// Vue.use(Button)
// Vue.use(ButtonGroup)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(TimePicker)
Vue.use(Popover)
// Vue.use(Tooltip)
// Vue.use(Breadcrumb)
// Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tag)
// Vue.use(Tree)
Vue.use(Alert)
// Vue.use(Slider)
// Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Upload)
Vue.use(Progress)
// Vue.use(Badge)
// Vue.use(Card)
// Vue.use(Rate)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Carousel)
Vue.use(CarouselItem)
// Vue.use(Collapse)
// Vue.use(CollapseItem)
Vue.use(Cascader)
// Vue.use(ColorPicker)
Vue.use(Container)
// Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Backtop)
Vue.use(infiniteScroll)
// Vue.use(Footer)

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
// Vue.prototype.$prompt = MessageBox.prompt
// Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad,{
  error:require('./static/site/imgs/erro.png'),
  loading:require('./static/site/imgs/load.png')
})

import { alertComfirm,alertyc } from './assets/js/public'

Vue.prototype.$st = store;
Vue.prototype.$ro = router;
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.prototype.versionLive = '/api/v1_1/'; //直播api
Vue.prototype.versionLive2 = '/api/v2/'; //直播api2
Vue.prototype.noticeShow2=false

// Vue.prototype.versionWss = 'wss://api.zhibojk.com/wss'; //线上ws12.04
// Vue.prototype.versionWss = 'ws://52.220.233.230/wss'; //测试 2021.1.4

// Vue.prototype.versionWssNotice = 'wss://api.zhibojk.com/wss_notice'; //线上消息通知ws12.04
// Vue.prototype.versionWssNotice = 'ws://52.220.233.230/wss_notice'; //测试消息通知 2021.1.4

// Vue.prototype.noticeTypes = 2; //代理请求
Vue.prototype.noticeTypes = 1; //官方请求


//这里就是对组件的绑定
import myPopups from './utils/popups.js'
Vue.prototype.$myConfirm = myPopups;

//请求次数
Vue.prototype.$http.defaults.retry = 3;
//请求间隙
Vue.prototype.$http.defaults.retryDelay = 1000;
//超时时间
Vue.prototype.$http.defaults.timeout = 6000;
//请求头 个人中心那边
Vue.prototype.$http.defaults.headers['Authorization'] = "Bearer "+ store.state.codeToken;
//请求头 直播那边
Vue.prototype.$http.defaults.headers['token'] = store.state.codeToken;

Vue.prototype.$http.defaults.config = axios.CancelToken;

// window.config = axios.CancelToken;




// Vue.prototype.$http.interceptors.request.use(
//   config => {
//     // vuex记录cancelToken
//     config.cancelToken = new axios.CancelToken((cancel) => {
//       store.commit('pushToken', {
//         cancelToken: cancel
//       })
//     })
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   })

//请求拦截
Vue.prototype.$http.interceptors.request.use((request) => {
  if(request.method == "get") { //添加时间戳
    request.params = {
      t: Date.now(),
      ...request.params
    }
  }
  // request.config.cancelToken = new axios.CancelToken(cancel=>{
  //   window.__axiosPromiseArr.push({cancel})
  // })
  return request;
});
var ECBOptions = {
  mode: CryptoJS.mode.ECB,
  padding: CryptoJS.pad.Pkcs7,
  iv:''
};
let key = CryptoJS.enc.Utf8.parse('6dd5eea85c2c5fac');//测试
// let key = CryptoJS.enc.Utf8.parse('21d29648eae80e73');//生产环境
// 加密
Vue.prototype.encrypt=function(data){
  //console.log(this.$store.state.userinfo.user_id)
  if(this.$store.state.decipher_str&&this.$store.state.codeToken){
    key=CryptoJS.enc.Utf8.parse(this.$store.state.decipher_str)
  }else{
    key = CryptoJS.enc.Utf8.parse('6dd5eea85c2c5fac');//测试
    //  key = CryptoJS.enc.Utf8.parse('21d29648eae80e73');//生产环境?
  }
  if(typeof data=='object'){
    data.timestamp=new Date().getTime().toString().substring(0,10);
  }
  let scrs = JSON.stringify(data)
  let encrypted = CryptoJS.AES.encrypt(scrs, key, ECBOptions);
  var Base64Text= CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
  const base64Cipher = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
  return base64Cipher
}
// 解密
Vue.prototype.decrypt=function(data){
  if(this.$store.state.decipher_str&&this.$store.state.userinfo.user_id){
    key=CryptoJS.enc.Utf8.parse(this.$store.state.decipher_str)
  }else{
    key = CryptoJS.enc.Utf8.parse('6dd5eea85c2c5fac');//测试
    // key = CryptoJS.enc.Utf8.parse('21d29648eae80e73');//生产环境
  }
  var bytes = CryptoJS.AES.decrypt(data, key,ECBOptions);
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(originalText)
}

function noLogin () {
  // Vue.prototype.$ro.push('/login');
  //     // //请求头 个人中心那边
  Vue.prototype.$http.defaults.headers['Authorization'] = "Bearer ";
  //     //请求头 直播那边
  Vue.prototype.$http.defaults.headers['token'] = '';
  store.commit("SETUSERTOKEN", "");
  store.commit("SETUSERINFO","");
  store.commit("SETUSERNAME", "");
  store.commit("SETSAFEPWD", "");
  store.commit("SETPIC", "");
  store.commit("SETUSER_TYPE", "");
  store.commit("SETDIAMOND", "");
  store.commit("SETBALANCE", "");
  store.commit("SETFOCUS", "");

}
//响应拦截
let len = 0;
Vue.prototype.$http.interceptors.response.use(
  response => {
    if(response.status != 200) {
      // Vue.$vux.loading.hide();
      return Promise.resolve();
    }else{
      if(response.data.code==2003||response.data.code==2001){
        alertComfirm({
          msg:'<p style="font-size: 16px;padding-bottom: .2rem;padding-top: .2rem;color: #333;font-weight: 500">您的账号已经在其他设备登录</p><p style="font-size: 16px;padding-bottom: .2rem;color: #333;font-weight: 500">如非本人请联系客服</p>',
        },function () {
          noLogin();
          window.location.href = "/#login";
          // location.reload();
        },function () {
          noLogin();
          if(window.location.hash.includes('chat')>-1 || window.location.hash.includes('HostHome')>-1 || window.location.hash =="#/"){
            location.reload();
          }else{
            window.location.href = "/#login";
            // location.reload();
          }
        })
      }else if(response.data.code==2002|| response.data.data==401 || response.data.code==2000){
        // console.log(response.config.url);
        if(response.config.url==Vue.prototype.versionLive2+"live/get_message_count/"||response.config.url==Vue.prototype.versionLive2+"user/push_anchor/" || response.config.url=="/api2/index/index" || response.config.url=="/api2/index/balance" || response.config.url==Vue.prototype.versionLive2+"user/is_anchor_live"){
          return;
        }

        len++;
        // 未登录
        // if(len>1) Vue.prototype.$msgbox.hide();
        alertComfirm({msg:'您还未登录或登录过期'},function () {
          noLogin();
          window.location.href = "/#login";
          // location.reload();
        },function () {
          noLogin();
          if(window.location.hash.includes('chat')>-1 || window.location.hash.includes('HostHome')>-1 || window.location.hash =="#/"){
            //console.log(23)
          }else{
            window.location.href = "/#login";
            // location.reload();
          }
        })
      }else if(response.data.code==1001){
        alertComfirm({msg:'账户异常,请联系客服'},function () {
          noLogin();
          window.open(localStorage.getItem('customer'))
        },function () {
          noLogin();
          // window.location.href = "/#login";
        })

        // Vue.prototype.$confirm('若要进行操作，请联系客服','账户异常',{
        //   confirmButtonText: '联系客服',
        //   center:true,
        //   roundButton:true
        // }).then(() => {
        //   //跳去客服页面
        // }).catch(() => {
        //   //     // //请求头 个人中心那边
        //       Vue.prototype.$http.defaults.headers['Authorization'] = "Bearer ";
        //       //请求头 直播那边
        //       Vue.prototype.$http.defaults.headers['token'] = '';
        //       store.commit("SETUSERTOKEN", "");
        //       store.commit("SETUSERNAME", "");
        //       store.commit("SETUSERINFO","");
        //       store.commit("SETSAFEPWD","");
        //       store.commit("SETPIC", "");
        //       Vue.prototype.$ro.push('/login');
        // });

      }else if(response.data.code==2003){
        alertComfirm({msg:response.data.msg},function () {
          noLogin();
          window.location.href = "/#login";
          // location.reload();
        },function () {
          noLogin();
          if(window.location.hash.includes('chat')>-1 || window.location.hash.includes('HostHome')>-1 || window.location.hash =="#/"){
            //console.log(23)
          }else{
            window.location.href = "/#login";
            // location.reload();
          }
        })
      } else{
        return response;
      }
    }
  },
  error => {
    //请求超时的之后，抛出 error.code = ECONNABORTED的错误..错误信息是 timeout of  xxx ms exceeded
    if(error.code == 'ECONNABORTED' && error.message.indexOf('timeout')!=-1){
      var config = error.config;
      config.__retryCount = config.__retryCount || 0;

      if(config.__retryCount >= config.retry) {
        // Reject with the error
        //window.location.reload();
        Vue.prototype.$message({
          message: '网络超时，请稍后再试',
          type: 'warning'
        })
        return Promise.reject(error);
      }

      // Increase the retry count
      config.__retryCount += 1;

      // Create new promise to handle exponential backoff
      var backoff = new Promise(function(resolve) {
        setTimeout(function() {
          ////console.log('resolve');
          resolve();
        }, config.retryDelay || 1);
      });

      return backoff.then(function() {
        return axios(config);
      });
    }else if(error.response && error.response.status) {
      switch(error.response.status) { //根据状态码提示对应消息
        case 401:
          break;
        case 404:
          // Vue.$vux.alert.show({
          //     title:'提示',
          //     content:'请求未找到'
          // });
          break;
        case 500:
          Vue.prototype.$message({
            message: '服务器繁忙,请稍后再试',
            type: 'warning'
          })
          break;
        case 504:
          Vue.prototype.$message({
            message: '网络超时，请稍后再试',
            type: 'warning'
          })
          break;
        default:
      }
    } else {
      // console.error(error.response, "错误");
      // Vue.$vux.loading.hide();
      return Promise.resolve();
    }
  });




router.beforeEach((to, from, next) => {
  store.commit('clearToken')
  let token = window.localStorage.getItem('codeToken');
  if (to.meta.requireAuth) {
    if (token) {
      if(to.meta.requireVirtual){
        //console.log('没有访问权限');
      }else{
        next();
      }
    }else{
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }else {
    // window.__axiosPromiseArr.forEach((ele,index)=>{
    //   ele.cancel();
    //   delete window.__axiosPromiseArr[index];
    // })
    //
    store.commit("SETROUTER",to.path);
    next();
  }
});




new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
