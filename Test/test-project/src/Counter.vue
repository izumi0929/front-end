<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="increment" name="btn">Increment</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0,
      }
    },

    methods: {
      increment() {
        this.count++
      }
    }
  }
</script>