<template>
  <div class="p-list">
    <div class="p-list__wrapper">
      <g-link to="/project/web-cooding/" class="p-list__item">
        <div class="p-list__item__bg" style="background-color:#0B0C10;"></div>
        <div class="p-list__item__img">
          <g-image alt="" src="~/image/webcooding_tmn.jpg" class="__img" />
          <div class="p-list__texts">
            <div class="p-list__texts__title">
              <div class="__main">WEBコーディング</div>
            </div>
            <div class="p-list__texts__text">
              レスポンシブに対応した、印象的な動きのあるWEBサイトの制作が可能です。得意分野はWordpressカスタマイズです。
            </div>
          </div>
        </div>
      </g-link>
      <g-link to="/project/ec-cooding/" class="p-list__item">
        <div class="p-list__item__bg" style="background-color:#05386b;"></div>
        <div class="p-list__item__img">
          <g-image alt="" src="~/image/ec_tmn.jpg" class="__img" />
          <div class="p-list__texts">
            <div class="p-list__texts__title">
              <div class="__main">ECサイト構築</div>
            </div>
            <div class="p-list__texts__text">
              複数のモール、ショップカートASPサービスおよびwoocommerceでのECサイト構築経験があります。
            </div>
          </div>
        </div>
      </g-link>
      <g-link to="/project/web-app/" class="p-list__item">
        <div class="p-list__item__bg" style="background-color:#fc4445;"></div>
        <div class="p-list__item__img">
          <g-image alt="" src="~/image/webapp_tmn.jpg" class="__img" />
          <div class="p-list__texts">
            <div class="p-list__texts__title">
              <div class="__main">WEBアプリ開発</div>
            </div>
            <div class="p-list__texts__text">
              AWSとLaravelを利用したWEBアプリの開発を趣味で行っています。
            </div>
          </div>
        </div>
      </g-link>
      <g-link to="/project/game-development/" class="p-list__item">
        <div class="p-list__item__bg" style="background-color:#7395ae;"></div>
        <div class="p-list__item__img">
          <g-image alt="" src="~/image/unity_tmn.jpg" class="__img" />
          <div class="p-list__texts">
            <div class="p-list__texts__title">
              <div class="__main">Unityゲーム開発</div>
            </div>
            <div class="p-list__texts__text">
              Unityを利用した2Dアクションゲームの開発を趣味で行っています。
            </div>
          </div>
        </div>
      </g-link>
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

.p-list__texts{
  position: absolute;
  padding: 0 20px;
  box-sizing: border-box;
  bottom: 20px;
  z-index: 2;
  color: #ffffff;
  transform: translateY(100%);
  transition:transform 400ms cubic-bezier(0.7,0,0.3,1);
  will-change: transform;
}

.p-list__item:hover .p-list__texts {
  transform: translateY(0%);
}

.p-list__texts__text{
  position: relative;
  z-index: 3;
  transition:opacity 400ms cubic-bezier(0.7,0,0.3,1);
  opacity: 0;
  will-change: opacity;
}

.p-list__item:hover .p-list__texts__text{
  opacity: 1;
}

.p-list__texts__title{
  font-weight: bold;
  font-size: 18px;
}

.p-list__texts__title > .__main{
  position: relative;
  top: -20px;
  display: inline-block;
  transition:top 400ms cubic-bezier(0.7,0,0.3,1);
  will-change: top;
}

.p-list__item:hover .p-list__texts__title > .__main{
  top: 0;
}

.p-list__wrapper{
  display: flex;
  flex-wrap: wrap;
}

.p-list__item{
  position: relative;
  width: calc((100% - 21px)/3);
  margin-right: 10px;
  margin-bottom: 10px;
  overflow: hidden;
}@media screen and (max-width: 767px){
  .p-list__item{
    width: 100%;
    margin-right: 0;
  }
}

.p-list__item:after{
  content:"";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.35);
}



.p-list__item__bg{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #ccc;
  transform:translateY(100%);
  transition:transform 400ms cubic-bezier(0.7,0,0.3,1);
  will-change: transform;
}

.p-list__item:hover .p-list__item__bg{
  transform:translateY(0);
}


.p-list__item:nth-child(3n){
  margin-right: 0;
}


.p-list__item__img > .__img{
  transition:transform 400ms cubic-bezier(0.7,0,0.3,1);
  will-change: transform;
}

.p-list__item:hover .p-list__item__img > .__img{
  transform:scale(1.1);
}

</style>