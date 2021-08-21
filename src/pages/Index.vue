<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!--<g-image alt="Example image" src="~/favicon.png" width="135" />-->

    
    <div class="p-hero">
      <g-image alt="" src="~/image/web_cooding_cap.jpg" />
    </div>

    <h1 class="p-h1">ここは今西 大のポートフォリオサイトです!</h1>

    <p>
      WEBサイト制作/Wordpressカスタマイズ/ゲーム制作
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>



body{
  font-size: 14px;
}

.home-links a {
  margin-right: 1rem;
}

img{
  max-width: 100%;
}

.p-h1{
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
