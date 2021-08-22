<template>
  <div class="p-intro">
    <div class="p-loading">
      <g-image alt="" src="~/image/balls_loader.gif" class="__img" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageTitle',
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>
.p-intro{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f8f8f8;
  z-index: 9999;
  /*transition:transform 400ms cubic-bezier(0.7,0,0.3,1);*/
  animation: intro_hide 600ms cubic-bezier(0.7,0,0.3,1) 1200ms forwards;
  will-change: opacity;
}@media screen and (max-width: 767px){
  .p-intro{
    animation: intro_hide_sp 600ms cubic-bezier(0.7,0,0.3,1) 1200ms forwards;
  }
}

.p-loading{
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
}

@keyframes intro_hide{
  0%{
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
    opacity: 1;
  }
  70%{
    opacity: 1;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
  }
  100%{
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    opacity: 0;
    pointer-events: none;
  }
}

@keyframes intro_hide_sp{
  0%{
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
  }
  70%{
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
  }
  100%{
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    pointer-events: none;
  }
}
</style>