const topMenu = [
  {
    menuName: '系统首页',
    href: '/home',
    icon: 'el-icon-menu',
    parentId: '0'
  },
  {
    menuName: '消防管理',
    href: '/demo',
    icon: 'el-icon-menu',
    parentId: '1',
    children: [
      {
        menuName: '消防',
        href: '',
        icon: 'el-icon-search',
        parentId: '1-1'
      }
    ]
  },
  {
    menuName: '安防管理',
    href: '',
    icon: 'el-icon-menu',
    parentId: '2',
    children: [
      {
        menuName: '视频监控',
        href: '/demo',
        icon: 'el-icon-search',
        parentId: '2-1'
      },
      {
        menuName: '防盗报警',
        href: '/home',
        icon: 'el-icon-search',
        parentId: '2-2'
      },
      {
        menuName: '门禁安防',
        href: '',
        icon: 'el-icon-edit',
        parentId: '2-3'
      },
      {
        menuName: '电子巡更',
        href: '',
        icon: 'el-icon-edit',
        parentId: '2-4'
      },
      {
        menuName: '环境监测',
        href: '',
        icon: 'el-icon-delete',
        parentId: '2-5'
      },
      {
        menuName: '溢水监测',
        href: '',
        icon: 'el-icon-phone-outline',
        parentId: '2-6'
      }
    ]
  },
  {
    menuName: '设备管理',
    href: '',
    icon: 'el-icon-menu',
    parentId: '3',
    children: [
      {
        menuName: '暖通空调',
        href: '',
        icon: 'el-icon-search',
        parentId: '3-1'
      },
      {
        menuName: '给排水',
        href: '',
        icon: 'el-icon-search',
        parentId: '3-2'
      },
      {
        menuName: '变配电',
        href: '',
        icon: 'el-icon-edit',
        parentId: '3-3'
      },
      {
        menuName: '公共照明',
        href: '',
        icon: 'el-icon-edit',
        parentId: '3-4'
      },
      {
        menuName: '夜景照明',
        href: '',
        icon: 'el-icon-delete',
        parentId: '3-5'
      },
      {
        menuName: '电梯监控',
        href: '',
        icon: 'el-icon-phone-outline',
        parentId: '3-6'
      }
    ]
  },
  {
    menuName: '运营管理',
    href: '',
    icon: 'el-icon-menu',
    parentId: '4',
    children: [
      {
        menuName: '客流统计',
        href: '',
        icon: 'el-icon-search',
        parentId: '4-1'
      },
      {
        menuName: '停车管理',
        href: '',
        icon: 'el-icon-search',
        parentId: '4-2'
      },
      {
        menuName: '信息发布',
        href: '',
        icon: 'el-icon-edit',
        parentId: '4-3'
      },
      {
        menuName: '易电购电',
        href: '',
        icon: 'el-icon-edit',
        parentId: '4-4'
      },
      {
        menuName: '消息统计',
        href: '',
        icon: 'el-icon-delete',
        parentId: '4-5'
      }
    ]
  },
  {
    menuName: '节能管理',
    href: '',
    icon: 'el-icon-menu',
    parentId: '5',
    children: [
      {
        menuName: '能耗统计',
        href: '',
        icon: 'el-icon-delete',
        parentId: '5-1'
      }
    ]
  },
  {
    menuName: '信息管理',
    href: '',
    icon: 'el-icon-menu',
    parentId: '6',
    children: [
      {
        menuName: '租户信息',
        href: '',
        icon: 'el-icon-delete',
        parentId: '6-1'
      }
    ]
  },
  {
    menuName: '系统设置',
    href: '',
    icon: 'el-icon-menu',
    parentId: '7'
  }
]

export {topMenu}
