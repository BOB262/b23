<template>
  <div class="date-display">
    <div class="flex-container text-center">
      <template v-for="(item, index) in options">
        <div class="flex-item" :key="index">
          <div class="count">
            {{item.count}}
          </div>
          <p class="title">
            {{item.title}}
          </p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataDisplay',
  props: {
    options: {
      type: Array
    }
  }
}
</script>
