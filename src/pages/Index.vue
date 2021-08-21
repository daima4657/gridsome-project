<template>

  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!--<g-image alt="Example image" src="~/favicon.png" width="135" />-->

    <!--<PageTitle v-bind:text="Project." />-->
    <PageTitle v-bind:text="pageTitle"></PageTitle>

    <!--<button @click="onClick">
      Change
    </button>-->

    <List />

  </Layout>
</template>

<script>
import Card from '~/components/Card.vue'
import List from '~/components/List.vue'
import PageTitle from '~/components/PageTitle.vue'

export default {
  components: {
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
      console.log("clicked!");
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
