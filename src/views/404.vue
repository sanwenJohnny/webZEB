<style scoped>
.error {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
<template>
  <div>
    <div class="error">{{ message }}</div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      title: 'not found',
      message: '404'
    };
  }
};
</script>
