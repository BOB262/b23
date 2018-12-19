<template>
  <ve-radar :data="chartData"
            :height="height"
            :extend="chartExtend">
  </ve-radar>
</template>

<script>
/**
   * chartData    {object}    [-]           数据
   * height       {String}    [400px]       高度
   * dataZoom     {Array}     [-]           设置区域缩放组件
   */
export default {
  name: 'radar',
  props: {
    chartData: {
      type: Object
    },
    height: {
      type: String,
      default: '400px'
    }
  },
  data () {
    this.chartExtend = {
      radar: {
        center: ['50%', '60%'],
        radius: 70,
        name: {
          textStyle: {
            color: '#008ff3'
          }
        }
      },
      legend: {
        show: false,
        itemWidth: 8,
        itemHeight: 8,
        icon: 'circle',
        bottom: 0,
        textStyle: {
          color: '#8e8e8e'
        }
      },
      grid: {
        top: '15%',
        right: '0%',
        left: '0%',
        bottom: '0%',
        containLabel: true
      },
      textStyle: {
        color: '#8e8e8e'
      }
    }
    return {
    }
  }
}
</script>
