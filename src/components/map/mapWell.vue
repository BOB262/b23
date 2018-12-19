<template>
  <div class="amap-wrapper">
    <el-amap-search-box class="search-box"
                        :on-search-result="onSearchResult"></el-amap-search-box>
    <el-amap class="amap-box"
             :vid="'amap-vue'"
             :isHotspot="true"
             :resizeEnable="true"
             :plugin="plugin"
             :center="mapCenter"
             :zoom="mapZooms">
      <el-amap-marker v-for="(marker, index) in markersData"
                      :key="index"
                      :position="marker.position"
                      :vid="index"
                      :offset="marker.offset"
                      :events="marker.events"
                      :content="marker.content"></el-amap-marker>
      <el-amap-info-window v-if="window"
                      :closeWhenClickMap="true"
                      :position="window.position"
                      :visible="window.visible"
                      :offset="[0,-20]"
                      :content="window.content"></el-amap-info-window>
    </el-amap>
  </div>
</template>

<script>
export default {
  props: {
    mapZooms: {
      type: Number,
      default: 14
    },
    mapCenter: {
      type: Array,
      default: [116.108736, 39.793336]
    },
    markersData: {
      type: Array
    }
  },
  data () {
    return {
      mapIcon: [
        require('@/assets/imgs/map/img_map_gray.png'),
        require('@/assets/imgs/map/img_map_green.png'),
        require('@/assets/imgs/map/img_map_red.png')
      ],
      lng: 0,
      lat: 0,
      plugin: ['ToolBar', 'Scale'],
      windows: [],
      window: ''
    }
  },
  created () {
    let that = this
    this.markersData.forEach(function (o, i) {
      console.log(o, i)
      o.offset = [-21, -40]
      o.content = `<img src="${that.mapIcon[o.state]}"></img>`
      o.events = {
        click () {
          that.windows.forEach(window => {
            window.visible = false
          })
          that.window = that.windows[i]
          that.$nextTick(() => {
            that.window.visible = true
          })
        }
      }
      that.windows.push({
        position: [o.position[0] + 0.0, o.position[1] + 0.0],
        content:
          `<div class="map-info">
          <div class="title">
            设备ID：${o.info.id}
            <div class="state">状态：
              <span class="${
  o.state === '0'
    ? 'text-gray-sub'
    : o.state === '1'
      ? 'text-success'
      : 'text-danger'
}">
                ${o.state === '0' ? '关闭' : o.state === '1' ? '开启' : '故障'}
              </span>
            </div>
          </div>
          <div class="content">
            <div class="el-row">
              <div class="el-col el-col-12">
                <img src="` +
          require('@/assets/imgs/map/' + o.info.scene + '.png') +
          `" />
              </div>
              <div class="el-col el-col-12 content-list">
                <div class="el-row">
                  <div class="el-col el-col-12">
                    DTU电压：
                  </div>
                  <div class="el-col el-col-12">
                  ${o.info.dtu}V
                  </div>
                </div>
                <div class="el-row">
                  <div class="el-col el-col-12">
                    设备锁电压：
                  </div>
                  <div class="el-col el-col-12">
                  ${o.info.lock}V
                  </div>
                </div>
                <div class="el-row">
                  <div class="el-col el-col-12">
                    用途：
                  </div>
                  <div class="el-col el-col-12">
                  ${o.info.purpose}
                  </div>
                </div>
                <div class="el-row">
                  <div class="el-col el-col-12">
                    井盖品牌：
                  </div>
                  <div class="el-col el-col-12">
                  ${o.info.brand}
                  </div>
                </div>
                <div class="el-row">
                  <div class="el-col el-col-12">
                    安装时间：
                  </div>
                  <div class="el-col el-col-12">
                  ${o.info.time}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="foot">
            <p>位置信息：${o.info.location}</p>
            <p>经纬坐标：${o.position}</p>
          </div>
        </div>`,
        visible: false
      })
    })
  },
  methods: {
    onSearchResult (pois) {
      let latSum = 0
      let lngSum = 0
      if (pois.length > 0) {
        pois.forEach(poi => {
          let { lng, lat } = poi
          lngSum += lng
          latSum += lat
        })
        let center = {
          lng: lngSum / pois.length,
          lat: latSum / pois.length
        }
        this.mapCenter = [center.lng, center.lat]
      }
    }
  }
}
</script>
