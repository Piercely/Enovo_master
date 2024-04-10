Page({
    data: {
      focus: false,
      inputValue: ''
    },
    bindKeyInput: function (e) {
      this.setData({
        inputValue: e.detail.value
      })
    },
    bindReplaceInput: function (e) {
      var value = e.detail.value
      var pos = e.detail.cursor
      var left
      if (pos !== -1) {
        // 光标在中间
        left = e.detail.value.slice(0, pos)
        // 计算光标的位置
        pos = left.replace(/11/g, '2').length
      }
  
      // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
      return {
        value: value.replace(/11/g, '2'),
        cursor: pos
      }
  
      // 或者直接返回字符串,光标在最后边
      // return value.replace(/11/g,'2'),
    },
    bindHideKeyboard: function (e) {
      if (e.detail.value === '123') {
        // 收起键盘
        wx.hideKeyboard()
      }
    },
    data:{
        date:'',
      },
      bindDateChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          date: e.detail.value
        })
    },
   bindTimeChange: function(e) {
     console.log("picker发送选择改变，携带值为")
     this.setData({
       times: e.detail.value
     })
   },
   bindTimeChanges: function(e) {
    console.log('picker发送选择改变，携带值为')
    this.setData({
      times2: e.detail.value
    })
  },
  gocategory:function(){
    wx.showToast({
      title:'信息录入成功！',
      icon:'success',
      duration:1500,
      mask:true,
      success:function(){
        setTimeout(function(){
          wx.switchTab({
            url: '/pages/category/index',
          }) 
        },1500)
      }
    })      
  },
})
  