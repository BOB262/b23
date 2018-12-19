<template>
  <el-tabs v-model="activeName"
           @tab-click="regionIdValue">
    <el-tab-pane v-for="(item, index) in data"
                 :key="index"
                 :label="item.label"
                 :name="item.name"></el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'SelectRegion',

  data () {
    return {
      activeName: '0',
      data: [
        {
          label: '汉威四区',
          name: '0'
        },
        {
          label: '汉威三区',
          name: '1'
        },
        {
          label: '汉威二区',
          name: '2'
        },
        {
          label: '汉威一区',
          name: '3'
        }
      ]
    }
  },
  methods: {
    regionIdValue () {
      this.$emit('regionIdValue', this.activeName)
    }
  }
}
</script>
