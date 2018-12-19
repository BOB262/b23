<template>
  <div class="eventInfo">
    <box v-for="(item, index) in data" :key="index" @click.native="mapClick(item.center)">
      <template slot="content">
        <div class="flex-container eventInfo-header">
          <div class="flex-item">
            设备ID：{{item.id}}
          </div>
          <div class="text-danger">
            {{item.type}}
          </div>
        </div>
        <div class="eventInfo-body">
          {{item.content}}
        </div>
        <div class="flex-container eventInfo-footer">
          <div class="eventInfo-footer-icon">
            <i class="el-icon-location"></i>
          </div>
          <div class="flex-item eventInfo-footer-title">
            {{item.location}}
          </div>
        </div>
      </template>
    </box>
  </div>
</template>

<script>
import mapClick from '@/assets/js/map-well.js'
export default {
  name: 'InfoList',
  props: ['data'],
  methods: {
    mapClick (n) {
      console.log(n)

      mapClick.$emit('mapCenterClick', n)
    }
  }
}
</script>
