// pages/cart/index.js
Page({
    data:{

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
    }
})