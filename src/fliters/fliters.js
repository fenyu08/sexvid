let filters = {
    formatDate2(time) {
        console.log(time)
  let date = new Date(time * 1000);
  let y = date.getFullYear(); // 年
  let M = date.getMonth() + 1;
  M = M < 10 ? "0" + M : M; // 月
  let D = date.getDate();
  D = D < 10 ? "0" + D : D; // 日
  // let hh = date.getHours();
  // hh = hh < 10 ? "0" + hh : hh; // 时
  // let mm = date.getMinutes();
  // mm = mm < 10 ? "0" + mm : mm;
  return y + "-" + M + "-" + D ;
},
toHourMinute(time){
  let min=Math.floor(time%3600);
  if(time<3600){
      return Math.floor(min/60) + ":"+ time%60;
  }else{
      return  Math.floor(time/3600) + ":" + Math.floor(min/60) + ":"+ time%60;
  }
}
}
export default filters