<template>
  <el-container class="hw-contail">
    <el-header height="auto">
      <div class="nav-top">
        <div class="nav-left">
          <img class="header-logo"
               src="../assets/imgs/logo.png">
        </div>
        <div class="nav-center">
          <div class="center-menu">
            <el-menu :default-active="activeIndex"
                     class="el-menu-demo"
                     mode="horizontal"
                     @select="handleSelect"
                     background-color="#020f38"
                     text-color="#fff"
                     active-text-color="#ffd04b">
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                系统首页
              </el-menu-item>
              <el-menu-item index="2"><i class="el-icon-menu"></i>消防管理</el-menu-item>
              <el-menu-item index="3">安防管理</el-menu-item>
              <el-menu-item index="4">设备管理</el-menu-item>
              <el-menu-item index="5">运营管理</el-menu-item>
              <el-menu-item index="6">节能管理</el-menu-item>
              <el-menu-item index="7">信息管理</el-menu-item>
              <el-menu-item index="8">系统设置</el-menu-item>
            </el-menu>
          </div>
        </div>
        <div class="nav-right">
          <div class="right-menu">
            <div class="right-menu-item">
              <i class="el-icon-search"></i>
              欢迎，管理员
            </div>
            <div class="right-menu-item">
              退出
            </div>
          </div>
        </div>
      </div>
    </el-header>
    <el-header height="auto">
      <div class="secondLevel-nav">
        <div class="secondLevel-nav-time">
          时间
        </div>
        <ul class="secondLevel-menu">
          <li class="secondLevel-menu-item active">
            <div class="secondLevel-menu-item-icon">
              <i class="el-icon-search"></i>
            </div>
            <div class="secondLevel-menu-item-text">
              视频监控
            </div>
          </li>
          <li class="secondLevel-menu-item">
            <div class="secondLevel-menu-item-icon">
              <i class="el-icon-edit-outline"></i>
            </div>
            <div class="secondLevel-menu-item-text">
              门禁安防
            </div>
          </li>
          <li class="secondLevel-menu-item">
            <div class="secondLevel-menu-item-icon">
              <i class="el-icon-edit"></i>
            </div>
            <div class="secondLevel-menu-item-text">
              电子巡更
            </div>
          </li>
          <li class="secondLevel-menu-item">
            <div class="secondLevel-menu-item-icon">
              <i class="el-icon-delete"></i>
            </div>
            <div class="secondLevel-menu-item-text">
              环境监测
            </div>
          </li>
          <li class="secondLevel-menu-item">
            <div class="secondLevel-menu-item-icon">
              <i class="el-icon-phone-outline"></i>
            </div>
            <div class="secondLevel-menu-item-text">
              溢水监测
            </div>
          </li>
        </ul>
      </div>

    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="1"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 :unique-opened="true"
                 background-color="#020f38"
                 text-color="#fff"
                 active-text-color="#ffd04b">
          <el-menu-item index="1">
            <router-link slot="title"
                         to="/Layout/1/demo">运行总览</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">汉威4区南区</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">汉威4区北区</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">汉威3区</span>
          </el-menu-item>
          <el-menu-item index="5">
            <span slot="title">汉威2区</span>
          </el-menu-item>
          <el-menu-item index="6">
            <span slot="title">汉威1区</span>
          </el-menu-item>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>demo 三级</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="7-1">四级1</el-menu-item>
              <el-menu-item index="7-2">四级2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main
        <router-view></router-view>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      activeIndex: '3'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.el-header,
.el-footer {
  color: #fff;
  background-color: #020f38;
}

.el-aside {
  color: #333;
  background-color: #020f38;
  border-right: solid 2px #020616;
}

.el-main {
  /* background-color: #E9EEF3; */
  color: #fff;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
