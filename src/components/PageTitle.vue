<template>
  <div class="pageTitle">
    <div class="pageTitle__text">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageTitle',
  props: ['text'],
  data () {
    return {
      message: 'Try change me!'
    }
  },
  methods: {
    onClick () {
      this.message = 'Here you go :)'
    }
  }
}
</script>

<style scoped>
.pageTitle__text{
  font-size: 78px;
  margin-bottom: 100px;
  padding-left: 60px;
  font-weight: bold;
}

@media screen and (max-width: 767px){
  .pageTitle__text{
    font-size: 28px;
    padding-left: 20px;
    margin-bottom: 60px;
  }
}
</style>