export default {
  userName(state,val){
    state.userName=val
  },
  updateUsers(state,items){
    state.users=items
  },
//  显示请输入要查询的用户
  beforeUpdate(state) {
    state.showText=true;
    state.showLoading=false;
    state.showNoBody=false;
  } ,
  //显示loading....
  beforeAdddate(state) {
    console.log("12343252352")
    state.showText=false;
    state.showLoading=true;
    state.showNoBody=false;
  },
  //找不到数据
  beforeNodate(state) {

    state.showText=false;
    state.showLoading=false;
    state.showNoBody=true;
  },
  //有数据
  beforeHasdate(state) {

    state.showText=false;
    state.showLoading=false;
    state.showNoBody=false;
  },
  //初始化
  initUpdate(state){
    state.showText=true;
    state.showLoading=true;
    state.showNoBody=true;
  }
}
