<template>
  <div class="card">
    <div class="card-bottom-border"></div>
    <div class="card-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card'
}
</script>
