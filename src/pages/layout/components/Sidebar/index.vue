<template>
  <el-menu
    router
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    @select="handleSelect"
    @open="handleOpen"
    @close="handleClose"
    :unique-opened="true"
    background-color="#020f38"
    text-color="#fff"
    active-text-color="#ffd04b">

    <template v-for="(item, index) in menu" v-if="!item.hidden">
      <!--二级-->
      <el-submenu
        :index="item.href + index"
        v-if="item.children !== undefined && item.children.length > 0"
        :key="index">
        <template slot="title">
          <!--<i class="el-icon-location"></i>-->
          <span>{{item.menuName}}</span>
        </template>

        <el-menu-item-group>
          <template v-for="(itemChild, index) in item.children" v-if="!itemChild.hidden">
            <el-menu-item
              :index="item.href + '/' + itemChild.href"
              :key="index">
              {{itemChild.menuName}}
            </el-menu-item>
          </template>
        </el-menu-item-group>
      </el-submenu>
      <!--一级-->
      <el-menu-item :index="item.href" v-else :key="index">
        <span slot="title">{{item.menuName}}</span>
      </el-menu-item>
    </template>
    <!--<el-menu-item index="/demo">
      <span slot="title">运行总览</span>
    </el-menu-item>
    <el-menu-item index="/home">
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
    </el-submenu>-->
  </el-menu>
</template>
<script>
// import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  data () {
    return {
    }
  },
  computed: {
    // ...mapGetters([
    //   'menu'
    // ])
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      // this.$store.commit('increment')
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
