<template>
  <div class="card-container">
    <div class="card">
      <div class="card-top-rectangle"></div>
      <div class="card-bottom-modified"></div>
      <div class="card-title">
        <div class="title title-big" v-if="titleBig===true">
          <slot name="title">
          </slot>
        </div>
        <div class="title" v-else>
          <slot name="title">
          </slot>
        </div>
      </div>
      <div class="card-content" v-if="ceter === true">
        <div class="vc">
          <div class="vc-child">
            <slot name="content">
            </slot>
          </div>
        </div>
      </div>
      <div class="card-content" v-else>
        <slot name="content">
        </slot>
      </div>

    </div>
  </div>
</template>

<script>

/**
 * @param   ceter       {Boolean}     [ceter="false"]    - card内容居中
 * @param   titleBig    {Boolean}     [ceter="false"]    - 大标题
 */

export default {
  name: 'card',
  props: {
    ceter: {
      type: Boolean,
      default: false
    },
    titleBig: {
      type: Boolean,
      default: false
    }
  }
}
</script>
