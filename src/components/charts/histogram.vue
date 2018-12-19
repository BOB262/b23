<template>
  <ve-histogram :colors="colors"
                :data="chartData"
                :height="height"
                ref="chart"
                :extend="chartExtend"
                :settings="chartSettings"
                :rotate="rotate"
                :loading="loading"></ve-histogram>
</template>

<script>
/**
 * chartData        {Object}                     - 注入数据
 * isXAxisItalic    {Boolean}       [false]      - X轴文字显示全部并标签旋转40度
 * height           {String}        [300px]      - 图表高度
 * colors           {Array}         ['#5C98DE', '#E67D3B', '#A6A6A6']      - 图表高度
 * id               {String}                     - ID
 * interval         {Number}        ['auto']     - 坐标轴刻度标签的显示间隔 可以设置成 0 强制显示所有标签。
 * rotate           {Number}        [0]          - 刻度标签旋转的角度 旋转的角度从 -90 度到 90 度。
 */
export default {
  name: 'histogram',
  props: {
    loading: {
      type: Boolean
    },
    chartData: {
      type: Object
    },
    height: {
      type: String,
      default: '300px'
    },
    chartSettings: {
      type: Object
    },
    sTest: String,
    id: String,
    isXAxisItalic: {
      type: Boolean,
      default: false
    },
    colors: {
      type: Array,
      default: function () {
        return ['#5C98DE', '#E67D3B', '#A6A6A6']
      }
    },
    rotate: {
      type: [Number, String],
      default: 0
    },
    interval: {
      type: Number,
      default: function () {
        return 'auto'
      }
    }
  },
  data () {
    let color = '#7D9DBB'
    this.chartExtend = {
      legend: {
        itemWidth: 8,
        itemHeight: 8,
        icon: 'circle',
        top: 0,
        right: 0,
        textStyle: {
          color: color
        }
      },
      grid: {
        top: '20%',
        right: '1%',
        left: '1%',
        bottom: '1%',
        containLabel: true
      },
      textStyle: {
        color: color
      },
      'xAxis.0.axisLabel.interval': this.interval,
      'xAxis.0.axisLabel.rotate': this.rotate
    }
    return {
      // chartData: null
    }
  },
  mounted: function () {
    // 图表不重复渲染
    const unwatch = this.$watch('sTest', v => {
      if (v !== this.id) return
      this.$nextTick(function () {
        this.$refs[`chart`].echarts.resize()
        unwatch()
      })
    })
    if (this.isXAxisItalic === true) {
      // console.log('字体显示全部')
      this.chartExtend.xAxis = {
        axisLabel: {
          interval: 0,
          rotate: 40
        }
      }
    } else {
      // console.log('默认：不全')
    }
  },
  watch: {
    /* sTest: function (newVal, oldVal) {
        // console.log(newVal, oldVal, '检查')
        this.$nextTick(function () {
          // console.log(this.$refs)
          // console.log(this.$refs.chart)
          this.$refs[`chart`].echarts.resize()
        })
      } */
  }
}
</script>
