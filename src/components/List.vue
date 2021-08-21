<template>
  <div class="p-list">
    <div class="p-list__wrapper">
      <div class="p-list__item">
        <div class="p-list__item__img">
          <g-image alt="" src="~/image/web_cooding_cap.jpg" />
          <div class="p-list__item__img__title">
            <div class="__main">WEBサイト制作</div>
          </div>
        </div>
      </div>
      <div class="p-list__item">
        <div class="p-list__item__img">
          <g-image alt="" src="~/image/web_cooding_cap.jpg" />
          <div class="p-list__item__img__title">
            <div class="__main">ECサイト制作</div>
          </div>
        </div>
      </div>
      <div class="p-list__item">
        <div class="p-list__item__img">
          <g-image alt="" src="~/image/web_cooding_cap.jpg" />
          <div class="p-list__item__img__title">
            <div class="__main">WEBアプリ開発</div>
          </div>
        </div>
      </div>
      <div class="p-list__item">
        <div class="p-list__item__img">
          <g-image alt="" src="~/image/web_cooding_cap.jpg" />
          <div class="p-list__item__img__title">
            <div class="__main">Unityゲーム開発</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'List',
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
.card {
  padding: 120px;
  background: #FFF;

}

.p-list__item__img__title{
  position: absolute;
  left: 20px;
  bottom: 20px;
  color: #ffffff;
  z-index: 2;
  font-weight: bold;
  font-size: 18px;
}

.p-list__wrapper{
  display: flex;
  flex-wrap: wrap;
}

.p-list__item{
  position: relative;
  width: calc((100%)/3);
  /*margin-right: 40px;*/
  margin-bottom: 0px;
}@media screen and (max-width: 767px){
  .p-list__item{
    width: 100%;
  }
}

.p-list__item:after{
  content:"";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
}

.p-list__item.hover{

}

.p-list__item:nth-child(3n){
  margin-right: 0;
}
</style>