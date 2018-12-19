<template>
  <ve-radar
    :colors="colors"
    :data="chartData"
    :height="height"
    :extend="chartExtend">
  </ve-radar>
</template>

<script>
/**
   * chartData      {object}    [-]                           数据
   * height         {String}    [400px]                       高度
   * indicatorArr   {Array}     [ ]                           雷达图的指示器，用来指定雷达图中的多个变量（维度）, 示例（详细信息）：http://www.echartsjs.com/option.html#radar.indicator
   * colors         {Array}     ['#70a7f5', '#4DC451']        调色盘颜色
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
    },
    indicatorArr: {
      type: Array
    },
    colors: {
      type: Array,
      default: () => {
        return ['#70a7f5', '#4DC451']
      }
    }
  },
  data () {
    this.chartExtend = {
      radar: {
        shape: 'polygon',
        center: ['50%', '50%'],
        radius: 80,
        name: {
          textStyle: {
            color: '#70a7f5'
          }
        },
        splitArea: {
          areaStyle: {
            color: [
              'transparent', '#1d4e74'
            ]
          }
        },
        indicator: this.indicatorArr
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
      tooltip: {
        position: function (pos, params, dom, rect, size) {
          var obj = {
            top: 0
          }
          obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5
          // console.log(obj)
          return obj
        }
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
