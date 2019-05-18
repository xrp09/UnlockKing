
import udata from '../utils/data.js';
var app = getApp();

Page({
  data:{
    phonenunmber:"",
  },
  alertPhone() {
    
    // var nor=data.phonenumber;
    var nor=app.globalData.wphone;
    console.log(" make phone : "+nor +" ...");
    my.makePhoneCall({ number: nor });
  },
  wlocation(){
  my.openLocation({
  // longitude: '121.549697',
  // latitude: '31.227250',
  longitude: '35.7155440181',
  latitude: '117.9545464681',
  name: '老王开锁',
  address: '山东省临沂市蒙阴县南环路西段',
});

  },

  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    console.info(`Page onLoad with data: ${udata.phonenumber}`);


  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
