<template>
  <div class="nav-header">
    <div class="nav-top">
      <div class="nav-center">
        <img class="header-logo"
             src="@/assets/imgs/logo.png">
        <h1 class="header-title">拓维智能井盖监控云平台</h1>
      </div>
      <div class="bg-topHead"></div>
    </div>
  </div>
</template>

<script>
import {replaceAllJson} from '@/utils/utils'
import {topMenu} from './topMenu'
// import { mapGetters } from 'vuex'
export default {
  name: 'Top-menu',
  data () {
    return {
      activeIndex: '0',
      indexActive: '1-1',
      activeChild: '',
      menuItems: topMenu,
      homeTitle: true,
      isLevel1_id: '',
      weekDay: [
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六'
      ],
      homeDate: {
        date: '',
        dateWeek: '',
        time: ''
      },
      secondMenuShow: false,
      id: '166wwwwwwwwww',
      dialogTitle: '报警',
      dialogVisible: false,
      iframeVideoUrl: ''
    }
  },
  sockets: {
    connect: function () {
      // this.id = this.$socket.id
      // this.$socket.emit('login', '183wwwwwwwwww')
      // console.log('socket connected')
    },
    new_msg: function (msg) {
      // console.log(replaceAllJson(msg))
      let getMsg = replaceAllJson(msg)
      console.log(getMsg)
      if (getMsg.video === '1') {
        this.dialogVisible = true
        this.dialogTitle = getMsg.content
        this.iframeVideoUrl = 'http://220.249.21.130:50046/system/static/paly/hwVideo.html'
      }
      if (getMsg.video === '2') {
        this.dialogVisible = true
        this.dialogTitle = getMsg.content
        this.iframeVideoUrl = 'http://220.249.21.130:50046/system/static/paly/hwVideo2.html'
      }
    }
  },
  created () {
    let date = new Date()
    this.homeDate.dateWeek = this.weekDay[date.getDay()]
    this.nowTime()
    // console.log(localStorage.getItem('activeIndex'))
    if (localStorage.hasOwnProperty('activeIndex')) {
      let index = JSON.parse(localStorage.getItem('activeIndex'))
      this.activeIndex = index.oneIndex
      this.activeChild = index.twoIndex

      // console.log(localStorage.getItem('parentId'))
      /* this.$store.dispatch('GetMenu', this.activeChild).then((data) => {
        // 判断三级菜单有没有数组，如果没有数组就隐藏
        console.log(data, '我要看')
        if (data !== undefined && data.length > 0) {
          console.log('有三级菜单，展开')
          this.$emit('secondMenuShow', true)
        } else {
          console.log('没有三级菜单，隐藏')
          this.$emit('secondMenuShow', false)
        }
      }) */
    }

    window.addEventListener('beforeunload', () => {
      console.log('你好！！！')
      let a = {
        oneIndex: this.activeIndex,
        twoIndex: this.activeChild
      }
      localStorage.setItem('activeIndex', JSON.stringify(a))

      //
    })
    this.$router.beforeEach((to, from, next) => {
      if (to.path === '/index') {
        // console.log('首页')
        let a = {
          oneIndex: '0',
          twoIndex: ''
        }
        localStorage.setItem('activeIndex', JSON.stringify(a))

        let index = JSON.parse(localStorage.getItem('activeIndex'))
        this.activeIndex = index.oneIndex
        this.activeChild = index.twoIndex
        /* this.$store.dispatch('GetMenu', this.activeChild).then((data) => {
          // 判断三级菜单有没有数组，如果没有数组就隐藏
          console.log(data, '我要看1')
          if (data !== undefined && data.length > 0) {
            console.log('有三级菜单，展开')
            this.$emit('secondMenuShow', true)
          } else {
            console.log('没有三级菜单，隐藏')
            this.$emit('secondMenuShow', false)
          }
        }) */
      }
      next()
    })
  },
  mounted () {
    let that = this
    setInterval(that.nowTime, 1000)
    // this.$socket.emit('login', this.id) // 在这里触发connect事件
  },
  computed: {
    // ...mapGetters(['menu'])
    /* secondMenuShow () { // 判断一级菜单有没有二级的菜单，如果二级没有的话，隐藏起来。好像是很重要
        console.log('===》》》》判断有没有二级菜单！！！！！！！！！！！')
        let menuItems = this.menuItems
        if (menuItems[this.activeIndex].children !== undefined && menuItems[this.activeIndex].children.length > 0) {
          return true
        } else {
          return false
        }
      } */
  },
  methods: {
    /* testbtn () {
      console.log(this.$store.getters)
      this.$store.dispatch('GetEventInfo', {
        alarmEquipment: null,
        alarmLevel: null,
        content: '四区1号楼货梯(3号梯)，1层位置，重复开关门!11111',
        durationTime: null,
        equipmentSite: null,
        handlingInformation: null,
        name: '电梯事件222222',
        place: null,
        time: '2018-10-23 08:26:26'
      })
      console.log(this.$store.getters.EventInfo)
      // this.store.commit('SET_EventInfo')
    }, */
    iframeOpenVideo () {
      // this.$refs.iframe.contentWindow.play()
      window.videoChild.play()
    },
    closeVideo () {
      this.$refs.iframe.contentWindow.pause()
    },
    clickButton: function (val) {
      console.log(val)
      // $socket is socket.io-client instance
      // this.$socket.emit('emit_method', val)
    },
    nowTime () {
      let nowDate = new Date()
      let year = nowDate.getFullYear()
      let month = nowDate.getMonth() + 1
      month = month > 9 ? month : '0' + month
      let date = nowDate.getDate()
      date = date > 9 ? date : '0' + date
      let hour = nowDate.getHours()
      hour = hour > 9 ? hour : '0' + hour
      let miunte = nowDate.getMinutes()
      miunte = miunte > 9 ? miunte : '0' + miunte
      let second = nowDate.getSeconds()
      second = second > 9 ? second : '0' + second
      this.homeDate.date = year + '年' + month + '月' + date + '日'
      this.homeDate.time = hour + ':' + miunte + ':' + second
    },
    openMenu (parentId, itemChild) {
      console.log(parentId, itemChild)
      this.activeChild = parentId
      localStorage.setItem('parentId', parentId)
      /* this.$store.dispatch('GetMenu', itemChild.parentId).then((data) => {
        // 这是好像是判断href存在不存在，若存在获取数组，判断http/https跳转
        /!* console.log(data, '我的你')
          console.log(itemChild.href, '我要看')
          let itemActive,
            childItemActvie = 0
          if (itemChild.href) {
            console.log('you')
            itemActive = itemChild
          } else {
            console.log('没有')
            console.log(this.menu[0])
            console.log(this.menu[0].length == 0)
          } *!/
        console.log(data)
        // 判断三级菜单有没有数组，如果没有数组就隐藏
        // console.log(data, '我要看')
        if (data !== undefined && data.length > 0) {
          console.log('有三级菜单，展开')
          this.$emit('secondMenuShow', true)
        } else {
          console.log('没有三级菜单，隐藏')
          this.$emit('secondMenuShow', false)
        }

        // 判断二级菜单没有链接就跳转“建设中”页面
        console.log(itemChild.href)
        if (itemChild.href) {
          console.log('有链接')
          this.$router.push(itemChild.href)
        } else {
          console.log('无链接')
          this.$router.push('/deving/index')
        }
      }) */
      this.secondMenuShow = false
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      // 一级点击展开/折叠
      if (key === this.isLevel1_id) {
        // console.log('重复')
        this.secondMenuShow = !this.secondMenuShow
      } else {
        // console.log('不重复')
        this.isLevel1_id = key
        this.secondMenuShow = true
      }

      if (key === '0') {
        console.log('index')
        this.$router.push('/index')
        this.activeChild = ''
        this.$emit('secondMenuShow', false)
        this.secondMenuShow = false
      }
      if (key === '8') {
        this.$router.push('/system/index')
        this.activeChild = ''
        this.$emit('secondMenuShow', false)
        this.secondMenuShow = false
      }
      if (key === '5') {
        this.$router.push('/EnergyConservation/statistical/index')
        this.activeChild = ''
        // this.$emit('secondMenuShow', false)
        // this.secondMenuShow = false
        this.secondMenuShow = false
        /* this.$store.dispatch('GetMenu', '5-1').then((data) => {
          // 这是好像是判断href存在不存在，若存在获取数组，判断http/https跳转
          /!* console.log(data, '我的你')
            console.log(itemChild.href, '我要看')
            let itemActive,
              childItemActvie = 0
            if (itemChild.href) {
              console.log('you')
              itemActive = itemChild
            } else {
              console.log('没有')
              console.log(this.menu[0])
              console.log(this.menu[0].length == 0)
            } *!/
          console.log(data)
          // 判断三级菜单有没有数组，如果没有数组就隐藏
          // console.log(data, '我要看')
          if (data !== undefined && data.length > 0) {
            console.log('有三级菜单，展开')
            this.$emit('secondMenuShow', true)
          } else {
            console.log('没有三级菜单，隐藏')
            this.$emit('secondMenuShow', false)
          }
        }) */
      }
      this.activeIndex = key
    },
    logout () {
      this.$confirm('确定要退出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '已退出'
        })
        // 清除用户信息
        sessionStorage.removeItem('userInfo')
        // 跳转登录页
        this.$router.push('/login')
      }).catch(() => {
      })
    }
  },
  watch: {
    activeChild (key) {
      this.$emit('showCityName', key)
    }
  },
  beforeDestroy () {
    if (this.homeDate.time) {
      clearInterval(this.homeDate.time)
    }
  }
}
</script>
