// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "今西 大のポートフォリオサイト",
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post', // 必須。GraphQL上で扱う型定義
        baseDir: './content/posts', // 記事となるmarkdownファイルを置くディレクトリ
        pathPrefix: '/posts', // URLになるパス。必須ではない。
        template: './src/templates/Post.vue', // 記事ページのVueコンポーネントファイルの指定
        refs: {
          // Example 2: Create a Tag collection by reference `tags` field.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    }
  ]
}
