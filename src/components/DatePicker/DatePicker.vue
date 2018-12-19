<template>
  <span v-if="TypeSelect===true">
    报表类型：
    <el-select v-model="dateValue"
               placeholder="请选择"
               size="mini"
               @change="slotSelectValue">
      <el-option v-for="item in typeOption"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
      </el-option>
    </el-select>
    日期：
    <el-date-picker size="mini"
                    v-model="pickerValue"
                    align="left"
                    :type="dateOptions.dateType"
                    :value-format="dateOptions.valueFormat"
                    placeholder="选择日期"
                    @change="slotPickerValue"
                    :picker-options="dateOptions.pickerOption?pickerOptions:'{}'">
    </el-date-picker>
  </span>
  <span v-else-if="TypeSelect===false">
    日期：
    <el-date-picker size="mini"
                    v-model="pickerValue"
                    align="left"
                    :type="dateOptions.dateType"
                    :value-format="valueFormat"
                    placeholder="选择日期"
                    @change="slotPickerValue"
                    :picker-options="pickerOptions">
    </el-date-picker>
  </span>
</template>

<script>
// @param TypeSelect {Boolean} [type-select="true"]  开启 “报表类型”
// 请在父组件设置以下
/* <date-picker
  ref="child"
  @slotPickerValue="pickerValueEvent"
  ></date-picker> */
// 父子组件之间通信
// mounted--
// this.pickerValue = this.pickerValueNow
// methods--
// pickerValueEvent (val) {
//   this.pickerValue = val
// }
// computed--
// pickerValueNow: {
//   get: function () {
//     return this.$refs.child.pickerValue
//   }
// }
export default {
  props: {
    TypeSelect: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dateValue: 3,
      valueFormat: 'yyyy-MM-dd',
      dateOptions: {
        dateType: 'date',
        valueFormat: 'yyyy-MM-dd',
        pickerOption: true
      },
      typeOption: [{
        value: 3,
        label: '日报表'
      }, {
        value: 2,
        label: '月报表'
      }, {
        value: 1,
        label: '年报表'
      }],
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      pickerValue: ''
    }
  },
  created () {
    let date = new Date()
    let month = date.getMonth() + 1
    let Month = month > 9 ? month : '0' + month
    let day = date.getDate()
    let Day = day > 9 ? day : '0' + day
    this.pickerValue = date.getFullYear() + '-' + Month + '-' + Day
  },
  methods: {
    slotPickerValue () {
      this.$emit('slotPickerValue', this.pickerValue)
    },
    slotSelectValue () {
      console.log(this.pickerValue)
      this.$emit('slotSelectValue', this.dateValue)
    }
  },
  watch: {
    dateValue: function (val) {
      let id = Number(val)
      if (id === 1) {
        this.dateOptions = {
          dateType: 'year',
          valueFormat: 'yyyy',
          pickerOption: false
        }
      } else if (id === 2) {
        this.dateOptions = {
          dateType: 'month',
          valueFormat: 'yyyy-MM',
          pickerOption: false
        }
      } else if (id === 3) {
        this.dateOptions = {
          dateType: 'date',
          valueFormat: 'yyyy-MM-dd',
          pickerOption: true
        }
      }
    }
  }
}
</script>
