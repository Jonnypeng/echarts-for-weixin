// pages/test/index.js
import * as echarts from '../../ec-canvas/echarts.js';
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        const query = wx.createSelectorQuery().in(this);
        query
          .select('.ec-canvas')
          .fields({ node: true, size: true })
          .exec(res => {
             const canvas = res[0].node;
              var e = echarts.init(canvas);
             //e.setOption(option);
            // //this.canvasNode = canvasNode;
            // const canvasDpr = wx.getSystemInfoSync().pixelRatio;
            // const canvasWidth = res[0].width;
            // const canvasHeight = res[0].height;
            // // const canvasWidth = 400;
            // // const canvasHeight = 400;
            //  const ctx = canvasNode.getContext('2d')
            // const canvas = new WxCanvas(ctx, this.data.canvasId, true, canvasNode)
            // echarts.setCanvasCreator(() => {
            //   return canvas
            // })
  
            // if (typeof callback === 'function') {
            //   this.chart = callback(canvas, canvasWidth, canvasHeight, canvasDpr);
            // } else if (this.data.ec && typeof this.data.ec.onInit === 'function') {
            //   this.chart = this.data.ec.onInit(canvas, canvasWidth, canvasHeight, canvasDpr)
            //   console.log(this.chart);
            // } else {
            //   this.triggerEvent('init', {
            //     canvas: canvas,
            //     width: canvasWidth,
            //     height: canvasHeight,
            //     dpr: canvasDpr
            //   })
            // }
          })
  
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})