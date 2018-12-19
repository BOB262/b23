<template>
  <ve-ring
    :data="chartData"
    :height="height"
    :extend="EchartEQ"
    :colors="colorArr"
  >
  </ve-ring>
</template>

<script>
/**
 * chartData    {object}    [-]                     - 数据
 * height       {String}    [400px]                 - 高度
 * colorArr     {Array}     ['#5097ed', '#111F2C']  - 颜色
 */
export default {
  name: 'ring',
  props: {
    chartData: {
      type: Object
    },
    height: {
      type: String,
      default: '400px'
    },
    colorArr: {
      type: Array,
      default: () => {
        return ['#5097ed', '#111F2C']
      }
    }
  },
  data () {
    this.EchartEQ = {
      'series.0.data.1.label.show': false,
      'series.0.data.0.label': {
        formatter: [
          '{count|{c}}'
        ].join('\n'),
        fontSize: '20',
        lineHeight: '24',
        padding: [20, 0, 0, 0],
        rich: {
          count: {
            color: this.colorArr[0],
            fontSize: '24'

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
        top: '0%',
        left: '3%',
        right: '4%',
        bottom: 35,
        containLabel: true
      },
      tooltip: {
        position: function (pos, params, dom, rect, size) {
          var obj = {top: 0}
          obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5
          // console.log(obj)
          return obj
        }
      },
      series: {
        center: ['50%', '50%'],
        radius: ['70%', '90%'],
        label: {
          show: true,
          position: 'center',
          formatter: '{c}\n{b}',
          textStyle: {
            color: '#fff',
            fontSize: 12
          }
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
