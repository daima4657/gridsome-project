<template>
  <article>
    <h1>{{ $page.post.title }}</h1>
    <ul>
      <li v-for="tag in $page.post.tags" :key="tag.id">
        <g-link :to="tag.path"> {{ tag.title }} </g-link>
      </li>
    </ul>
    <VueRemarkContent />
  </article>
</template>
<page-query>
query Post  ($id: ID!) {
  post (id: $id) {
    title
    content
    tags {
      id
      title
    }
  }
}
</page-query>