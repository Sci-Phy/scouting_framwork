<template>
  <div>
    <h3>Basic teams placeholder for routing</h3>
    <h3>{{ $route.params.id }}</h3>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params.id);
  }
};
</script>

<style scoped></style>
