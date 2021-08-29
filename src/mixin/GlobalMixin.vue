<script>
export default {
  mounted () {
    // Register onScroll event
    if (!this.$options.onScroll) return
    requestAnimationFrame(() => { // ページ遷移の際にVueRouterが実行するy=0へのスクロールを無視するための処理です
      if (this._isDestroyed) return // この数フレームの間にコンポーネントが破棄される可能性を考慮しています
      window.addEventListener('scroll', this.$options.onScroll)
    })
  },
  destroyed () {
    // Unregister onScroll event
    if (!this.$options.onScroll) return
    window.removeEventListener('scroll', this.$options.onScroll)
  },
  methods: {
    test : () => {
      console.log("clicked!");
    }
  },
}
</script>