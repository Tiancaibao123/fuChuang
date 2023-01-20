// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    errorMsg:'',
    phoneNum:'',
    password:'',
    pswErrMsg:''
  },

  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event);
  },
  //  登录按钮
  onlogin(e){
    // console.log(this.data.phoneNum)
    // console.log(this.data.errorMsg)
    // 判断手机号是否有误
    if (!this.data.phoneNum){
      this.setData({
        errorMsg:'手机号不能为空！'
      })
      }else if(!(/^1[34578]\d{9}$/.test(this.data.phoneNum))) {
      this.setData({
        errorMsg:'手机号格式有误！'
      })
      }else{
    this.setData({
      errorMsg:''
    })
      }

    // 判断密码格式
    if(!this.data.password){
      this.setData({
        pswErrMsg:'密码不能为空！'
      })
    }else{
      this.setData({
        pswErrMsg:''
      })
    }
},

  // 跳转注册页面
  onregister(){
    wx.navigateTo({
      url: '../register/register',
      success:(result)=>{
 
      },
      fail:()=>{
 
      },
      complete:()=>{
 
      }
    });

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title:"用户登录"
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})