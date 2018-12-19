<template>
  <ve-gauge
    :settings="chartSettings"
    :data="chartData"
    :height="height">
  </ve-gauge>
</template>

<script>
/**
   * chartData    {object}    [-]           - 数据
   * height       {String}    [400px]       - 高度
   */
export default {
  name: 'gauge',
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
    this.chartSettings = {
      dataName: {
        '温度': '温度',
        '湿度': '湿度'
      },
      seriesMap: {
        '温度': {
          radius: '95%',
          axisLine: {
            lineStyle: {
              color: [[0.09, '#72feca'], [0.82, '#5097ed'], [1, '#ff6f6c']],
              width: 8,
              shadowColor: '#5097ed',
              shadowBlur: 8
            }
          },
          splitLine: {
            length: 12,
            lineStyle: {
              width: 2,
              color: '#fff'
            }
          },
          itemStyle: {
            color: '#5097ed'
          },
          pointer: {
            width: 6
          },
          detail: {
            formatter: function (value) {
              // return value.toFixed(0) + '°C'
              return value + '°C'
            },
            backgroundColor: '#5097ed',
            // borderWidth: 0,
            // borderColor: '#fff',
            // shadowColor: '#fff',
            // shadowBlur: 2,
            offsetCenter: [-2, '80%'],
            textStyle: {
              fontWeight: 'bolder',
              color: '#ffffff',
              fontSize: '14'
            }
          },
          title: {
            offsetCenter: [0, '50%'],
            textStyle: {
              fontWeight: 'bolder',
              fontSize: 14,
              color: '#fff'
            }
          }
        },
        '湿度': {
          radius: '95%',
          axisLine: {
            lineStyle: {
              color: [[0.09, '#72feca'], [0.82, '#5097ed'], [1, '#ff6f6c']],
              width: 8,
              shadowColor: '#5097ed',
              shadowBlur: 8
            }
          },
          splitLine: {
            length: 12,
            lineStyle: {
              width: 2,
              color: '#fff'
            }
          },
          itemStyle: {
            color: '#5097ed'
          },
          pointer: {
            width: 6
          },
          detail: {
            formatter: function (value) {
              // return value.toFixed(0) + '°C'
              return value + '%'
            },
            backgroundColor: '#5097ed',
            // borderWidth: 0,
            // borderColor: '#fff',
            // shadowColor: '#fff',
            // shadowBlur: 2,
            offsetCenter: [-2, '80%'],
            textStyle: {
              fontWeight: 'bolder',
              color: '#ffffff',
              fontSize: '14'
            }
          },
          title: {
            offsetCenter: [0, '50%'],
            textStyle: {
              fontWeight: 'bolder',
              fontSize: 14,
              color: '#fff'
            }
          }
        },
        // '小圆形': {
        //   'name': '小圆形',
        //   'type': 'pie',
        //   'hoverAnimation': false,
        //   'legendHoverLink': false,
        //   'radius': ['0%', '13%'],
        //   'z': 10,
        //   'label': {
        //     'normal': {
        //       'show': false,
        //       'position': 'center'
        //     },
        //     'emphasis': {
        //       'show': false
        //     }
        //   },
        //   'labelLine': {
        //     'normal': {
        //       'show': false
        //     }
        //   },
        //   'data': [{
        //     'value': 0,
        //     'name': '1',
        //     itemStyle: {
        //       normal: {
        //         color: 'transparent'
        //       }
        //     }
        //   }, {
        //     'value': 100,
        //     'name': '2',
        //     itemStyle: {
        //       normal: {
        //         color: '#5097ed'
        //       }
        //     }
        //   }]
        // }
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
