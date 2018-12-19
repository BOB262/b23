<template>
  <div class="box-item" :style="{height: heightFull === true ? '100%': ''}">
    <template v-if="verticalCenter === true && heightFull === true">
      <div class="vc">
        <div class="vc-child">
          <slot name="content">
          </slot>
        </div>
      </div>
    </template>
    <template v-else>
      <slot name="content">
      </slot>
    </template>

    <div class="card-bottom-rectangle"></div>
  </div>
</template>

<script>
/**
 * heightFull       {Boolean}   [false]    - 高度100%
 * verticalCenter   {Boolean}   [false]    - 垂直居中
 *
 */
export default {
  name: 'box',
  props: {
    heightFull: {
      type: Boolean,
      default: false
    },
    verticalCenter: {
      type: Boolean,
      default: false
    }
  }
}
</script>
