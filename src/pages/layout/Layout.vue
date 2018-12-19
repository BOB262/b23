<template>
  <el-container class="hw-contail">
    <el-header height="30px">
      <top-menu @showCityName="key" @secondMenuShow="blo"></top-menu>
      <!--<button @click="test()">测试自动弹出视频</button>-->
    </el-header>
    <el-container>
      <el-aside width="200px" v-show="showSidebar">
        <!--<sidebar :testss="ss"></sidebar>-->
      </el-aside>
      <el-main class="main-bg">
        <!--Main-->
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-dialog
      title="汉威配电监控主站"
      :close-on-click-modal="false"
      :visible.sync="dialogVisible"
      width="70%"
      top="40px"
      @open="iframeOpenVideo"
      @close="closeVideo">
      <iframe
        width="100%"
        height="650px"
        frameborder="0"
        ref="iframe"
        name="videoChild"
        src="http://220.249.21.130:50046/system/static/paly/testVideo.html">
      </iframe>
    </el-dialog>
  </el-container>
</template>

<script>
import topMenu from './components/Top-menu'
import Sidebar from './components/Sidebar'

export default {
  name: 'layout',
  components: {
    topMenu,
    Sidebar
  },
  data () {
    return {
      activeIndex: '3',
      ss: '',
      showSidebar: false,
      dialogVisible: false
    }
  },
  methods: {
    key (data) {
      // console.log(data, '85!!!!')
      this.ss = data
    },
    blo (v) {
      this.showSidebar = v
    },
    myFunction () {
      this.$router.push('/')
    },
    test () {
      this.dialogVisible = true
    },
    iframeOpenVideo () {
      // this.$refs.iframe.contentWindow.play()
      window.videoChild.play()
    },
    closeVideo () {
      // alert(0)
      // console.log(0)
      this.$refs.iframe.contentWindow.pause()
      // this.$refs.iframe.window.pause()
      // videoChild.contentWindow.pause()
      // window.videoChild.pause()
    }
  }
}
</script>
