<template>
  <iframe
    :src="urlPath"
    width="100%"
    height="100%"
    frameborder="0"
  ></iframe>
</template>

<script>
export default {
  name: 'iframePage',
  props: ['index'],
  data () {
    return {
      urlPath: 'http://220.249.21.130:60155/indexWeb.jsp'
    }
  },
  created () {
  },
  watch: {
    $route (to, form) {
      console.log(to, form)
    },
    index (to, form) {
      // console.log(to, form)
      switch (to) {
        case 'index': // 实时监控
          this.urlPath = 'http://220.249.21.130:60155/indexWeb.jsp'
          break
        case 'monitoring': // 历史数据查询
          this.urlPath = 'http://220.249.21.130:60155/elevatorStatisticsWeb.jsp'
          break
        case 'elevatorAlarmWeb': // 报警信息查询
          this.urlPath = 'http://220.249.21.130:60155/elevatorAlarmWeb.jsp'
          break
        case 'dataReport': // 报警信息查询
          this.urlPath = 'http://220.249.21.130:60155/elevatorMonthStatistics.jsp'
          break
        case 'elevatorMaintenance': // 维护计划
          this.urlPath = 'http://220.249.21.130:60155/elevatorMaintenance.jsp'
          break
      }
    }
  }
}
</script>

<style scoped>
  iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
</style>
