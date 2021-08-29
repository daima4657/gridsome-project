<template>

  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!--<g-image alt="Example image" src="~/favicon.png" width="135" />-->
    <!--<PageTitle v-bind:text="Project." />-->

    <Intro />


    <PageTitle v-bind:text="pageTitle"></PageTitle>

    <!--<button @click="onClick">
      Change
    </button>-->
    <div class="p-inner">
      <List />
    </div>

    <!--<ul>
      <li v-for="edge in $page.news.edges" :key="edge.node.id">
        <h2></h2>
        <g-link :to="'/projects/' + edge.node.id">
          {{ edge.node.main_description }}
        </g-link>
      </li>
    </ul>-->



  </Layout>
</template>

<page-query>
query {
  news: allProjects {
    edges {
      node {
        id
        main_description
        url_slug
      }
    }
  }
}
</page-query>

<script>
import Intro from '~/components/Intro.vue'
import Card from '~/components/Card.vue'
import List from '~/components/List.vue'
import PageTitle from '~/components/PageTitle.vue'

export default {
  metaInfo: {
    title: 'DAI IMANISHI PORTFOLIO SITE..',
    bodyAttrs: {
      id : 'top',
    },
  },
  components: {
    Intro,
    Card,
    List,
    PageTitle
  },
  data(){
    return{
      pageTitle:'Projects.',
    }
  },
  methods: {
    onClick () {
      console.log("clicked!!");
      this.pageTitle = 'Here you go :)'
    }
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
