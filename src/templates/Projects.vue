<template>
  <Layout>
    <div class="p-inner">

      <div class="p-project_single">
        <div class="p-project_single__wrapper">
          <div class="p-project_single__image">
            <img :src="$page.projects.main_image.url" alt="">
            <!--<g-image alt="" src="~/image/web_cooding_single_tmn.jpg" class="p-project_single_hero" />-->
          </div>
          
          <div class="p-project_single__head js-popup">
            <div class="p-project_single__head__wrapper js-popup__wrapper">
              <h1 class="__title">WEBコーディング</h1>
              <div class="__text">
                {{ $page.projects.main_description }}
              </div>
            </div>
          </div>
          <div class="p-project_single__wrapper__wrapper js-popup">



            <div class="p-table js-popup__wrapper">
              <div class="p-table__tr" v-for="edge in $page.projects.table" :key="edge.title">

                <div class="p-table__th">
                  {{edge.title}}
                </div>
                <div class="p-table__td">
                  <div v-html="edge.contents"></div>
                </div>

              </div>


            </div>
          </div>

        </div>
      </div>


      
    </div>

  </Layout>
</template>
<page-query>
query Projects  ($id: ID!) {
  projects (id: $id) {
    id
    main_image {
      url
    }
    table{
      fieldId
      title
      contents
    }
    main_description
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: 'Web Cooding',
    bodyAttrs: {
      id : 'web_cooding',
      class: 'single_project full_view',
    },
  }
}
</script>