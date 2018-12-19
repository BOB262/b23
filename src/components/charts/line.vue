<template>
  <ve-line ref="chart"
           :data="chartData"
           :colors="colors"
           :height="height"
           :data-zoom="dataZoom"
           :extend="chartExtend"
           :settings="chartSettings"
           :loading="loading">
  </ve-line>
</template>

<script>
/**
 * chartData    {object}    [-]           数据
 * height       {String}    [400px]       高度
 * dataZoom     {Array}     [-]           设置区域缩放组件
 * area         {Boolean}   [false]       堆叠面积图
 */
export default {
  name: 't-line',
  props: {
    loading: {
      type: Boolean
    },
    chartData: {
      type: Object
    },
    height: {
      type: String,
      default: '400px'
    },
    dataZoom: {
      type: Array
    },
    stack: {
      type: Object,
      default: function () {
        return {}
      }
    },
    colors: {
      type: Array
    },
    area: {
      type: Boolean,
      default: false
    }
  },
  data () {
    this.chartSettings = {
      stack: this.stack,
      area: this.area
    }
    /* this.dataZoom = [
      {
        type: 'slider',
        start: 0,
        end: 20
      }
    ] */
    this.chartExtend = {
      legend: {
        itemWidth: 8,
        itemHeight: 8,
        icon: 'circle',
        top: 0,
        right: 0,
        textStyle: {
          color: '#fff'
        }
      },
      grid: {
        top: '20%',
        right: '1%',
        left: '1%',
        bottom: '1%',
        containLabel: true
      },
      series: {
        barMaxWidth: 16,
        itemStyle: {
          barBorderRadius: 100
        },
        textStyle: {
          color: '#fff'
        }
      },
      textStyle: {
        color: '#fff'
      }
    }
    return {
    }
  },
  mounted () {
    const unwatch = this.$watch('sTest', v => {
      if (v !== this.id) return
      this.$nextTick(function () {
        this.$refs[`chart`].echarts.resize()
        unwatch()
      })
    })
  }
}
</script>
