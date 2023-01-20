// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNum:'',
    password:'',
    phoErrorMsg:'',
    pswErrorMsg:''
  },
  onRegister(){
    //检查手机号格式
    if(!this.data.phoneNum){
      this.setData({
        phoErrorMsg:'手机号不能为空！'
      })
    }else if(!(/^1[34578]\d{9}$/.test(this.data.phoneNum))){
      this.setData({
        phoErrorMsg:'手机号格式有误！'
      })
    }else{
      this.setData({
        phoErrorMsg:''
      })
    }
    // 检查密码
    if(!this.data.password){
      this.setData({
        pswErrorMsg:'密码不能为空！'
      })
    }else if(!(/^[A-Za-z0-9]+$/.test(this.data.password))){
      this.setData({
        pswErrorMsg:'密码格式有误！'
      })
    }else {
      this.setData({
        pswErrorMsg:''
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title:"新用户注册"
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